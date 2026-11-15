import { cache } from "react";

import { levelDefaults, type Level } from "@/content/levels";
import { siteDefaults, type SiteContent } from "@/content/site";
import { certificationFaqs, resourcesFaqs, type FAQItem } from "@/data/faqs";
import { glossaryTerms, type GlossaryTerm } from "@/data/glossary";
import { blogPosts, type BlogPost } from "@/data/blog-posts";
import { guides, type Guide } from "@/data/guides";
import type { FormCopy } from "@/lib/forms/copy";

/**
 * Editable website content, fetched from CertifyDB's admin console
 * (/admin/website-content → GET /api/public/website/content).
 *
 * Built on exactly the contract in src/lib/certified-employers.ts: fetched
 * server-side, cached, and — the important part — **never able to break a page**.
 * If CertifyDB is unreachable, slow, misconfigured, or simply has no rows for a
 * module yet, every function here falls back to the seed content in src/data/*,
 * which is the copy that shipped with the site. A CMS outage costs freshness,
 * not the website.
 *
 * That is also why the seed files are still here and still exported: they are
 * the fallback, not dead weight.
 */

const CONTENT_TAG = "website-content";
const REVALIDATE_SECONDS = 300;

type ContentRow = { slug: string | null; data: Record<string, unknown>; updatedAt: string };

/** One module's published rows, in the order the admin arranged them. */
async function fetchModule(moduleKey: string): Promise<ContentRow[] | null> {
  const apiBase = process.env.NEXT_PUBLIC_FORMS_API_URL;
  if (!apiBase) return null;

  try {
    const response = await fetch(
      `${apiBase}/api/public/website/content?site=ooc&module=${moduleKey}`,
      {
        // The revalidate hook (src/app/api/revalidate/route.ts) clears this tag
        // the moment an admin saves; the 5-minute window is the safety net for
        // when that ping does not arrive.
        next: { revalidate: REVALIDATE_SECONDS, tags: [CONTENT_TAG] },
      }
    );
    if (!response.ok) return null;

    const body = (await response.json()) as { data?: Record<string, ContentRow[]> };
    const rows = body.data?.[moduleKey];
    // No rows is not the same as no answer: an empty module means the admin has
    // not filled it in, so the seed content should still show.
    return rows && rows.length > 0 ? rows : null;
  } catch {
    return null;
  }
}

/** Trims and drops blanks — an unfilled admin field must not print as "". */
function text(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

// ─── Page copy ──────────────────────────────────────────────────────────────

/** A list item: one row of cards, links or quotes. Flat, every value a string. */
type ContentItem = Record<string, string>;

/**
 * The shape of every page's built-in copy (src/content/pages/*.ts): field name
 * → string, or → list of flat items. It mirrors the module's fields in
 * CertifyDB's lib/website-content-sites/ooc.ts, name for name.
 */
export type PageDefaults = Record<string, string | ContentItem[]>;

/**
 * Lays the admin's saved values over the built-in copy, field by field:
 *
 *   - a string field: a non-blank saved value wins, a blank or missing one
 *     keeps the default;
 *   - a list: a non-empty saved list replaces the default list, and each saved
 *     item's blank fields fall back to the default item at the same index (if
 *     there is one); an empty saved list keeps the default list.
 *
 * Saved keys with no default are ignored, so the page only ever sees the shape
 * it was written for.
 */
export function mergeContent<T extends PageDefaults>(
  defaults: T,
  data: Record<string, unknown> | null | undefined
): T {
  if (!data) return defaults;

  const merged: Record<string, string | ContentItem[]> = { ...defaults };
  for (const [key, fallback] of Object.entries(defaults)) {
    const saved = data[key];

    if (typeof fallback === "string") {
      const value = text(saved);
      if (value) merged[key] = value;
      continue;
    }

    if (!Array.isArray(saved) || saved.length === 0) continue;
    const itemKeys = Object.keys(fallback[0] ?? {});
    merged[key] = saved.map((raw, index) => {
      const base = fallback[index] ?? Object.fromEntries(itemKeys.map((k) => [k, ""]));
      const item = raw && typeof raw === "object" ? (raw as Record<string, unknown>) : {};
      const next: ContentItem = { ...base };
      for (const k of itemKeys) {
        const value = text(item[k]);
        if (value) next[k] = value;
      }
      return next;
    });
  }
  return merged as T;
}

/**
 * A page's copy: the "page-<key>" module merged over its built-in defaults.
 * Never throws — with CertifyDB unreachable or the module unsaved, this is
 * simply the defaults.
 */
export async function getPage<T extends PageDefaults>(key: string, defaults: T): Promise<T> {
  const rows = await fetchModule(`page-${key}`);
  return mergeContent(defaults, rows?.[0]?.data);
}

/** Site-wide copy (header, footer, cookie banner, shared form messages). */
export const getSite = cache(async (): Promise<SiteContent> => {
  const rows = await fetchModule("site");
  return mergeContent(siteDefaults, rows?.[0]?.data);
});

/**
 * The certification levels, always all four in the built-in order. A saved
 * entry is matched by slug; a hidden or missing one keeps its defaults.
 */
export const getLevels = cache(async (): Promise<Level[]> => {
  const rows = await fetchModule("levels");
  if (!rows) return levelDefaults;
  return levelDefaults.map((level) => {
    const row = rows.find((r) => r.slug === level.slug);
    return row ? { ...mergeContent(level, row.data), slug: level.slug } : level;
  });
});

/** <Placeholder> key → site-wide field holding its value. */
const PLACEHOLDER_FIELDS: Record<string, keyof SiteContent> = {
  year: "year",
  "response time": "responseTime",
  duration: "duration",
  "typical duration": "typicalDuration",
  "validity period": "validityPeriod",
  "pricing tiers": "pricingTiers",
  "level thresholds": "levelThresholds",
  "partner commercial terms": "partnerCommercialTerms",
  "tier advancement criteria": "tierAdvancementCriteria",
  "available on request": "mediaKitAvailability",
};

/**
 * The editable values behind <Placeholder> and {key} tokens in page copy.
 * Keys not listed here keep their built-in text (components/placeholder-text.tsx).
 * The Contact page still prefers the Contact module's own response time where it
 * already did.
 */
export const getPlaceholderValues = cache(async (): Promise<Record<string, string>> => {
  const site = await getSite();
  const values: Record<string, string> = {};
  for (const [key, field] of Object.entries(PLACEHOLDER_FIELDS)) values[key] = site[field] as string;
  return values;
});

/** A form's copy: its own success message plus the messages all forms share. */
export async function getFormCopy(successTitle: string, successMessage: string): Promise<FormCopy> {
  const [site, values] = await Promise.all([getSite(), getPlaceholderValues()]);
  return {
    successTitle,
    successMessage,
    notConnectedNote: site.formNotConnectedNote,
    errorTitle: site.formErrorTitle,
    errorFallback: site.formErrorFallback,
    consent: site.formConsent,
    values,
  };
}

// ─── Singleton sections ─────────────────────────────────────────────────────

export type LegalSection = {
  title: string;
  bodyMarkdown: string;
  effectiveDate: string;
  /** Privacy only. */
  grievanceOfficer?: string;
  /** Cookies only. */
  cookieInventory?: string;
};

/**
 * A legal page's text. Returns null when nothing has been published, and each
 * page keeps its own hardcoded copy for that case.
 */
export async function getLegalSection(
  moduleKey: "privacy" | "cookies" | "terms"
): Promise<LegalSection | null> {
  const rows = await fetchModule(moduleKey);
  const data = rows?.[0]?.data;
  if (!data) return null;

  const bodyMarkdown = text(data.bodyMarkdown);
  if (!bodyMarkdown) return null;

  return {
    title: text(data.title),
    bodyMarkdown,
    effectiveDate: text(data.effectiveDate),
    grievanceOfficer: text(data.grievanceOfficer) || undefined,
    cookieInventory: text(data.cookieInventory) || undefined,
  };
}

export type ContactDetails = {
  phone: string;
  email: string;
  address: string;
  hours: string;
  responseTime: string;
  mapUrl: string;
  /** OOC only (extra field on the shared module): the map iframe's src. */
  mapEmbedUrl: string;
  partnerSites: { name: string; href: string; logoUrl?: string }[];
};

/** Contact details. Every field is independently optional — the page keeps its
 *  existing value for anything left blank. */
export const getContactDetails = cache(async (): Promise<Partial<ContactDetails>> => {
  const rows = await fetchModule("contact");
  const data = rows?.[0]?.data;
  if (!data) return {};

  const partnerSites = Array.isArray(data.partnerSites)
    ? (data.partnerSites as { name?: string; href?: string; logoUrl?: string }[])
        .filter((site) => text(site?.name) && text(site?.href))
        .map((site) => ({
          name: text(site.name),
          href: text(site.href),
          logoUrl: text(site.logoUrl) || undefined,
        }))
    : undefined;

  return {
    phone: text(data.phone) || undefined,
    email: text(data.email) || undefined,
    address: text(data.address) || undefined,
    hours: text(data.hours) || undefined,
    responseTime: text(data.responseTime) || undefined,
    mapUrl: text(data.mapUrl) || undefined,
    mapEmbedUrl: text(data.mapEmbedUrl) || undefined,
    partnerSites: partnerSites?.length ? partnerSites : undefined,
  };
});

// ─── Collections ────────────────────────────────────────────────────────────

export type FAQGroupKey = "certification" | "employers" | "jobSeekers" | "partners";

/** FAQs for one group, falling back to that group's seed list. */
export async function getFaqs(group: FAQGroupKey): Promise<FAQItem[]> {
  const seed =
    group === "certification"
      ? certificationFaqs
      : group === "employers"
        ? resourcesFaqs.employers
        : group === "jobSeekers"
          ? resourcesFaqs.jobSeekers
          : resourcesFaqs.partners;

  const rows = await fetchModule("faq");
  if (!rows) return seed;

  const live = rows
    .filter((row) => row.data.group === group)
    .map((row) => ({ question: text(row.data.question), answer: text(row.data.answer) }))
    .filter((item) => item.question && item.answer);

  // A populated CMS with nothing in this group means the group is deliberately
  // empty, not broken — but an empty accordion looks like a bug, so the seed
  // still stands in.
  return live.length > 0 ? live : seed;
}

export async function getGlossaryTerms(): Promise<GlossaryTerm[]> {
  const rows = await fetchModule("glossary");
  if (!rows) return glossaryTerms;

  const live = rows
    .map((row) => ({ term: text(row.data.term), definition: text(row.data.definition) }))
    .filter((item) => item.term && item.definition);

  return live.length > 0 ? live : glossaryTerms;
}

export type LiveBlogPost = BlogPost & { bodyMarkdown?: string };

/** Formats the admin's ISO date as the site's "12 Aug 2026". */
function formatDate(value: unknown): string {
  const raw = text(value);
  if (!raw) return "";
  const date = new Date(raw);
  if (Number.isNaN(date.getTime())) return raw;
  return date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

export async function getBlogPosts(): Promise<LiveBlogPost[]> {
  const rows = await fetchModule("blog");
  if (!rows) return blogPosts;

  const live = rows
    .filter((row) => row.slug && text(row.data.title))
    .map((row) => {
      const coverUrl = text(row.data.coverUrl);
      return {
        slug: row.slug as string,
        title: text(row.data.title),
        teaser: text(row.data.teaser),
        date: formatDate(row.data.date),
        author: text(row.data.author) || "Organisation of Choice Team",
        bodyMarkdown: text(row.data.bodyMarkdown) || undefined,
        image: coverUrl
          ? { src: coverUrl, alt: text(row.data.coverAlt) || text(row.data.title) }
          : blogPosts.find(p => p.slug === row.slug)?.image,
      };
    });

  return live.length > 0 ? live : blogPosts;
}

export async function getBlogPost(slug: string): Promise<LiveBlogPost | undefined> {
  const posts = await getBlogPosts();
  return posts.find((post) => post.slug === slug);
}

export type LiveGuide = Guide & { fileUrl?: string; fileName?: string; fileSize?: number };

export async function getGuides(): Promise<LiveGuide[]> {
  const rows = await fetchModule("guides");
  if (!rows) return guides;

  const live = rows
    .filter((row) => text(row.data.title))
    .map((row, index) => ({
      id: row.slug ?? `guide-${index}`,
      title: text(row.data.title),
      description: text(row.data.description),
      fileUrl: text(row.data.fileUrl) || undefined,
      fileName: text(row.data.fileName) || undefined,
      fileSize: typeof row.data.fileSize === "number" ? row.data.fileSize : undefined,
    }));

  return live.length > 0 ? live : guides;
}

export type TeamMember = {
  name: string;
  designation: string;
  bio: string;
  imageUrl?: string;
};

/**
 * The About page's people. Unlike the other collections there is no seed to fall
 * back to — the page currently renders `<Placeholder>` blocks — so an empty
 * result means "keep showing the placeholders".
 */
export async function getTeam(): Promise<TeamMember[]> {
  const rows = await fetchModule("founder");
  if (!rows) return [];

  return rows
    .filter((row) => text(row.data.name))
    .map((row) => ({
      name: text(row.data.name),
      designation: text(row.data.designation),
      bio: text(row.data.bio),
      imageUrl: text(row.data.imageUrl) || undefined,
    }));
}

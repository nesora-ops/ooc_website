import { seedEmployers, type CertificationLevel, type Employer } from "@/data/employers";

/**
 * Live certified organisations, fetched from CertifyDB and merged with the
 * seed records in src/data/employers.ts.
 *
 * Fetched server-side (the directory page is a server component), which means
 * no CORS is involved and the list is in the HTML for search engines.
 */

/** Shape returned by CertifyDB's GET /api/public/certified. */
type CertifiedRecord = {
  id: string;
  name: string;
  industry: string;
  city: string | null;
  country: string;
  tier: string;
  expiryDate: string | null;
};

// CertifyDB's cert_tier enum also contains "commended" and "none", which the
// directory has no card style for. Anything outside these four is dropped
// rather than rendered with a broken badge.
const DISPLAYABLE: Record<string, CertificationLevel> = {
  Silver: "Silver",
  Gold: "Gold",
  Platinum: "Platinum",
  Diamond: "Diamond",
};

function formatValidity(expiryDate: string | null): string {
  if (!expiryDate) return "Certification active";
  const date = new Date(expiryDate);
  if (Number.isNaN(date.getTime())) return "Certification active";
  return `Certified through ${date.toLocaleDateString("en-GB", {
    month: "short",
    year: "numeric",
  })}`;
}

function toEmployer(record: CertifiedRecord): Employer | null {
  const level = DISPLAYABLE[record.tier];
  if (!level) return null;

  return {
    id: record.id,
    name: record.name,
    industry: record.industry || "Unknown",
    // The card shows a place; prefer the city and fall back to the country.
    location: record.city || record.country || "Unknown",
    level,
    // No scope: a CertifyDB certificate has no scope field, and inventing one
    // would put an unverified claim on a page whose whole point is verification.
    validity: formatValidity(record.expiryDate),
  };
}

export async function getDirectoryEmployers(): Promise<Employer[]> {
  const apiBase = process.env.NEXT_PUBLIC_FORMS_API_URL;
  if (!apiBase) return seedEmployers;

  try {
    const response = await fetch(`${apiBase}/api/public/certified`, {
      // Revalidate every 5 minutes: certifications change rarely, and a stale
      // directory is far better than a failed page render.
      next: { revalidate: 300 },
    });
    if (!response.ok) return seedEmployers;

    const body = (await response.json()) as { data?: CertifiedRecord[] };
    const live = (body.data ?? [])
      .map(toEmployer)
      .filter((employer): employer is Employer => employer !== null);

    // Live records first; seeds fill out the grid behind them.
    return [...live, ...seedEmployers];
  } catch {
    // CertifyDB unreachable — the directory still renders.
    return seedEmployers;
  }
}

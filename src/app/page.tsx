import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  ChartNoAxesCombined,
  Megaphone,
  Sparkles,
  Users,
} from "lucide-react";

import { AudienceRouterCards } from "@/components/sections/audience-router-cards";
import { ImageSlot } from "@/components/image-slot";
import { CTABand } from "@/components/sections/cta-band";
import { NumberedSteps } from "@/components/sections/numbered-steps";
import { RichParagraphs } from "@/components/placeholder";
import { ProgressiveDetails } from "@/components/sections/progressive-details";
import { SectionHeaderBar } from "@/components/sections/section-header-bar";
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel";
import { Button } from "@/components/ui/button";
import { homeDefaults } from "@/content/pages/home";
import { getBlogPosts, getLevels, getPage } from "@/lib/content";
import { mediaSrc } from "@/lib/image";
import { cn } from "@/lib/utils";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("home", homeDefaults);
  return {
    // Absolute: home's tab title is the site name itself, not "%s · …".
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
  };
}

// Per-card styling, in card order. The words are in src/content/pages/home.ts.
const BENEFIT_STYLES = [
  { icon: Sparkles, className: "bg-mint lg:col-span-7" },
  { icon: Users, className: "bg-butter/70 lg:col-span-5" },
  { icon: Megaphone, className: "bg-sky lg:col-span-5" },
  { icon: ChartNoAxesCombined, className: "bg-coral/20 lg:col-span-7" },
];

// The badges have a white circular face, so the cards behind them are white and
// carry no fill, shadow, or ring — the accent is used for the descriptor line and
// the hover border only.
const LEVEL_ACCENTS = ["#6B7B84", "#C08A2E", "#7C8CA8", "#0E7A62"];

const VOICE_DOTS = ["bg-coral", "bg-butter", "bg-mint"];

export default async function Home() {
  const [page, levels, blogPosts] = await Promise.all([
    getPage("home", homeDefaults),
    getLevels(),
    getBlogPosts(),
  ]);
  const trustItems = page.trustItems.map((item) => item.label);

  return (
    <>
      <SectionHeaderBar label={page.breadcrumb} />

      <section className="noise-wash relative overflow-hidden pb-12 pt-12 sm:pb-18 sm:pt-18 lg:pb-24 lg:pt-24">
        <div className="page-shell relative text-center">
          {/* Eyebrow and H1 were 13px against a ~96px H1 — two unrelated scales.
              Both are pinned to the brand spec here so they read as one family. */}
          <p className="text-[23px] font-bold uppercase leading-none tracking-[0.06em] text-[#0E7A62]">
            {page.heroEyebrow}
          </p>
          {/* The <br /> is explicit, not a width accident: the line must break
              after "Organisation" at every breakpoint. */}
          <h1 className="mx-auto mt-5 max-w-[15ch] text-[clamp(38px,5.4vw,68px)] font-extrabold leading-[1.04] tracking-[-0.028em] text-navy-ink">
            {page.heroTitleLine1}
            <br />
            {page.heroTitleLine2} <span className="text-[#0E7A62]">{page.heroTitleAccent}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[52ch] text-[19px] leading-[1.65] text-[#56666D]">
            {page.heroIntro}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="group">
              <Link href={page.heroPrimaryHref}>
                {page.heroPrimaryLabel}
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={page.heroSecondaryHref}>{page.heroSecondaryLabel}</Link>
            </Button>
          </div>

          <div
            data-motion-media
            className="soft-grid relative mx-auto mt-16 grid max-w-5xl gap-4 overflow-hidden rounded-[2.25rem] border border-navy/8 bg-white/68 p-4 text-left shadow-[0_35px_100px_rgba(23,50,77,0.13)] backdrop-blur-md sm:p-6 lg:grid-cols-[0.9fr_1.35fr_0.9fr]"
          >
            <article className="rounded-3xl bg-mint p-6">
              <BadgeCheck className="size-6 text-teal" />
              <p className="mt-16 text-[23px] font-bold uppercase leading-none tracking-[0.06em] text-teal">{page.panelAssessmentEyebrow}</p>
              <p className="mt-2 text-2xl font-semibold leading-tight text-navy-ink">
                {page.panelAssessmentText}
              </p>
            </article>
            <article className="rounded-3xl bg-navy p-6 text-white">
              <p className="text-sm font-semibold text-mint">{page.panelVoicesTitle}</p>
              <div className="mt-10 space-y-3">
                {page.panelVoices.map(({ label: voice }, index) => (
                  <div key={index} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/7 px-4 py-3">
                    <span className="text-sm font-medium">{voice}</span>
                    <span className={cn("size-2.5 rounded-full", VOICE_DOTS[index % VOICE_DOTS.length])} />
                  </div>
                ))}
              </div>
            </article>
            <article className="rounded-3xl bg-sky p-6">
              <p className="text-sm font-semibold text-[#5068aa]">{page.panelPathwayTitle}</p>
              <div className="mt-10 flex items-end gap-2.5" aria-label="Silver, Gold, Platinum and Diamond certification levels">
                <div className="h-14 flex-1 rounded-2xl bg-[#8aa0af]" />
                <div className="h-20 flex-1 rounded-2xl bg-gold" />
                <div className="h-[6.5rem] flex-1 rounded-2xl bg-[#6d80c5]" />
                <div className="h-32 flex-1 rounded-2xl bg-teal" />
              </div>
              <p className="mt-4 text-base font-semibold text-navy-ink">{page.panelPathwayText}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-navy/8 bg-white/60 py-5" aria-label="What makes OOC credible">
        <div className="trust-marquee flex w-max items-center gap-8 whitespace-nowrap text-sm font-semibold text-navy/75">
          {[...trustItems, ...trustItems].map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center gap-8" aria-hidden={index >= trustItems.length}>
              {item}
              <span aria-hidden className="size-1.5 rounded-full bg-coral" />
            </span>
          ))}
        </div>
      </section>

      <section className="py-14 sm:py-20 lg:py-28">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-16">
          <div className="max-w-xl">
            <p className="text-[23px] font-bold uppercase leading-none tracking-[0.06em] text-teal">{page.whyEyebrow}</p>
            <h2 className="mt-5 max-w-3xl text-[clamp(2.5rem,5.2vw,5.2rem)] font-semibold leading-[0.96] tracking-[-0.055em]">
              {page.whyTitle}
            </h2>
            <p className="mt-7 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {page.whyIntro}
            </p>
            <p className="text-2xl font-semibold leading-tight text-navy-ink">
              {page.whyTagline}
            </p>
            <ProgressiveDetails className="mt-6" label={page.whyDetailsLabel}>
              <RichParagraphs text={page.whyDetails} />
            </ProgressiveDetails>
          </div>
          <ImageSlot
            contentKey="editorial workplace collaboration"
            alt={page.whyImageAlt}
            src={page.whyImage}
            aspect="video"
            sizes="(min-width: 1024px) 58vw, 100vw"
            priority
            className="rounded-[2.25rem] shadow-[0_28px_80px_rgba(23,50,77,0.12)] transition-all duration-500 ease-out"
          />
        </div>
      </section>

      <section className="border-y border-navy/8 bg-white/45 py-14 sm:py-20">
        <div className="page-shell">
          <div className="max-w-3xl">
            <p className="text-[23px] font-bold uppercase leading-none tracking-[0.06em] text-teal">{page.routeEyebrow}</p>
            <h2 className="mt-4 text-[clamp(2.35rem,4.5vw,4.4rem)] font-semibold leading-none tracking-[-0.05em]">
              {page.routeTitle}
            </h2>
          </div>
          <AudienceRouterCards className="mt-12" cards={page.routeCards} />
        </div>
      </section>

      <section className="py-14 sm:py-20 lg:py-28">
        <div className="page-shell">
          <p className="text-[23px] font-bold uppercase leading-none tracking-[0.06em] text-teal">{page.benefitsEyebrow}</p>
          <h2 className="mt-4 max-w-5xl text-[clamp(2.35rem,4.8vw,4.8rem)] font-semibold leading-[0.98] tracking-[-0.055em]">
            {page.benefitsTitle}
          </h2>
          <div className="mt-12 grid grid-flow-dense gap-4 lg:grid-cols-12">
            {page.benefits.map((benefit, index) => {
              const style = BENEFIT_STYLES[index % BENEFIT_STYLES.length];
              const Icon = style.icon;
              return (
                <article key={index} className={cn("group min-h-72 rounded-[2rem] border border-navy/8 p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-8", style.className)}>
                  <Icon className="size-7 text-teal" strokeWidth={1.7} />
                  <h3 className="mt-14 max-w-xl text-[clamp(1.55rem,2.8vw,2.6rem)] font-semibold leading-none tracking-[-0.04em]">
                    {benefit.title}
                  </h3>
                  <p className="mt-5 max-w-2xl text-sm leading-6 text-navy/72 sm:text-base">{benefit.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-navy/8 bg-muted/65 py-14 sm:py-20 lg:py-28">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div className="h-fit lg:self-center">
            <p className="text-[23px] font-bold uppercase leading-none tracking-[0.06em] text-teal">{page.stepsEyebrow}</p>
            <h2 className="mt-4 text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[0.96] tracking-[-0.055em]">
              {page.stepsTitle}
            </h2>
            <p className="mt-6 max-w-md leading-7 text-muted-foreground">
              {page.stepsIntro}
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href={page.stepsButtonHref}>{page.stepsButtonLabel}</Link>
            </Button>
          </div>
          <div>
            <NumberedSteps className="grid-cols-1 sm:grid-cols-1 lg:grid-cols-1" steps={page.steps} />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-28 bg-[#FAFBFB] border-y border-navy/8">
        <div className="page-shell">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-[23px] font-bold uppercase leading-none tracking-[0.06em] text-[#0E7A62]">
                {page.levelsEyebrow}
              </p>
              <h2 className="mt-3 text-[clamp(2.4rem,4.5vw,4.2rem)] font-bold leading-[1.05] tracking-[-0.035em] text-navy-ink">
                {page.levelsTitle}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#5A6B72] sm:text-lg">
                {page.levelsIntro}
              </p>
            </div>
            <Button asChild variant="outline" className="w-fit self-start md:self-end">
              <Link href={page.levelsButtonHref}>{page.levelsButtonLabel}</Link>
            </Button>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
            {levels.map((level, index) => (
              <article
                key={level.slug}
                style={{ "--tier-accent": LEVEL_ACCENTS[index] } as React.CSSProperties}
                className="group flex flex-col justify-between rounded-[22px] border border-navy/8 bg-white p-7 shadow-[0_12px_36px_rgba(23,50,77,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-(--tier-accent) hover:shadow-[0_20px_48px_rgba(23,50,77,0.08)]"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <Image
                      src={mediaSrc(level.badge)}
                      alt={`Organisation of Choice ${level.name} certification badge`}
                      width={96}
                      height={96}
                      className="size-20 object-contain sm:size-24 transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="font-mono text-xs font-semibold tabular-nums text-navy/40">0{index + 1}</span>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold tracking-[-0.02em] text-[#0B2B3C]">{level.name}</h3>
                  <p className="mt-1.5 text-sm font-semibold text-(--tier-accent)">{level.homeNote}</p>
                  <p className="mt-4 text-sm leading-relaxed text-[#5A6B72]">{level.homeBody}</p>
                </div>
                <div className="mt-8 border-t border-navy/8 pt-4 flex items-center justify-between text-xs font-semibold text-(--tier-accent)">
                  <span>{page.levelsTierLabel} 0{index + 1}</span>
                  <span className="text-navy/40 group-hover:translate-x-0.5 transition-transform">→</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-navy/8 bg-sky/30 py-14 sm:py-20">
        <div className="page-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mx-auto w-fit rounded-full border border-navy/10 bg-white/70 px-4 py-2 text-xs font-semibold text-teal">
              {page.testimonialsEyebrow}
            </p>
            <h2 className="mt-5 text-[clamp(2.25rem,4.4vw,4.2rem)] font-semibold leading-none tracking-[-0.05em]">
              {page.testimonialsTitle}
            </h2>
          </div>
          <TestimonialsCarousel testimonials={page.testimonials} />
        </div>
      </section>

      <section className="py-14 sm:py-20 lg:py-28">
        <div className="page-shell">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-[23px] font-bold uppercase leading-none tracking-[0.06em] text-teal">{page.insightsEyebrow}</p>
              <h2 className="mt-4 text-[clamp(2.25rem,4.4vw,4.2rem)] font-semibold leading-none tracking-[-0.05em]">
                {page.insightsTitle}
              </h2>
            </div>
            <Link href={page.insightsLinkHref} className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:underline">
              {page.insightsLinkLabel} <ArrowRight className="size-4" />
            </Link>
          </div>
          <ul className="mt-12 grid gap-4 lg:grid-cols-3 items-stretch">
            {blogPosts.slice(0, 3).map((post, index) => (
              <li key={post.slug} className="flex h-full">
                <Link
                  href={`/resources/blog/${post.slug}`}
                  className={cn(
                    "group flex h-full w-full flex-col rounded-[2rem] border border-navy/8 p-7 transition-transform duration-300 hover:-translate-y-1",
                    index === 0 ? "bg-mint" : index === 1 ? "bg-sky" : "bg-butter/65"
                  )}
                >
                  <span className="text-xs font-semibold text-muted-foreground">{page.insightsCardLabel} 0{index + 1}</span>
                  <ImageSlot
                    contentKey={`insight thumbnail — ${post.slug}`}
                    alt={post.image?.alt ?? post.title}
                    src={post.image?.src}
                    aspect="video"
                    className="mt-5"
                  />
                  <span className="mt-5 flex-1 text-2xl font-semibold leading-tight tracking-[-0.035em] text-navy-ink group-hover:text-teal">
                    {post.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* THE MARK YOU EARN — near-white ground so the seal's white face sits flat.
          Never move this onto the navy or green surfaces. */}
      <section className="bg-[#F7FAF8] px-6 py-16 lg:py-24">
        <div className="mx-auto flex max-w-[1040px] flex-col items-center gap-14 text-center min-[900px]:flex-row min-[900px]:text-left">
          <Image
            src="/images/brand/ooc-seal-full.webp"
            alt="Organisation of Choice certification seal"
            width={240}
            height={240}
            className="size-[140px] shrink-0 object-contain min-[900px]:size-[200px] lg:size-[240px]"
          />
          <div>
            <p className="text-[23px] font-bold uppercase leading-none tracking-[0.06em] text-[#0E7A62]">
              {page.markEyebrow}
            </p>
            <h2 className="mt-3 text-[clamp(28px,3.4vw,40px)] font-bold leading-[1.15] tracking-[-0.02em] text-navy-ink">
              {page.markTitle}
            </h2>
            <p className="mt-3.5 max-w-[46ch] text-base leading-[1.65] text-[#56666D]">
              {page.markBody}
            </p>
            <div className="mt-[22px] flex flex-wrap justify-center gap-3 min-[900px]:justify-start">
              <Link
                href={page.markPrimaryHref}
                className="rounded-full bg-[#0E7A62] px-[22px] py-3 text-[14px] font-bold text-white transition-colors hover:bg-[#0b6350]"
              >
                {page.markPrimaryLabel}
              </Link>
              <Link
                href={page.markSecondaryHref}
                className="rounded-full border border-[#D6E2DC] bg-transparent px-[22px] py-3 text-[14px] font-bold text-[#0B2B3C] transition-colors hover:bg-white"
              >
                {page.markSecondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        heading={page.ctaTitle}
        body={page.ctaBody}
        primaryCta={{ label: page.ctaPrimaryLabel, href: page.ctaPrimaryHref }}
        secondaryCta={{ label: page.ctaSecondaryLabel, href: page.ctaSecondaryHref }}
      />
    </>
  );
}

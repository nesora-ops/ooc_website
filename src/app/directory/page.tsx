import Link from "next/link";
import type { Metadata } from "next";
import { BadgeCheck, Search, ShieldCheck } from "lucide-react";

import { EmployerDirectory } from "@/components/directory/employer-directory";
import { ImageSlot } from "@/components/image-slot";
import { getDirectoryEmployers } from "@/lib/certified-employers";
import { RichParagraphs } from "@/components/placeholder";
import { CTABand } from "@/components/sections/cta-band";
import { SectionHeaderBar } from "@/components/sections/section-header-bar";
import { ProgressiveDetails } from "@/components/sections/progressive-details";
import { Button } from "@/components/ui/button";
import { directoryDefaults } from "@/content/pages/directory";
import { getLevels, getPage } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("directory", directoryDefaults);
  return { title: page.metaTitle, description: page.metaDescription };
}

export default async function DirectoryPage() {
  const [page, levels, employers] = await Promise.all([
    getPage("directory", directoryDefaults),
    getLevels(),
    getDirectoryEmployers(),
  ]);
  const levelDescriptions = Object.fromEntries(levels.map((level) => [level.slug, level.directoryDescription]));

  return (
    <>
      <SectionHeaderBar label={page.breadcrumb} />

      {/* HERO */}
      <section data-standard-layout className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-center justify-between gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
            <div className="w-full order-2 lg:order-1 flex justify-start">
              <div className="w-full max-w-2xl lg:max-w-3xl">
                <ImageSlot
                  contentKey="job seeker researching employers"
                  alt={page.heroImageAlt}
                  src={page.heroImage}
                  aspect="video"
                  priority
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="w-full rounded-[2.5rem] shadow-[0_28px_80px_rgba(23,50,77,0.12)]"
                />
              </div>
            </div>
            <div className="max-w-xl order-1 lg:order-2">
              <span className="text-[23px] font-bold uppercase leading-none tracking-[0.06em] text-teal">
                {page.heroEyebrow}
              </span>
              <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-navy-ink sm:text-5xl lg:text-[3.35rem] lg:leading-[1.1]">
                {page.heroTitle}
              </h1>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground">
                {page.heroIntro}
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="rounded-full bg-teal hover:bg-teal/90 px-8 py-6 text-base font-semibold shadow-[0_10px_30px_rgba(10,113,104,0.2)]">
                  <Link href={page.heroButtonHref}>{page.heroButtonLabel}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section id="why-it-matters" className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
            {page.whyTitle}
          </h2>
          <div className="mx-auto mt-12 grid max-w-5xl items-stretch lg:grid-cols-[1fr_auto_1fr]">
            <div className="rounded-t-[2rem] border border-navy/8 bg-white/70 p-8 lg:rounded-l-[2rem] lg:rounded-tr-none">
              <p className="font-heading text-5xl font-semibold text-navy/40">{page.claimWord}</p>
              <h3 className="mt-10 text-xl font-semibold text-navy-ink">{page.claimTitle}</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                {page.claimBody}
              </p>
            </div>
            <div className="relative z-10 grid min-h-24 place-items-center bg-mint px-8 lg:-mx-1 lg:min-h-full">
              <ShieldCheck className="size-12 text-teal" aria-hidden strokeWidth={1.5} />
            </div>
            <div className="rounded-b-[2rem] border border-navy/8 bg-navy p-8 text-white lg:rounded-r-[2rem] lg:rounded-bl-none">
              <p className="font-heading text-5xl font-semibold text-butter">{page.proofWord}</p>
              <h3 className="mt-10 text-xl font-semibold text-white">{page.proofTitle}</h3>
              <p className="mt-3 leading-7 text-white/70">
                {page.proofBody}
              </p>
            </div>
          </div>
          <ProgressiveDetails className="mx-auto mt-8 max-w-5xl" label={page.whyDetailsLabel}>
            <RichParagraphs text={page.whyDetails} />
          </ProgressiveDetails>
        </div>
      </section>

      {/* HOW TO USE THE DIRECTORY */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
          {page.usesTitle}
        </h2>
        <div className="mx-auto mt-12 max-w-5xl divide-y divide-navy/10 border-y border-navy/10">
          {page.uses.map((use, index) => {
            const icons = [Search, BadgeCheck, ShieldCheck];
            const Icon = icons[index % icons.length];
            return (
              <details key={index} className="group">
                <summary className="grid cursor-pointer list-none items-center gap-5 py-7 marker:content-none sm:grid-cols-[3.5rem_1fr_auto]">
                  <span className="grid size-12 place-items-center rounded-full bg-mint text-teal">
                    <Icon className="size-5" aria-hidden strokeWidth={1.7} />
                  </span>
                  <span>
                    <span className="block text-xl font-semibold text-navy-ink">{use.lead}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">{use.summary}</span>
                  </span>
                  <span className="hidden font-mono text-sm text-teal sm:block">0{index + 1}</span>
                </summary>
                <p className="max-w-3xl pb-7 text-sm leading-7 text-muted-foreground sm:pl-[5.1rem]">
                  {use.body}
                </p>
              </details>
            );
          })}
        </div>
      </section>

      {/* DIRECTORY */}
      <section id="directory" className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-[23px] font-bold uppercase leading-none tracking-[0.06em] text-gold-ink">{page.directoryEyebrow}</p>
          <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
            {page.directoryTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-muted-foreground">
            {page.directoryIntro}
          </p>
          <div className="mt-8">
            <EmployerDirectory
              employers={employers}
              levelDescriptions={levelDescriptions}
              copy={{
                searchLabel: page.searchLabel,
                searchPlaceholder: page.searchPlaceholder,
                industryLabel: page.industryLabel,
                locationLabel: page.locationLabel,
                levelLabel: page.levelLabel,
                resultsLabel: page.resultsLabel,
                emptyMessage: page.emptyMessage,
                cardLevelSuffix: page.cardLevelSuffix,
                cardScopeLabel: page.cardScopeLabel,
              }}
            />
          </div>
        </div>
      </section>

      <CTABand
        heading={page.ctaTitle}
        body={page.ctaBody}
        primaryCta={{ label: page.ctaPrimaryLabel, href: page.ctaPrimaryHref }}
      />
    </>
  );
}

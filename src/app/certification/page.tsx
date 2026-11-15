import Image from "next/image";
import type { Metadata } from "next";
import { Award, Building2, FileSearch, MessageCircle, ShieldCheck } from "lucide-react";

import { Seal } from "@/components/brand/seal";
import { ImageSlot } from "@/components/image-slot";
import { Rich, RichParagraphs } from "@/components/placeholder";
import { CTABand } from "@/components/sections/cta-band";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { ProgressiveDetails } from "@/components/sections/progressive-details";
import { SectionHeaderBar } from "@/components/sections/section-header-bar";
import { certificationDefaults } from "@/content/pages/certification";
import { getFaqs, getLevels, getPage } from "@/lib/content";
import { mediaSrc } from "@/lib/image";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("certification", certificationDefaults);
  return { title: page.metaTitle, description: page.metaDescription };
}

const LEVEL_ACCENTS = ["#6B7B84", "#C08A2E", "#7C8CA8", "#0E7A62"];

// Per-stage icon and colour, in stage order. The words are in
// src/content/pages/certification.ts.
const STAGE_STYLES = [
  { icon: FileSearch, tone: "bg-sky text-navy" },
  { icon: Building2, tone: "bg-mint text-teal" },
  { icon: MessageCircle, tone: "bg-butter/70 text-gold-ink" },
  { icon: ShieldCheck, tone: "bg-coral/15 text-[#9a4635]" },
  { icon: Award, tone: "bg-navy text-white" },
];

export default async function CertificationPage() {
  const [page, levels, certificationFaqs] = await Promise.all([
    getPage("certification", certificationDefaults),
    getLevels(),
    getFaqs("certification"),
  ]);

  return (
    <>
      <SectionHeaderBar label={page.breadcrumb} />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <Seal size={200} priority className="mb-2" />
        <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold text-navy-ink sm:text-5xl">
          {page.heroTitle}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          {page.heroIntro}
        </p>
      </section>

      {/* WHAT WE ASSESS */}
      <section className="bg-muted/40 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
            {page.assessTitle}
          </h2>
          <div className="mx-auto mt-12 grid max-w-5xl overflow-hidden rounded-[2.25rem] border border-navy/8 bg-white/75 lg:grid-cols-[1fr_auto_1fr]">
            <div className="p-8 lg:p-10">
              <Building2 className="size-8 text-teal" aria-hidden strokeWidth={1.6} />
              <h3 className="mt-8 text-2xl font-semibold text-navy-ink">{page.assessExistsTitle}</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                {page.assessExistsBody}
              </p>
            </div>
            <div className="relative grid min-h-24 place-items-center border-y border-navy/8 bg-mint px-8 lg:border-x lg:border-y-0">
              <span className="grid size-20 place-items-center rounded-full bg-teal text-center text-xs font-bold uppercase tracking-widest text-white">
                {page.assessBadgeLine1}<br />{page.assessBadgeLine2}
              </span>
            </div>
            <div className="p-8 lg:p-10">
              <MessageCircle className="size-8 text-[#6d80c5]" aria-hidden strokeWidth={1.6} />
              <h3 className="mt-8 text-2xl font-semibold text-navy-ink">{page.assessExperiencedTitle}</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                {page.assessExperiencedBody}
              </p>
            </div>
          </div>
          <ProgressiveDetails className="mx-auto mt-8 max-w-5xl" label={page.assessDetailsLabel}>
            <RichParagraphs text={page.assessDetails} />
          </ProgressiveDetails>
        </div>
      </section>

      {/* THE ASSESSMENT PROCESS */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
          {page.processTitle}
        </h2>
        <ol className="relative mt-14 grid gap-8 before:absolute before:bottom-6 before:left-6 before:top-6 before:w-px before:bg-teal/20 lg:grid-cols-5 lg:gap-4 lg:before:bottom-auto lg:before:left-[10%] lg:before:right-[10%] lg:before:top-6 lg:before:h-px lg:before:w-auto">
          {page.processStages.map((stage, index) => {
            const style = STAGE_STYLES[index % STAGE_STYLES.length];
            const Icon = style.icon;
            return (
              <li key={index} className="relative grid min-w-0 grid-cols-[3rem_1fr] gap-4 lg:flex lg:flex-col lg:gap-0">
                <span className={`relative z-10 grid size-12 place-items-center rounded-full ring-8 ring-background lg:mx-auto ${style.tone}`}>
                  <Icon className="size-5" aria-hidden strokeWidth={1.7} />
                </span>

                <details className="group min-w-0 overflow-hidden rounded-[1.75rem] border border-navy/8 bg-white/85 shadow-[0_18px_50px_rgba(23,50,77,0.07)] lg:mt-6 lg:h-full">
                  <summary className="cursor-pointer list-none marker:content-none">
                    <span
                      role="img"
                      aria-label={`Illustration for ${stage.title}`}
                      className="relative block h-36 bg-[#f5f3eb] bg-no-repeat after:absolute after:inset-x-0 after:bottom-0 after:h-14 after:bg-gradient-to-t after:from-white/90 after:to-transparent"
                      style={{
                        backgroundImage: `url('${page.processImage}')`,
                        backgroundPosition: stage.imagePosition,
                        backgroundSize: "600% auto",
                      }}
                    />
                    <span className="block p-5">
                      <span className="block text-sm font-bold uppercase tracking-[0.06em] text-teal">
                        <Rich text={stage.duration} />
                      </span>
                      <span className="mt-3 block text-xl font-semibold leading-tight text-navy-ink">
                        {stage.title}
                      </span>
                      <span className="mt-3 block text-sm leading-6 text-muted-foreground">
                        {stage.summary}
                      </span>
                      <span className="mt-5 flex items-center justify-between border-t border-navy/8 pt-4 text-sm font-bold uppercase tracking-[0.06em] text-teal">
                        <span className="group-open:hidden">{page.processOpenLabel}</span>
                        <span className="hidden group-open:inline">{page.processCloseLabel}</span>
                        <span aria-hidden className="text-lg leading-none group-open:rotate-45">+</span>
                      </span>
                    </span>
                  </summary>
                  <p className="border-t border-navy/8 px-5 pb-5 pt-4 text-sm leading-6 text-muted-foreground">
                    {stage.detail}
                  </p>
                </details>
              </li>
            );
          })}
        </ol>
      </section>

      {/* CERTIFICATION LEVELS */}
      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[23px] font-bold uppercase leading-none tracking-[0.06em] text-gold-ink">
              {page.levelsEyebrow}
            </p>
            <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink sm:text-4xl">
              {page.levelsTitle}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {page.levelsIntro}
            </p>
          </div>

          {/* Prestige Medallion Overview Showcase */}
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-navy/8 bg-white shadow-[0_18px_60px_rgba(23,50,77,0.06)]">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center">
              <div className="relative aspect-[21/9] sm:aspect-[16/7] lg:aspect-[16/8] w-full overflow-hidden bg-[#FAF8F5]">
                <Image
                  src={page.levelsImage}
                  alt={page.levelsImageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 55vw, 100vw"
                />
              </div>
              <div className="p-7 sm:p-10 flex flex-col justify-center">
                <span className="text-[23px] font-bold uppercase leading-none tracking-[0.06em] text-teal">
                  {page.levelsPanelEyebrow}
                </span>
                <h3 className="mt-2 text-2xl font-bold text-navy-ink sm:text-3xl">
                  {page.levelsPanelTitle}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {page.levelsPanelBody}
                </p>
              </div>
            </div>
          </div>

          {/* 4-Tier Matrix Cards */}
          <div className="mt-8 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
            {levels.map((level, index) => (
              <article
                key={level.slug}
                style={{ "--tier-accent": LEVEL_ACCENTS[index] } as React.CSSProperties}
                className="group flex flex-col justify-between rounded-[22px] border border-navy/8 bg-white p-6 shadow-[0_14px_40px_rgba(23,50,77,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-(--tier-accent) hover:shadow-[0_22px_50px_rgba(23,50,77,0.09)]"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-navy/6 pb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-(--tier-accent)">
                      {page.levelsCardLabel} {`0${index + 1}`}
                    </span>
                    <span className="size-2 rounded-full" style={{ backgroundColor: LEVEL_ACCENTS[index] }} />
                  </div>
                  <div className="my-5 flex justify-center">
                    <Image
                      src={mediaSrc(level.badge)}
                      alt={`Organisation of Choice ${level.name} certification badge`}
                      width={120}
                      height={120}
                      className="size-24 object-contain sm:size-28 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-navy-ink">{level.certificationTitle}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{level.certificationSummary}</p>
                </div>
                <div className="mt-6 border-t border-navy/8 pt-4">
                  <p className="text-[11px] font-semibold text-(--tier-accent) uppercase tracking-wider">
                    {level.certificationBenchmark}
                  </p>
                  <ProgressiveDetails
                    className="mt-3 border-0 pt-0"
                    labelClassName="text-xs font-bold uppercase tracking-wider text-(--tier-accent)"
                    label={page.levelsDetailsLabel}
                  >
                    <p className="text-xs leading-relaxed text-muted-foreground">{level.certificationBody}</p>
                  </ProgressiveDetails>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SCORING & CRITERIA */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="mx-auto max-w-3xl text-[23px] font-bold uppercase leading-none tracking-[0.06em] text-gold-ink">
          {page.scoringEyebrow}
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
          {page.scoringTitle}
        </h2>
        <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <ImageSlot
            contentKey="scoring criteria illustration"
            alt={page.scoringImageAlt}
            src={page.scoringImage}
            aspect="4/3"
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="rounded-[2.25rem] bg-white shadow-[0_28px_80px_rgba(23,50,77,0.1)]"
          />
          <div>
            <p className="text-lg leading-8 text-muted-foreground">
              {page.scoringIntro}
            </p>
            <ProgressiveDetails className="mt-8" label={page.scoringDetailsLabel}>
              <RichParagraphs text={page.scoringDetails} />
            </ProgressiveDetails>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/40 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mx-auto max-w-3xl border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
            {page.faqTitle}
          </h2>
          <FAQAccordion className="mx-auto mt-8 max-w-3xl" items={certificationFaqs} />
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

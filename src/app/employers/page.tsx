import Link from "next/link";
import type { Metadata } from "next";
import { Award, BarChart3, Megaphone, RefreshCw, Route, SearchCheck } from "lucide-react";

import { EmployerApplicationForm } from "@/components/forms/employer-application-form";
import { ImageSlot } from "@/components/image-slot";
import { Placeholder, Rich, RichParagraphs } from "@/components/placeholder";
import { PlaceholderText } from "@/components/placeholder-text";
import { ProgressiveDetails } from "@/components/sections/progressive-details";
import { SectionHeaderBar } from "@/components/sections/section-header-bar";
import { Button } from "@/components/ui/button";
import { employersDefaults } from "@/content/pages/employers";
import { getFormCopy, getPage } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("employers", employersDefaults);
  return { title: page.metaTitle, description: page.metaDescription };
}

// Per-card icon and layout, in card order. The words are in
// src/content/pages/employers.ts.
const INCLUDED_STYLES = [
  { icon: Award, className: "bg-navy text-white lg:col-span-7 lg:row-span-2" },
  { icon: SearchCheck, className: "bg-sky/80 lg:col-span-5" },
  { icon: BarChart3, className: "bg-mint/80 lg:col-span-5" },
  { icon: Megaphone, className: "bg-white/80 lg:col-span-4" },
  { icon: RefreshCw, className: "bg-butter/55 lg:col-span-4" },
  { icon: Route, className: "bg-coral/10 lg:col-span-4" },
];

export default async function EmployersPage() {
  const page = await getPage("employers", employersDefaults);
  const formCopy = await getFormCopy(page.formSuccessTitle, page.formSuccessMessage);

  return (
    <>
      <SectionHeaderBar label={page.breadcrumb} />

      {/* HERO */}
      <section data-standard-layout className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <div>
          <h1 className="max-w-3xl font-heading text-4xl font-bold text-navy-ink sm:text-5xl">
            {page.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            {page.heroIntro}
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href={page.heroButtonHref}>{page.heroButtonLabel}</Link>
            </Button>
          </div>
        </div>
        <ImageSlot
          contentKey="employer workplace culture proof"
          alt={page.heroImageAlt}
          src={page.heroImage}
          aspect="4/3"
          priority
          sizes="(min-width: 1024px) 54vw, 100vw"
          className="rounded-[2.25rem] shadow-[0_28px_80px_rgba(23,50,77,0.12)]"
        />
      </section>

      {/* THE PROBLEM WE SOLVE */}
      <section id="why-certify" className="bg-muted/40 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-[23px] font-bold uppercase leading-none tracking-[0.06em] text-gold-ink">
            {page.problemEyebrow}
          </p>
          <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
            {page.problemTitle}
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-8 text-muted-foreground">
            {page.problemIntro}
          </p>
          <ProgressiveDetails className="mx-auto mt-8 max-w-3xl" label={page.problemDetailsLabel}>
            <RichParagraphs text={page.problemDetails} />
          </ProgressiveDetails>
        </div>
      </section>

      {/* WHAT YOU RECEIVE */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="mx-auto mt-4 max-w-3xl border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
          {page.includedTitle}
        </h2>
        <ul className="mx-auto mt-12 grid max-w-6xl grid-flow-dense gap-3 lg:grid-cols-12 lg:grid-rows-3">
          {page.included.map((item, index) => {
            const style = INCLUDED_STYLES[index % INCLUDED_STYLES.length];
            const Icon = style.icon;
            const isDark = index === 0;
            return (
              <li
                key={index}
                className={`group min-h-48 rounded-[1.75rem] border border-navy/8 p-6 lg:p-8 ${style.className}`}
              >
                <div className="flex h-full flex-col justify-between gap-8">
                  <Icon
                    className={`size-7 ${isDark ? "text-butter" : "text-teal"}`}
                    aria-hidden
                    strokeWidth={1.6}
                  />
                  {isDark && (
                    <ImageSlot
                      contentKey="certification deliverables"
                      alt={page.includedImageAlt}
                      src={page.includedImage}
                      aspect="video"
                      sizes="(min-width: 1024px) 54vw, 100vw"
                      className="rounded-[1.5rem] border-white/10 bg-white"
                    />
                  )}
                  <div>
                    <h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-navy-ink"}`}>
                      {item.lead}
                    </h3>
                    <p className={`mt-3 text-sm leading-6 ${isDark ? "text-white/70" : "text-muted-foreground"}`}>
                      {item.body}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      {/* THE PROCESS FOR YOU */}
      <section className="bg-muted/40 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-[23px] font-bold uppercase leading-none tracking-[0.06em] text-gold-ink">
            {page.processEyebrow}
          </p>
          <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
            {page.processTitle}
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-8 text-muted-foreground">
            {page.processIntro}
          </p>
          <ProgressiveDetails className="mx-auto mt-8 max-w-3xl" label={page.processDetailsLabel}>
            <RichParagraphs text={page.processDetails} />
          </ProgressiveDetails>
          <Link
            href={page.processLinkHref}
            className="mx-auto mt-6 flex w-fit items-center rounded-full bg-white px-6 py-3 font-medium text-teal shadow-sm transition-colors hover:bg-mint"
          >
            {page.processLinkLabel}
          </Link>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="mx-auto mt-4 max-w-3xl border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
          {page.pricingTitle}
        </h2>
        <div className="mx-auto mt-12 grid max-w-5xl overflow-hidden rounded-[2.25rem] border border-navy/8 bg-white/75 lg:grid-cols-[1fr_auto_1fr]">
          <div className="p-8 lg:p-10">
            <p className="text-[23px] font-bold uppercase leading-none tracking-[0.06em] text-teal">{page.pricingConsidersLabel}</p>
            <p className="mt-5 font-heading text-3xl font-semibold text-navy-ink">
              {page.pricingConsidersLine1}<br /><span className="text-muted-foreground">+</span> {page.pricingConsidersLine2}
            </p>
          </div>
          <div className="grid place-items-center border-y border-navy/8 bg-butter/45 px-8 py-6 lg:border-x lg:border-y-0">
            <span className="font-heading text-4xl font-semibold text-gold-ink">=</span>
          </div>
          <div className="p-8 lg:p-10">
            <p className="text-[23px] font-bold uppercase leading-none tracking-[0.06em] text-teal">{page.pricingNeverLabel}</p>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              {page.pricingNeverBody}
            </p>
          </div>
        </div>
        <div className="mx-auto mt-6 max-w-5xl rounded-[1.5rem] border border-dashed border-coral/55 bg-coral/8 p-6">
          <Placeholder className="border-0 bg-transparent px-0 py-0">pricing tiers</Placeholder>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {page.pricingNote}
          </p>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="case-studies" className="bg-muted/40 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-[23px] font-bold uppercase leading-none tracking-[0.06em] text-gold-ink">{page.caseStudiesEyebrow}</p>
          <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
            {page.caseStudiesTitle}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {page.caseStudies.map((study, index) => (
              <div key={index} className="space-y-4">
                <ImageSlot
                  contentKey={`case study ${index + 1} — certified workplace`}
                  alt={study.imageAlt}
                  src={study.image || undefined}
                  aspect="video"
                />
                <PlaceholderText
                  variant="block"
                  contentKey={`case study ${index + 1}: organisation, level, one-line result`}
                  value={study.summary}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="apply" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="mx-auto max-w-3xl text-center text-[23px] font-bold uppercase leading-none tracking-[0.06em] text-gold-ink">
          {page.applyEyebrow}
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl border-b border-gold/40 pb-4 text-center font-heading text-3xl font-bold text-navy-ink">
          {page.applyTitle}
        </h2>
        <p className="mx-auto mt-8 max-w-3xl text-center text-muted-foreground">
          <Rich text={page.applyIntro} />
        </p>
        <div className="mx-auto mt-10 max-w-3xl">
          <EmployerApplicationForm copy={formCopy} />
        </div>
      </section>
    </>
  );
}

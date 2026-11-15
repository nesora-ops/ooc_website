import Link from "next/link";
import type { Metadata } from "next";

import { PartnerApplicationForm } from "@/components/forms/partner-application-form";
import { ImageSlot } from "@/components/image-slot";
import { Rich } from "@/components/placeholder";
import { ProgressiveDetails } from "@/components/sections/progressive-details";
import { SectionHeaderBar } from "@/components/sections/section-header-bar";
import { Button } from "@/components/ui/button";
import { partnersDefaults } from "@/content/pages/partners";
import { getFormCopy, getLevels, getPage } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("partners", partnersDefaults);
  return { title: page.metaTitle, description: page.metaDescription };
}

// Where each firm-type pill floats on large screens, and its colour, in list
// order. The words are in src/content/pages/partners.ts.
const PARTNER_TYPE_STYLES = [
  { className: "lg:left-[2%] lg:top-[14%] lg:-rotate-3", tone: "border-teal/15 bg-mint text-teal" },
  { className: "lg:right-[1%] lg:top-[12%] lg:rotate-2", tone: "border-navy/10 bg-sky text-navy" },
  { className: "lg:left-[0%] lg:top-[47%] lg:rotate-2", tone: "border-gold/20 bg-butter/70 text-gold-ink" },
  { className: "lg:right-[7%] lg:top-[43%] lg:-rotate-3", tone: "border-coral/20 bg-coral/10 text-[#8b4435]" },
  { className: "lg:left-[6%] lg:bottom-[10%] lg:-rotate-2", tone: "border-teal/15 bg-white/90 text-navy-ink" },
  { className: "lg:right-[3%] lg:bottom-[12%] lg:rotate-3", tone: "border-navy/10 bg-mint/80 text-navy-ink" },
  { className: "lg:left-[31%] lg:bottom-[1%] lg:rotate-1", tone: "border-navy/10 bg-sky/75 text-navy" },
  { className: "lg:right-[27%] lg:bottom-[0%] lg:-rotate-1", tone: "border-gold/20 bg-butter/55 text-gold-ink" },
];

const STEP_STYLES = [
  { position: "lg:top-0", tone: "border-teal bg-mint/70" },
  { position: "lg:bottom-0", tone: "border-navy bg-sky/70" },
  { position: "lg:top-0", tone: "border-gold bg-butter/55" },
  { position: "lg:bottom-0", tone: "border-coral bg-coral/10" },
];

export default async function PartnersPage() {
  const [page, levels] = await Promise.all([getPage("partners", partnersDefaults), getLevels()]);
  const formCopy = await getFormCopy(page.formSuccessTitle, page.formSuccessMessage);

  return (
    <>
      <SectionHeaderBar label={page.breadcrumb} />

      {/* HERO */}
      <section data-standard-layout className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <div>
          <h1 className="max-w-2xl font-heading text-4xl font-bold text-navy-ink sm:text-5xl">
            {page.heroTitle}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            {page.heroIntro}
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href={page.heroButtonHref}>{page.heroButtonLabel}</Link>
            </Button>
          </div>
        </div>
        <ImageSlot
          contentKey="partner advisory conversation"
          alt={page.heroImageAlt}
          src={page.heroImage}
          aspect="video"
          priority
          sizes="(min-width: 1024px) 54vw, 100vw"
          className="rounded-[2.25rem] shadow-[0_28px_80px_rgba(23,50,77,0.12)]"
        />
      </section>

      {/* WHY PARTNER */}
      <section className="bg-muted/40 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="!mx-0 max-w-5xl font-heading text-[clamp(2.6rem,5.2vw,5rem)] font-semibold leading-[0.96] tracking-[-0.055em] text-navy-ink !text-left">
            {page.whyTitle}
          </h2>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground">
            {page.whyIntro}
          </p>

          <div className="mt-14 grid grid-flow-dense gap-3 lg:grid-cols-12 lg:auto-rows-[minmax(15rem,auto)]">
            <article className="relative overflow-hidden rounded-[2.25rem] border border-teal/10 bg-mint/85 p-7 sm:p-9 lg:col-span-7 lg:row-span-2 lg:p-11">
              <div aria-hidden className="absolute -right-16 -top-16 size-52 rounded-full border-[2.5rem] border-white/45" />
              <p className="relative text-[23px] font-bold uppercase leading-none tracking-[0.06em] text-teal">{page.adviceEyebrow}</p>
              <h3 className="relative mt-5 max-w-xl font-heading text-2xl font-semibold leading-tight text-navy-ink sm:text-3xl">
                {page.adviceTitle}
              </h3>

              <ul className="relative mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-navy-ink/75" aria-label="Common client advisory topics">
                {page.adviceTopics.map(({ label: topic }, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span aria-hidden className="size-1.5 rounded-full bg-teal" />
                    {topic}
                  </li>
                ))}
              </ul>

              <div className="relative mt-10 divide-y divide-teal/15 border-y border-teal/15">
                {page.adviceRows.map((row, index) => (
                  <div key={index} className="grid gap-2 py-5 sm:grid-cols-[8rem_1fr]">
                    <p className="text-sm font-bold uppercase tracking-[0.06em] text-teal">{row.label}</p>
                    <p className="font-medium text-navy-ink">{row.text}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[2.25rem] border border-navy/8 bg-sky/75 p-7 sm:p-9 lg:col-span-5">
              <p className="text-[23px] font-bold uppercase leading-none tracking-[0.06em] text-navy">{page.valueEyebrow}</p>
              <h3 className="mt-4 font-heading text-3xl font-semibold leading-tight text-navy-ink">
                {page.valueTitle}
              </h3>
              <p className="mt-6 font-heading text-xl font-semibold text-teal">
                {page.valueFlow}
              </p>
              <p className="mt-5 text-sm leading-6 text-muted-foreground">
                <Rich text={page.valueBody} />
              </p>
            </article>

            <article className="rounded-[2.25rem] border border-gold/15 bg-white/85 p-7 sm:p-9 lg:col-span-5">
              <p className="text-[23px] font-bold uppercase leading-none tracking-[0.06em] text-gold-ink">{page.supportEyebrow}</p>
              <h3 className="mt-4 font-heading text-3xl font-semibold leading-tight text-navy-ink">
                {page.supportTitle}
              </h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-[23px] font-bold uppercase leading-none tracking-[0.06em] text-teal">{page.supportListTitle}</p>
                  <ul className="mt-3 space-y-2 text-sm leading-5 text-muted-foreground">
                    {page.supportItems.map((item, index) => (
                      <li key={index}>{item.label}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[23px] font-bold uppercase leading-none tracking-[0.06em] text-teal">{page.independenceTitle}</p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {page.independenceBody}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* WHO WE PARTNER WITH */}
      <section className="relative isolate mx-auto max-w-7xl overflow-hidden px-5 py-14 sm:px-8 lg:min-h-[46rem] lg:px-10 lg:py-20">
        <div aria-hidden className="absolute left-[18%] top-[20%] -z-10 size-72 rounded-full bg-mint/65 blur-3xl" />
        <div aria-hidden className="absolute right-[16%] top-[12%] -z-10 size-64 rounded-full bg-sky/65 blur-3xl" />
        <div aria-hidden className="absolute bottom-[8%] left-[43%] -z-10 size-60 rounded-full bg-butter/35 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl text-center lg:absolute lg:inset-0 lg:flex lg:flex-col lg:items-center lg:justify-center">
          <h2 className="max-w-4xl font-heading text-[clamp(2.6rem,5.2vw,5rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-navy-ink">
            <span className="block">{page.whoTitleLine1}</span>
            <span className="block">{page.whoTitleLine2}</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            {page.whoIntro}
          </p>
        </div>

        <ul
          aria-label="Types of firms in the partner programme"
          className="relative z-20 mt-12 flex flex-wrap justify-center gap-3 lg:absolute lg:inset-0 lg:mt-0 lg:block"
        >
          {page.partnerTypes.map((type, index) => {
            const style = PARTNER_TYPE_STYLES[index % PARTNER_TYPE_STYLES.length];
            return (
            <li
              key={index}
              className={`partner-pill flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold shadow-[0_12px_34px_rgba(23,50,77,0.08)] sm:text-base lg:absolute ${style.className} ${style.tone}`}
            >
              <span aria-hidden className="size-1.5 rounded-full bg-current opacity-65" />
              {type.label}
            </li>
            );
          })}
        </ul>
      </section>

      {/* PARTNER TIERS */}
      <section id="tiers" className="bg-muted/40 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-[23px] font-bold uppercase leading-none tracking-[0.06em] text-gold-ink">{page.tiersEyebrow}</p>
          <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
            {page.tiersTitle}
          </h2>
          <p className="mt-8 max-w-3xl text-muted-foreground">
            <Rich text={page.tiersIntro} />
          </p>
          <div className="mt-8 grid grid-flow-dense gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {levels.map((tier) => (
              <article key={tier.slug} className="rounded-[1.75rem] border border-border bg-white/80 p-6">
                <h3 className="font-heading text-xl font-semibold text-navy-ink">{tier.partnerTierName}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{tier.partnerTierSummary}</p>
                <ProgressiveDetails className="mt-5" label={page.tiersDetailsLabel}>
                  <p className="text-sm leading-6">{tier.partnerTierBody}</p>
                </ProgressiveDetails>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW PARTNERSHIP WORKS */}
      <section className="relative isolate mx-auto max-w-7xl overflow-hidden px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div aria-hidden className="absolute right-[8%] top-[8%] -z-10 size-64 rounded-full bg-sky/50 blur-3xl" />
        <div aria-hidden className="absolute bottom-[3%] left-[10%] -z-10 size-64 rounded-full bg-mint/55 blur-3xl" />

        <h2 className="max-w-5xl font-heading text-[clamp(2.6rem,5.2vw,5rem)] font-semibold leading-[0.96] tracking-[-0.055em] text-navy-ink">
          <span className="block">{page.stepsTitleLine1}</span>
          <span className="block">{page.stepsTitleLine2}</span>
        </h2>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
          {page.stepsIntro}
        </p>

        <div className="relative mt-16 lg:min-h-[34rem]">
          <div aria-hidden className="absolute bottom-0 left-4 top-0 w-px bg-teal/20 lg:bottom-auto lg:left-[5%] lg:right-[5%] lg:top-1/2 lg:h-px lg:w-auto" />
          <ol className="space-y-10 lg:grid lg:grid-cols-4 lg:gap-6 lg:space-y-0">
            {page.steps.map((step, index) => {
              const { position, tone } = STEP_STYLES[index % STEP_STYLES.length];
              return (
              <li key={index} className="relative min-h-44 pl-12 lg:min-h-[34rem] lg:pl-0">
                <span
                  aria-hidden
                  className={`absolute left-[0.55rem] top-1.5 z-10 size-4 rounded-full border-4 border-white shadow-[0_0_0_1px_rgba(10,113,104,0.2)] lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 ${tone.split(" ")[1]}`}
                />
                <div className={`border-t-4 pt-5 lg:absolute lg:left-0 lg:right-0 ${position} ${tone.split(" ")[0]}`}>
                  <p className="font-mono text-xs font-semibold tabular-nums text-teal">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-heading text-2xl font-semibold text-navy-ink sm:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
                    <Rich text={step.description} />
                  </p>
                </div>
              </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* PARTNER APPLICATION FORM */}
      <section id="apply" className="bg-muted/40 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mx-auto max-w-3xl text-[23px] font-bold uppercase leading-none tracking-[0.06em] text-gold-ink">
            {page.applyEyebrow}
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
            {page.applyTitle}
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-muted-foreground">
            <Rich text={page.applyIntro} />
          </p>
          <div className="mx-auto mt-10 max-w-3xl">
            <PartnerApplicationForm copy={formCopy} />
          </div>
        </div>
      </section>
    </>
  );
}

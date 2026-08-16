import Link from "next/link";
import type { Metadata } from "next";

import { PartnerApplicationForm } from "@/components/forms/partner-application-form";
import { Placeholder } from "@/components/placeholder";
import { ProgressiveDetails } from "@/components/sections/progressive-details";
import { SectionHeaderBar } from "@/components/sections/section-header-bar";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Channel Partners — Organisation of Choice™",
  description:
    "The OOC partner programme lets consultants, advisors, and professional firms bring independent workplace certification to the clients they already serve.",
};

const partnerTypes = [
  {
    label: "HR & CSR consultants",
    className: "lg:left-[2%] lg:top-[14%] lg:-rotate-3",
    tone: "border-teal/15 bg-mint text-teal",
  },
  {
    label: "Chartered accountancy firms",
    className: "lg:right-[1%] lg:top-[12%] lg:rotate-2",
    tone: "border-navy/10 bg-sky text-navy",
  },
  {
    label: "Company secretaries",
    className: "lg:left-[0%] lg:top-[47%] lg:rotate-2",
    tone: "border-gold/20 bg-butter/70 text-gold-ink",
  },
  {
    label: "ESG advisors",
    className: "lg:right-[7%] lg:top-[43%] lg:-rotate-3",
    tone: "border-coral/20 bg-coral/10 text-[#8b4435]",
  },
  {
    label: "Green finance advisors",
    className: "lg:left-[6%] lg:bottom-[10%] lg:-rotate-2",
    tone: "border-teal/15 bg-white/90 text-navy-ink",
  },
  {
    label: "Export consultants",
    className: "lg:right-[3%] lg:bottom-[12%] lg:rotate-3",
    tone: "border-navy/10 bg-mint/80 text-navy-ink",
  },
  {
    label: "Legal firms",
    className: "lg:left-[31%] lg:bottom-[1%] lg:rotate-1",
    tone: "border-navy/10 bg-sky/75 text-navy",
  },
  {
    label: "Industry associations",
    className: "lg:right-[27%] lg:bottom-[0%] lg:-rotate-1",
    tone: "border-gold/20 bg-butter/55 text-gold-ink",
  },
];

const tiers = [
  {
    name: "Silver tier.",
    body: "The starting point for every partner: full programme training, the partner marketing kit, a named programme contact, and standard commercial terms on every client introduced.",
  },
  {
    name: "Gold tier.",
    body: "For established partners with an active client pipeline: enhanced commercial terms, co-marketing opportunities including joint events and content, and priority programme support.",
  },
  {
    name: "Platinum tier.",
    body: "The programme's strategic partners: the strongest commercial terms, first access to new certifications and programme developments, joint go-to-market planning, and public recognition as a Platinum-tier partner of Organisation of Choice™.",
  },
];

const partnershipSteps = [
  {
    title: "Apply",
    description: (
      <>
        Share your firm, client base, and where you see the fit. Every application is reviewed;
        expect a response within <Placeholder>response time</Placeholder>.
      </>
    ),
    position: "lg:top-0",
    tone: "border-teal bg-mint/70",
  },
  {
    title: "Onboard",
    description:
      "Complete programme training, receive the partner kit and commercial agreement, and meet your named programme contact.",
    position: "lg:bottom-0",
    tone: "border-navy bg-sky/70",
  },
  {
    title: "Introduce",
    description:
      "Identify a client that would benefit, make the introduction, and support their application with our team alongside you.",
    position: "lg:top-0",
    tone: "border-gold bg-butter/55",
  },
  {
    title: "Grow",
    description:
      "Each certified client builds your partnership record toward Gold and Platinum, and a client base backed by independent proof.",
    position: "lg:bottom-0",
    tone: "border-coral bg-coral/10",
  },
];

export default function PartnersPage() {
  return (
    <>
      <SectionHeaderBar label="Channel Partners" />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold text-navy-ink sm:text-5xl">
          Grow your practice by growing great workplaces.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          The Organisation of Choice™ partner programme lets consultants, advisors, and
          professional firms bring independent workplace certification to the clients they already
          serve — adding client value and a new revenue stream in the same move.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="#apply">Apply to Partner</Link>
          </Button>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="!mx-0 max-w-5xl font-heading text-[clamp(3rem,6vw,5.8rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-navy-ink !text-left">
            Turn trusted advice into visible client value.
          </h2>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground">
            Add a credible certification pathway to your client work — with recurring commercial
            value and independent assessment built in.
          </p>

          <div className="mt-14 grid grid-flow-dense gap-3 lg:grid-cols-12 lg:auto-rows-[minmax(15rem,auto)]">
            <article className="relative overflow-hidden rounded-[2.25rem] border border-teal/10 bg-mint/85 p-7 sm:p-9 lg:col-span-7 lg:row-span-2 lg:p-11">
              <div aria-hidden className="absolute -right-16 -top-16 size-52 rounded-full border-[2.5rem] border-white/45" />
              <p className="relative text-sm font-semibold text-teal">Advice becomes action</p>
              <h3 className="relative mt-5 max-w-xl font-heading text-3xl font-semibold leading-tight text-navy-ink sm:text-4xl">
                The conversation is already happening. Certification gives it a credible next step.
              </h3>

              <ul className="relative mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-navy-ink/75" aria-label="Common client advisory topics">
                {['Talent', 'Retention', 'Governance', 'Compliance', 'Brand'].map((topic) => (
                  <li key={topic} className="flex items-center gap-2">
                    <span aria-hidden className="size-1.5 rounded-full bg-teal" />
                    {topic}
                  </li>
                ))}
              </ul>

              <div className="relative mt-10 divide-y divide-teal/15 border-y border-teal/15">
                <div className="grid gap-2 py-5 sm:grid-cols-[8rem_1fr]">
                  <p className="text-sm font-semibold text-teal">You bring</p>
                  <p className="font-medium text-navy-ink">The relationship and client context.</p>
                </div>
                <div className="grid gap-2 py-5 sm:grid-cols-[8rem_1fr]">
                  <p className="text-sm font-semibold text-teal">OOC brings</p>
                  <p className="font-medium text-navy-ink">The framework, platform, and independent assessment.</p>
                </div>
                <div className="grid gap-2 py-5 sm:grid-cols-[8rem_1fr]">
                  <p className="text-sm font-semibold text-teal">Clients gain</p>
                  <p className="font-medium text-navy-ink">A defined process, credible outcome, and visible value.</p>
                </div>
              </div>
            </article>

            <article className="rounded-[2.25rem] border border-navy/8 bg-sky/75 p-7 sm:p-9 lg:col-span-5">
              <p className="text-sm font-semibold text-navy">Recurring commercial value</p>
              <h3 className="mt-4 font-heading text-3xl font-semibold leading-tight text-navy-ink">
                One introduction. Value that can recur.
              </h3>
              <p className="mt-6 font-heading text-xl font-semibold text-teal">
                Introduce → certify → renew
              </p>
              <p className="mt-5 text-sm leading-6 text-muted-foreground">
                Partners earn a share of certification revenue for each client introduced, on{" "}
                <Placeholder>partner commercial terms</Placeholder>. Certification renewal means
                partner income can continue across the relationship.
              </p>
            </article>

            <article className="rounded-[2.25rem] border border-gold/15 bg-white/85 p-7 sm:p-9 lg:col-span-5">
              <p className="text-sm font-semibold text-gold-ink">Supported, never conflicted</p>
              <h3 className="mt-4 font-heading text-3xl font-semibold leading-tight text-navy-ink">
                Your expertise stays yours. Assessment stays ours.
              </h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-teal">Support for you</p>
                  <ul className="mt-3 space-y-2 text-sm leading-5 text-muted-foreground">
                    <li>Programme training</li>
                    <li>Co-branded materials</li>
                    <li>A named contact</li>
                    <li>Priority progress visibility</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-teal">Independent from you</p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    OOC owns evaluation, determination, and assessment risk — protecting your client
                    relationship and the value of the mark they earn.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* WHO WE PARTNER WITH */}
      <section className="relative isolate mx-auto max-w-7xl overflow-hidden px-5 py-24 sm:px-8 lg:min-h-[46rem] lg:px-10 lg:py-28">
        <div aria-hidden className="absolute left-[18%] top-[20%] -z-10 size-72 rounded-full bg-mint/65 blur-3xl" />
        <div aria-hidden className="absolute right-[16%] top-[12%] -z-10 size-64 rounded-full bg-sky/65 blur-3xl" />
        <div aria-hidden className="absolute bottom-[8%] left-[43%] -z-10 size-60 rounded-full bg-butter/35 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl text-center lg:absolute lg:inset-0 lg:flex lg:flex-col lg:items-center lg:justify-center">
          <h2 className="max-w-4xl font-heading text-[clamp(3rem,6vw,5.8rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-navy-ink">
            <span className="block">Built for firms that</span>
            <span className="block">advise employers.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            If your firm serves employers in another capacity and sees the fit, we&apos;d still like
            to hear from you — the application form includes space to tell us about your practice.
          </p>
        </div>

        <ul
          aria-label="Types of firms in the partner programme"
          className="relative z-20 mt-12 flex flex-wrap justify-center gap-3 lg:absolute lg:inset-0 lg:mt-0 lg:block"
        >
          {partnerTypes.map((type) => (
            <li
              key={type.label}
              className={`flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold shadow-[0_12px_34px_rgba(23,50,77,0.08)] sm:text-base lg:absolute ${type.className} ${type.tone}`}
            >
              <span aria-hidden className="size-1.5 rounded-full bg-current opacity-65" />
              {type.label}
            </li>
          ))}
        </ul>
      </section>

      {/* PARTNER TIERS */}
      <section id="tiers" className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-ink">Partner tiers</p>
          <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
            Three tiers. One standard.
          </h2>
          <p className="mt-8 max-w-3xl text-muted-foreground">
            Every partner joins at Silver tier and progresses on results. Tier reflects the scale
            and maturity of the partnership — commercial terms, enablement, and visibility grow with
            it. Advancement criteria: <Placeholder>tier advancement criteria</Placeholder>.
          </p>
          <div className="mt-8 grid grid-flow-dense gap-3 sm:grid-cols-3">
            {tiers.map((tier) => (
              <article key={tier.name} className="rounded-[1.75rem] border border-border bg-white/80 p-6">
                <h3 className="font-heading text-xl font-semibold text-navy-ink">{tier.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {tier.name.startsWith("Silver")
                    ? "Programme training, standard terms, and a named contact."
                    : tier.name.startsWith("Gold")
                      ? "Enhanced terms, co-marketing, and priority support."
                      : "Strategic terms, early access, and joint go-to-market planning."}
                </p>
                <ProgressiveDetails className="mt-5" label="Full tier detail">
                  <p className="text-sm leading-6">{tier.body}</p>
                </ProgressiveDetails>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW PARTNERSHIP WORKS */}
      <section className="relative isolate mx-auto max-w-7xl overflow-hidden px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div aria-hidden className="absolute right-[8%] top-[8%] -z-10 size-64 rounded-full bg-sky/50 blur-3xl" />
        <div aria-hidden className="absolute bottom-[3%] left-[10%] -z-10 size-64 rounded-full bg-mint/55 blur-3xl" />

        <h2 className="max-w-5xl font-heading text-[clamp(3rem,6vw,5.8rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-navy-ink">
          <span className="block">One route.</span>
          <span className="block">Your first certified client.</span>
        </h2>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
          Four clear handoffs take the partnership from application to a client relationship that
          keeps building.
        </p>

        <div className="relative mt-16 lg:min-h-[34rem]">
          <div aria-hidden className="absolute bottom-0 left-4 top-0 w-px bg-teal/20 lg:bottom-auto lg:left-[5%] lg:right-[5%] lg:top-1/2 lg:h-px lg:w-auto" />
          <ol className="space-y-10 lg:grid lg:grid-cols-4 lg:gap-6 lg:space-y-0">
            {partnershipSteps.map((step, index) => (
              <li key={step.title} className="relative min-h-44 pl-12 lg:min-h-[34rem] lg:pl-0">
                <span
                  aria-hidden
                  className={`absolute left-[0.55rem] top-1.5 z-10 size-4 rounded-full border-4 border-white shadow-[0_0_0_1px_rgba(10,113,104,0.2)] lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 ${step.tone.split(" ")[1]}`}
                />
                <div className={`border-t-4 pt-5 lg:absolute lg:left-0 lg:right-0 ${step.position} ${step.tone.split(" ")[0]}`}>
                  <p className="font-mono text-xs font-semibold tabular-nums text-teal">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-heading text-3xl font-semibold text-navy-ink sm:text-4xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PARTNER APPLICATION FORM */}
      <section id="apply" className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mx-auto max-w-3xl text-xs font-semibold uppercase tracking-widest text-gold-ink">
            Partner application form
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
            Apply to become a partner.
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-muted-foreground">
            Tell us about your practice. We review every application individually and respond within{" "}
            <Placeholder>response time</Placeholder>.
          </p>
          <div className="mx-auto mt-10 max-w-3xl">
            <PartnerApplicationForm />
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { Award, Building2, FileSearch, MessageCircle, ShieldCheck } from "lucide-react";

import { Placeholder } from "@/components/placeholder";
import { CTABand } from "@/components/sections/cta-band";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { ProgressiveDetails } from "@/components/sections/progressive-details";
import { SectionHeaderBar } from "@/components/sections/section-header-bar";
import { certificationFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "The Certification — Organisation of Choice™",
  description:
    "How OOC certification works: what we assess, the stage-by-stage assessment process, the four certification levels, and how scoring is applied.",
};

const levels = [
  {
    name: "Silver — Strong foundations.",
    summary: "Fair, compliant, and well-run with the essential people systems in place.",
    body: "Silver certification signifies a fair, compliant, well-run workplace: sound policies, essential people systems in place, and no failures on any mandatory criterion. It is the credible starting point, with a clear report showing the route to Gold.",
  },
  {
    name: "Gold — Engaged and improving.",
    summary: "Mature systems, positive employee experience, and systematic improvement.",
    body: "Gold certification signifies an organisation whose investment in people is producing measurable results: employees report a positive experience, people systems are mature and consistently applied, and improvement is systematic rather than occasional.",
  },
  {
    name: "Platinum — Advanced and consistent.",
    summary: "Industry-leading practices and an outstanding, consistent employee experience.",
    body: "Platinum certification recognises advanced workplaces with industry-leading practices, an outstanding and consistent employee experience, and evidence of innovation in how people are led, developed, and cared for.",
  },
  {
    name: "Diamond — A workplace others benchmark against.",
    summary: "Sustained excellence across people practices, experience, and leadership.",
    body: "Diamond certification is the highest level of recognition, reserved for organisations that sustain exceptional evidence across the framework and provide a workplace standard others can benchmark against.",
  },
];

const processStages = [
  {
    title: "Application & scoping",
    duration: <Placeholder>duration</Placeholder>,
    summary: "Choose the organisation, locations, divisions, or entities to be certified.",
    detail: "We confirm eligibility, agree the assessment plan, and set the timeline with you.",
    icon: FileSearch,
    tone: "bg-sky text-navy",
  },
  {
    title: "Evidence & self-assessment",
    duration: <Placeholder>duration</Placeholder>,
    summary: "Complete the structured self-assessment and upload supporting evidence.",
    detail: "Our team reviews submissions as they arrive, so gaps surface early rather than at the end.",
    icon: Building2,
    tone: "bg-mint text-teal",
  },
  {
    title: "Multi-stakeholder assessment",
    duration: <Placeholder>duration</Placeholder>,
    summary: "Employees, leadership, and independent assessors contribute distinct evidence.",
    detail: "Employee input is confidential, leadership responses are verified, and no result rests on one voice.",
    icon: MessageCircle,
    tone: "bg-butter/70 text-gold-ink",
  },
  {
    title: "Review & determination",
    duration: <Placeholder>duration</Placeholder>,
    summary: "The lead assessor consolidates inputs and applies the published scoring model.",
    detail: "Mandatory gates are checked and the outcome is determined solely by the evidence.",
    icon: ShieldCheck,
    tone: "bg-coral/15 text-[#9a4635]",
  },
  {
    title: "Certification & beyond",
    duration: null,
    summary: "Receive the level, report, benchmarks, directory listing, and OOC mark.",
    detail: "Annual verification and full reassessment keep the certification current and credible.",
    icon: Award,
    tone: "bg-navy text-white",
  },
];

export default function CertificationPage() {
  return (
    <>
      <SectionHeaderBar label="The Certification" />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold text-navy-ink sm:text-5xl">
          Certification you can stand behind.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Every Organisation of Choice™ certification is the outcome of a structured,
          evidence-based, multi-stakeholder assessment. This page explains exactly how it works —
          because a certification is only as credible as the process behind it.
        </p>
      </section>

      {/* WHAT WE ASSESS */}
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
            Built systems meet lived experience.
          </h2>
          <div className="mx-auto mt-12 grid max-w-5xl overflow-hidden rounded-[2.25rem] border border-navy/8 bg-white/75 lg:grid-cols-[1fr_auto_1fr]">
            <div className="p-8 lg:p-10">
              <Building2 className="size-8 text-teal" aria-hidden strokeWidth={1.6} />
              <h3 className="mt-8 text-2xl font-semibold text-navy-ink">What exists.</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                Policies, systems, leadership practices, learning, wellbeing, fairness, and the
                evidence that holds them together.
              </p>
            </div>
            <div className="relative grid min-h-24 place-items-center border-y border-navy/8 bg-mint px-8 lg:border-x lg:border-y-0">
              <span className="grid size-20 place-items-center rounded-full bg-teal text-center text-xs font-bold uppercase tracking-widest text-white">
                OOC<br />proof
              </span>
            </div>
            <div className="p-8 lg:p-10">
              <MessageCircle className="size-8 text-[#6d80c5]" aria-hidden strokeWidth={1.6} />
              <h3 className="mt-8 text-2xl font-semibold text-navy-ink">What is experienced.</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                Confidential employee input, leadership responses, and independent evaluation of
                how those systems work in practice.
              </p>
            </div>
          </div>
          <ProgressiveDetails className="mx-auto mt-8 max-w-5xl" label="See every assessment dimension">
            <p>
              The framework covers leadership and culture; policies and fairness; compensation and
              benefits; learning and career development; wellbeing and safety; diversity, equity
              and inclusion; communication and voice; and the systems that connect them.
            </p>
            <p>
              Evidence comes from multiple groups. Mandatory fundamentals act as gates, so a policy
              that exists on paper but fails in practice cannot be hidden by a strong score elsewhere.
            </p>
          </ProgressiveDetails>
        </div>
      </section>

      {/* THE ASSESSMENT PROCESS */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
          Five checkpoints. One defensible outcome.
        </h2>
        <ol className="relative mx-auto mt-14 max-w-5xl before:absolute before:bottom-0 before:left-6 before:top-0 before:w-px before:bg-teal/20 lg:before:left-0 lg:before:right-0 lg:before:top-8 lg:before:h-px lg:before:w-auto">
          {processStages.map((stage) => {
            const Icon = stage.icon;
            return (
              <li key={stage.title} className="relative grid gap-5 pb-10 pl-20 last:pb-0 lg:grid-cols-[7rem_1fr] lg:items-start lg:pl-0">
                <div className="absolute left-0 top-0 lg:static">
                  <span className={`grid size-12 place-items-center rounded-full ring-8 ring-background lg:size-16 ${stage.tone}`}>
                    <Icon className="size-5 lg:size-6" aria-hidden strokeWidth={1.7} />
                  </span>
                </div>
                <details className="group rounded-[1.75rem] border border-navy/8 bg-white/75 px-6 py-5 shadow-[0_18px_50px_rgba(23,50,77,0.05)] lg:px-8">
                  <summary className="cursor-pointer list-none marker:content-none">
                    <span className="flex flex-wrap items-center justify-between gap-3">
                      <span className="text-xl font-semibold text-navy-ink">{stage.title}</span>
                      <span className="text-xs font-semibold text-teal">
                        {stage.duration ?? "Ongoing"}
                      </span>
                    </span>
                    <span className="mt-2 block text-sm leading-6 text-muted-foreground">{stage.summary}</span>
                  </summary>
                  <p className="mt-4 border-t border-navy/8 pt-4 text-sm leading-6 text-muted-foreground">
                    {stage.detail}
                  </p>
                </details>
              </li>
            );
          })}
        </ol>
      </section>

      {/* CERTIFICATION LEVELS */}
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-ink">
            Certification levels
          </p>
          <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
            The four levels of certification.
          </h2>
          <div className="mt-10 grid grid-flow-dense gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {levels.map((level) => (
              <article key={level.name} className="rounded-[1.75rem] bg-white/80 p-6 shadow-[0_18px_50px_rgba(23,50,77,0.06)]">
                <h3 className="font-heading text-xl font-semibold text-navy-ink">{level.name}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{level.summary}</p>
                <ProgressiveDetails className="mt-5" label="Full level description">
                  <p className="text-sm leading-6">{level.body}</p>
                </ProgressiveDetails>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SCORING & CRITERIA */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="mx-auto max-w-3xl text-xs font-semibold uppercase tracking-widest text-gold-ink">
          Scoring &amp; criteria
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
          How scoring works.
        </h2>
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">
          Combined stakeholder evidence maps to published level thresholds, while mandatory
          criteria protect the credibility of every outcome.
        </p>
        <ProgressiveDetails className="mx-auto mt-8 max-w-3xl" label="Read the scoring methodology">
          <p>
            Every section of the framework is scored from the combined input of all assessor groups,
            and section scores aggregate into an overall result that maps to a certification level.
            Thresholds for Silver, Gold, Platinum, and Diamond are published and applied identically to every
            organisation: <Placeholder>level thresholds</Placeholder>.
          </p>
          <p>
            Mandatory criteria operate independently of the score. These are the non-negotiables of
            a legitimate workplace — matters of legal compliance, safety, and fair treatment — and
            an organisation that does not meet them cannot be certified at any level, regardless of
            its performance elsewhere. This is what keeps every OOC certification meaningful.
          </p>
          <p>
            Alongside the outcome, every assessed organisation receives its full scoring summary:
            section-by-section results, benchmarks against comparable organisations, and the lead
            assessor&apos;s prioritised recommendations. Organisations that fall short of
            certification receive the same detailed report, and may be reassessed after addressing
            the gaps — because the purpose of the framework is better workplaces, not gatekeeping
            for its own sake.
          </p>
        </ProgressiveDetails>
      </section>

      {/* FAQ */}
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mx-auto max-w-3xl border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
            Frequently asked questions.
          </h2>
          <FAQAccordion className="mx-auto mt-8 max-w-3xl" items={certificationFaqs} />
        </div>
      </section>

      <CTABand
        heading="See where your organisation stands."
        body="The assessment tells you what your people already know — and shows the world what you've built."
        primaryCta={{ label: "Apply for Certification", href: "/employers#apply" }}
      />
    </>
  );
}

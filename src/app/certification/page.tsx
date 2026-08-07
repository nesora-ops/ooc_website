import type { Metadata } from "next";

import { Placeholder } from "@/components/placeholder";
import { CTABand } from "@/components/sections/cta-band";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { SectionHeaderBar } from "@/components/sections/section-header-bar";
import { certificationFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "The Certification — Organisation of Choice™",
  description:
    "How OOC certification works: what we assess, the stage-by-stage assessment process, the three certification levels, and how scoring is applied.",
};

const levels = [
  {
    name: "Bronze — Strong foundations.",
    body: "Bronze certification signifies a fair, compliant, well-run workplace: sound policies, essential people systems in place, and no failures on any mandatory criterion. For many organisations Bronze is the honest, credible starting point — public recognition that the fundamentals are genuinely in place, with a clear report showing the route to Silver.",
  },
  {
    name: "Silver — Engaged and improving.",
    body: "Silver certification signifies an organisation whose investment in people is producing measurable results: employees report a genuinely positive experience, people systems are mature and consistently applied, and improvement is systematic rather than occasional. Silver-certified employers stand out clearly in their talent markets.",
  },
  {
    name: "Gold — An employer others benchmark against.",
    body: "Gold certification is reserved for exceptional workplaces: industry-leading practices, an outstanding and consistent employee experience across every assessed dimension, and evidence of innovation in how people are led, developed, and cared for. Gold-certified organisations are the reference point for their sector.",
  },
];

export default function CertificationPage() {
  return (
    <>
      <SectionHeaderBar label="The Certification" />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">Hero</p>
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
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">
            What we assess
          </p>
          <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
            What we assess.
          </h2>
          <div className="mt-8 max-w-3xl space-y-6 text-muted-foreground">
            <p>
              The OOC framework examines the full employment experience, organised into assessment
              sections covering the areas that matter most to a workplace: leadership and culture;
              policies and fairness; compensation and benefits practices; learning and career
              development; wellbeing and safety; diversity, equity and inclusion; communication and
              voice; and the systems that hold it all together. Each section is assessed on both
              what the organisation has put in place and how employees actually experience it.
            </p>
            <p>
              Evidence is gathered from multiple assessor groups for every section — because a
              policy that exists on paper but not in practice should not earn certification.
              Responses are collected in structured formats suited to each group, from verified
              documentary evidence to employee experience ratings, and certain fundamentals operate
              as mandatory gates: an organisation cannot compensate for failing them with strong
              scores elsewhere.
            </p>
          </div>
        </div>
      </section>

      {/* THE ASSESSMENT PROCESS */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">
          The assessment process
        </p>
        <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
          The process, stage by stage.
        </h2>
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <li className="flex flex-col gap-2">
            <span className="font-heading text-3xl font-bold text-gold">01</span>
            <h3 className="font-heading text-lg font-semibold text-navy-ink">
              Application &amp; scoping (<Placeholder>duration</Placeholder>).
            </h3>
            <p className="text-sm text-muted-foreground">
              You tell us about your organisation and choose the scope of certification — the whole
              organisation, or defined locations, divisions, or entities. We confirm eligibility,
              agree the assessment plan, and set the timeline together.
            </p>
          </li>
          <li className="flex flex-col gap-2">
            <span className="font-heading text-3xl font-bold text-gold">02</span>
            <h3 className="font-heading text-lg font-semibold text-navy-ink">
              Evidence &amp; self-assessment (<Placeholder>duration</Placeholder>).
            </h3>
            <p className="text-sm text-muted-foreground">
              Your organisation completes the structured self-assessment on our digital platform and
              uploads supporting evidence. Our team reviews submissions as they arrive, so gaps are
              surfaced early rather than at the end.
            </p>
          </li>
          <li className="flex flex-col gap-2">
            <span className="font-heading text-3xl font-bold text-gold">03</span>
            <h3 className="font-heading text-lg font-semibold text-navy-ink">
              Multi-stakeholder assessment (<Placeholder>duration</Placeholder>).
            </h3>
            <p className="text-sm text-muted-foreground">
              Employees contribute their experience through confidential structured input;
              leadership responses are verified against evidence; and independent assessors evaluate
              every section of the framework. No certification rests on a single voice.
            </p>
          </li>
          <li className="flex flex-col gap-2">
            <span className="font-heading text-3xl font-bold text-gold">04</span>
            <h3 className="font-heading text-lg font-semibold text-navy-ink">
              Review &amp; determination (<Placeholder>duration</Placeholder>).
            </h3>
            <p className="text-sm text-muted-foreground">
              The lead assessor consolidates all inputs, applies the published scoring model,
              confirms every mandatory gate has been met, and signs the assessment declaration. The
              outcome — including your level — is determined solely by the evidence.
            </p>
          </li>
          <li className="flex flex-col gap-2">
            <span className="font-heading text-3xl font-bold text-gold">05</span>
            <h3 className="font-heading text-lg font-semibold text-navy-ink">
              Certification &amp; beyond.
            </h3>
            <p className="text-sm text-muted-foreground">
              You receive your certification, your detailed report with benchmarks and
              recommendations, your public directory listing, and the OOC mark for your employer
              brand. Certification is verified annually, and a full reassessment keeps it current —
              so the mark always means what it says.
            </p>
          </li>
        </ol>
      </section>

      {/* CERTIFICATION LEVELS */}
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">
            Certification levels
          </p>
          <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
            The three levels of certification.
          </h2>
          <div className="mt-8 max-w-3xl space-y-8">
            {levels.map((level) => (
              <div key={level.name}>
                <h3 className="font-heading text-lg font-semibold text-teal">{level.name}</h3>
                <p className="mt-2 text-muted-foreground">{level.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCORING & CRITERIA */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">
          Scoring &amp; criteria
        </p>
        <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
          How scoring works.
        </h2>
        <div className="mt-8 max-w-3xl space-y-6 text-muted-foreground">
          <p>
            Every section of the framework is scored from the combined input of all assessor groups,
            and section scores aggregate into an overall result that maps to a certification level.
            Thresholds for Bronze, Silver, and Gold are published and applied identically to every
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
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">
            Frequently asked questions
          </p>
          <FAQAccordion className="mt-8 max-w-3xl" items={certificationFaqs} />
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

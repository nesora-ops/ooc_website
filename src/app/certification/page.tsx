import Image from "next/image";
import type { Metadata } from "next";
import { Award, Building2, FileSearch, MessageCircle, ShieldCheck } from "lucide-react";

import { Seal } from "@/components/brand/seal";
import { ImageSlot } from "@/components/image-slot";
import { Placeholder } from "@/components/placeholder";
import { CTABand } from "@/components/sections/cta-band";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { ProgressiveDetails } from "@/components/sections/progressive-details";
import { SectionHeaderBar } from "@/components/sections/section-header-bar";
import { getFaqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Certification",
  description:
    "How OOC certification works: what we assess, the stage-by-stage assessment process, the four certification levels, and how scoring is applied.",
};

const levels = [
  {
    tier: "01",
    name: "Silver: Strong foundations.",
    levelTitle: "Silver",
    summary: "Fair, compliant, and well-run with the essential people systems in place.",
    body: "Silver certification signifies a fair, compliant, well-run workplace: sound policies, essential people systems in place, and no failures on any mandatory criterion. It is the credible starting point, with a clear report showing the route to Gold.",
    badge: "/images/brand/ooc-badge-silver.png",
    accent: "#6B7B84",
    benchmark: "Statutory compliance & core people systems",
  },
  {
    tier: "02",
    name: "Gold: Engaged and improving.",
    levelTitle: "Gold",
    summary: "Mature systems, positive employee experience, and systematic improvement.",
    body: "Gold certification signifies an organisation whose investment in people is producing measurable results: employees report a positive experience, people systems are mature and consistently applied, and improvement is systematic rather than occasional.",
    badge: "/images/brand/ooc-badge-gold.png",
    accent: "#C08A2E",
    benchmark: "Mature systems & measured engagement",
  },
  {
    tier: "03",
    name: "Platinum: Advanced and consistent.",
    levelTitle: "Platinum",
    summary: "Industry-leading practices and an outstanding, consistent employee experience.",
    body: "Platinum certification recognises advanced workplaces with industry-leading practices, an outstanding and consistent employee experience, and evidence of innovation in how people are led, developed, and cared for.",
    badge: "/images/brand/ooc-badge-platinum.png",
    accent: "#7C8CA8",
    benchmark: "Industry-leading & consistent execution",
  },
  {
    tier: "04",
    name: "Diamond: A workplace others benchmark against.",
    levelTitle: "Diamond",
    summary: "Sustained excellence across people practices, experience, and leadership.",
    body: "Diamond certification is the highest level of recognition, reserved for organisations that sustain exceptional evidence across the framework and provide a workplace standard others can benchmark against.",
    badge: "/images/brand/ooc-badge-diamond.png",
    accent: "#0E7A62",
    benchmark: "Benchmark standard for organisational leadership",
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
    imagePosition: "0% 50%",
  },
  {
    title: "Evidence & self-assessment",
    duration: <Placeholder>duration</Placeholder>,
    summary: "Complete the structured self-assessment and upload supporting evidence.",
    detail: "Our team reviews submissions as they arrive, so gaps surface early rather than at the end.",
    icon: Building2,
    tone: "bg-mint text-teal",
    imagePosition: "24% 50%",
  },
  {
    title: "Multi-stakeholder assessment",
    duration: <Placeholder>duration</Placeholder>,
    summary: "Employees, leadership, and independent assessors contribute distinct evidence.",
    detail: "Employee input is confidential, leadership responses are verified, and no result rests on one voice.",
    icon: MessageCircle,
    tone: "bg-butter/70 text-gold-ink",
    imagePosition: "47% 50%",
  },
  {
    title: "Review & determination",
    duration: <Placeholder>duration</Placeholder>,
    summary: "The lead assessor consolidates inputs and applies the published scoring model.",
    detail: "Mandatory gates are checked and the outcome is determined solely by the evidence.",
    icon: ShieldCheck,
    tone: "bg-coral/15 text-[#9a4635]",
    imagePosition: "70% 50%",
  },
  {
    title: "Certification & beyond",
    duration: null,
    summary: "Receive the level, report, benchmarks, directory listing, and OOC mark.",
    detail: "Annual verification and full reassessment keep the certification current and credible.",
    icon: Award,
    tone: "bg-navy text-white",
    imagePosition: "100% 50%",
  },
];

export default async function CertificationPage() {
  const certificationFaqs = await getFaqs("certification");

  return (
    <>
      <SectionHeaderBar label="The Certification" />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <Seal size={200} priority className="mb-2" />
        <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold text-navy-ink sm:text-5xl">
          Certification you can stand behind.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Every OOC certification comes from structured, multi-stakeholder assessment. Here is
          exactly how it works.
        </p>
      </section>

      {/* WHAT WE ASSESS */}
      <section className="bg-muted/40 py-10">
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
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
          Five checkpoints. One defensible outcome.
        </h2>
        <ol className="relative mt-14 grid gap-8 before:absolute before:bottom-6 before:left-6 before:top-6 before:w-px before:bg-teal/20 lg:grid-cols-5 lg:gap-4 lg:before:bottom-auto lg:before:left-[10%] lg:before:right-[10%] lg:before:top-6 lg:before:h-px lg:before:w-auto">
          {processStages.map((stage) => {
            const Icon = stage.icon;
            return (
              <li key={stage.title} className="relative grid min-w-0 grid-cols-[3rem_1fr] gap-4 lg:flex lg:flex-col lg:gap-0">
                <span className={`relative z-10 grid size-12 place-items-center rounded-full ring-8 ring-background lg:mx-auto ${stage.tone}`}>
                  <Icon className="size-5" aria-hidden strokeWidth={1.7} />
                </span>

                <details className="group min-w-0 overflow-hidden rounded-[1.75rem] border border-navy/8 bg-white/85 shadow-[0_18px_50px_rgba(23,50,77,0.07)] lg:mt-6 lg:h-full">
                  <summary className="cursor-pointer list-none marker:content-none">
                    <span
                      role="img"
                      aria-label={`Illustration for ${stage.title}`}
                      className="relative block h-36 bg-[#f5f3eb] bg-no-repeat after:absolute after:inset-x-0 after:bottom-0 after:h-14 after:bg-gradient-to-t after:from-white/90 after:to-transparent"
                      style={{
                        backgroundImage: "url('/images/editorial/assessment-process.png')",
                        backgroundPosition: stage.imagePosition,
                        backgroundSize: "600% auto",
                      }}
                    />
                    <span className="block p-5">
                      <span className="block text-xs font-semibold text-teal">
                        {stage.duration ?? "Ongoing"}
                      </span>
                      <span className="mt-3 block text-xl font-semibold leading-tight text-navy-ink">
                        {stage.title}
                      </span>
                      <span className="mt-3 block text-sm leading-6 text-muted-foreground">
                        {stage.summary}
                      </span>
                      <span className="mt-5 flex items-center justify-between border-t border-navy/8 pt-4 text-xs font-semibold text-teal">
                        <span className="group-open:hidden">View detail</span>
                        <span className="hidden group-open:inline">Hide detail</span>
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
            <p className="text-xs font-semibold uppercase tracking-widest text-gold-ink">
              Certification levels
            </p>
            <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink sm:text-4xl">
              The four levels of certification.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Published thresholds applied identically to every organisation. A visible progression from verified foundations to peak industry benchmarks.
            </p>
          </div>

          {/* Prestige Medallion Overview Showcase */}
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-navy/8 bg-white shadow-[0_18px_60px_rgba(23,50,77,0.06)]">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center">
              <div className="relative aspect-[21/9] sm:aspect-[16/7] lg:aspect-[16/8] w-full overflow-hidden bg-[#FAF8F5]">
                <Image
                  src="/images/editorial/certification-levels.png"
                  alt="Four ascending certification medallions representing Silver, Gold, Platinum, and Diamond"
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 55vw, 100vw"
                />
              </div>
              <div className="p-7 sm:p-10 flex flex-col justify-center">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-teal">
                  Progressive Framework
                </span>
                <h3 className="mt-2 text-2xl font-bold text-navy-ink sm:text-3xl">
                  Four rigorous standards. One unified mark.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Every level requires meeting mandatory ethical and statutory baselines. Higher tiers represent systematic culture investment, verified stakeholder consensus, and sustained operational quality.
                </p>
              </div>
            </div>
          </div>

          {/* 4-Tier Matrix Cards */}
          <div className="mt-8 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
            {levels.map((level) => (
              <article
                key={level.name}
                style={{ "--tier-accent": level.accent } as React.CSSProperties}
                className="group flex flex-col justify-between rounded-[22px] border border-navy/8 bg-white p-6 shadow-[0_14px_40px_rgba(23,50,77,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-(--tier-accent) hover:shadow-[0_22px_50px_rgba(23,50,77,0.09)]"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-navy/6 pb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-(--tier-accent)">
                      Level {level.tier}
                    </span>
                    <span className="size-2 rounded-full" style={{ backgroundColor: level.accent }} />
                  </div>
                  <div className="my-5 flex justify-center">
                    <Image
                      src={level.badge}
                      alt={`Organisation of Choice ${level.levelTitle} certification badge`}
                      width={120}
                      height={120}
                      className="size-24 object-contain sm:size-28 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-navy-ink">{level.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{level.summary}</p>
                </div>
                <div className="mt-6 border-t border-navy/8 pt-4">
                  <p className="text-[11px] font-semibold text-(--tier-accent) uppercase tracking-wider">
                    {level.benchmark}
                  </p>
                  <ProgressiveDetails className="mt-3 border-0 pt-0 text-xs" label="Detailed requirements">
                    <p className="text-xs leading-relaxed text-muted-foreground">{level.body}</p>
                  </ProgressiveDetails>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SCORING & CRITERIA */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="mx-auto max-w-3xl text-xs font-semibold uppercase tracking-widest text-gold-ink">
          Scoring &amp; criteria
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
          How scoring works.
        </h2>
        <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <ImageSlot
            contentKey="scoring criteria illustration"
            alt="Paper-craft clipboard with four coloured scoring bars, a magnifying glass, and checkmarks"
            src="/images/editorial/scoring-criteria.png"
            aspect="4/3"
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="rounded-[2.25rem] bg-white shadow-[0_28px_80px_rgba(23,50,77,0.1)]"
          />
          <div>
            <p className="text-lg leading-8 text-muted-foreground">
              Combined stakeholder evidence maps to published level thresholds, while mandatory
              criteria protect the credibility of every outcome.
            </p>
            <ProgressiveDetails className="mt-8" label="Read the scoring methodology">
              <p>
                Every section of the framework is scored from the combined input of all assessor groups,
                and section scores aggregate into an overall result that maps to a certification level.
                Thresholds for Silver, Gold, Platinum, and Diamond are published and applied identically to every
                organisation: <Placeholder>level thresholds</Placeholder>.
              </p>
              <p>
                Mandatory criteria operate independently of the score. These are the non-negotiables of
                a legitimate workplace, covering legal compliance, safety, and fair treatment. An
                organisation that does not meet them cannot be certified at any level, regardless of
                its performance elsewhere. This is what keeps every OOC certification meaningful.
              </p>
              <p>
                Alongside the outcome, every assessed organisation receives its full scoring summary:
                section-by-section results, benchmarks against comparable organisations, and the lead
                assessor&apos;s prioritised recommendations. Organisations that fall short of
                certification receive the same detailed report, and may be reassessed after addressing
                the gaps, because the purpose of the framework is better workplaces, not gatekeeping
                for its own sake.
              </p>
            </ProgressiveDetails>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/40 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mx-auto max-w-3xl border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
            Frequently asked questions.
          </h2>
          <FAQAccordion className="mx-auto mt-8 max-w-3xl" items={certificationFaqs} />
        </div>
      </section>

      <CTABand
        heading="See where your organisation stands."
        body="The assessment tells you what your people already know, and shows the world what you've built."
        primaryCta={{ label: "Apply for Certification", href: "/employers#apply" }}
      />
    </>
  );
}

import Link from "next/link";
import type { Metadata } from "next";

import { EmployerApplicationForm } from "@/components/forms/employer-application-form";
import { Placeholder } from "@/components/placeholder";
import { SectionHeaderBar } from "@/components/sections/section-header-bar";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "For Employers — Organisation of Choice™",
  description:
    "OOC certification converts the culture you've invested in into independent, public, verifiable proof — the kind that wins candidates and reassures clients.",
};

const included = [
  {
    lead: "The OOC certification mark",
    body: "licensed for your careers page, job listings, email signatures, offices, and marketing, for the full validity period.",
  },
  {
    lead: "Your public directory listing",
    body: "a verified profile in the Certified Employer Directory, seen by candidates researching where to work.",
  },
  {
    lead: "The full assessment report",
    body: "section-by-section scores, benchmarks against comparable organisations, and prioritised recommendations.",
  },
  {
    lead: "A certification announcement toolkit",
    body: "ready-to-use assets and guidance for announcing your certification internally and externally.",
  },
  {
    lead: "Annual verification",
    body: "the ongoing check that keeps your certification current and credible.",
  },
  {
    lead: "A pathway to the next level",
    body: "a clear, evidenced route from Bronze to Silver to Gold.",
  },
];

export default function EmployersPage() {
  return (
    <>
      <SectionHeaderBar label="For Employers" />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold-ink">Hero</p>
        <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold text-navy-ink sm:text-5xl">
          You&apos;ve built a great workplace. Now prove it.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Organisation of Choice™ certification converts the culture you&apos;ve invested in into
          independent, public, verifiable proof — the kind that wins candidates, reassures clients,
          and strengthens every part of your employer brand.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="#apply">Apply for Certification</Link>
          </Button>
        </div>
      </section>

      {/* THE PROBLEM WE SOLVE */}
      <section id="why-certify" className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-ink">
            The problem we solve
          </p>
          <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
            Every employer claims great culture. Almost none can prove it.
          </h2>
          <div className="mt-8 max-w-3xl space-y-6 text-muted-foreground">
            <p>
              Talent markets run on trust, and trust is in short supply. Candidates have learned to
              discount what careers pages say about culture, because every organisation says the
              same things. Meanwhile, the employers genuinely doing the work — fair policies, real
              development, leadership that listens — struggle to distinguish themselves from those
              who merely claim it.
            </p>
            <p>
              Independent certification resolves the standoff. When an external assessor with
              published criteria and no commercial stake in your result confirms that your workplace
              meets a rigorous standard, your claims stop being marketing and start being evidence.
              That is what the OOC mark puts behind every job listing, every offer letter, and every
              conversation with a candidate who is weighing you against someone else.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT YOU RECEIVE */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold-ink">
          What you receive
        </p>
        <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
          What certification includes.
        </h2>
        <ul className="mt-8 max-w-3xl space-y-4 text-muted-foreground">
          {included.map((item) => (
            <li key={item.lead} className="border-l-2 border-gold/50 pl-4">
              <strong className="font-semibold text-navy-ink">{item.lead}</strong> — {item.body}
            </li>
          ))}
        </ul>
      </section>

      {/* THE PROCESS FOR YOU */}
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-ink">
            The process for you
          </p>
          <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
            What the journey looks like from your side.
          </h2>
          <div className="mt-8 max-w-3xl space-y-6 text-muted-foreground">
            <p>
              Certification is designed to run alongside your normal operations, not on top of them.
              After application and scoping, your team completes a structured self-assessment and
              evidence submission through our digital platform — most organisations assign a single
              coordinator and involve function heads only where their area is being evidenced.
              Employee input is gathered confidentially and efficiently, with no burden on your HR
              team to administer it.
            </p>
            <p>
              From application to certification typically takes{" "}
              <Placeholder>typical duration</Placeholder>, and our programme team stays with you
              throughout: clarifying requirements, flagging evidence gaps early, and keeping the
              timeline honest. You will always know where you are in the process and what happens
              next. The full stage-by-stage detail is on our certification page.
            </p>
          </div>
          <Link
            href="/certification"
            className="mt-6 inline-block font-medium text-teal hover:underline"
          >
            See the full assessment process →
          </Link>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold-ink">Pricing</p>
        <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
          Transparent, size-based pricing.
        </h2>
        <div className="mt-8 max-w-3xl space-y-6 text-muted-foreground">
          <p>
            Certification fees are based on the size of your organisation and the scope you choose
            to certify — nothing else. There are no charges tied to your result: an organisation
            that achieves Gold pays the same as one of equal size that achieves Bronze, because
            outcomes are never for sale.
          </p>
          <Placeholder variant="block">pricing tiers</Placeholder>
          <p>
            Every application receives a written quotation before any commitment is required, and
            the fee covers the full assessment, your report, certification, directory listing, and
            annual verification for the validity period.
          </p>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="case-studies" className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-ink">Case studies</p>
          <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
            Organisations that made it official.
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <Placeholder key={n} variant="block">
                case study {n} — organisation, level, one-line result
              </Placeholder>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="apply" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold-ink">
          Application form
        </p>
        <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
          Apply for certification.
        </h2>
        <p className="mt-8 max-w-3xl text-muted-foreground">
          Tell us about your organisation and we&apos;ll come back within{" "}
          <Placeholder>response time</Placeholder> with your eligibility confirmation, a written
          quotation, and a proposed assessment plan. Applying creates no obligation.
        </p>
        <div className="mt-10 max-w-3xl">
          <EmployerApplicationForm />
        </div>
      </section>
    </>
  );
}

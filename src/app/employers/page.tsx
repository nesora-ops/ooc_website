import Link from "next/link";
import type { Metadata } from "next";
import { Award, BarChart3, Megaphone, RefreshCw, Route, SearchCheck } from "lucide-react";

import { EmployerApplicationForm } from "@/components/forms/employer-application-form";
import { Placeholder } from "@/components/placeholder";
import { ProgressiveDetails } from "@/components/sections/progressive-details";
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
    icon: Award,
    className: "bg-navy text-white lg:col-span-7 lg:row-span-2",
  },
  {
    lead: "Your public directory listing",
    body: "a verified profile in the Certified Employer Directory, seen by candidates researching where to work.",
    icon: SearchCheck,
    className: "bg-sky/80 lg:col-span-5",
  },
  {
    lead: "The full assessment report",
    body: "section-by-section scores, benchmarks against comparable organisations, and prioritised recommendations.",
    icon: BarChart3,
    className: "bg-mint/80 lg:col-span-5",
  },
  {
    lead: "A certification announcement toolkit",
    body: "ready-to-use assets and guidance for announcing your certification internally and externally.",
    icon: Megaphone,
    className: "bg-white/80 lg:col-span-4",
  },
  {
    lead: "Annual verification",
    body: "the ongoing check that keeps your certification current and credible.",
    icon: RefreshCw,
    className: "bg-butter/55 lg:col-span-4",
  },
  {
    lead: "A pathway to the next level",
    body: "a clear, evidenced route from Silver through Gold and Platinum to Diamond.",
    icon: Route,
    className: "bg-coral/10 lg:col-span-4",
  },
];

export default function EmployersPage() {
  return (
    <>
      <SectionHeaderBar label="For Employers" />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
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
          <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-8 text-muted-foreground">
            Independent certification turns culture claims into evidence candidates and stakeholders can trust.
          </p>
          <ProgressiveDetails className="mx-auto mt-8 max-w-3xl" label="Why proof changes the conversation">
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
          </ProgressiveDetails>
        </div>
      </section>

      {/* WHAT YOU RECEIVE */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mx-auto mt-4 max-w-3xl border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
          One assessment. Six useful outputs.
        </h2>
        <ul className="mx-auto mt-12 grid max-w-6xl grid-flow-dense gap-3 lg:grid-cols-12 lg:grid-rows-3">
          {included.map((item, index) => {
            const Icon = item.icon;
            const isDark = index === 0;
            return (
              <li
                key={item.lead}
                className={`group min-h-48 rounded-[1.75rem] border border-navy/8 p-6 lg:p-8 ${item.className}`}
              >
                <div className="flex h-full flex-col justify-between gap-8">
                  <Icon
                    className={`size-7 ${isDark ? "text-butter" : "text-teal"}`}
                    aria-hidden
                    strokeWidth={1.6}
                  />
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
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-ink">
            The process for you
          </p>
          <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
            What the journey looks like from your side.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-8 text-muted-foreground">
            One coordinator guides the evidence submission while employees contribute confidentially.
          </p>
          <ProgressiveDetails className="mx-auto mt-8 max-w-3xl" label="Read the employer journey">
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
          </ProgressiveDetails>
          <Link
            href="/certification"
            className="mx-auto mt-6 flex w-fit items-center rounded-full bg-white px-6 py-3 font-medium text-teal shadow-sm transition-colors hover:bg-mint"
          >
            See the full assessment process →
          </Link>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mx-auto mt-4 max-w-3xl border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
          Transparent, size-based pricing.
        </h2>
        <div className="mx-auto mt-12 grid max-w-5xl overflow-hidden rounded-[2.25rem] border border-navy/8 bg-white/75 lg:grid-cols-[1fr_auto_1fr]">
          <div className="p-8 lg:p-10">
            <p className="text-sm font-semibold text-teal">Your quotation considers</p>
            <p className="mt-5 font-heading text-3xl font-semibold text-navy-ink">
              Organisation size<br /><span className="text-muted-foreground">+</span> certified scope
            </p>
          </div>
          <div className="grid place-items-center border-y border-navy/8 bg-butter/45 px-8 py-6 lg:border-x lg:border-y-0">
            <span className="font-heading text-4xl font-semibold text-gold-ink">=</span>
          </div>
          <div className="p-8 lg:p-10">
            <p className="text-sm font-semibold text-teal">Never your result</p>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Silver, Gold, Platinum, and Diamond cost the same for organisations of equal size and scope.
              Outcomes are never for sale.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-6 max-w-5xl rounded-[1.5rem] border border-dashed border-coral/55 bg-coral/8 p-6">
          <Placeholder className="border-0 bg-transparent px-0 py-0">pricing tiers</Placeholder>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Every application receives a written quotation before commitment. The fee covers the
            assessment, report, certification, directory listing, and annual verification.
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
        <p className="mx-auto max-w-3xl text-center text-xs font-semibold uppercase tracking-widest text-gold-ink">
          Application form
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl border-b border-gold/40 pb-4 text-center font-heading text-3xl font-bold text-navy-ink">
          Apply for certification.
        </h2>
        <p className="mx-auto mt-8 max-w-3xl text-center text-muted-foreground">
          Tell us about your organisation and we&apos;ll come back within{" "}
          <Placeholder>response time</Placeholder> with your eligibility confirmation, a written
          quotation, and a proposed assessment plan. Applying creates no obligation.
        </p>
        <div className="mx-auto mt-10 max-w-3xl">
          <EmployerApplicationForm />
        </div>
      </section>
    </>
  );
}

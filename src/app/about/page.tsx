import type { Metadata } from "next";
import { Check, Eye, Scale, Users } from "lucide-react";

import { Placeholder } from "@/components/placeholder";
import { CTABand } from "@/components/sections/cta-band";
import { ProgressiveDetails } from "@/components/sections/progressive-details";
import { SectionHeaderBar } from "@/components/sections/section-header-bar";

export const metadata: Metadata = {
  title: "About — Organisation of Choice™",
  description:
    "Organisation of Choice™ exists to make workplace quality visible — giving employers independent recognition and talent a signal they can trust.",
};

const differentiators = [
  {
    lead: "We are independent.",
    summary: "Outcomes follow published criteria and cannot be purchased or negotiated.",
    body: "Certification cannot be purchased, and assessment outcomes are never negotiable. Our assessors have no commercial stake in any organisation's result, and our criteria are published for anyone to read. When an organisation carries the OOC mark, it is because the evidence supported it.",
  },
  {
    lead: "We assess from every angle.",
    summary: "Employees, leadership, and independent evaluators each contribute evidence.",
    body: "A workplace looks different from the boardroom than it does from the floor. That is why our framework gathers structured input from multiple assessor groups — employees, leadership, and independent evaluators — across every dimension of the employment experience. No single perspective can carry a certification on its own.",
  },
  {
    lead: "We certify improvement, not perfection.",
    summary: "Silver, Gold, Platinum, and Diamond create a visible route forward.",
    body: "The Silver, Gold, Platinum, and Diamond levels exist because building a great workplace is a journey. Our detailed assessment reports show every organisation exactly where it stands and precisely what would move it forward. Certification with us is the beginning of a relationship, not the end of a transaction.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SectionHeaderBar label="About" />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold text-navy-ink sm:text-5xl">
          Making workplace quality visible.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Organisation of Choice™ exists for a simple reason: the organisations that treat their
          people well deserve to be recognised for it — and the people choosing where to work
          deserve a signal they can trust.
        </p>
      </section>

      {/* OUR STORY */}
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <div className="absolute inset-8 rounded-full border border-teal/15 bg-white/70 shadow-[0_30px_90px_rgba(23,50,77,0.08)]" />
              <div className="absolute left-0 top-1/2 w-40 -translate-y-1/2 rounded-full border border-navy/8 bg-sky px-6 py-4 text-center font-semibold text-navy-ink">
                Claims
              </div>
              <div className="absolute right-0 top-1/2 w-40 -translate-y-1/2 rounded-full bg-teal px-6 py-4 text-center font-semibold text-white shadow-[0_18px_45px_rgba(10,113,104,0.22)]">
                Trust
              </div>
              <div className="absolute left-1/2 top-1/2 grid size-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-8 border-mint bg-white text-center text-sm font-bold text-teal">
                Independent<br />evidence
              </div>
              <div className="absolute left-[28%] top-1/2 h-px w-[18%] bg-teal/35" />
              <div className="absolute right-[28%] top-1/2 h-px w-[18%] bg-teal/35" />
            </div>

            <div>
              <h2 className="font-heading text-3xl font-bold text-navy-ink sm:text-5xl">
                The missing link between good work and credible recognition.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                OOC was created to make genuine investment in people visible through evidence,
                multiple perspectives, and independent verification.
              </p>
              <ProgressiveDetails className="mt-8 max-w-xl" label="Read the full OOC story">
                <p>
                  Employers doing the real work have rarely had a rigorous way to separate their
                  investment from ordinary culture claims. OOC closes that gap with independent,
                  evidence-led assessment.
                </p>
                <p>
                  Founded by Ketaki, <Placeholder>founder designation</Placeholder>, and informed by
                  <Placeholder>founder background summary</Placeholder>, the programme applies the
                  same spirit of scrutiny used for other important organisational standards.
                </p>
                <p>
                  OOC operates as an independent certification programme of Carbon Value Partners
                  Private Limited. Every certification is earned, evidenced, and annually verified.
                </p>
              </ProgressiveDetails>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl overflow-hidden rounded-[2.25rem] border border-navy/8 bg-white/70 sm:grid-cols-2">
          <div className="p-8 sm:p-10 lg:p-12">
            <Eye className="size-8 text-teal" aria-hidden strokeWidth={1.6} />
            <h2 className="mt-8 font-heading text-3xl font-semibold text-navy-ink">Make it visible.</h2>
            <p className="mt-3 text-muted-foreground">
              To recognise and certify employers who demonstrably invest in their people, through
              independent, multi-stakeholder assessment — and to give talent everywhere a
              trustworthy signal of where great workplaces can be found.
            </p>
          </div>
          <div className="border-t border-navy/8 bg-navy p-8 sm:border-l sm:border-t-0 sm:p-10 lg:p-12">
            <Check className="size-8 text-butter" aria-hidden strokeWidth={1.6} />
            <h2 className="mt-8 font-heading text-3xl font-semibold text-white">Make it matter.</h2>
            <p className="mt-3 text-white/72">
              A working world in which workplace quality is as visible, comparable, and valued as
              financial performance — and in which being an organisation of choice is every
              employer&apos;s ambition.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
            Why our certification holds its value.
          </h2>
          <div className="mx-auto mt-12 max-w-5xl divide-y divide-navy/10 border-y border-navy/10">
            {differentiators.map((item, index) => {
              const icons = [Scale, Users, Eye];
              const Icon = icons[index];
              return (
                <details key={item.lead} className="group py-2">
                  <summary className="grid cursor-pointer list-none items-center gap-5 py-6 marker:content-none sm:grid-cols-[3.5rem_1fr_auto]">
                    <span className="grid size-12 place-items-center rounded-full bg-white text-teal shadow-sm">
                      <Icon className="size-5" aria-hidden strokeWidth={1.7} />
                    </span>
                    <span>
                      <span className="block text-xl font-semibold text-navy-ink">{item.lead}</span>
                      <span className="mt-1 block text-sm text-muted-foreground">{item.summary}</span>
                    </span>
                    <span className="hidden text-sm font-semibold text-teal sm:block">
                      <span className="group-open:hidden">Read principle</span>
                      <span className="hidden group-open:inline">Close</span>
                    </span>
                  </summary>
                  <p className="max-w-3xl pb-7 text-sm leading-7 text-muted-foreground sm:pl-[5.1rem]">
                    {item.body}
                  </p>
                </details>
              );
            })}
          </div>
        </div>
      </section>

      {/* TEAM AND GOVERNANCE */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold-ink">
          Team and governance
        </p>
        <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
          The people behind the programme.
        </h2>
        <p className="mt-8 max-w-3xl text-muted-foreground">
          Organisation of Choice™ is led by its founder and supported by a team of assessors,
          advisors, and programme specialists who share one standard: every certification must be
          defensible on the evidence.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          <li className="rounded-lg border border-dashed border-gold/60 bg-muted p-4 text-sm">
            <p className="font-heading font-semibold text-navy-ink">
              Ketaki — Founder &amp; <Placeholder>designation</Placeholder>
            </p>
            <p className="mt-2">
              <Placeholder>two-line biography</Placeholder>
            </p>
          </li>
          {[1, 2].map((n) => (
            <li
              key={n}
              className="rounded-lg border border-dashed border-gold/60 bg-muted p-4 text-sm"
            >
              <p className="font-heading font-semibold text-navy-ink">
                <Placeholder>team member name</Placeholder> —{" "}
                <Placeholder>designation</Placeholder>
              </p>
              <p className="mt-2">
                <Placeholder>two-line biography</Placeholder>
              </p>
            </li>
          ))}
        </ul>
      </section>

      <CTABand
        heading="Join the organisations proving it."
        body="If your organisation invests in its people, let's make that investment visible."
        primaryCta={{ label: "Apply for Certification", href: "/employers#apply" }}
      />
    </>
  );
}

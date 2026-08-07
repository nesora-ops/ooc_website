import Link from "next/link";
import type { Metadata } from "next";

import { EmployerDirectory } from "@/components/directory/employer-directory";
import { CTABand } from "@/components/sections/cta-band";
import { SectionHeaderBar } from "@/components/sections/section-header-bar";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "For Job Seekers & Certified Employer Directory — Organisation of Choice™",
  description:
    "Every organisation in this directory has earned independent certification of its workplace — assessed on evidence, verified annually, and never for sale.",
};

const uses = [
  {
    lead: "Research an offer.",
    body: "Weighing an offer in hand? Search the organisation. If it's certified, you'll see its level, certified scope, and validity — independent context no interview will give you.",
  },
  {
    lead: "Discover employers worth watching.",
    body: "Filter by industry, location, and certification level to build a shortlist of organisations that have proven their standards — including strong employers you may never have heard of.",
  },
  {
    lead: "Verify a claim.",
    body: "If an employer displays the OOC mark, confirm it here. Every legitimate certification appears in this directory with its scope and validity period; if it isn't listed, it isn't certified.",
  },
];

export default function DirectoryPage() {
  return (
    <>
      <SectionHeaderBar label="For Job Seekers" />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold-ink">Hero</p>
        <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold text-navy-ink sm:text-5xl">
          Choose your next employer on proof, not promises.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Every organisation in this directory has earned independent certification of its
          workplace — assessed on evidence, verified annually, and never for sale. If they&apos;re
          listed here, they&apos;ve proven it.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="#directory">Search the directory</Link>
          </Button>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section id="why-it-matters" className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-ink">
            Why it matters
          </p>
          <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
            Why look for the OOC mark.
          </h2>
          <div className="mt-8 max-w-3xl space-y-6 text-muted-foreground">
            <p>
              Choosing an employer is one of the biggest decisions you make, and it&apos;s usually
              made on the least reliable information: a polished careers page, a well-rehearsed
              interview, and reviews you can&apos;t verify. Every organisation tells you its culture
              is great. Very few can show you independent evidence.
            </p>
            <p>
              OOC-certified employers can. Certification means the organisation opened itself to a
              structured, multi-stakeholder assessment — including the confidential input of its own
              employees — and met a published standard verified by independent assessors. The
              certification level tells you more still: Bronze means the fundamentals are genuinely
              in place; Silver means employees report a demonstrably positive experience within
              mature people systems; Gold means a workplace that others benchmark against.
            </p>
            <p>
              None of this replaces your own judgement — interview well, ask hard questions, trust
              your instincts. But it changes your starting point. You begin from verified evidence
              rather than marketing, and that is a meaningfully better place to make a career
              decision from.
            </p>
          </div>
        </div>
      </section>

      {/* HOW TO USE THE DIRECTORY */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold-ink">
          How to use the directory
        </p>
        <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
          Three ways to use this directory.
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {uses.map((use) => (
            <div key={use.lead}>
              <h3 className="font-heading text-lg font-semibold text-teal">{use.lead}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{use.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DIRECTORY */}
      <section id="directory" className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-ink">Directory</p>
          <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
            Certified Employer Directory.
          </h2>
          <div className="mt-8">
            <EmployerDirectory />
          </div>
        </div>
      </section>

      <CTABand
        heading="Represent an employer that belongs here?"
        body="Certification starts with a simple application."
        primaryCta={{ label: "Get your organisation certified", href: "/employers#apply" }}
      />
    </>
  );
}

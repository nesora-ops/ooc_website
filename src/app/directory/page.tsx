import Link from "next/link";
import type { Metadata } from "next";
import { BadgeCheck, Search, ShieldCheck } from "lucide-react";

import { EmployerDirectory } from "@/components/directory/employer-directory";
import { CTABand } from "@/components/sections/cta-band";
import { SectionHeaderBar } from "@/components/sections/section-header-bar";
import { ProgressiveDetails } from "@/components/sections/progressive-details";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "For Job Seekers & Certified Employer Directory — Organisation of Choice™",
  description:
    "Every organisation in this directory has earned independent certification of its workplace — assessed on evidence, verified annually, and never for sale.",
};

const uses = [
  {
    lead: "Research an offer.",
    summary: "Check the employer’s verified level, scope, and validity before you decide.",
    body: "Weighing an offer in hand? Search the organisation. If it's certified, you'll see its level, certified scope, and validity — independent context no interview will give you.",
  },
  {
    lead: "Discover employers worth watching.",
    summary: "Build a shortlist using industry, location, and certification level.",
    body: "Filter by industry, location, and certification level to build a shortlist of organisations that have proven their standards — including strong employers you may never have heard of.",
  },
  {
    lead: "Verify a claim.",
    summary: "Confirm that an OOC mark is current and authorised.",
    body: "If an employer displays the OOC mark, confirm it here. Every legitimate certification appears in this directory with its scope and validity period; if it isn't listed, it isn't certified.",
  },
];

export default function DirectoryPage() {
  return (
    <>
      <SectionHeaderBar label="For Job Seekers" />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="mt-4 max-w-6xl font-heading text-4xl font-bold text-navy-ink sm:text-5xl">
          Choose your next employer on proof, not promises.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Every listed employer has earned independent, annually verified workplace certification.
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
          <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
            Replace polished promises with a better starting point.
          </h2>
          <div className="mx-auto mt-12 grid max-w-5xl items-stretch lg:grid-cols-[1fr_auto_1fr]">
            <div className="rounded-t-[2rem] border border-navy/8 bg-white/70 p-8 lg:rounded-l-[2rem] lg:rounded-tr-none">
              <p className="font-heading text-5xl font-semibold text-navy/40">“Great culture”</p>
              <h3 className="mt-10 text-xl font-semibold text-navy-ink">What an employer says</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                Careers pages, interviews, and reviews can be useful—but they are polished,
                selective, or difficult to verify.
              </p>
            </div>
            <div className="relative z-10 grid min-h-24 place-items-center bg-mint px-8 lg:-mx-1 lg:min-h-full">
              <ShieldCheck className="size-12 text-teal" aria-hidden strokeWidth={1.5} />
            </div>
            <div className="rounded-b-[2rem] border border-navy/8 bg-navy p-8 text-white lg:rounded-r-[2rem] lg:rounded-bl-none">
              <p className="font-heading text-5xl font-semibold text-butter">Verified</p>
              <h3 className="mt-10 text-xl font-semibold text-white">What the evidence supports</h3>
              <p className="mt-3 leading-7 text-white/70">
                Confidential employee input, leadership evidence, independent assessment, a
                published standard, and annual verification.
              </p>
            </div>
          </div>
          <ProgressiveDetails className="mx-auto mt-8 max-w-5xl" label="Why independent proof matters">
            <p>
              Silver confirms strong foundations, Gold shows mature systems and a positive
              employee experience, Platinum recognises advanced consistency, and Diamond marks a
              workplace others can benchmark against.
            </p>
            <p>
              Certification does not replace your judgement. It gives you verified evidence before
              you interview, ask hard questions, and decide whether the organisation is right for you.
            </p>
          </ProgressiveDetails>
        </div>
      </section>

      {/* HOW TO USE THE DIRECTORY */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
          Search. Compare. Verify.
        </h2>
        <div className="mx-auto mt-12 max-w-5xl divide-y divide-navy/10 border-y border-navy/10">
          {uses.map((use, index) => {
            const icons = [Search, BadgeCheck, ShieldCheck];
            const Icon = icons[index];
            return (
              <details key={use.lead} className="group">
                <summary className="grid cursor-pointer list-none items-center gap-5 py-7 marker:content-none sm:grid-cols-[3.5rem_1fr_auto]">
                  <span className="grid size-12 place-items-center rounded-full bg-mint text-teal">
                    <Icon className="size-5" aria-hidden strokeWidth={1.7} />
                  </span>
                  <span>
                    <span className="block text-xl font-semibold text-navy-ink">{use.lead}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">{use.summary}</span>
                  </span>
                  <span className="hidden font-mono text-sm text-teal sm:block">0{index + 1}</span>
                </summary>
                <p className="max-w-3xl pb-7 text-sm leading-7 text-muted-foreground sm:pl-[5.1rem]">
                  {use.body}
                </p>
              </details>
            );
          })}
        </div>
      </section>

      {/* DIRECTORY */}
      <section id="directory" className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-ink">Directory</p>
          <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
            Certified Employer Directory.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-muted-foreground">
            Filter the directory, then read the clearly labelled certification tier on each employer card.
          </p>
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

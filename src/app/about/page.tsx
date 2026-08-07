import type { Metadata } from "next";

import { Placeholder } from "@/components/placeholder";
import { CTABand } from "@/components/sections/cta-band";
import { SectionHeaderBar } from "@/components/sections/section-header-bar";

export const metadata: Metadata = {
  title: "About — Organisation of Choice™",
  description:
    "Organisation of Choice™ exists to make workplace quality visible — giving employers independent recognition and talent a signal they can trust.",
};

const differentiators = [
  {
    lead: "We are independent.",
    body: "Certification cannot be purchased, and assessment outcomes are never negotiable. Our assessors have no commercial stake in any organisation's result, and our criteria are published for anyone to read. When an organisation carries the OOC mark, it is because the evidence supported it.",
  },
  {
    lead: "We assess from every angle.",
    body: "A workplace looks different from the boardroom than it does from the floor. That is why our framework gathers structured input from multiple assessor groups — employees, leadership, and independent evaluators — across every dimension of the employment experience. No single perspective can carry a certification on its own.",
  },
  {
    lead: "We certify improvement, not perfection.",
    body: "The Bronze, Silver, and Gold levels exist because building a great workplace is a journey. Our detailed assessment reports show every organisation exactly where it stands and precisely what would move it forward. Certification with us is the beginning of a relationship, not the end of a transaction.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SectionHeaderBar label="About" />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">Hero</p>
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
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">Our story</p>
          <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
            Our story.
          </h2>
          <div className="mt-8 max-w-3xl space-y-6 text-muted-foreground">
            <p>
              Every year, organisations invest enormously in their people — in fair policies, in
              careful leadership, in workplaces where employees can do the best work of their
              careers. And every year, most of that investment remains invisible to the outside
              world. A careers page can claim anything; a job advertisement costs nothing to
              embellish. The employers doing the real work have had no rigorous, independent way to
              prove it.
            </p>
            <p>
              Organisation of Choice™ was founded by Ketaki,{" "}
              <Placeholder>founder designation</Placeholder>, to close that gap. Drawing on
              experience across <Placeholder>founder background summary</Placeholder>, she built
              OOC around a conviction: that workplace quality can be assessed with the same rigour
              the world applies to financial statements or product safety — through evidence,
              multiple perspectives, and independent verification.
            </p>
            <p>
              Today, Organisation of Choice™ operates as an independent certification programme of
              Carbon Value Partners Private Limited, assessing employers across India against a
              framework built on global best practice. Every certification we award is earned,
              evidenced, and annually verified.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">
          Mission and vision
        </p>
        <div className="mt-8 grid max-w-4xl gap-10 sm:grid-cols-2">
          <div>
            <h2 className="font-heading text-xl font-semibold text-teal">Our mission.</h2>
            <p className="mt-3 text-muted-foreground">
              To recognise and certify employers who demonstrably invest in their people, through
              independent, multi-stakeholder assessment — and to give talent everywhere a
              trustworthy signal of where great workplaces can be found.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold text-teal">Our vision.</h2>
            <p className="mt-3 text-muted-foreground">
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
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">
            What makes us different
          </p>
          <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
            Why our certification holds its value.
          </h2>
          <div className="mt-8 max-w-3xl space-y-6 text-muted-foreground">
            {differentiators.map((item) => (
              <p key={item.lead}>
                <strong className="font-semibold text-navy-ink">{item.lead}</strong> {item.body}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM AND GOVERNANCE */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">
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

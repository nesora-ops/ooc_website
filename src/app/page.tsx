import Link from "next/link";
import type { Metadata } from "next";

import { Placeholder } from "@/components/placeholder";
import { AudienceRouterCards } from "@/components/sections/audience-router-cards";
import { CTABand } from "@/components/sections/cta-band";
import { NumberedSteps } from "@/components/sections/numbered-steps";
import { SectionHeaderBar } from "@/components/sections/section-header-bar";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Organisation of Choice™ — Independent Workplace Certification",
  description:
    "The independent workplace certification that proves your commitment to your people — through rigorous, multi-stakeholder assessment, not self-declaration.",
};

const benefits = [
  {
    title: "Attract & retain talent.",
    body: "Candidates increasingly choose employers on culture, not compensation alone. Certification gives them an independent reason to choose you — and gives your current people one more reason to stay.",
  },
  {
    title: "Build a credible employer brand.",
    body: "Use the OOC mark across your careers page, job listings, and social channels. Third-party validation says what self-promotion cannot.",
  },
  {
    title: "Improve with evidence.",
    body: "The assessment doesn't just score you — it shows you exactly where to act. Every certified organisation receives a detailed report with benchmarks and prioritised recommendations.",
  },
  {
    title: "Stand out to every stakeholder.",
    body: "Clients, investors, and business partners read workplace quality as a signal of governance and sustainability. Certification strengthens the story you tell all of them.",
  },
];

const steps = [
  {
    title: "Apply.",
    description:
      "Tell us about your organisation and the scope you want certified — the whole organisation, or specific locations and divisions. We confirm eligibility and agree the assessment plan with you.",
  },
  {
    title: "Get assessed.",
    description:
      "Our multi-stakeholder assessment gathers structured evidence from employees, leadership, and independent assessors through our digital platform, evaluated against the published OOC framework.",
  },
  {
    title: "Get certified.",
    description:
      "Receive your certification level — Bronze, Silver, or Gold — along with a detailed report, your public directory listing, and the OOC certification mark for your employer brand.",
  },
];

const levels = [
  {
    name: "Bronze",
    body: "recognises organisations with strong foundations: compliant, fair, and well-run workplaces with the essential people practices in place.",
  },
  {
    name: "Silver",
    body: "recognises organisations that go further: demonstrated employee engagement, mature people systems, and a working culture of continuous improvement.",
  },
  {
    name: "Gold",
    body: "recognises exceptional employers: industry-leading practices, outstanding employee experience, and a workplace others benchmark against.",
  },
];

export default function Home() {
  return (
    <>
      <SectionHeaderBar label="Home" />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">Hero</p>
        <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold text-navy-ink sm:text-5xl">
          Be an Organisation of Choice.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          The independent workplace certification that proves your commitment to your people —
          through rigorous, multi-stakeholder assessment, not self-declaration.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button asChild size="lg">
            <Link href="/employers#apply">Apply for Certification</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/directory">Explore Certified Employers</Link>
          </Button>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="border-y border-border bg-muted/60 py-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-3 px-4 text-center text-sm text-navy sm:px-6 lg:px-8">
          <span>Independent, third-party assessment</span>
          <span aria-hidden className="text-gold">
            •
          </span>
          <span>Multi-stakeholder evaluation</span>
          <span aria-hidden className="text-gold">
            •
          </span>
          <span>Annual verification</span>
          <span aria-hidden className="text-gold">
            •
          </span>
          <span>
            <Placeholder>number</Placeholder> certified organisations
          </span>
        </div>
      </div>

      {/* WHAT IS ORGANISATION OF CHOICE */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">
          What is Organisation of Choice
        </p>
        <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
          Certification that means something.
        </h2>
        <div className="mt-8 max-w-3xl space-y-6 text-muted-foreground">
          <p>
            Organisation of Choice™ is an independent workplace certification programme that
            recognises employers who genuinely invest in their people. We assess organisations
            across their culture, policies, systems, and — most importantly — the lived experience
            of their employees, measured against global best practice.
          </p>
          <p>
            Unlike awards that can be bought or rankings based on self-reported surveys alone, OOC
            certification is earned through a structured, multi-stakeholder assessment. Employees,
            leadership, and independent assessors all contribute evidence. Every certified
            organisation has met a published standard, verified by people with no stake in the
            outcome.
          </p>
          <p className="font-heading text-xl font-semibold text-navy">
            It&apos;s not just a badge. It&apos;s proof.
          </p>
        </div>
      </section>

      {/* AUDIENCE ROUTER */}
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">
            Audience router
          </p>
          <AudienceRouterCards
            className="mt-8"
            cards={[
              {
                title: "For Employers",
                description:
                  "Attract and retain the talent you need with certification that stands up to scrutiny. Benchmark your workplace against global best practice, receive an actionable improvement roadmap, and turn your culture into a competitive advantage.",
                href: "/certification",
                linkLabel: "See how certification works",
              },
              {
                title: "For Job Seekers",
                description:
                  'Anyone can claim "great culture" in a job advertisement. OOC-certified employers have proven it. Search our directory of certified organisations and make your next career move with confidence.',
                href: "/directory",
                linkLabel: "Explore the directory",
              },
              {
                title: "For Partners",
                description:
                  "Consultants, advisors, and professional firms: bring Organisation of Choice™ to your client network. Help the organisations you serve become certified employers — and build a new revenue stream while you do it.",
                href: "/partners",
                linkLabel: "Discover the partner programme",
              },
            ]}
          />
        </div>
      </section>

      {/* WHY CERTIFICATION PAYS */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">
          Why certification pays
        </p>
        <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
          The business case for being an Organisation of Choice.
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div key={benefit.title}>
              <h3 className="font-heading text-lg font-semibold text-teal">{benefit.title}</h3>
              <p className="mt-2 text-muted-foreground">{benefit.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">How it works</p>
          <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
            Three steps to certification.
          </h2>
          <NumberedSteps className="mt-10 lg:grid-cols-3" steps={steps} />
          <div className="mt-10">
            <Button asChild size="lg">
              <Link href="/employers#apply">Apply for Certification</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CERTIFICATION LEVELS */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">
          Certification levels
        </p>
        <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
          Bronze. Silver. Gold. A pathway, not just a plaque.
        </h2>
        <div className="mt-8 max-w-3xl space-y-4 text-muted-foreground">
          {levels.map((level) => (
            <p key={level.name}>
              <strong className="font-semibold text-navy-ink">{level.name}</strong> {level.body}
            </p>
          ))}
          <p>Wherever you start, the framework shows you the path to the next level.</p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">Testimonials</p>
          <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
            What certified organisations say.
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <figure
                key={n}
                className="rounded-lg border border-dashed border-gold/60 bg-muted p-4 text-sm"
              >
                <blockquote>
                  <Placeholder>testimonial quote {n}</Placeholder>
                </blockquote>
                <figcaption className="mt-3">
                  — <Placeholder>name, designation, organisation</Placeholder>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS PREVIEW */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">
          Insights preview
        </p>
        <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
          Latest insights.
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => (
            <li key={post.slug}>
              <Link
                href={`/resources/blog/${post.slug}`}
                className="font-heading font-semibold text-navy-ink hover:text-teal"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/resources"
          className="mt-8 inline-block font-medium text-teal hover:underline"
        >
          Visit the resource hub →
        </Link>
      </section>

      <CTABand
        heading="Ready to prove you're a great place to work?"
        body="Join the employers who've turned their culture into certified, public proof — and let the right talent find you."
        primaryCta={{ label: "Apply for Certification", href: "/employers#apply" }}
        secondaryCta={{ label: "Explore Certified Employers", href: "/directory" }}
      />
    </>
  );
}

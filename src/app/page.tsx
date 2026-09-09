import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  ChartNoAxesCombined,
  Megaphone,
  Sparkles,
  Users,
} from "lucide-react";

import { AudienceRouterCards } from "@/components/sections/audience-router-cards";
import { ImageSlot } from "@/components/image-slot";
import { CTABand } from "@/components/sections/cta-band";
import { NumberedSteps } from "@/components/sections/numbered-steps";
import { ProgressiveDetails } from "@/components/sections/progressive-details";
import { SectionHeaderBar } from "@/components/sections/section-header-bar";
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blog-posts";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Organisation of Choice™ | Independent Workplace Certification",
  description:
    "The independent workplace certification that proves your commitment to your people, backed by rigorous multi-stakeholder assessment, not self-declaration.",
};

const benefits = [
  {
    title: "Proof, not promises.",
    body: "Candidates have learned to discount culture claims on careers pages. Independent certification provides evidence they can verify before applying.",
    icon: Sparkles,
    className: "bg-mint lg:col-span-7",
  },
  {
    title: "Protect what you have built.",
    body: "Certification benchmarks your people practices against a rigorous standard, showing where to invest to retain key talent.",
    icon: Users,
    className: "bg-butter/70 lg:col-span-5",
  },
  {
    title: "Strengthen client confidence.",
    body: "Clients, investors, and boards increasingly scrutinise workplace standards. The OOC mark demonstrates operational maturity.",
    icon: Megaphone,
    className: "bg-sky lg:col-span-5",
  },
  {
    title: "Improve with evidence.",
    body: "Turn assessment evidence into a practical report with benchmarks and prioritised recommendations.",
    icon: ChartNoAxesCombined,
    className: "bg-coral/20 lg:col-span-7",
  },
];

const steps = [
  {
    title: "Apply and scope",
    description:
      "Define the boundaries of your certification, from single entities to entire corporate groups.",
  },
  {
    title: "Gather evidence",
    description:
      "Employees, leadership, and independent assessors each contribute structured evidence through our platform.",
  },
  {
    title: "Independent review",
    description:
      "Assessors evaluate every dimension against published criteria. Mandatory fundamentals act as gates.",
  },
  {
    title: "Certified recognition",
    description:
      "Receive your level (Silver to Diamond), a detailed report, directory listing, and the OOC mark.",
  },
];

const levels = [
  {
    name: "Silver",
    note: "Strong foundations",
    body: "Recognises organisations with the essential people practices in place: compliant, fair, and well run.",
    badge: "/images/brand/ooc-badge-silver.png",
    accent: "#6B7B84",
  },
  {
    name: "Gold",
    note: "Engaged and improving",
    body: "Recognises mature people systems, demonstrated employee engagement, and continuous improvement.",
    badge: "/images/brand/ooc-badge-gold.png",
    accent: "#C08A2E",
  },
  {
    name: "Platinum",
    note: "Advanced and consistent",
    body: "Recognises industry-leading practices, outstanding employee experience, and exceptional employers.",
    badge: "/images/brand/ooc-badge-platinum.png",
    accent: "#7C8CA8",
  },
  {
    name: "Diamond",
    note: "A workplace others benchmark against",
    body: "Recognises sustained excellence across people practices, employee experience, and organisational leadership.",
    badge: "/images/brand/ooc-badge-diamond.png",
    accent: "#0E7A62",
  },
];

const trustItems = [
  "Independent, third-party assessment",
  "Multi-stakeholder evaluation",
  "Annual verification",
  "Published standard",
  "Evidence before outcome",
];

export default function Home() {
  return (
    <>
      <SectionHeaderBar label="Home" />

      <section className="noise-wash relative overflow-hidden pb-12 pt-12 sm:pb-18 sm:pt-18 lg:pb-24 lg:pt-24">
        <div className="page-shell relative text-center">
          <p className="mx-auto max-w-xl text-sm font-semibold text-teal">
            Independent workplace certification for employers who invest in their people.
          </p>
          <h1 className="mx-auto mt-7 max-w-6xl text-[clamp(3.25rem,8.5vw,7.6rem)] font-semibold leading-[0.86] tracking-[-0.07em] text-navy-ink">
            <span className="block">Be an Organisation</span>
            <span className="mt-2 block">
              of <span className="text-teal">Choice.</span>
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-base leading-7 text-muted-foreground sm:text-xl sm:leading-8">
            The independent workplace certification that proves your commitment to your people,
            backed by rigorous multi-stakeholder assessment, not self-declaration.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="group">
              <Link href="/employers#apply">
                Apply for Certification
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/directory">Explore Certified Employers</Link>
            </Button>
          </div>

          <div
            data-motion-media
            className="soft-grid relative mx-auto mt-16 grid max-w-5xl gap-4 overflow-hidden rounded-[2.25rem] border border-navy/8 bg-white/68 p-4 text-left shadow-[0_35px_100px_rgba(23,50,77,0.13)] backdrop-blur-md sm:p-6 lg:grid-cols-[0.9fr_1.35fr_0.9fr]"
          >
            <article className="rounded-3xl bg-mint p-6">
              <BadgeCheck className="size-6 text-teal" />
              <p className="mt-16 text-sm font-semibold text-teal">Independent assessment</p>
              <p className="mt-2 text-2xl font-semibold leading-tight text-navy-ink">
                Earned through evidence, never self-declared.
              </p>
            </article>
            <article className="rounded-3xl bg-navy p-6 text-white">
              <p className="text-sm font-semibold text-mint">Every perspective matters</p>
              <div className="mt-10 space-y-3">
                {["Employees", "Leadership", "Independent assessors"].map((voice, index) => (
                  <div key={voice} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/7 px-4 py-3">
                    <span className="text-sm font-medium">{voice}</span>
                    <span className={cn("size-2.5 rounded-full", index === 0 ? "bg-coral" : index === 1 ? "bg-butter" : "bg-mint")} />
                  </div>
                ))}
              </div>
            </article>
            <article className="rounded-3xl bg-sky p-6">
              <p className="text-sm font-semibold text-[#5068aa]">A visible pathway</p>
              <div className="mt-10 flex items-end gap-2.5" aria-label="Silver, Gold, Platinum and Diamond certification levels">
                <div className="h-14 flex-1 rounded-2xl bg-[#8aa0af]" />
                <div className="h-20 flex-1 rounded-2xl bg-gold" />
                <div className="h-[6.5rem] flex-1 rounded-2xl bg-[#6d80c5]" />
                <div className="h-32 flex-1 rounded-2xl bg-teal" />
              </div>
              <p className="mt-4 text-base font-semibold text-navy-ink">Silver. Gold. Platinum. Diamond.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-navy/8 bg-white/60 py-5" aria-label="What makes OOC credible">
        <div className="trust-marquee flex w-max items-center gap-8 whitespace-nowrap text-sm font-semibold text-navy/75">
          {[...trustItems, ...trustItems].map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center gap-8" aria-hidden={index >= trustItems.length}>
              {item}
              <span aria-hidden className="size-1.5 rounded-full bg-coral" />
            </span>
          ))}
        </div>
      </section>

      <section className="py-14 sm:py-20 lg:py-28">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-16">
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-teal">Why OOC exists</p>
            <h2 className="mt-5 max-w-3xl text-[clamp(2.5rem,5.2vw,5.2rem)] font-semibold leading-[0.96] tracking-[-0.055em]">
              Certification that means something.
            </h2>
            <p className="mt-7 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              OOC certifies employers who invest in their people, verified through evidence,
              not self-declaration.
            </p>
            <p className="text-2xl font-semibold leading-tight text-navy-ink">
              It&apos;s not just a badge. It&apos;s proof.
            </p>
            <ProgressiveDetails className="mt-6">
              <p>
                Certification is earned through structured, multi-stakeholder assessment.
                Employees, leadership, and independent assessors all contribute evidence, verified
                by people with no stake in the outcome.
              </p>
            </ProgressiveDetails>
          </div>
          <ImageSlot
            contentKey="editorial workplace collaboration"
            alt="A workplace team discussing ideas together around a table"
            src="/images/editorial/workplace-collaboration.png"
            aspect="video"
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="rounded-[2.25rem] shadow-[0_28px_80px_rgba(23,50,77,0.12)] transition-all duration-500 ease-out"
          />
        </div>
      </section>

      <section className="border-y border-navy/8 bg-white/45 py-14 sm:py-20">
        <div className="page-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-teal">Find your route</p>
            <h2 className="mt-4 text-[clamp(2.35rem,4.5vw,4.4rem)] font-semibold leading-none tracking-[-0.05em]">
              One standard. Three ways in.
            </h2>
          </div>
          <AudienceRouterCards
            className="mt-12"
            cards={[
              {
                title: "For Employers",
                description:
                  "Attract and retain the talent you need with certification that stands up to scrutiny. Benchmark your workplace, receive an actionable roadmap, and turn your culture into a competitive advantage.",
                href: "/certification",
                linkLabel: "See how certification works",
              },
              {
                title: "For Job Seekers",
                description:
                  'Anyone can claim "great culture" in a job advertisement. OOC-certified employers have proven it. Search the directory and make your next move with confidence.',
                href: "/directory",
                linkLabel: "Explore the directory",
              },
              {
                title: "For Partners",
                description:
                  "Consultants, advisors, and professional firms can bring OOC to their client network, help organisations become certified employers, and build a new revenue stream.",
                href: "/partners",
                linkLabel: "Discover the partner programme",
              },
            ]}
          />
        </div>
      </section>

      <section className="py-14 sm:py-20 lg:py-28">
        <div className="page-shell">
          <p className="text-sm font-semibold text-teal">The business case</p>
          <h2 className="mt-4 max-w-5xl text-[clamp(2.35rem,4.8vw,4.8rem)] font-semibold leading-[0.98] tracking-[-0.055em]">
            Being an Organisation of Choice pays in more than one way.
          </h2>
          <div className="mt-12 grid grid-flow-dense gap-4 lg:grid-cols-12">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <article key={benefit.title} className={cn("group min-h-72 rounded-[2rem] border border-navy/8 p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-8", benefit.className)}>
                  <Icon className="size-7 text-teal" strokeWidth={1.7} />
                  <h3 className="mt-14 max-w-xl text-[clamp(1.55rem,2.8vw,2.6rem)] font-semibold leading-none tracking-[-0.04em]">
                    {benefit.title}
                  </h3>
                  <p className="mt-5 max-w-2xl text-sm leading-6 text-navy/72 sm:text-base">{benefit.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-navy/8 bg-muted/65 py-14 sm:py-20 lg:py-28">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div className="h-fit lg:self-center">
            <p className="text-sm font-semibold text-teal">How it works</p>
            <h2 className="mt-4 text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[0.96] tracking-[-0.055em]">
              Three steps to certification.
            </h2>
            <p className="mt-6 max-w-md leading-7 text-muted-foreground">
              A clear path from application to independently verified recognition.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/employers#apply">Apply for Certification</Link>
            </Button>
          </div>
          <div>
            <NumberedSteps className="grid-cols-1 sm:grid-cols-1 lg:grid-cols-1" steps={steps} />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-28 bg-[#FAFBFB] border-y border-navy/8">
        <div className="page-shell">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0E7A62]">
                Certification levels
              </p>
              <h2 className="mt-3 text-[clamp(2.4rem,4.5vw,4.2rem)] font-bold leading-[1.05] tracking-[-0.035em] text-navy-ink">
                A pathway, not just a plaque.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#5A6B72] sm:text-lg">
                Wherever you start, the framework shows you the path to the next level. Four ascending tiers recognizing foundational compliance through to industry-defining excellence.
              </p>
            </div>
            <Button asChild variant="outline" className="w-fit self-start md:self-end">
              <Link href="/certification">Explore all criteria</Link>
            </Button>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
            {levels.map((level, index) => (
              <article
                key={level.name}
                style={{ "--tier-accent": level.accent } as React.CSSProperties}
                className="group flex flex-col justify-between rounded-[22px] border border-navy/8 bg-white p-7 shadow-[0_12px_36px_rgba(23,50,77,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-(--tier-accent) hover:shadow-[0_20px_48px_rgba(23,50,77,0.08)]"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <Image
                      src={level.badge}
                      alt={`Organisation of Choice ${level.name} certification badge`}
                      width={96}
                      height={96}
                      className="size-20 object-contain sm:size-24 transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="font-mono text-xs font-semibold tabular-nums text-navy/40">0{index + 1}</span>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold tracking-[-0.02em] text-[#0B2B3C]">{level.name}</h3>
                  <p className="mt-1.5 text-sm font-semibold text-(--tier-accent)">{level.note}</p>
                  <p className="mt-4 text-sm leading-relaxed text-[#5A6B72]">{level.body}</p>
                </div>
                <div className="mt-8 border-t border-navy/8 pt-4 flex items-center justify-between text-xs font-semibold text-(--tier-accent)">
                  <span>Tier 0{index + 1}</span>
                  <span className="text-navy/40 group-hover:translate-x-0.5 transition-transform">→</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-navy/8 bg-sky/30 py-14 sm:py-20">
        <div className="page-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mx-auto w-fit rounded-full border border-navy/10 bg-white/70 px-4 py-2 text-xs font-semibold text-teal">
              Certified voices
            </p>
            <h2 className="mt-5 text-[clamp(2.25rem,4.4vw,4.2rem)] font-semibold leading-none tracking-[-0.05em]">
              What certified organisations say.
            </h2>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      <section className="py-14 sm:py-20 lg:py-28">
        <div className="page-shell">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold text-teal">Latest insights</p>
              <h2 className="mt-4 text-[clamp(2.25rem,4.4vw,4.2rem)] font-semibold leading-none tracking-[-0.05em]">
                Ideas worth working with.
              </h2>
            </div>
            <Link href="/resources" className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:underline">
              Visit the resource hub <ArrowRight className="size-4" />
            </Link>
          </div>
          <ul className="mt-12 grid gap-4 lg:grid-cols-3 items-stretch">
            {blogPosts.slice(0, 3).map((post, index) => (
              <li key={post.slug} className="flex h-full">
                <Link
                  href={`/resources/blog/${post.slug}`}
                  className={cn(
                    "group flex h-full w-full flex-col rounded-[2rem] border border-navy/8 p-7 transition-transform duration-300 hover:-translate-y-1",
                    index === 0 ? "bg-mint" : index === 1 ? "bg-sky" : "bg-butter/65"
                  )}
                >
                  <span className="text-xs font-semibold text-muted-foreground">Insight 0{index + 1}</span>
                  <ImageSlot
                    contentKey={`insight thumbnail — ${post.slug}`}
                    alt={post.image?.alt ?? post.title}
                    src={post.image?.src}
                    aspect="video"
                    className="mt-5"
                  />
                  <span className="mt-5 flex-1 text-2xl font-semibold leading-tight tracking-[-0.035em] text-navy-ink group-hover:text-teal">
                    {post.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABand
        heading="Ready to prove you are an Organisation of Choice?"
        body="Turn your culture into certified public proof. Let the right talent find you."
        primaryCta={{ label: "Apply for Certification", href: "/employers#apply" }}
        secondaryCta={{ label: "Explore Certified Employers", href: "/directory" }}
      />
    </>
  );
}

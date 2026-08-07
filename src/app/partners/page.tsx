import Link from "next/link";
import type { Metadata } from "next";

import { PartnerApplicationForm } from "@/components/forms/partner-application-form";
import { Placeholder } from "@/components/placeholder";
import { NumberedSteps } from "@/components/sections/numbered-steps";
import { SectionHeaderBar } from "@/components/sections/section-header-bar";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Channel Partners — Organisation of Choice™",
  description:
    "The OOC partner programme lets consultants, advisors, and professional firms bring independent workplace certification to the clients they already serve.",
};

const partnerTypes = [
  "HR & CSR consultants",
  "Chartered accountancy firms",
  "Company secretaries",
  "ESG advisors",
  "Green finance advisors",
  "Export consultants",
  "Legal firms",
  "Industry associations",
];

const tiers = [
  {
    name: "Silver tier.",
    body: "The starting point for every partner: full programme training, the partner marketing kit, a named programme contact, and standard commercial terms on every client introduced.",
  },
  {
    name: "Gold tier.",
    body: "For established partners with an active client pipeline: enhanced commercial terms, co-marketing opportunities including joint events and content, and priority programme support.",
  },
  {
    name: "Platinum tier.",
    body: "The programme's strategic partners: the strongest commercial terms, first access to new certifications and programme developments, joint go-to-market planning, and public recognition as a Platinum-tier partner of Organisation of Choice™.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <SectionHeaderBar label="Channel Partners" />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">Hero</p>
        <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold text-navy-ink sm:text-5xl">
          Grow your practice by growing great workplaces.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          The Organisation of Choice™ partner programme lets consultants, advisors, and
          professional firms bring independent workplace certification to the clients they already
          serve — adding client value and a new revenue stream in the same move.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="#apply">Apply to Partner</Link>
          </Button>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">Why partner</p>
          <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
            What partnership gives your practice.
          </h2>
          <div className="mt-8 max-w-3xl space-y-6 text-muted-foreground">
            <p>
              <strong className="font-semibold text-navy-ink">
                A natural extension of the advice you already give.
              </strong>{" "}
              If your clients ask you about talent, retention, governance, compliance, or brand,
              certification is a concrete next step you can put on the table — one with a defined
              process, a credible outcome, and visible client value. You bring the relationship and
              the context; the OOC programme brings the framework, the platform, and the assessment.
            </p>
            <p>
              <strong className="font-semibold text-navy-ink">
                Revenue that compounds with your client base.
              </strong>{" "}
              Partners earn a share of certification revenue for every client organisation they
              introduce, on transparent commercial terms:{" "}
              <Placeholder>partner commercial terms</Placeholder>. Because certification renews,
              partner income recurs alongside it — a client introduced once continues to generate
              value across the relationship.
            </p>
            <p>
              <strong className="font-semibold text-navy-ink">
                Support that respects your expertise.
              </strong>{" "}
              Partners receive programme training, co-branded marketing materials, a named programme
              contact, and priority visibility of client progress through the certification journey.
              What partners never carry is assessment risk: evaluation and determination are wholly
              independent, which protects both your client relationship and the value of the mark
              your clients earn.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE PARTNER WITH */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">
          Who we partner with
        </p>
        <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
          Built for firms that advise employers.
        </h2>
        <ul className="mt-8 flex flex-wrap gap-3">
          {partnerTypes.map((type) => (
            <li
              key={type}
              className="rounded-full border border-border bg-muted/60 px-4 py-1.5 text-sm text-navy-ink"
            >
              {type}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl text-muted-foreground">
          If your firm serves employers in another capacity and sees the fit, we&apos;d still like
          to hear from you — the application form includes space to tell us about your practice.
        </p>
      </section>

      {/* PARTNER TIERS */}
      <section id="tiers" className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">Partner tiers</p>
          <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
            Three tiers. One standard.
          </h2>
          <p className="mt-8 max-w-3xl text-muted-foreground">
            Every partner joins at Silver tier and progresses on results. Tier reflects the scale
            and maturity of the partnership — commercial terms, enablement, and visibility grow with
            it. Advancement criteria: <Placeholder>tier advancement criteria</Placeholder>.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {tiers.map((tier) => (
              <div key={tier.name} className="rounded-lg border border-border bg-background p-6">
                <h3 className="font-heading text-lg font-semibold text-teal">{tier.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{tier.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW PARTNERSHIP WORKS */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">
          How partnership works
        </p>
        <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
          From application to your first certified client.
        </h2>
        <NumberedSteps
          className="mt-10"
          steps={[
            {
              title: "Apply.",
              description:
                "Tell us about your firm, your client base, and where you see the fit. We review every application and respond within [PLACEHOLDER; response time].",
            },
            {
              title: "Onboard.",
              description:
                "Approved partners complete programme training, receive the partner kit and commercial agreement, and are introduced to their named programme contact.",
            },
            {
              title: "Introduce.",
              description:
                "You identify client organisations that would benefit, make the introduction, and support them through application — with our team alongside you at every step.",
            },
            {
              title: "Grow.",
              description:
                "As your clients progress to certification, your partnership record builds — toward Gold and Platinum tiers, and toward a client base whose workplaces carry independent proof.",
            },
          ]}
        />
      </section>

      {/* PARTNER APPLICATION FORM */}
      <section id="apply" className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">
            Partner application form
          </p>
          <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
            Apply to become a partner.
          </h2>
          <p className="mt-8 max-w-3xl text-muted-foreground">
            Tell us about your practice. We review every application individually and respond within{" "}
            <Placeholder>response time</Placeholder>.
          </p>
          <div className="mt-10 max-w-3xl">
            <PartnerApplicationForm />
          </div>
        </div>
      </section>
    </>
  );
}

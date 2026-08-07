import type { Metadata } from "next";

import { MediaEnquiryForm } from "@/components/forms/media-enquiry-form";
import { Placeholder } from "@/components/placeholder";
import { SectionHeaderBar } from "@/components/sections/section-header-bar";

export const metadata: Metadata = {
  title: "News & Press — Organisation of Choice™",
  description:
    "Programme announcements, newly certified organisations, and resources for journalists covering the changing world of work.",
};

export default function NewsPage() {
  return (
    <>
      <SectionHeaderBar label="News & Press" />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold-ink">Hero</p>
        <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold text-navy-ink sm:text-5xl">
          News &amp; press.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Programme announcements, newly certified organisations, and resources for journalists
          covering the changing world of work.
        </p>
      </section>

      {/* MEDIA KIT */}
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-ink">Media kit</p>
          <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
            Media kit.
          </h2>
          <p className="mt-8 max-w-3xl text-muted-foreground">
            Writing about Organisation of Choice™? The media kit contains our boilerplate
            description, founder biography, logo files with usage guidance, and approved imagery.
            For interviews, comment, or data enquiries, use the media contact below — we respond
            quickly to working deadlines.
          </p>

          <h3 className="mt-10 font-heading text-lg font-semibold text-teal">
            Boilerplate (approved standard description)
          </h3>
          <p className="mt-3 max-w-3xl border-l-2 border-gold/50 pl-4 text-muted-foreground">
            Organisation of Choice™ is an independent workplace certification and employer branding
            programme operated by Carbon Value Partners Private Limited. Through rigorous,
            multi-stakeholder assessment of workplace culture, policies, systems, and employee
            experience, OOC certifies employers at Bronze, Silver, and Gold levels and lists every
            current certification in its public Certified Employer Directory. Founded by Ketaki, the
            programme operates across India and assesses against global best practice. More at
            organisationofchoice.com.
          </p>

          <p className="mt-8 max-w-3xl text-sm text-muted-foreground">
            Logo files and approved imagery: <Placeholder>available on request</Placeholder>
          </p>
        </div>
      </section>

      {/* MEDIA ENQUIRY FORM */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold-ink">
          Media enquiry form
        </p>
        <div className="mt-8 max-w-3xl">
          <MediaEnquiryForm />
        </div>
      </section>
    </>
  );
}

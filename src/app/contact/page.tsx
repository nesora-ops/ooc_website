import type { Metadata } from "next";

import { ContactForm } from "@/components/forms/contact-form";
import { Placeholder } from "@/components/placeholder";
import { CTABand } from "@/components/sections/cta-band";
import { SectionHeaderBar } from "@/components/sections/section-header-bar";

export const metadata: Metadata = {
  title: "Contact — Organisation of Choice™",
  description:
    "Exploring certification, considering partnership, or have a question about the programme? We'd like to hear from you.",
};

const contactDetails = [
  { label: "Email", placeholder: "contact email" },
  { label: "Phone", placeholder: "phone number" },
  { label: "Office", placeholder: "office address" },
  { label: "Hours", placeholder: "business hours" },
];

const teamContacts = [
  { label: "Certification enquiries", placeholder: "certification email" },
  { label: "Partner programme", placeholder: "partners email" },
  { label: "Media & press", placeholder: "media email" },
];

export default function ContactPage() {
  return (
    <>
      <SectionHeaderBar label="Contact" />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold-ink">Hero</p>
        <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold text-navy-ink sm:text-5xl">
          Let&apos;s talk.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Whether you&apos;re exploring certification, considering partnership, or simply have a
          question about the programme, we&apos;d like to hear from you. We respond to every enquiry
          within <Placeholder>response time</Placeholder>.
        </p>
      </section>

      {/* CONTACT DETAILS */}
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-ink">
            Contact details
          </p>
          <dl className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {[...contactDetails, ...teamContacts].map((detail) => (
              <div key={detail.label} className="flex flex-wrap items-baseline gap-2">
                <dt className="font-semibold text-navy-ink">{detail.label}:</dt>
                <dd>
                  <Placeholder>{detail.placeholder}</Placeholder>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ENQUIRY FORM */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold-ink">Enquiry form</p>
        <div className="mt-8 max-w-3xl">
          <ContactForm />
        </div>
      </section>

      <CTABand
        heading="Ready when you are."
        body="The fastest way to explore certification is simply to apply — it's free, and it creates no obligation."
        primaryCta={{ label: "Apply for Certification", href: "/employers#apply" }}
      />
    </>
  );
}

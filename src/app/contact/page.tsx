import type { Metadata } from "next";
import { Award, Clock, Handshake, Mail, MapPin, Newspaper, Phone } from "lucide-react";

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
  { label: "Phone", placeholder: "phone number", icon: Phone, tone: "bg-mint/75 text-teal" },
  { label: "Office", placeholder: "office address", icon: MapPin, tone: "bg-sky/70 text-navy" },
  { label: "Email", placeholder: "contact email", icon: Mail, tone: "bg-butter/55 text-gold-ink" },
  { label: "Hours", placeholder: "business hours", icon: Clock, tone: "bg-coral/10 text-[#9a4635]" },
];

const teamContacts = [
  { label: "Certification enquiries", placeholder: "certification email", icon: Award },
  { label: "Partner programme", placeholder: "partners email", icon: Handshake },
  { label: "Media & press", placeholder: "media email", icon: Newspaper },
];

export default function ContactPage() {
  return (
    <>
      <SectionHeaderBar label="Contact" />

      {/* HERO */}
      <section className="mx-auto max-w-6xl !max-w-none px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold text-navy-ink sm:text-5xl">
          Let&apos;s talk.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Whether you&apos;re exploring certification, considering partnership, or simply have a
          question about the programme, we&apos;d like to hear from you. We respond to every enquiry
          within <Placeholder className="border-0 bg-transparent px-0 py-0">response time</Placeholder>.
        </p>
      </section>

      {/* CONTACT DETAILS, FORM & MAP */}
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2.25rem] border border-navy/8 bg-white/70 shadow-[0_28px_80px_rgba(23,50,77,0.09)] backdrop-blur-sm">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="p-6 sm:p-8 lg:border-r lg:border-navy/8 lg:p-10">
                <h2 className="font-heading text-2xl font-semibold text-navy-ink">
                  Company information.
                </h2>
                <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
                  Reach the programme team directly or choose the specialist desk that best fits
                  your enquiry.
                </p>

                <dl className="mt-8 grid gap-3 sm:grid-cols-2">
                  {contactDetails.map((detail) => {
                    const Icon = detail.icon;
                    return (
                      <div key={detail.label} className="min-h-36 rounded-2xl border border-navy/7 bg-white/80 p-5">
                        <dt className="flex items-center gap-3 font-semibold text-navy-ink">
                          <span className={`grid size-9 place-items-center rounded-xl ${detail.tone}`}>
                            <Icon aria-hidden className="size-4" strokeWidth={1.8} />
                          </span>
                          {detail.label}
                        </dt>
                        <dd className="mt-6 text-sm leading-6 text-muted-foreground">
                          <Placeholder className="break-all">{detail.placeholder}</Placeholder>
                        </dd>
                      </div>
                    );
                  })}
                </dl>

                <div className="mt-8 border-t border-navy/8 pt-6">
                  <h3 className="text-sm font-semibold text-navy-ink">Specialist contacts</h3>
                  <dl className="mt-4 space-y-4">
                    {teamContacts.map((detail) => {
                      const Icon = detail.icon;
                      return (
                        <div key={detail.label} className="flex gap-3">
                          <Icon aria-hidden className="mt-0.5 size-4 shrink-0 text-teal" strokeWidth={1.8} />
                          <div>
                            <dt className="text-sm font-medium text-navy-ink">{detail.label}</dt>
                            <dd className="mt-1 text-sm text-muted-foreground">
                              <Placeholder className="break-all">{detail.placeholder}</Placeholder>
                            </dd>
                          </div>
                        </div>
                      );
                    })}
                  </dl>
                </div>
              </div>

              <div className="bg-white/45 p-6 sm:p-8 lg:p-10">
                <h2 className="font-heading text-2xl font-semibold text-navy-ink">
                  Send us a message.
                </h2>
                <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
                  Share a few details and the right member of our team will respond within{" "}
                  <Placeholder>response time</Placeholder>.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </div>

            <div className="border-t border-navy/8 p-3 sm:p-4">
              <div className="mb-3 flex flex-col gap-2 px-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-navy-ink">Demo office location</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <Placeholder>office address</Placeholder>
                  </p>
                </div>
                <a
                  href="https://www.openstreetmap.org/?mlat=19.0677&mlon=72.8694#map=15/19.0677/72.8694"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-teal hover:underline"
                >
                  Open larger map ↗
                </a>
              </div>
              <iframe
                title="Demo office location in Bandra Kurla Complex, Mumbai"
                src="https://www.openstreetmap.org/export/embed.html?bbox=72.8494%2C19.0477%2C72.8894%2C19.0877&layer=mapnik&marker=19.0677%2C72.8694"
                loading="lazy"
                className="h-80 w-full rounded-[1.5rem] border-0 bg-muted sm:h-96"
              />
            </div>
          </div>
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

import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/forms/contact-form";
import { ImageSlot } from "@/components/image-slot";
import { Placeholder } from "@/components/placeholder";
import { CTABand } from "@/components/sections/cta-band";
import { SectionHeaderBar } from "@/components/sections/section-header-bar";
import { getContactDetails } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Exploring certification, considering partnership, or have a question about the programme? We'd like to hear from you.",
};

// Fallbacks, used for any field the admin has not filled in at
// /admin/website-content -> Contact. They are also what shows if CertifyDB is
// unreachable.
const DEFAULT_ADDRESS =
  "315, Building 1, Millenium Business Park, Sector 2, Mahape, Navi Mumbai, Maharashtra 400710";
const DEFAULT_PHONE = "+91 82913 88546";
const DEFAULT_MAP_URL =
  "https://www.openstreetmap.org/?mlat=19.108618&mlon=73.019613#map=16/19.108618/73.019613";
const DEFAULT_PARTNER_SITES = [
  { name: "CertifyDB", href: "https://certifydb.com" },
  { name: "Better Earth Workplace", href: "https://betterearthworkplace.com" },
];

export default async function ContactPage() {
  const contact = await getContactDetails();

  const officeAddress = contact.address ?? DEFAULT_ADDRESS;
  const contactPhone = contact.phone ?? DEFAULT_PHONE;
  const mapUrl = contact.mapUrl ?? DEFAULT_MAP_URL;
  const partnerSites = contact.partnerSites ?? DEFAULT_PARTNER_SITES;

  // A field with no published value keeps its <Placeholder>, which is what the
  // page did before any of this was editable.
  const contactDetails = [
    { label: "Phone", value: contactPhone, icon: Phone, tone: "bg-mint/75 text-teal" },
    { label: "Office address", value: officeAddress, icon: MapPin, tone: "bg-sky/70 text-navy" },
    contact.email
      ? { label: "Email", value: contact.email, icon: Mail, tone: "bg-butter/55 text-gold-ink" }
      : { label: "Email", placeholder: "contact email", icon: Mail, tone: "bg-butter/55 text-gold-ink" },
    contact.hours
      ? { label: "Hours", value: contact.hours, icon: Clock, tone: "bg-coral/10 text-[#9a4635]" }
      : { label: "Hours", placeholder: "business hours", icon: Clock, tone: "bg-coral/10 text-[#9a4635]" },
  ];

  return (
    <>
      <SectionHeaderBar label="Contact" />

      {/* HERO — copy on the page, photo in its own panel alongside */}
      <section
        data-standard-layout
        className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.7fr] lg:items-center lg:px-8"
      >
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-navy/12 bg-sky/40 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-navy-ink">
            <span className="size-2 rounded-full bg-teal" />
            Direct Advisory &amp; Enquiries
          </span>

          <h1 className="mt-5 max-w-3xl font-heading text-4xl font-bold tracking-tight text-navy-ink sm:text-5xl">
            Let&apos;s talk.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Whether you&apos;re exploring certification, considering partnership, or simply have a
            question, we&apos;d like to hear from you. We respond to every enquiry within{" "}
            {contact.responseTime ?? (
              <Placeholder className="border-0 bg-transparent px-0 py-0">response time</Placeholder>
            )}
            .
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-navy/8 pt-6 text-sm font-medium text-muted-foreground">
            <span className="flex items-center gap-2.5">
              <span className="size-2 rounded-full bg-teal" />
              Dedicated partner advisors
            </span>
            <span className="flex items-center gap-2.5">
              <span className="size-2 rounded-full bg-gold" />
              48-hour response SLA
            </span>
            <span className="flex items-center gap-2.5">
              <span className="size-2 rounded-full bg-sky" />
              Confidential scoping
            </span>
          </div>
        </div>

        <ImageSlot
          contentKey="contact the programme team"
          alt="The Organisation of Choice advisory and partnership team in a consultation meeting"
          src="/images/editorial/contact-team-advisory.png"
          aspect="4/3"
          priority
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="rounded-[2.25rem] bg-white shadow-[0_28px_80px_rgba(23,50,77,0.1)]"
        />
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
                  Reach the programme team directly, or visit the partner sites behind the
                  programme.
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
                          {"value" in detail ? (
                            detail.value
                          ) : (
                            <Placeholder
                              className={
                                detail.label === "Email"
                                  ? "text-[0.7em] [overflow-wrap:anywhere]"
                                  : undefined
                              }
                            >
                              {detail.placeholder}
                            </Placeholder>
                          )}
                        </dd>
                      </div>
                    );
                  })}
                </dl>

                <div className="mt-8 border-t border-navy/8 pt-6">
                  <h3 className="text-sm font-semibold text-navy-ink">Our partner websites</h3>
                  <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                    {partnerSites.map((site) => (
                      <li key={site.name}>
                        <a
                          href={site.href}
                          target="_blank"
                          rel="noreferrer"
                          className="group block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
                        >
                          <ImageSlot
                            contentKey={`partner logo — ${site.name}`}
                            alt={`${site.name} logo`}
                            sizes="(min-width: 1024px) 20vw, (min-width: 640px) 25vw, 50vw"
                          />
                          <span className="mt-2 block text-sm font-medium text-navy-ink group-hover:underline">
                            {site.name} ↗
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white/45 p-6 sm:p-8 lg:p-10">
                <h2 className="font-heading text-2xl font-semibold text-navy-ink">
                  Send us a message.
                </h2>
                <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
                  Share a few details and the right member of our team will respond within{" "}
                  {contact.responseTime ?? <Placeholder>response time</Placeholder>}.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </div>

            <div className="border-t border-navy/8 p-3 sm:p-4">
              <div className="mb-3 flex flex-col gap-2 px-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-navy-ink">Office location</p>
                  <p className="mt-1 text-sm text-muted-foreground">{officeAddress}</p>
                </div>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-teal hover:underline"
                >
                  Open larger map ↗
                </a>
              </div>
              <iframe
                title="Office location in Millenium Business Park, Mahape"
                src="https://www.openstreetmap.org/export/embed.html?bbox=72.999613%2C19.088618%2C73.039613%2C19.128618&layer=mapnik&marker=19.108618%2C73.019613"
                loading="lazy"
                className="h-80 w-full rounded-[1.5rem] border-0 bg-muted sm:h-96"
              />
            </div>
          </div>
        </div>
      </section>

      <CTABand
        heading="Ready when you are."
        body="The fastest way to explore certification is simply to apply. It's free, and it creates no obligation."
        primaryCta={{ label: "Apply for Certification", href: "/employers#apply" }}
      />
    </>
  );
}

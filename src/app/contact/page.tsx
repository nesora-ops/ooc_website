import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/forms/contact-form";
import { ImageSlot } from "@/components/image-slot";
import { Placeholder, Rich } from "@/components/placeholder";
import { CTABand } from "@/components/sections/cta-band";
import { SectionHeaderBar } from "@/components/sections/section-header-bar";
import { contactDefaults } from "@/content/pages/contact";
import { getContactDetails, getFormCopy, getPage } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("contact", contactDefaults);
  return { title: page.metaTitle, description: page.metaDescription };
}

// Fallbacks, used for any field the admin has not filled in at
// /admin/website-content -> Contact. They are also what shows if CertifyDB is
// unreachable.
const DEFAULT_ADDRESS =
  "315, Building 1, Millenium Business Park, Sector 2, Mahape, Navi Mumbai, Maharashtra 400710";
const DEFAULT_PHONE = "+91 82913 88546";
const DEFAULT_MAP_URL =
  "https://www.openstreetmap.org/?mlat=19.108618&mlon=73.019613#map=16/19.108618/73.019613";
const DEFAULT_MAP_EMBED_URL =
  "https://www.openstreetmap.org/export/embed.html?bbox=72.999613%2C19.088618%2C73.039613%2C19.128618&layer=mapnik&marker=19.108618%2C73.019613";
const DEFAULT_PARTNER_SITES: { name: string; href: string; logoUrl?: string }[] = [
  { name: "CertifyDB", href: "https://certifydb.com" },
  { name: "Better Earth Workplace", href: "https://betterearthworkplace.com" },
];

const POINT_DOTS = ["bg-teal", "bg-gold", "bg-sky"];

export default async function ContactPage() {
  const [page, contact] = await Promise.all([getPage("contact", contactDefaults), getContactDetails()]);
  const formCopy = await getFormCopy(page.formSuccessTitle, page.formSuccessMessage);

  const officeAddress = contact.address ?? DEFAULT_ADDRESS;
  const contactPhone = contact.phone ?? DEFAULT_PHONE;
  const mapUrl = contact.mapUrl ?? DEFAULT_MAP_URL;
  const mapEmbedUrl = contact.mapEmbedUrl ?? DEFAULT_MAP_EMBED_URL;
  const partnerSites = contact.partnerSites ?? DEFAULT_PARTNER_SITES;

  // A field with no published value keeps its <Placeholder>, which is what the
  // page did before any of this was editable. A published response time is
  // written in as plain text, as before; otherwise {response time} stays a
  // placeholder filled from Site-wide settings.
  const withResponseTime = (text: string) =>
    contact.responseTime ? text.replaceAll("{response time}", contact.responseTime) : text;
  const contactDetails = [
    { label: page.phoneLabel, value: contactPhone, icon: Phone, tone: "bg-mint/75 text-teal" },
    { label: page.addressLabel, value: officeAddress, icon: MapPin, tone: "bg-sky/70 text-navy" },
    contact.email
      ? { label: page.emailLabel, value: contact.email, icon: Mail, tone: "bg-butter/55 text-gold-ink" }
      : { label: page.emailLabel, placeholder: "contact email", icon: Mail, tone: "bg-butter/55 text-gold-ink" },
    contact.hours
      ? { label: page.hoursLabel, value: contact.hours, icon: Clock, tone: "bg-coral/10 text-[#9a4635]" }
      : { label: page.hoursLabel, placeholder: "business hours", icon: Clock, tone: "bg-coral/10 text-[#9a4635]" },
  ];

  return (
    <>
      <SectionHeaderBar label={page.breadcrumb} />

      {/* HERO — copy on the page, photo in its own panel alongside */}
      <section
        data-standard-layout
        className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.7fr] lg:items-center lg:px-8"
      >
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-navy/12 bg-sky/40 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-navy-ink">
            <span className="size-2 rounded-full bg-teal" />
            {page.heroBadge}
          </span>

          <h1 className="mt-5 max-w-3xl font-heading text-4xl font-bold tracking-tight text-navy-ink sm:text-5xl">
            {page.heroTitle}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            <Rich text={withResponseTime(page.heroIntro)} />
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-navy/8 pt-6 text-sm font-medium text-muted-foreground">
            {page.heroPoints.map((point, index) => (
              <span key={index} className="flex items-center gap-2.5">
                <span className={`size-2 rounded-full ${POINT_DOTS[index % POINT_DOTS.length]}`} />
                {point.label}
              </span>
            ))}
          </div>
        </div>

        <ImageSlot
          contentKey="contact the programme team"
          alt={page.heroImageAlt}
          src={page.heroImage}
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
                  {page.infoTitle}
                </h2>
                <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
                  {page.infoIntro}
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
                                detail.icon === Mail
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
                  <h3 className="text-sm font-semibold text-navy-ink">{page.partnerSitesTitle}</h3>
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
                            src={site.logoUrl}
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
                  {page.formTitle}
                </h2>
                <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
                  <Rich text={withResponseTime(page.formIntro)} />
                </p>
                <div className="mt-8">
                  <ContactForm copy={formCopy} />
                </div>
              </div>
            </div>

            <div className="border-t border-navy/8 p-3 sm:p-4">
              <div className="mb-3 flex flex-col gap-2 px-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-navy-ink">{page.mapTitle}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{officeAddress}</p>
                </div>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-teal hover:underline"
                >
                  {page.mapLinkLabel}
                </a>
              </div>
              <iframe
                title={page.mapFrameTitle}
                src={mapEmbedUrl}
                loading="lazy"
                className="h-80 w-full rounded-[1.5rem] border-0 bg-muted sm:h-96"
              />
            </div>
          </div>
        </div>
      </section>

      <CTABand
        heading={page.ctaTitle}
        body={page.ctaBody}
        primaryCta={{ label: page.ctaPrimaryLabel, href: page.ctaPrimaryHref }}
      />
    </>
  );
}

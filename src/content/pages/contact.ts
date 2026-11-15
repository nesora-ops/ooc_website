/**
 * Contact page (/contact) built-in copy: the words around the company details.
 * Editable in CertifyDB → Website Content → Contact page (module
 * "page-contact"); a blank field there keeps the text below. The phone,
 * address, email, hours, response time, map and partner websites themselves are
 * the Contact module.
 *
 * Plain data with no imports: CertifyDB's seed script imports this file.
 */
export const contactDefaults = {
  breadcrumb: "Contact",

  // Hero
  heroBadge: "Direct Advisory & Enquiries",
  heroTitle: "Let's talk.",
  heroIntro:
    "Whether you're exploring certification, considering partnership, or simply have a question, we'd like to hear from you. We respond to every enquiry within {response time}.",
  heroPoints: [
    { label: "Dedicated partner advisors" },
    { label: "48-hour response SLA" },
    { label: "Confidential scoping" },
  ],
  heroImage: "/images/editorial/contact-team-advisory.png",
  heroImageAlt:
    "The Organisation of Choice advisory and partnership team in a consultation meeting",

  // Company information
  infoTitle: "Company information.",
  infoIntro: "Reach the programme team directly, or visit the partner sites behind the programme.",
  phoneLabel: "Phone",
  addressLabel: "Office address",
  emailLabel: "Email",
  hoursLabel: "Hours",
  partnerSitesTitle: "Our partner websites",

  // Message form
  formTitle: "Send us a message.",
  formIntro:
    "Share a few details and the right member of our team will respond within {response time}.",
  formSuccessTitle: "Thank you. Your message is on its way.",
  formSuccessMessage:
    "A member of the team will come back to you within {response time}. If your question is about certification, you may find an immediate answer on our certification page.",

  // Map
  mapTitle: "Office location",
  mapLinkLabel: "Open larger map ↗",
  mapFrameTitle: "Office location in Millenium Business Park, Mahape",

  // Closing call to action
  ctaTitle: "Ready when you are.",
  ctaBody:
    "The fastest way to explore certification is simply to apply. It's free, and it creates no obligation.",
  ctaPrimaryLabel: "Apply for Certification",
  ctaPrimaryHref: "/employers#apply",

  // SEO
  metaTitle: "Contact",
  metaDescription:
    "Exploring certification, considering partnership, or have a question about the programme? We'd like to hear from you.",
};

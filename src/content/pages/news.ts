/**
 * News & Press page (/news) built-in copy. Editable in CertifyDB → Website
 * Content → News & Press (module "page-news"); a blank field there keeps the
 * text below. {available on request} is filled from Site-wide settings.
 *
 * Plain data with no imports: CertifyDB's seed script imports this file.
 */
export const newsDefaults = {
  breadcrumb: "News & Press",

  // Hero
  heroTitle: "News & press.",
  heroIntro:
    "Programme announcements, newly certified organisations, and resources for journalists covering the changing world of work.",
  heroImage: "/images/editorial/news-press-hero.png",
  heroImageAlt: "Paper-craft illustration of a newspaper, microphone, press badge, and pen",

  // Media kit
  mediaKitTitle: "Everything a clear story needs.",
  boilerplateQuote:
    "“Organisation of Choice™ is an independent workplace certification programme that turns workplace culture, systems, and employee experience into verified proof.”",
  boilerplateNote:
    "Approved short description for press use. The programme operates across India, certifies at Silver, Gold, Platinum, and Diamond, and lists every current outcome publicly.",
  mediaKitItems: [
    { title: "Programme boilerplate", body: "Approved long-form description and key facts." },
    { title: "Founder biography", body: "Background, designation, and interview context." },
    { title: "Logos & imagery", body: "Usage guidance and approved visual assets." },
  ],
  logoLockupImage: "",
  logoLockupImageAlt: "Approved Organisation of Choice logo lockups",
  mediaKitNote: "Complete media kit: {available on request}",

  // Media enquiry form
  formSuccessTitle: "Thank you. We have your enquiry.",
  formSuccessMessage: "If you've indicated a deadline, we'll prioritise accordingly.",

  // SEO
  metaTitle: "News & Press",
  metaDescription:
    "Programme announcements, newly certified organisations, and resources for journalists covering the changing world of work.",
};

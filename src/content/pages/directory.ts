/**
 * For Job Seekers page (/directory) built-in copy. Editable in CertifyDB →
 * Website Content → For Job Seekers (module "page-directory"); a blank field
 * there keeps the text below. The level descriptions in the directory come
 * from the Certification levels list; the employers from CertifyDB itself.
 *
 * Plain data with no imports: CertifyDB's seed script imports this file.
 */
export const directoryDefaults = {
  breadcrumb: "For Job Seekers",

  // Hero
  heroImage: "/images/editorial/job-seeker-research.png",
  heroImageAlt: "A professional calmly researching employers on a laptop",
  heroEyebrow: "Verified Directory",
  heroTitle: "Choose your next employer on proof, not promises.",
  heroIntro: "Every listed employer has earned independent, annually verified workplace certification.",
  heroButtonLabel: "Search the directory",
  heroButtonHref: "#directory",

  // Why it matters
  whyTitle: "Replace polished promises with a better starting point.",
  claimWord: "“Great culture”",
  claimTitle: "What an employer says",
  claimBody:
    "Careers pages, interviews, and reviews can be useful, but they are polished, selective, or difficult to verify.",
  proofWord: "Verified",
  proofTitle: "What the evidence supports",
  proofBody:
    "Confidential employee input, leadership evidence, independent assessment, a published standard, and annual verification.",
  whyDetailsLabel: "Why independent proof matters",
  whyDetails:
    "Silver confirms strong foundations, Gold shows mature systems and a positive employee experience, Platinum recognises advanced consistency, and Diamond marks a workplace others can benchmark against.\n\nCertification does not replace your judgement. It gives you verified evidence before you interview, ask hard questions, and decide whether the organisation is right for you.",

  // How to use the directory
  usesTitle: "Search. Compare. Verify.",
  uses: [
    {
      lead: "Research an offer.",
      summary: "Check the employer’s verified level, scope, and validity before you decide.",
      body: "Weighing an offer in hand? Search the organisation. If it's certified, you'll see its level, certified scope, and validity, independent context no interview will give you.",
    },
    {
      lead: "Discover employers worth watching.",
      summary: "Build a shortlist using industry, location, and certification level.",
      body: "Filter by industry, location, and certification level to build a shortlist of organisations that have proven their standards, including strong employers you may never have heard of.",
    },
    {
      lead: "Verify a claim.",
      summary: "Confirm that an OOC mark is current and authorised.",
      body: "If an employer displays the OOC mark, confirm it here. Every legitimate certification appears in this directory with its scope and validity period; if it isn't listed, it isn't certified.",
    },
  ],

  // The directory
  directoryEyebrow: "Directory",
  directoryTitle: "Certified Employer Directory.",
  directoryIntro:
    "Filter the directory, then read the clearly labelled certification tier on each employer card.",
  searchLabel: "Search by organisation name",
  searchPlaceholder: "Organisation name",
  industryLabel: "Industry",
  locationLabel: "Location",
  levelLabel: "Certification level",
  resultsLabel: "certified organisations",
  emptyMessage:
    "No certified employers match your current filters. Try widening your search, or check back soon: new organisations are certified throughout the year.",
  cardLevelSuffix: "certification",
  cardScopeLabel: "Scope:",

  // Closing call to action
  ctaTitle: "Represent an employer that belongs here?",
  ctaBody: "Certification starts with a simple application.",
  ctaPrimaryLabel: "Get your organisation certified",
  ctaPrimaryHref: "/employers#apply",

  // SEO
  metaTitle: "For Job Seekers & Certified Employer Directory",
  metaDescription:
    "Every organisation in this directory has earned independent certification of its workplace, assessed on evidence, verified annually, and never for sale.",
};

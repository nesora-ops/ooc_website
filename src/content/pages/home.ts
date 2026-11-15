/**
 * Home page (/) built-in copy. Editable in CertifyDB → Website Content → Home
 * (module "page-home"); a blank field there keeps the text below. The four
 * level cards come from the Certification levels list, the insight cards from
 * the Blog.
 *
 * Plain data with no imports: CertifyDB's seed script imports this file.
 */
export const homeDefaults = {
  breadcrumb: "Home",

  // Hero
  heroEyebrow: "Independent workplace certification",
  heroTitleLine1: "Be an Organisation",
  heroTitleLine2: "of",
  heroTitleAccent: "Choice.",
  heroIntro:
    "The independent workplace certification that proves your commitment to your people, backed by rigorous multi-stakeholder assessment, not self-declaration.",
  heroPrimaryLabel: "Apply for Certification",
  heroPrimaryHref: "/employers#apply",
  heroSecondaryLabel: "Explore Certified Employers",
  heroSecondaryHref: "/directory",

  // Hero panel (three cards under the hero)
  panelAssessmentEyebrow: "Independent assessment",
  panelAssessmentText: "Earned through evidence, never self-declared.",
  panelVoicesTitle: "Every perspective matters",
  panelVoices: [{ label: "Employees" }, { label: "Leadership" }, { label: "Independent assessors" }],
  panelPathwayTitle: "A visible pathway",
  panelPathwayText: "Silver. Gold. Platinum. Diamond.",

  // Trust strip (scrolling)
  trustItems: [
    { label: "Independent, third-party assessment" },
    { label: "Multi-stakeholder evaluation" },
    { label: "Annual verification" },
    { label: "Published standard" },
    { label: "Evidence before outcome" },
  ],

  // Why OOC exists
  whyEyebrow: "Why OOC exists",
  whyTitle: "Certification that means something.",
  whyIntro: "OOC certifies employers who invest in their people, verified through evidence, not self-declaration.",
  whyTagline: "It's not just a badge. It's proof.",
  whyDetailsLabel: "Read the full detail",
  whyDetails:
    "Certification is earned through structured, multi-stakeholder assessment. Employees, leadership, and independent assessors all contribute evidence, verified by people with no stake in the outcome.",
  whyImage: "/images/editorial/workplace-collaboration.png",
  whyImageAlt: "A workplace team discussing ideas together around a table",

  // Find your route
  routeEyebrow: "Find your route",
  routeTitle: "One standard. Three ways in.",
  routeCards: [
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
  ],

  // The business case
  benefitsEyebrow: "The business case",
  benefitsTitle: "Being an Organisation of Choice pays in more than one way.",
  benefits: [
    {
      title: "Proof, not promises.",
      body: "Candidates have learned to discount culture claims on careers pages. Independent certification provides evidence they can verify before applying.",
    },
    {
      title: "Protect what you have built.",
      body: "Certification benchmarks your people practices against a rigorous standard, showing where to invest to retain key talent.",
    },
    {
      title: "Strengthen client confidence.",
      body: "Clients, investors, and boards increasingly scrutinise workplace standards. The OOC mark demonstrates operational maturity.",
    },
    {
      title: "Improve with evidence.",
      body: "Turn assessment evidence into a practical report with benchmarks and prioritised recommendations.",
    },
  ],

  // How it works
  stepsEyebrow: "How it works",
  stepsTitle: "Three steps to certification.",
  stepsIntro: "A clear path from application to independently verified recognition.",
  stepsButtonLabel: "Apply for Certification",
  stepsButtonHref: "/employers#apply",
  steps: [
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
  ],

  // Certification levels
  levelsEyebrow: "Certification levels",
  levelsTitle: "A pathway, not just a plaque.",
  levelsIntro:
    "Wherever you start, the framework shows you the path to the next level. Four ascending tiers recognizing foundational compliance through to industry-defining excellence.",
  levelsButtonLabel: "Explore all criteria",
  levelsButtonHref: "/certification",
  levelsTierLabel: "Tier",

  // Testimonials
  testimonialsEyebrow: "Certified voices",
  testimonialsTitle: "What certified organisations say.",
  testimonials: [
    {
      quote:
        "The assessment gave us a clear, practical view of where our employee experience was strong and where to act next.",
      name: "Naina Rao",
      role: "People Director · Northstar Works",
      initials: "NR",
      avatar: "",
    },
    {
      quote:
        "The report helped our leadership team turn employee feedback into a focused plan for managers and teams.",
      name: "Emily Fernandes",
      role: "HR Director · Meridian Studio",
      initials: "EF",
      avatar: "",
    },
    {
      quote:
        "The process was structured, thoughtful, and clear from evidence gathering through to the final recommendations.",
      name: "Sophia Malik",
      role: "Head of People · Fieldwork Labs",
      initials: "SM",
      avatar: "",
    },
    {
      quote:
        "Certification gave candidates and employees an independent way to understand the workplace we are building.",
      name: "Michael Thomas",
      role: "Talent Lead · Common Ground",
      initials: "MT",
      avatar: "",
    },
  ],

  // Latest insights (the cards are the three newest blog posts)
  insightsEyebrow: "Latest insights",
  insightsTitle: "Ideas worth working with.",
  insightsLinkLabel: "Visit the resource hub",
  insightsLinkHref: "/resources",
  insightsCardLabel: "Insight",

  // The certification mark
  markEyebrow: "The certification mark",
  markTitle: "Earned, not bought.",
  markBody:
    "Certified employers display the Organisation of Choice seal across careers pages, job adverts, and offer letters. It signals an independent assessment, valid for twelve months.",
  markPrimaryLabel: "Brand guidelines",
  markPrimaryHref: "/badge",
  markSecondaryLabel: "Verify a seal",
  markSecondaryHref: "/directory",

  // Closing call to action
  ctaTitle: "Ready to prove you are an Organisation of Choice?",
  ctaBody: "Turn your culture into certified public proof. Let the right talent find you.",
  ctaPrimaryLabel: "Apply for Certification",
  ctaPrimaryHref: "/employers#apply",
  ctaSecondaryLabel: "Explore Certified Employers",
  ctaSecondaryHref: "/directory",

  // SEO
  metaTitle: "Organisation of Choice",
  metaDescription:
    "The independent workplace certification that proves your commitment to your people, backed by rigorous multi-stakeholder assessment, not self-declaration.",
};

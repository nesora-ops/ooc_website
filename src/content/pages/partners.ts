/**
 * Channel Partners page (/partners) built-in copy. Editable in CertifyDB →
 * Website Content → Partners (module "page-partners"); a blank field there
 * keeps the text below. The four tier cards come from the Certification levels
 * list (its partner tier fields).
 *
 * {response time}, {partner commercial terms} and {tier advancement criteria}
 * are filled from Contact and Site-wide settings.
 *
 * Plain data with no imports: CertifyDB's seed script imports this file.
 */
export const partnersDefaults = {
  breadcrumb: "Channel Partners",

  // Hero
  heroTitle: "Grow your practice by growing great workplaces.",
  heroIntro:
    "Bring independent workplace certification to the clients you already advise, adding credible client value and a recurring revenue stream in the same move.",
  heroButtonLabel: "Apply to Partner",
  heroButtonHref: "#apply",
  heroImage: "/images/editorial/partner-advisory.png",
  heroImageAlt: "Three professional advisors discussing a workplace programme together",

  // Why partner
  whyTitle: "Turn trusted advice into visible client value.",
  whyIntro: "Add a certification pathway to your client work, with built-in commercial value.",
  adviceEyebrow: "Advice becomes action",
  adviceTitle: "The conversation is already happening. Certification gives it a credible next step.",
  adviceTopics: [
    { label: "Talent" },
    { label: "Retention" },
    { label: "Governance" },
    { label: "Compliance" },
    { label: "Brand" },
  ],
  adviceRows: [
    { label: "You bring", text: "The relationship and client context." },
    { label: "OOC brings", text: "The framework, platform, and independent assessment." },
    { label: "Clients gain", text: "A defined process, credible outcome, and visible value." },
  ],
  valueEyebrow: "Recurring commercial value",
  valueTitle: "One introduction. Value that can recur.",
  valueFlow: "Introduce → certify → renew",
  valueBody:
    "Partners earn a share of certification revenue for each client introduced, on {partner commercial terms}. Certification renewal means partner income can continue across the relationship.",
  supportEyebrow: "Supported, never conflicted",
  supportTitle: "Your expertise stays yours. Assessment stays ours.",
  supportListTitle: "Support for you",
  supportItems: [
    { label: "Programme training" },
    { label: "Co-branded materials" },
    { label: "A named contact" },
    { label: "Priority progress visibility" },
  ],
  independenceTitle: "Independent from you",
  independenceBody:
    "OOC owns evaluation, determination, and assessment risk, protecting your client relationship and the value of the mark they earn.",

  // Who we partner with
  whoTitleLine1: "Built for firms that",
  whoTitleLine2: "advise employers.",
  whoIntro: "If you serve employers and see the fit, tell us about your practice in the application.",
  partnerTypes: [
    { label: "HR & CSR consultants" },
    { label: "Chartered accountancy firms" },
    { label: "Company secretaries" },
    { label: "ESG advisors" },
    { label: "Green finance advisors" },
    { label: "Export consultants" },
    { label: "Legal firms" },
    { label: "Industry associations" },
  ],

  // Partner tiers
  tiersEyebrow: "Partner tiers",
  tiersTitle: "Four tiers. One standard.",
  tiersIntro:
    "All partners start at Silver and progress on results. Terms, enablement, and visibility grow with each tier. Advancement criteria: {tier advancement criteria}.",
  tiersDetailsLabel: "Full tier detail",

  // How partnership works
  stepsTitleLine1: "One route.",
  stepsTitleLine2: "Your first certified client.",
  stepsIntro:
    "Four clear handoffs take the partnership from application to a client relationship that keeps building.",
  steps: [
    {
      title: "Apply",
      description:
        "Share your firm, client base, and where you see the fit. Every application is reviewed; expect a response within {response time}.",
    },
    {
      title: "Onboard",
      description:
        "Complete programme training, receive the partner kit and commercial agreement, and meet your named programme contact.",
    },
    {
      title: "Introduce",
      description:
        "Identify a client that would benefit, make the introduction, and support their application with our team alongside you.",
    },
    {
      title: "Grow",
      description:
        "Each certified client builds your partnership record toward Gold, Platinum, and Diamond, and a client base backed by independent proof.",
    },
  ],

  // Partner application form
  applyEyebrow: "Partner application form",
  applyTitle: "Apply to become a partner.",
  applyIntro:
    "Tell us about your practice. We review every application individually and respond within {response time}.",
  formSuccessTitle: "Thank you. Your application is with us.",
  formSuccessMessage:
    "The partnerships team will review your details and respond within {response time}. We look forward to learning more about your practice.",

  // SEO
  metaTitle: "Channel Partners",
  metaDescription:
    "The OOC partner programme lets consultants, advisors, and professional firms bring independent workplace certification to the clients they already serve.",
};

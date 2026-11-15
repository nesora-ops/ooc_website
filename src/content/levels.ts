/**
 * The four certification levels, in one place. Each page describes them in its
 * own words, so each page's wording is its own field; the badge and name are
 * shared. Editable in CertifyDB under Website Content → Certification levels
 * (module "levels", one fixed entry per slug).
 *
 * Plain data with no imports: CertifyDB's seed script imports this file.
 */
export const levelDefaults = [
  {
    slug: "silver",
    name: "Silver",
    badge: "/images/brand/ooc-badge-silver.webp",
    homeNote: "Strong foundations",
    homeBody:
      "Recognises organisations with the essential people practices in place: compliant, fair, and well run.",
    certificationTitle: "Silver: Strong foundations.",
    certificationSummary: "Fair, compliant, and well-run with the essential people systems in place.",
    certificationBody:
      "Silver certification signifies a fair, compliant, well-run workplace: sound policies, essential people systems in place, and no failures on any mandatory criterion. It is the credible starting point, with a clear report showing the route to Gold.",
    certificationBenchmark: "Statutory compliance & core people systems",
    directoryDescription: "Strong workplace foundations",
    partnerTierName: "Silver tier.",
    partnerTierSummary: "Programme training, standard terms, and a named contact.",
    partnerTierBody:
      "The starting point for every partner: full programme training, the partner marketing kit, a named programme contact, and standard commercial terms on every client introduced.",
  },
  {
    slug: "gold",
    name: "Gold",
    badge: "/images/brand/ooc-badge-gold.webp",
    homeNote: "Engaged and improving",
    homeBody:
      "Recognises mature people systems, demonstrated employee engagement, and continuous improvement.",
    certificationTitle: "Gold: Engaged and improving.",
    certificationSummary: "Mature systems, positive employee experience, and systematic improvement.",
    certificationBody:
      "Gold certification signifies an organisation whose investment in people is producing measurable results: employees report a positive experience, people systems are mature and consistently applied, and improvement is systematic rather than occasional.",
    certificationBenchmark: "Mature systems & measured engagement",
    directoryDescription: "Mature systems and positive employee experience",
    partnerTierName: "Gold tier.",
    partnerTierSummary: "Enhanced terms, co-marketing, and priority support.",
    partnerTierBody:
      "For established partners with an active client pipeline: enhanced commercial terms, co-marketing opportunities including joint events and content, and priority programme support.",
  },
  {
    slug: "platinum",
    name: "Platinum",
    badge: "/images/brand/ooc-badge-platinum.webp",
    homeNote: "Advanced and consistent",
    homeBody:
      "Recognises industry-leading practices, outstanding employee experience, and exceptional employers.",
    certificationTitle: "Platinum: Advanced and consistent.",
    certificationSummary: "Industry-leading practices and an outstanding, consistent employee experience.",
    certificationBody:
      "Platinum certification recognises advanced workplaces with industry-leading practices, an outstanding and consistent employee experience, and evidence of innovation in how people are led, developed, and cared for.",
    certificationBenchmark: "Industry-leading & consistent execution",
    directoryDescription: "Advanced, consistent workplace practices",
    partnerTierName: "Platinum tier.",
    partnerTierSummary: "Advanced enablement, early access, and joint planning.",
    partnerTierBody:
      "For high-performing partners with a mature client portfolio: advanced commercial terms, early access to programme developments, joint planning, and greater public visibility.",
  },
  {
    slug: "diamond",
    name: "Diamond",
    badge: "/images/brand/ooc-badge-diamond.webp",
    homeNote: "A workplace others benchmark against",
    homeBody:
      "Recognises sustained excellence across people practices, employee experience, and organisational leadership.",
    certificationTitle: "Diamond: A workplace others benchmark against.",
    certificationSummary: "Sustained excellence across people practices, experience, and leadership.",
    certificationBody:
      "Diamond certification is the highest level of recognition, reserved for organisations that sustain exceptional evidence across the framework and provide a workplace standard others can benchmark against.",
    certificationBenchmark: "Benchmark standard for organisational leadership",
    directoryDescription: "A workplace others can benchmark against",
    partnerTierName: "Diamond tier.",
    partnerTierSummary: "Strategic terms, first access, and joint go-to-market leadership.",
    partnerTierBody:
      "The programme's strategic partners: the strongest commercial terms, first access to new certifications and programme developments, joint go-to-market planning, and public recognition as a Diamond-tier partner of Organisation of Choice™.",
  },
];

export type Level = (typeof levelDefaults)[number];

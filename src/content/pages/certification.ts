/**
 * Certification page (/certification) built-in copy. Editable in CertifyDB →
 * Website Content → Certification (module "page-certification"); a blank field
 * there keeps the text below. The four level cards come from the Certification
 * levels list, the questions from the FAQ.
 *
 * {duration} and {level thresholds} are filled from Site-wide settings.
 *
 * Plain data with no imports: CertifyDB's seed script imports this file.
 */
export const certificationDefaults = {
  breadcrumb: "The Certification",

  // Hero
  heroTitle: "Certification you can stand behind.",
  heroIntro:
    "Every OOC certification comes from structured, multi-stakeholder assessment. Here is exactly how it works.",

  // What we assess
  assessTitle: "Built systems meet lived experience.",
  assessExistsTitle: "What exists.",
  assessExistsBody:
    "Policies, systems, leadership practices, learning, wellbeing, fairness, and the evidence that holds them together.",
  assessBadgeLine1: "OOC",
  assessBadgeLine2: "proof",
  assessExperiencedTitle: "What is experienced.",
  assessExperiencedBody:
    "Confidential employee input, leadership responses, and independent evaluation of how those systems work in practice.",
  assessDetailsLabel: "See every assessment dimension",
  assessDetails:
    "The framework covers leadership and culture; policies and fairness; compensation and benefits; learning and career development; wellbeing and safety; diversity, equity and inclusion; communication and voice; and the systems that connect them.\n\nEvidence comes from multiple groups. Mandatory fundamentals act as gates, so a policy that exists on paper but fails in practice cannot be hidden by a strong score elsewhere.",

  // The assessment process
  processTitle: "Five checkpoints. One defensible outcome.",
  processImage: "/images/editorial/assessment-process.webp",
  processOpenLabel: "View detail",
  processCloseLabel: "Hide detail",
  processStages: [
    {
      title: "Application & scoping",
      duration: "{duration}",
      summary: "Choose the organisation, locations, divisions, or entities to be certified.",
      detail: "We confirm eligibility, agree the assessment plan, and set the timeline with you.",
      imagePosition: "0% 50%",
    },
    {
      title: "Evidence & self-assessment",
      duration: "{duration}",
      summary: "Complete the structured self-assessment and upload supporting evidence.",
      detail: "Our team reviews submissions as they arrive, so gaps surface early rather than at the end.",
      imagePosition: "24% 50%",
    },
    {
      title: "Multi-stakeholder assessment",
      duration: "{duration}",
      summary: "Employees, leadership, and independent assessors contribute distinct evidence.",
      detail:
        "Employee input is confidential, leadership responses are verified, and no result rests on one voice.",
      imagePosition: "47% 50%",
    },
    {
      title: "Review & determination",
      duration: "{duration}",
      summary: "The lead assessor consolidates inputs and applies the published scoring model.",
      detail: "Mandatory gates are checked and the outcome is determined solely by the evidence.",
      imagePosition: "70% 50%",
    },
    {
      title: "Certification & beyond",
      duration: "Ongoing",
      summary: "Receive the level, report, benchmarks, directory listing, and OOC mark.",
      detail:
        "Annual verification and full reassessment keep the certification current and credible.",
      imagePosition: "100% 50%",
    },
  ],

  // Certification levels
  levelsEyebrow: "Certification levels",
  levelsTitle: "The four levels of certification.",
  levelsIntro:
    "Published thresholds applied identically to every organisation. A visible progression from verified foundations to peak industry benchmarks.",
  levelsImage: "/images/editorial/certification-levels.png",
  levelsImageAlt:
    "Four ascending certification medallions representing Silver, Gold, Platinum, and Diamond",
  levelsPanelEyebrow: "Progressive Framework",
  levelsPanelTitle: "Four rigorous standards. One unified mark.",
  levelsPanelBody:
    "Every level requires meeting mandatory ethical and statutory baselines. Higher tiers represent systematic culture investment, verified stakeholder consensus, and sustained operational quality.",
  levelsCardLabel: "Level",
  levelsDetailsLabel: "Detailed requirements",

  // Scoring and criteria
  scoringEyebrow: "Scoring & criteria",
  scoringTitle: "How scoring works.",
  scoringImage: "/images/editorial/scoring-criteria.png",
  scoringImageAlt:
    "Paper-craft clipboard with four coloured scoring bars, a magnifying glass, and checkmarks",
  scoringIntro:
    "Combined stakeholder evidence maps to published level thresholds, while mandatory criteria protect the credibility of every outcome.",
  scoringDetailsLabel: "Read the scoring methodology",
  scoringDetails:
    "Every section of the framework is scored from the combined input of all assessor groups, and section scores aggregate into an overall result that maps to a certification level. Thresholds for Silver, Gold, Platinum, and Diamond are published and applied identically to every organisation: {level thresholds}.\n\nMandatory criteria operate independently of the score. These are the non-negotiables of a legitimate workplace, covering legal compliance, safety, and fair treatment. An organisation that does not meet them cannot be certified at any level, regardless of its performance elsewhere. This is what keeps every OOC certification meaningful.\n\nAlongside the outcome, every assessed organisation receives its full scoring summary: section-by-section results, benchmarks against comparable organisations, and the lead assessor's prioritised recommendations. Organisations that fall short of certification receive the same detailed report, and may be reassessed after addressing the gaps, because the purpose of the framework is better workplaces, not gatekeeping for its own sake.",

  // FAQ
  faqTitle: "Frequently asked questions.",

  // Closing call to action
  ctaTitle: "See where your organisation stands.",
  ctaBody:
    "The assessment tells you what your people already know, and shows the world what you've built.",
  ctaPrimaryLabel: "Apply for Certification",
  ctaPrimaryHref: "/employers#apply",

  // SEO
  metaTitle: "The Certification",
  metaDescription:
    "How OOC certification works: what we assess, the stage-by-stage assessment process, the four certification levels, and how scoring is applied.",
};

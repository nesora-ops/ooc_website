// Glossary data (PRD §7.7c: 16 terms, alphabetical, term + definition).
// Terms and definitions are verbatim from the source doc
// (758ab571-OOCWebsiteContentConsolidated.pdf, Glossary section).

export type GlossaryTerm = {
  term: string;
  definition: string;
  /** Trailing `[PLACEHOLDER; ...]` marker where the source doc leaves one. */
  definitionPlaceholder?: string;
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Assessment scope",
    definition:
      "The defined boundary of a certification — the whole organisation, or specific locations, divisions, or entities. The scope always appears alongside the certification in the public directory.",
  },
  {
    term: "Assessor group",
    definition:
      "One of the distinct perspectives contributing evidence to an assessment — including employees, leadership, and independent assessors. Every section of the framework draws on multiple assessor groups.",
  },
  {
    term: "Certification level",
    definition:
      "The tier awarded on certification — Silver, Gold, Platinum, or Diamond — reflecting the overall assessment result against published thresholds.",
  },
  {
    term: "Certification mark",
    definition:
      "The Organisation of Choice™ badge licensed to certified employers for use across their employer brand during the validity period.",
  },
  {
    term: "Certified Employer Directory",
    definition:
      "The public register of all current OOC certifications, searchable by industry, location, and level. If a certification is valid, it appears here.",
  },
  {
    term: "Employee experience",
    definition:
      "How employees actually encounter the workplace day to day — distinct from what policies say. OOC assessment measures both, and weights lived experience heavily.",
  },
  {
    term: "Employer brand",
    definition:
      "An organisation's reputation as a place to work, as perceived by candidates, employees, and alumni. Certification converts internal reality into external, verifiable brand evidence.",
  },
  {
    term: "Employer of choice",
    definition:
      "A widely used HR term for an organisation that talent actively prefers. Organisation of Choice™ certification makes the claim testable.",
  },
  {
    term: "Independent assessment",
    definition:
      "Evaluation conducted by assessors with no commercial stake in the outcome, against published criteria. The foundation of the OOC programme's credibility.",
  },
  {
    term: "Lead assessor",
    definition:
      "The accountable assessor who consolidates all evidence, applies the scoring model, and signs the declaration behind every certification decision.",
  },
  {
    term: "Mandatory criteria",
    definition:
      "Non-negotiable requirements — typically matters of legal compliance, safety, and fair treatment — that must be met in full for certification at any level, regardless of scores elsewhere.",
  },
  {
    term: "Multi-stakeholder assessment",
    definition:
      "The OOC methodology of gathering structured evidence from several assessor groups for every assessed area, so that no certification rests on a single perspective.",
  },
  {
    term: "Reassessment",
    definition:
      "The full assessment conducted at the end of a certification's validity period, which renews the certification and can move an organisation to a higher level.",
  },
  {
    term: "Scoring summary",
    definition:
      "The consolidated results document showing section-by-section scores, benchmarks, and the overall determination — provided in full to the assessed organisation.",
  },
  {
    // Source doc leaves the validity period itself as a placeholder; the
    // trailing marker is rendered via <Placeholder> on the glossary page.
    term: "Validity period",
    definition:
      "The period for which a certification remains current, subject to annual verification:",
    definitionPlaceholder: "validity period",
  },
  {
    term: "Verification (annual)",
    definition:
      "The yearly check between full assessments confirming that a certified organisation continues to meet the standard.",
  },
];

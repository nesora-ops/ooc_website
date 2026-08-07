// Glossary data (PRD §7.7c: 16 terms, alphabetical, term + definition).
//
// BLOCKED: term names below are the real 16 terms PRD.md enumerates, but
// their definitions require the source PDF (not present in this repo — see
// data/blog-posts.ts for the same gap). Definitions are placeholder-marked
// rather than invented, per PRD §8 policy #1.

export type GlossaryTerm = { term: string; definition: string };

const pendingDefinition = (term: string) =>
  `[PLACEHOLDER; definition of "${term}" — pending source PDF]`;

const terms = [
  "Assessment scope",
  "Assessor group",
  "Certification level",
  "Certification mark",
  "Certified Employer Directory",
  "Employee experience",
  "Employer brand",
  "Employer of choice",
  "Independent assessment",
  "Lead assessor",
  "Mandatory criteria",
  "Multi-stakeholder assessment",
  "Reassessment",
  "Scoring summary",
  "Validity period",
  "Verification (annual)",
];

export const glossaryTerms: GlossaryTerm[] = terms.map((term) => ({
  term,
  definition: pendingDefinition(term),
}));

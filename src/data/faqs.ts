// FAQ data: Certification page (PRD §7.3, 6 Q&A) and Resources FAQ page
// (PRD §7.7d, grouped: Employers 4 / Job seekers 3 / Partners 2).
//
// BLOCKED: PRD.md gives only topics/counts for these, not verbatim
// question/answer text (that's in the missing source PDF — see
// data/blog-posts.ts for the same gap). Both question and answer are
// placeholder-marked rather than invented, per PRD §8 policy #1. Counts and
// topics below are real (from PRD); only the wording is pending.

export type FAQItem = { question: string; answer: string };

const pending = (topic: string): FAQItem => ({
  question: `[PLACEHOLDER; question — ${topic} — pending source PDF]`,
  answer: `[PLACEHOLDER; answer — ${topic} — pending source PDF]`,
});

// PRD §7.3: duration, who assesses, cost, validity, "what if we don't
// achieve the level," confidentiality.
export const certificationFaqs: FAQItem[] = [
  pending("how long the assessment process takes"),
  pending("who conducts the assessment"),
  pending("the cost of certification"),
  pending("how long certification remains valid"),
  pending("what happens if an organisation doesn't achieve a certification level"),
  pending("confidentiality of assessment data"),
];

// PRD §7.7d grouping — topics not specified beyond the group counts.
export const resourcesFaqs: { employers: FAQItem[]; jobSeekers: FAQItem[]; partners: FAQItem[] } = {
  employers: [
    pending("for employers — topic 1"),
    pending("for employers — topic 2"),
    pending("for employers — topic 3"),
    pending("for employers — topic 4"),
  ],
  jobSeekers: [
    pending("for job seekers — topic 1"),
    pending("for job seekers — topic 2"),
    pending("for job seekers — topic 3"),
  ],
  partners: [pending("for partners — topic 1"), pending("for partners — topic 2")],
};

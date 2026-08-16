// FAQ data: Certification page (PRD §7.3, 6 Q&A) and Resources FAQ page
// (PRD §7.7d, grouped: Employers 4 / Job seekers 3 / Partners 2).
//
// BACKEND TODO: values explicitly marked as demo estimates below replace
// unresolved source fields and must be confirmed before production launch.

export type FAQItem = { question: string; answer: string };

export const certificationFaqs: FAQItem[] = [
  {
    question: "How long does certification take?",
    answer:
      "Most organisations complete the journey from application to certification in an illustrative 8–12 weeks (demo estimate). The largest variable is how quickly evidence and stakeholder inputs are completed on your side; our team supports you throughout to keep the process moving.",
  },
  {
    question: "Who conducts the assessment?",
    answer:
      "Assessments are conducted through the OOC digital platform and evaluated by trained assessors who are independent of your organisation, with a lead assessor accountable for the final determination. Employee input is gathered confidentially and reported only in aggregate.",
  },
  {
    question: "What does certification cost?",
    answer:
      "Fees depend on organisation size and the scope being certified. Demo pricing starts from ₹1.8 lakh and scales by organisation size; your application confirmation will include the real quotation before any commitment is required.",
  },
  {
    question: "How long does certification last?",
    answer:
      "Certification is shown here with a demo validity period of 12 months, with annual verification in between and a full reassessment at renewal. Organisations that improve can move up a level at reassessment.",
  },
  {
    question: "What if we don't achieve the level we hoped for?",
    answer:
      "You receive the complete assessment report either way, including exactly what would be required to reach the next level. Many of our strongest certified employers began with a lower level and a clear plan.",
  },
  {
    question: "Is our assessment data confidential?",
    answer:
      "Yes. Your detailed results are shared only with you. The public record is your certification level, scope, and validity — never your underlying scores or evidence. Employee responses are confidential and never attributed to individuals.",
  },
];

export const resourcesFaqs: { employers: FAQItem[]; jobSeekers: FAQItem[]; partners: FAQItem[] } = {
  employers: [
    {
      question: "Is certification suitable for small organisations?",
      answer:
        "Yes. The framework scales with organisation size, and fees are size-based; the current screen uses illustrative pricing from ₹1.8 lakh (demo only). Smaller employers often benefit most, because certification gives them a credibility signal that usually only large employer brands enjoy.",
    },
    {
      question: "Can we certify part of our organisation?",
      answer:
        "Yes. You define the scope at application — the whole organisation, or specific locations, divisions, or entities. The certified scope is always stated in the public directory, so the mark is never used more broadly than it was earned.",
    },
    {
      question: "What happens if we fail a mandatory criterion?",
      answer:
        "Certification cannot be awarded until the criterion is met, whatever the rest of the assessment shows. You receive the full report identifying the gap, and may be reassessed once it is addressed.",
    },
    {
      question: "Will our detailed results be made public?",
      answer:
        "No. The public record is your certification level, scope, and validity period. Your scores, evidence, and report remain confidential to you.",
    },
  ],
  jobSeekers: [
    {
      question: "Does certification guarantee I'll be happy at an organisation?",
      answer:
        "No certification can promise that — fit is personal. What it guarantees is that the organisation met an independently verified standard across its policies, systems, and employee experience. It's a far stronger starting point than marketing claims, used best alongside your own research and judgement.",
    },
    {
      question: "An employer displays the OOC mark but isn't in the directory. What does that mean?",
      answer:
        "Every valid certification appears in the directory. If an organisation displays the mark but has no listing, its certification may have lapsed or the usage may be unauthorised — we'd ask you to report it via the contact page so we can investigate.",
    },
    {
      question: "Does it cost anything to use the directory?",
      answer: "No. The directory is free, public, and requires no registration.",
    },
  ],
  partners: [
    {
      question: "Who can become a channel partner?",
      answer:
        "Professional firms and advisors who serve employers — including HR and CSR consultants, chartered accountancy firms, company secretaries, ESG advisors, legal firms, and industry associations. The partner page describes the tiers and application process.",
    },
    {
      question: "Do partners influence assessment outcomes?",
      answer:
        "Never. Partners introduce and support client organisations through the process; assessment and determination are conducted wholly independently. This separation protects the value of the certification your clients earn.",
    },
  ],
};

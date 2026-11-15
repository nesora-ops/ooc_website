/**
 * For Employers page (/employers) built-in copy. Editable in CertifyDB →
 * Website Content → For Employers (module "page-employers"); a blank field
 * there keeps the text below.
 *
 * {typical duration} and {response time} are filled from Site-wide settings and
 * Contact. The pricing line is the Site-wide "Pricing tiers" value.
 *
 * Plain data with no imports: CertifyDB's seed script imports this file.
 */
export const employersDefaults = {
  breadcrumb: "For Employers",

  // Hero
  heroTitle: "You've built a great workplace. Now prove it.",
  heroIntro:
    "Independent, public proof that wins candidates, reassures clients, and strengthens your employer brand.",
  heroButtonLabel: "Apply for Certification",
  heroButtonHref: "#apply",
  heroImage: "/images/editorial/employer-culture-proof.png",
  heroImageAlt:
    "A business leader presenting a quality excellence initiative to engaged colleagues in a modern office",

  // The problem we solve
  problemEyebrow: "The problem we solve",
  problemTitle: "Every employer claims great culture. Almost none can prove it.",
  problemIntro:
    "Independent certification turns culture claims into evidence candidates and stakeholders can trust.",
  problemDetailsLabel: "Why proof changes the conversation",
  problemDetails:
    "Talent markets run on trust, and trust is in short supply. Candidates have learned to discount what careers pages say about culture, because every organisation says the same things. Meanwhile, the employers genuinely doing the work, with fair policies, real development, and leadership that listens, struggle to distinguish themselves from those who merely claim it.\n\nIndependent certification resolves the standoff. When an external assessor with published criteria and no commercial stake in your result confirms that your workplace meets a rigorous standard, your claims stop being marketing and start being evidence. That is what the OOC mark puts behind every job listing, every offer letter, and every conversation with a candidate who is weighing you against someone else.",

  // What you receive
  includedTitle: "One assessment. Six useful outputs.",
  includedImage: "/images/editorial/certification-deliverables.png",
  includedImageAlt:
    "A certification report, scorecard, and recognition mark arranged as a professional toolkit",
  included: [
    {
      lead: "The OOC certification mark",
      body: "licensed for your careers page, job listings, email signatures, offices, and marketing, for the full validity period.",
    },
    {
      lead: "Your public directory listing",
      body: "a verified profile in the Certified Employer Directory, seen by candidates researching where to work.",
    },
    {
      lead: "The full assessment report",
      body: "section-by-section scores, benchmarks against comparable organisations, and prioritised recommendations.",
    },
    {
      lead: "A certification announcement toolkit",
      body: "ready-to-use assets and guidance for announcing your certification internally and externally.",
    },
    {
      lead: "Annual verification",
      body: "the ongoing check that keeps your certification current and credible.",
    },
    {
      lead: "A pathway to the next level",
      body: "a clear, evidenced route from Silver through Gold and Platinum to Diamond.",
    },
  ],

  // The process for you
  processEyebrow: "The process for you",
  processTitle: "What the journey looks like from your side.",
  processIntro:
    "One coordinator guides the evidence submission while employees contribute confidentially.",
  processDetailsLabel: "Read the employer journey",
  processDetails:
    "Certification is designed to run alongside your normal operations, not on top of them. After application and scoping, your team completes a structured self-assessment and evidence submission through our digital platform. Most organisations assign a single coordinator and involve function heads only where their area is being evidenced. Employee input is gathered confidentially and efficiently, with no burden on your HR team to administer it.\n\nFrom application to certification typically takes {typical duration}, and our programme team stays with you throughout: clarifying requirements, flagging evidence gaps early, and keeping the timeline honest. You will always know where you are in the process and what happens next. The full stage-by-stage detail is on our certification page.",
  processLinkLabel: "See the full assessment process →",
  processLinkHref: "/certification",

  // Pricing
  pricingTitle: "Transparent, size-based pricing.",
  pricingConsidersLabel: "Your quotation considers",
  pricingConsidersLine1: "Organisation size",
  pricingConsidersLine2: "certified scope",
  pricingNeverLabel: "Never your result",
  pricingNeverBody:
    "Silver, Gold, Platinum, and Diamond cost the same for organisations of equal size and scope. Outcomes are never for sale.",
  pricingNote: "Every application receives a written quote before any commitment.",

  // Case studies
  caseStudiesEyebrow: "Case studies",
  caseStudiesTitle: "Organisations that made it official.",
  caseStudies: [
    {
      image: "/images/editorial/case-study-1.png",
      imageAlt: "Case study 1",
      summary:
        "A growing employer used its assessment report to prioritise manager development and employee listening.",
    },
    {
      image: "/images/editorial/case-study-2.png",
      imageAlt: "Case study 2",
      summary:
        "A growing employer used its assessment report to prioritise manager development and employee listening.",
    },
    {
      image: "/images/editorial/case-study-3.png",
      imageAlt: "Case study 3",
      summary:
        "A growing employer used its assessment report to prioritise manager development and employee listening.",
    },
  ],

  // Application form
  applyEyebrow: "Application form",
  applyTitle: "Apply for certification.",
  applyIntro:
    "Tell us about your organisation and we'll come back within {response time} with your eligibility confirmation, a written quotation, and a proposed assessment plan. Applying creates no obligation.",
  formSuccessTitle: "Thank you. Your application is with us.",
  formSuccessMessage:
    "Our programme team will review your details and respond within {response time} with your eligibility confirmation, quotation, and proposed assessment plan. In the meantime, you can read how the assessment works on our certification page.",

  // SEO
  metaTitle: "For Employers",
  metaDescription:
    "OOC certification converts the culture you've invested in into independent, public, verifiable proof. The kind that wins candidates and reassures clients.",
};

/**
 * About page (/about) built-in copy. Editable in CertifyDB → Website Content →
 * About (module "page-about"); a blank field there keeps the text below. The
 * people cards come from Founder & Team.
 *
 * Plain data with no imports: CertifyDB's seed script imports this file.
 */
export const aboutDefaults = {
  breadcrumb: "About",

  // Hero
  heroTitle: "Making workplace quality visible.",
  heroIntro:
    "Organisations that invest in their people deserve recognition. And people choosing where to work deserve a signal they can trust.",

  // Team and governance
  teamEyebrow: "Team and governance",
  teamTitle: "The people behind the programme.",
  teamIntro:
    "Led by its founder, with a team of assessors and advisors. Every certification must be defensible on the evidence.",

  // Our story
  storyImage: "/images/editorial/evidence-to-trust.png",
  storyImageAlt: "Editorial illustration showing workplace evidence becoming a trusted certification",
  storyTitle: "The missing link between good work and credible recognition.",
  storyIntro:
    "OOC was created to make genuine investment in people visible through evidence, multiple perspectives, and independent verification.",
  storyDetailsLabel: "Read the full OOC story",
  storyDetails:
    "Employers doing the real work have rarely had a rigorous way to separate their investment from ordinary culture claims. OOC closes that gap with independent, evidence-led assessment.\n\nFounded by Ketaki, the programme applies the same spirit of scrutiny used for other important organisational standards.\n\nOOC operates as an independent certification programme of Carbon Value Partners Private Limited. Every certification is earned, evidenced, and annually verified.",

  // Mission and vision
  missionTitle: "Make it visible.",
  missionBody:
    "To recognise and certify employers who demonstrably invest in their people, through independent, multi-stakeholder assessment, and to give talent everywhere a trustworthy signal of where great workplaces can be found.",
  visionTitle: "Make it matter.",
  visionBody:
    "A working world in which workplace quality is as visible, comparable, and valued as financial performance, and in which being an organisation of choice is every employer's ambition.",

  // What makes us different
  principlesTitle: "Why our certification holds its value.",
  principlesImage: "/images/editorial/replaced_one.png",
  principlesImageAlt: "A professional leading a whiteboard strategy discussion with colleagues",
  principlesOpenLabel: "Read principle",
  principlesCloseLabel: "Close",
  principles: [
    {
      lead: "We are independent.",
      summary: "Outcomes follow published criteria and cannot be purchased or negotiated.",
      body: "Certification cannot be purchased, and assessment outcomes are never negotiable. Our assessors have no commercial stake in any organisation's result, and our criteria are published for anyone to read. When an organisation carries the OOC mark, it is because the evidence supported it.",
    },
    {
      lead: "We assess from every angle.",
      summary: "Employees, leadership, and independent evaluators each contribute evidence.",
      body: "A workplace looks different from the boardroom than it does from the floor. That is why our framework gathers structured input from multiple assessor groups, including employees, leadership, and independent evaluators, across every dimension of the employment experience. No single perspective can carry a certification on its own.",
    },
    {
      lead: "We certify improvement, not perfection.",
      summary: "Silver, Gold, Platinum, and Diamond create a visible route forward.",
      body: "The Silver, Gold, Platinum, and Diamond levels exist because building a great workplace is a journey. Our detailed assessment reports show every organisation exactly where it stands and precisely what would move it forward. Certification with us is the beginning of a relationship, not the end of a transaction.",
    },
  ],

  // Closing call to action
  ctaTitle: "Join the organisations proving it.",
  ctaBody: "If your organisation invests in its people, let's make that investment visible.",
  ctaPrimaryLabel: "Apply for Certification",
  ctaPrimaryHref: "/employers#apply",

  // SEO
  metaTitle: "About",
  metaDescription:
    "Organisation of Choice™ exists to make workplace quality visible, giving employers independent recognition and talent a signal they can trust.",
};

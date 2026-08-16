// Blog listing seed data (PRD §7.7a: 10 launch titles, teaser/lorem bodies).
//
// Titles are verbatim from the source doc
// (758ab571-OOCWebsiteContentConsolidated.pdf, "Blog — launch article titles").
// BACKEND TODO: the source supplies titles only. Teasers and dates below are
// clearly labelled demo editorial data and must be replaced by CMS records.

export type BlogPost = {
  slug: string;
  title: string;
  teaser: string;
  date: string;
  author: string;
  isDemo: true;
};

const titles = [
  'Why "Great Culture" Claims No Longer Work — and What Does',
  "The Real Cost of Attrition — and the Culture Levers That Reduce It",
  "Bronze, Silver, Gold: How to Read an OOC Certification Level",
  "Ten Questions to Ask in an Interview That Reveal Real Culture",
  "Inside a Multi-Stakeholder Assessment: Why One Voice Is Never Enough",
  "Employer Brand on a Mid-Market Budget: What Actually Moves the Needle",
  "What HR Leaders Get Wrong About Engagement Surveys",
  "The Job Seeker's Guide to Verifying an Employer Before You Sign",
  "Why Workplace Quality Belongs on the Board Agenda",
  "From Application to Certification: What the OOC Journey Really Involves",
];

const slugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const demoDates = ["12 Aug 2026", "28 Jul 2026", "09 Jul 2026", "24 Jun 2026", "05 Jun 2026"];

export const blogPosts: BlogPost[] = titles.map((title, index) => ({
  slug: slugify(title),
  title,
  teaser: `Demo preview — a practical introduction to ${title.toLowerCase()}, pending the final editorial article.`,
  date: `${demoDates[index % demoDates.length]} · demo date`,
  author: "Organisation of Choice Team",
  isDemo: true,
}));

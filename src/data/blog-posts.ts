// Blog listing seed data (PRD §7.7a: 10 launch titles, teaser/lorem bodies).
//
// Titles are verbatim from the source doc
// (758ab571-OOCWebsiteContentConsolidated.pdf, "Blog — launch article titles").
// The doc supplies titles only — no article bodies or publish dates exist yet,
// so teaser/date stay placeholder-marked per PRD §8 policy #1.

export type BlogPost = {
  slug: string;
  title: string;
  teaser: string;
  date: string;
  author: string;
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

export const blogPosts: BlogPost[] = titles.map((title) => ({
  slug: slugify(title),
  title,
  teaser:
    "Full article content is out of scope for this phase. This is placeholder teaser text standing in for the article body.",
  date: "[PLACEHOLDER; publish date]",
  author: "Organisation of Choice Team",
}));

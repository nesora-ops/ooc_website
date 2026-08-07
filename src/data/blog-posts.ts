// Blog listing seed data (PRD §7.7a: 10 launch titles, teaser/lorem bodies).
//
// BLOCKED: the source PDF (758ab571-OOCWebsiteContentConsolidated.pdf) that
// PRD.md cites as the source of the real 10 launch titles is not present in
// this repo. Titles below are placeholder-marked, not invented, per PRD §8
// policy #1 (never fabricate real-sounding facts/titles). Swap in the real
// titles once the source doc is available — the rest of the shape (slug,
// teaser, date, author) is ready to use as-is.

export type BlogPost = {
  slug: string;
  title: string;
  teaser: string;
  date: string;
  author: string;
};

export const blogPosts: BlogPost[] = Array.from({ length: 10 }, (_, i) => {
  const n = i + 1;
  return {
    slug: `launch-article-${n}`,
    title: `[PLACEHOLDER; launch article ${n} title — pending source PDF]`,
    teaser:
      "Full article content is out of scope for this phase. This is placeholder teaser text standing in for the article body.",
    date: "[PLACEHOLDER; publish date]",
    author: "Organisation of Choice Team",
  };
});

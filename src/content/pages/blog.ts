/**
 * Blog listing (/resources/blog) and the frame around each article
 * (/resources/blog/<slug>). Editable in CertifyDB → Website Content → Blog page
 * (module "page-blog"); a blank field there keeps the text below. The articles
 * themselves are the Blog list.
 *
 * Plain data with no imports: CertifyDB's seed script imports this file.
 */
export const blogDefaults = {
  breadcrumb: "Resources: Blog",

  // Listing
  heroTitle: "Blog.",
  heroIntro: "Regular insight on culture, talent, and certification.",

  // Article page
  backLinkLabel: "← Back to all articles",

  // SEO (the listing; each article uses its own title and teaser)
  metaTitle: "Blog",
  metaDescription: "Regular insight on culture, talent, and certification.",
};

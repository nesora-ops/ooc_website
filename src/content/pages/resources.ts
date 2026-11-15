/**
 * Resources hub (/resources) built-in copy. Editable in CertifyDB → Website
 * Content → Resources (module "page-resources"); a blank field there keeps the
 * text below.
 *
 * Plain data with no imports: CertifyDB's seed script imports this file.
 */
export const resourcesDefaults = {
  breadcrumb: "Resources",

  // Hero
  heroTitle: "Ideas worth working with.",
  heroIntro:
    "Practical insight on culture, employer branding, and what makes organisations worth choosing, from the people who assess workplaces for a living.",
  heroImage: "/images/editorial/resource-library.png",
  heroImageAlt: "An editorial flat lay of workplace reports, guides, and marked-up research",

  // Section cards (Blog, Guides, Glossary, FAQs, in that order)
  featureLine1: "Ideas,",
  featureLine2: "unpacked.",
  sections: [
    {
      title: "Blog.",
      description: "Regular insight on culture, talent, and certification.",
      href: "/resources/blog",
    },
    {
      title: "Guides & whitepapers.",
      description: "Deeper, downloadable resources for HR leaders.",
      href: "/resources/guides",
    },
    {
      title: "Glossary.",
      description: "The language of workplace certification, defined.",
      href: "/resources/glossary",
    },
    {
      title: "FAQs.",
      description: "Straight answers for employers, job seekers, and partners.",
      href: "/resources/faq",
    },
  ],

  // SEO
  metaTitle: "Resources",
  metaDescription:
    "Practical insight on workplace culture, employer branding, and what actually makes organisations worth choosing, from the team that assesses them for a living.",
};

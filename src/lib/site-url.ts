// Canonical production origin (PRD §1). Used for metadataBase, sitemap, and
// robots. Override via NEXT_PUBLIC_SITE_URL for preview deployments.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://organisationofchoice.com";

export const siteName = "Organisation of Choice™";

export const primaryCta = { label: "Apply for Certification", href: "/employers#apply" };

export const mainNav = [
  { label: "About", href: "/about" },
  { label: "Certification", href: "/certification" },
  { label: "For Employers", href: "/employers" },
  { label: "For Job Seekers", href: "/directory" },
  { label: "Partners", href: "/partners" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerColumns = [
  {
    title: "Organisation of Choice",
    links: [
      { label: "About Us", href: "/about" },
      { label: "The Certification", href: "/certification" },
      { label: "News & Press", href: "/news" },
      { label: "Blog", href: "/resources/blog" },
    ],
  },
  {
    title: "For Employers",
    links: [
      { label: "Why Certify", href: "/employers" },
      { label: "Get Certified", href: "/employers#apply" },
      { label: "Pricing", href: "/employers#pricing" },
      { label: "Case Studies", href: "/employers#case-studies" },
    ],
  },
  {
    title: "For Job Seekers",
    links: [
      { label: "Why It Matters", href: "/directory#why-it-matters" },
      { label: "Employer Directory", href: "/directory#directory" },
      { label: "FAQs", href: "/resources/faq" },
    ],
  },
  {
    title: "Partners",
    links: [
      { label: "Partner Programme", href: "/partners" },
      { label: "Partner Tiers", href: "/partners#tiers" },
      { label: "Apply to Partner", href: "/partners#apply" },
    ],
  },
  {
    title: "Legal & Contact",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
] as const;

// lucide-react ships no brand/logo icons (Linkedin, Instagram, Twitter, Youtube
// are not exported by the installed version) — rendered as disabled text labels
// instead of logo glyphs until real URLs replace these placeholders.
export const socialLinks = ["LinkedIn", "Instagram", "X", "YouTube"] as const;

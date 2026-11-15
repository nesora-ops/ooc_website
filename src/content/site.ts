/**
 * Site-wide copy: navigation, header, footer, cookie banner, shared form
 * messages and the values behind <Placeholder>. Editable in CertifyDB under
 * Website Content → Site-wide settings (module "site"); a blank field there
 * keeps the value below.
 *
 * Plain data with no imports: CertifyDB's seed script (scripts/seed-website-pages/ooc.ts)
 * imports this file directly. Keep it flat: strings, and lists of flat objects.
 */
export const siteDefaults = {
  // Search engines and sharing
  siteName: "Organisation of Choice™",
  defaultTitle: "Organisation of Choice",
  titleTemplate: "%s · Organisation of Choice",
  defaultDescription: "Independent workplace certification for employers who invest in their people.",
  ogImageText: "Organisation of Choice",

  // Header
  wordmarkLine1: "Organisation",
  wordmarkLine2: "of Choice",
  mainNav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Certification", href: "/certification" },
    { label: "For Employers", href: "/employers" },
    { label: "For Job Seekers", href: "/directory" },
    { label: "Partners", href: "/partners" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
  policiesLabel: "Policies",
  policiesNav: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
  primaryCtaLabel: "Apply for Certification",
  primaryCtaHref: "/employers#apply",

  // The strip under the header on every page: "OOC / About".
  breadcrumbPrefix: "OOC",
  qualities: [{ label: "Independent" }, { label: "Evidence-led" }, { label: "Verified annually" }],

  // Footer
  newsletterBandTitle: "Useful thinking, once a month.",
  newsletterBandIntro: "Practical insight on workplace culture, employer branding, and certification.",
  footerTagline: "Independent workplace certification for employers who invest in their people.",
  footerLinks: [
    { column: "Organisation of Choice", label: "About Us", href: "/about" },
    { column: "Organisation of Choice", label: "The Certification", href: "/certification" },
    { column: "Organisation of Choice", label: "News & Press", href: "/news" },
    { column: "Organisation of Choice", label: "Blog", href: "/resources/blog" },
    { column: "For Employers", label: "Why Certify", href: "/employers" },
    { column: "For Employers", label: "Get Certified", href: "/employers#apply" },
    { column: "For Employers", label: "Pricing", href: "/employers#pricing" },
    { column: "For Employers", label: "Case Studies", href: "/employers#case-studies" },
    { column: "For Job Seekers", label: "Why It Matters", href: "/directory#why-it-matters" },
    { column: "For Job Seekers", label: "Employer Directory", href: "/directory#directory" },
    { column: "For Job Seekers", label: "FAQs", href: "/resources/faq" },
    { column: "Partners", label: "Partner Programme", href: "/partners" },
    { column: "Partners", label: "Partner Tiers", href: "/partners#tiers" },
    { column: "Partners", label: "Apply to Partner", href: "/partners#apply" },
    { column: "Legal & Contact", label: "Contact Us", href: "/contact" },
    { column: "Legal & Contact", label: "Terms of Service", href: "/terms-of-service" },
    { column: "Legal & Contact", label: "Privacy Policy", href: "/privacy-policy" },
    { column: "Legal & Contact", label: "Cookie Policy", href: "/cookies" },
  ],
  copyright: "© {year} Organisation of Choice™, a programme of Carbon Value Partners Private Limited.",
  cookiePreferencesLabel: "Cookie preferences",
  socialLinks: [{ label: "LinkedIn" }, { label: "Instagram" }, { label: "X" }, { label: "YouTube" }],

  // Newsletter signup (footer)
  newsletterHeading: "Insight worth hiring for, monthly.",
  newsletterPlaceholder: "you@company.com",
  newsletterButton: "Subscribe",
  newsletterButtonBusy: "Subscribing…",
  newsletterConsentBefore: "By subscribing you agree to our",
  newsletterConsentLink: "Privacy Policy",
  newsletterSuccessTitle: "You're subscribed. Welcome.",
  newsletterSuccessMessage: "The next edition will find you.",
  newsletterNotConnected:
    "Newsletter signup isn't connected to a live email service yet, but your address was validated successfully.",

  // Cookie banner and preferences dialog
  cookieBannerText:
    "We use cookies to run this site and, with your consent, to understand how it's used. You can accept all cookies, or manage your preferences. See our",
  cookieBannerLink: "Cookie Policy",
  cookieManageButton: "Manage preferences",
  cookieAcceptButton: "Accept all",
  cookieDialogTitle: "Cookie preferences",
  cookieDialogIntro: "Choose which categories of cookies we can use. You can change this at any time.",
  cookieNecessaryTitle: "Strictly necessary",
  cookieNecessaryText: "Required for the site to function. Always on.",
  cookieAnalyticsTitle: "Analytics",
  cookieAnalyticsText: "Helps us understand how visitors use the site.",
  cookieFunctionalTitle: "Functional",
  cookieFunctionalText: "Remembers choices you make to improve your experience.",
  cookieSaveButton: "Save preferences",

  // Shared by every form on the site
  formConsent: "I agree to the processing of this information in accordance with the Privacy Policy.",
  formNotConnectedTitle: "Not yet connected",
  formNotConnectedNote: "Form submission is not yet connected. Your details were validated but not sent.",
  formErrorTitle: "Something went wrong",
  formErrorFallback: "Please try again.",

  // Values written into the text wherever it says {response time}, {duration}
  // and so on.
  year: "2026",
  responseTime: "two working days",
  duration: "approximately two weeks",
  typicalDuration: "8–12 weeks",
  validityPeriod: "12 months",
  pricingTiers: "Illustrative plans from ₹1.8 lakh, scaled by organisation size",
  levelThresholds: "illustrative evidence thresholds defined during assessment",
  partnerCommercialTerms: "illustrative referral terms agreed per engagement",
  tierAdvancementCriteria: "illustrative referral, training, and quality milestones",
  mediaKitAvailability: "available through the media desk",
};

export type SiteContent = typeof siteDefaults;

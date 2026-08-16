# PRD — Organisation of Choice™ Website (Frontend Phase)

## 1. Overview

**Product:** Marketing + directory website for **Organisation of Choice™ (OOC)**, an independent workplace certification programme.
**Entity:** Carbon Value Partners Private Limited.
**Domain:** organisationofchoice.com
**Source of truth for copy:** `758ab571-OOCWebsiteContentConsolidated.pdf` (Version 1.0) — all page copy, form fields, and microcopy in this PRD are taken directly from that document. `[PLACEHOLDER; ...]` markers from the source doc are preserved as real placeholders in the built site (see §8).

**What OOC does:** Assesses employers via a multi-stakeholder process (employees, leadership, independent assessors) against a published framework, and certifies them at **Silver / Gold / Platinum / Diamond**. Certified organisations get a public directory listing, a certification mark, and a detailed report. Job seekers use the directory to vet employers. Consultants/advisors can become channel partners and refer clients.

## 2. Phase Scope

This PRD covers **frontend only**. Confirmed by user instruction (`PILOT.md`): this folder is a sub-project of a larger CVP project that already has databases and backend functions, which will be reused later. Do not build backend infra now.

**In scope:**
- Full Next.js site: all pages/sections from the source doc, responsive, production-quality UI.
- Client-side interactivity: directory search/filter, form validation/UI, cookie consent banner, newsletter/subscribe UI.
- Static/mock content where the source doc has no real data yet (see §8).

**Out of scope (deferred, explicitly per user):**
- Supabase / database integration.
- CMS admin (content will eventually be editable via the existing bigger-project DB — not now).
- Real form persistence/email delivery wired to the production backend.
- Auth, user accounts, payment/checkout.
- Real employer directory data (will come from backend later).

## 3. Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 14+ (App Router), TypeScript** | Requested explicitly. Supports serverless deployment (Vercel) and SSR/SSG for SEO-heavy marketing pages. |
| Styling | **Tailwind CSS** | Fast to build a consistent design system; easy to hand off. |
| UI primitives | **shadcn/ui** (Radix-based) | Accessible form controls, dialogs (cookie preference centre), accordions (FAQ), combobox/filters (directory) — avoids hand-rolling a11y-sensitive components. |
| Forms | React Hook Form + Zod validation | Client-side validation for the 5 forms in the doc (employer application, partner application, contact, media enquiry, newsletter). |
| Form submission (interim) | **Web3Forms** (client-side POST, no backend) | Per user note: "if needed we can use web3forms" as the stand-in until the real DB/CMS integration lands. Access key read from `NEXT_PUBLIC_WEB3FORMS_KEY`; if unset, forms render fully but submission shows a "not yet connected" state instead of erroring. |
| Directory data | Static JSON/TS file, client-side filter | Stand-in for the future Certified Employer Directory API. |
| Deployment target | Vercel (serverless) | Implied by "Next.js for frontend and serverless." |
| Icons | lucide-react | Pairs with shadcn/ui. |

**Assumption flagged:** shadcn/ui + RHF/Zod + Web3Forms are my recommendations for hitting "build fast, defer backend cleanly" — not explicitly requested by name. If you'd rather avoid a component library dependency, say so and the master prompt can be adjusted before the build agent runs.

## 4. Information Architecture / Site Map

```
/                          Home
/about                     About
/certification              The Certification
/employers                 For Employers
/employers/apply           (application form section, likely same page anchor: /employers#apply)
/directory                 For Job Seekers + Certified Employer Directory
/partners                  Channel Partners
/resources                 Resources hub
/resources/blog            Blog listing
/resources/blog/[slug]     Blog post (stub template, 10 launch titles as seed data)
/resources/guides          Guides & whitepapers
/resources/glossary        Glossary
/resources/faq             FAQs
/news                      News & Press
/contact                   Contact
/terms                     Terms of Service
/privacy                   Privacy Policy
/cookies                   Cookie Policy
```

Global chrome: sticky header with primary nav + "Apply for Certification" CTA; footer per §7.9; cookie consent banner (site-wide, dismissible, persisted to localStorage in this phase).

## 5. Design System (derived from source doc visual style)

The source PDF shows a consistent visual language across page headers:
- **Section header bars:** solid deep navy background, white uppercase text (e.g. "HOME", "ABOUT", "THE CERTIFICATION").
- **Primary CTA buttons:** solid **gold/mustard** fill, dark text ("Apply for Certification").
- **Secondary buttons:** outlined, dark border/text ("Explore Certified Employers").
- **Eyebrow/kicker labels:** small caps, **gold/mustard** colored (e.g. "HERO", "WHY CERTIFICATION PAYS").
- **Body links / section subheads:** **teal** colored (e.g. "See how certification works →").
- **H1/H2 headings:** dark navy, bold.
- **Thin horizontal rule** under H2 section titles in gold/tan.

**Suggested palette (placeholder hex, adjustable during build):**
```
--navy:        #0B1F3A   (headers, headings, footer bg)
--navy-ink:    #14243D   (body heading text)
--gold:        #B8912F   (primary CTA, eyebrows, accents)
--teal:        #0F6E62   (links, secondary accents)
--bg:          #FFFFFF
--bg-muted:    #F7F6F3
--text:        #1F2937
--text-muted:  #5B6472
--border:      #E5E1D8
```
Typography: one serif or confident sans for display headings (navy, bold), a clean sans for body (e.g. system stack or Inter). Exact font choice is left to the build agent — match the formal-but-modern B2B tone (a certification body, not a startup).

Tone: authoritative, evidence-based, no hype. Copy in the source doc is precise and declarative — the UI should read as credible/institutional (think: audit firm crossed with modern SaaS), not playful.

## 6. Global Components

- **Header/Nav:** Logo, nav links (About, Certification, For Employers, For Job Seekers/Directory, Partners, Resources, Contact), primary CTA button "Apply for Certification". Mobile: hamburger drawer.
- **Footer:** 5 columns per §7.9 + baseline (copyright, social links) — see Site-wide Footer section.
- **Cookie consent banner:** bottom-fixed bar, "Accept all" / "Manage preferences" (opens a preference centre with 3 toggles: Strictly necessary [locked on], Analytics, Functional). No real analytics wired in this phase — toggles just persist a preference locally.
- **Trust strip:** horizontal marquee/list of trust badges used on Home.
- **CTA band:** reusable "closing call to action" pattern used on Home, About, Certification, Contact, Directory.
- **Audience router cards:** 3-card layout (Employers / Job Seekers / Partners) used on Home.

## 7. Page-by-Page Spec

All copy below is verbatim from the source doc (condensed here for structure; full text goes directly into components — see §8 for the actual copy transcription reference).

### 7.1 Home (`/`)
- **Hero:** H1 "Be an Organisation of Choice." + subhead + two CTAs (Apply for Certification / Explore Certified Employers).
- **Trust strip:** 4 trust markers incl. `[PLACEHOLDER; number]` certified organisations count.
- **What is OOC:** H2 "Certification that means something." + 2 paragraphs + pull line "It's not just a badge. It's proof."
- **Audience router:** 3 cards — For Employers / For Job Seekers / For Partners, each with a short paragraph + link.
- **Why certification pays:** H2 + 4 benefit blocks (Attract & retain talent / Build a credible employer brand / Improve with evidence / Stand out to every stakeholder).
- **How it works:** H2 "Three steps to certification." — numbered 1. Apply / 2. Get assessed / 3. Get certified. CTA button.
- **Certification levels:** Silver/Gold/Platinum/Diamond one-paragraph summaries + closing line.
- **Testimonials:** 3 placeholder testimonial slots (quote + attribution), all `[PLACEHOLDER]`.
- **Insights preview:** "Latest insights." + link to resource hub (leave as a teaser card row pulling from blog seed data, or a simple link band if no blog cards exist yet — build agent's call).
- **Closing CTA:** H2 "Ready to prove you're a great place to work?" + 2 CTAs.

### 7.2 About (`/about`)
- Hero: "Making workplace quality visible."
- Our story: 3 paragraphs incl. `[PLACEHOLDER; founder designation]`, `[PLACEHOLDER; founder background summary]`.
- Mission & Vision: 2 short statements.
- What makes us different: 3 bold-lead paragraphs (We are independent / We assess from every angle / We certify improvement, not perfection).
- Team & governance: Ketaki (Founder) + 2 placeholder team member slots (name/designation/bio all `[PLACEHOLDER]`).
- Closing CTA.

### 7.3 The Certification (`/certification`)
- Hero: "Certification you can stand behind."
- What we assess: framework sections list (leadership & culture; policies & fairness; compensation & benefits; learning & career development; wellbeing & safety; DEI; communication & voice; systems) + evidence/mandatory-gates explanation.
- The assessment process: 5 numbered stages, each with a `[PLACEHOLDER; duration]`.
- Certification levels: Silver / Gold / Platinum / Diamond, longer descriptions than Home.
- Scoring & criteria: how scoring works + mandatory criteria explanation + `[PLACEHOLDER; level thresholds]`.
- FAQs: 6 Q&A pairs (accordion component) — duration, who assesses, cost, validity, "what if we don't achieve the level," confidentiality.
- Closing CTA.

### 7.4 For Employers (`/employers`)
- Hero + CTA.
- The problem we solve: 2 paragraphs.
- What you receive: 6-item bulleted list (mark, directory listing, report, announcement toolkit, annual verification, pathway to next level).
- The process for you: narrative + link to `/certification`.
- Pricing: transparent size-based pricing framing + `[PLACEHOLDER; pricing tiers]` table/block.
- Case studies: 3 placeholder slots.
- **Application form** (see §7.4a) + success/thank-you state.

**7.4a Employer Application Form fields:** Organisation name • Industry • Employee count • Locations/cities • Scope of certification (radio: Entire organisation / Specific locations or divisions) • Contact name • Designation • Work email • Phone • How did you hear about us? • Anything you'd like us to know? (textarea) • Privacy Policy consent checkbox (required).
Submit → thank-you message referencing `[PLACEHOLDER; response time]`.

### 7.5 For Job Seekers + Directory (`/directory`)
- Hero: "Choose your next employer on proof, not promises." + CTA "Search the directory".
- Why it matters: 3 paragraphs.
- How to use the directory: 3 use-case blocks (Research an offer / Discover employers worth watching / Verify a claim).
- **Certified Employer Directory:** search box (org name) + filters (Industry, Location, Certification level: Silver/Gold/Platinum/Diamond). Grid/list of employer cards (logo placeholder, name, industry, location, level badge, scope, validity). Empty state copy provided verbatim.
- "For Employers" band CTA at bottom.
- Seed with ~6–10 mock certified employers across levels/industries so the UI is not empty during development.

### 7.6 Channel Partners (`/partners`)
- Hero + CTA "Apply to Partner".
- Why partner: 3 bold-lead blocks (extension of advice / recurring revenue / support that respects expertise), incl. `[PLACEHOLDER; partner commercial terms]`.
- Who we partner with: list of firm types.
- Partner tiers: Silver / Gold / Platinum, each described, + `[PLACEHOLDER; tier advancement criteria]`.
- How partnership works: 4 numbered steps (Apply/Onboard/Introduce/Grow).
- **Partner Application Form:** Firm name • Partner type • Years in practice • Approximate client base • Locations served • Contact name • Designation • Work email • Phone • Why partnership interests you (textarea) • Privacy consent checkbox. Submit → thank-you state.

### 7.7 Resources Hub (`/resources`)
- Hub hero: "Ideas worth working with."
- 4 section cards: Blog / Guides & whitepapers / Glossary / FAQs, each linking out.

**7.7a Blog (`/resources/blog`)** — seed with the 10 launch article titles as list/card items (title only; body content is placeholder lorem or a short teaser — full articles are out of scope for this phase). Each links to a `/resources/blog/[slug]` stub template page.

**7.7b Guides & Whitepapers (`/resources/guides`)** — 3 placeholder guide cards (`[PLACEHOLDER; title, description]` ×3), each with a disabled/"coming soon" download action.

**7.7c Glossary (`/resources/glossary`)** — 16 terms, alphabetical, term + definition list (Assessment scope, Assessor group, Certification level, Certification mark, Certified Employer Directory, Employee experience, Employer brand, Employer of choice, Independent assessment, Lead assessor, Mandatory criteria, Multi-stakeholder assessment, Reassessment, Scoring summary, Validity period, Verification (annual)).

**7.7d FAQs (`/resources/faq`)** — grouped accordion: For employers (4 Q&A) / For job seekers (3 Q&A) / For partners (2 Q&A). Verbatim from source doc.

### 7.8 News & Press (`/news`)
- Hero: "News & press."
- Media kit block: boilerplate paragraph (verbatim, provided in full — no placeholder), note about logo/imagery availability (describe as downloadable kit; actual files out of scope — link can be a disabled/"available on request" state).
- **Media enquiry form:** Name • Publication/outlet • Email • Deadline (optional) • Enquiry (textarea). Submit → thank-you state.

### 7.9 Contact (`/contact`)
- Hero: "Let's talk." + `[PLACEHOLDER; response time]`.
- Contact details block: Email / Phone / Office / Hours / Certification enquiries / Partner programme / Media & press — all `[PLACEHOLDER]`.
- **Enquiry form:** Name • Email • Phone (optional) • Enquiry type (select: Certification / Partnership / Job seeker question / Media / Other) • Message (textarea) • Privacy consent checkbox. Submit → thank-you state.
- Closing CTA.

### 7.10 Newsletter (component, not a standalone page)
- "Insight worth hiring for, monthly." + email input + Subscribe button. Consent microcopy referencing Privacy Policy. Success state: "You're subscribed — welcome." Likely placed in footer or as a section on `/resources`.

### 7.11 Legal Pages
- `/terms` — Terms of Service: body is `[PLACEHOLDER; final Terms of Service text]` + grievance officer `[PLACEHOLDER]`. Render as a simple prose page with the placeholder clearly visible (do not fabricate legal text).
- `/privacy` — Privacy Policy: same treatment, `[PLACEHOLDER; final Privacy Policy text]` + grievance officer.
- `/cookies` — Cookie Policy: **full real text is provided in the source doc** (not a placeholder) — use verbatim. Includes cookie categories (Strictly necessary / Analytics / Functional) and references `[PLACEHOLDER; cookie inventory]` and `[PLACEHOLDER; contact email]` and `[PLACEHOLDER; effective date]`.

### 7.9 Site-wide Footer
Columns:
- **Organisation of Choice:** About Us • The Certification • News & Press • Blog
- **For Employers:** Why Certify • Get Certified • Pricing • Case Studies
- **For Job Seekers:** Why It Matters • Employer Directory • FAQs
- **Partners:** Partner Programme • Partner Tiers • Apply to Partner
- **Legal & Contact:** Contact Us • Terms of Service • Privacy Policy • Cookie Policy

Baseline: `© [PLACEHOLDER; year] Organisation of Choice™ — a programme of Carbon Value Partners Private Limited.` + social links (LinkedIn/Instagram/X/YouTube, all `[PLACEHOLDER]` — render as icons, disabled/`#` href until real URLs exist).

## 8. Placeholder Content Policy

The source doc uses `[PLACEHOLDER; description]` extensively (pricing, durations, thresholds, contact details, testimonials, team bios, legal text, social URLs, certified-org count). Policy for this build:

1. **Never fabricate real-sounding facts** (no invented pricing numbers, no invented legal text, no invented team bios/names beyond "Ketaki" who is named in the source).
2. Render placeholders as visibly-styled placeholder content in the UI (e.g., a subtly dashed/muted card or `[bracketed]` inline text) so it's obvious to a reviewer what's real copy vs. what's pending — not silently blank, not silently fake.
3. Exception: the **Directory** needs sample data to demonstrate the UI. Use clearly fictional example organisations (e.g., "Aurora Logistics Pvt. Ltd. — Silver — Pune") — this is mock seed data, not a placeholder-for-real-content situation, and should be obviously swappable (single data file).
4. Exception: **blog articles** — the 10 titles are real (from source doc); body content per article can be short lorem/teaser placeholder text since full articles weren't provided.

## 9. Non-Functional Requirements

- **Responsive:** mobile-first, tested at ~375px, 768px, 1280px+.
- **Accessibility:** semantic HTML, keyboard-navigable nav/forms/accordions, proper form labels, focus states, sufficient color contrast against the navy/gold/teal palette.
- **SEO:** per-page `<title>`/meta description from the copy above, semantic heading hierarchy, sitemap.xml/robots.txt.
- **Performance:** static generation (SSG) for all marketing/content pages (no per-request data needs in this phase); directory page can be client-rendered over static JSON.
- **No console errors/warnings** in dev build; passes `next build` cleanly.

## 10. Explicitly Deferred (do not build now)

- Supabase/database wiring for the directory, CMS, or forms.
- Any admin/CMS UI for editing content.
- Real email delivery / server-side form handling beyond optional Web3Forms client-side POST.
- Authentication of any kind.
- Payment/checkout for certification fees.
- Real analytics integration (cookie banner UI only).
- Production legal text for Terms/Privacy (must come from counsel — placeholders stay placeholders).

## 11. Repo / Deployment Notes

- Git identity for commits/pushes: `nesora-ops` (`ops@nesora.co.in`) — per `AUTHOR.md`.
- `.env` must be `.gitignore`d. `.gitignore` should also cover `node_modules`, `.next`, etc.
- Remote: `https://github.com/nesora-ops/ooc_website.git`, branch `main`. **Pushing to the remote is a user-confirmed step, not automatic** — the build agent should get the repo to a clean, committed local state and leave the push for explicit approval, consistent with standard git safety practice.

## 12. Assumptions Log

- Framework choice details (shadcn/ui, RHF+Zod, Web3Forms, Vercel) are recommendations to fill in gaps the user didn't specify; flagged in §3 for override.
- Directory needs mock data to be demoable — fictional sample orgs, clearly not real.
- Placeholders are preserved rather than invented, per CLAUDE.md ("don't assume — surface it") and because this is real legal/business copy for an actual certification body.
- Blog is seeded with titles only (source doc provides no article bodies).
- This PRD does not cover a design mockup/Figma — visual direction in §5 is derived from the PDF's layout (navy header bars, gold CTAs, teal links) and is a starting point, not a locked spec.

## 13. Success Criteria

- All 15 page-types from the source doc exist as routes with the copy above, correctly structured.
- Header/footer/nav consistent across all pages.
- Directory search + filter works client-side against mock data.
- All 5 forms render, validate client-side, and show a success/thank-you state on submit (via Web3Forms if a key is configured, otherwise a graceful "not yet connected" fallback).
- Cookie consent banner + preference centre functions (localStorage-based).
- `npm run build` succeeds with no errors.
- Site is responsive and passes a manual pass on mobile/tablet/desktop breakpoints.

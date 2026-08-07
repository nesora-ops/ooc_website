# PLAN.md — Master Implementation Plan (Frontend Phase)

Derived from `PRD.md` (site map §4, page specs §7) and `PROMPT.md`. Scope: **frontend only**. CMS/admin, database, auth, real backend form persistence are explicitly deferred (PRD §10) — nothing below touches them.

Status markers: `[ ]` not started · use checkboxes as work progresses.

---

## Assumptions (flag before/while building; do not silently resolve differently)

- Next.js 14+ App Router, TypeScript, Tailwind, shadcn/ui, RHF + Zod, Web3Forms, lucide-react — per PRD §3, not challenged.
- `/employers/apply` is an anchor on `/employers` (`/employers#apply`), not a separate route — per PRD §4 note.
- Directory mock data: 6–10 fictional employers, single swappable data file (`data/employers.ts` or `.json`).
- Blog: 10 real titles (source doc), lorem/teaser bodies, one dynamic `[slug]` stub template rather than 10 hand-written pages.
- Placeholders render as a visually distinct component (e.g. `<Placeholder>` wrapper: dashed border/muted bg + `[bracketed]` text), used consistently everywhere PRD marks `[PLACEHOLDER; ...]`.
- Newsletter is a component (footer + `/resources`), not a route.
- Cookie consent: localStorage only, no real analytics script, 3 toggles (Strictly necessary locked / Analytics / Functional).
- Web3Forms: if `NEXT_PUBLIC_WEB3FORMS_KEY` is unset, forms still validate and show a "not yet connected" message on submit instead of POSTing/erroring.

If any of these turn out wrong once building starts, stop and flag rather than improvising further.

---

## Phase 0 — Scaffold & Foundations ✅ done (commit `620de19`)

- [x] `npx create-next-app@latest` in this directory (TypeScript, Tailwind, App Router, `src/` layout, ESLint) — scaffold directly here, not a subfolder. *(create-next-app refuses non-empty dirs since PRD/PLAN/etc. already existed here — scaffolded into a temp dir and copied the generated app files in, excluding its own README/CLAUDE.md/AGENTS.md so our real docs weren't clobbered.)*
- [x] Init shadcn/ui; add primitives as needed per component (button, input, textarea, select, radio-group, checkbox, accordion, dialog, sheet/drawer, badge, card, form). *(Latest shadcn CLI defaults to a "Base UI" primitive flavor whose `form` registry entry is currently an empty stub — nothing installs, no error. Pinned to `shadcn@3.8.5`, the mature Radix-based CLI PRD §3 asks for, and reinitialized; all 14 primitives incl. `form` installed cleanly.)*
- [x] Install RHF + Zod, lucide-react. *(lucide-react came in via shadcn init; added react-hook-form, zod, @hookform/resolvers directly.)*
- [x] `.gitignore`: Next.js/Node defaults + `.env`. Verify `.env` stays empty/untracked. *(default Next.js `.gitignore` already covers `.env*`; confirmed via `git check-ignore`.)*
- [x] `git init` (if not already), initial commit as `nesora-ops` (`ops@nesora.co.in`) — check local `git config user.name`/`user.email` before first commit, set locally if needed. **Do not add remote or push** (per AUTHOR.md — user-confirmed step). *(global git identity on this machine is a different user; set `nesora-ops`/`ops@nesora.co.in` locally for this repo only. Branch renamed `master`→`main`. No remote added.)*
- [x] Global design tokens: Tailwind theme extension with palette from PRD §5 (navy `#0B1F3A`, navy-ink `#14243D`, gold `#B8912F`, teal `#0F6E62`, bg/bg-muted/text/text-muted/border) as CSS variables + Tailwind color keys. Pick heading/body fonts (e.g. a serif or confident sans for display + Inter for body) via `next/font`. *(`globals.css` `:root` now carries the exact PRD hex values, mapped into shadcn's semantic slots — primary=gold/navy-ink text, secondary=navy, accent=teal, muted=bg-muted/text-muted, border/input=E5E1D8, ring=teal — plus raw `--color-navy`/`-navy-ink`/`-gold`/`-teal` Tailwind keys for direct utility use in Phase 1 components. Fonts: Inter (body, `--font-sans`) + Fraunces (heading, `--font-heading`) via `next/font/google`, replacing the Geist default; also fixed a latent scaffold bug where `--font-sans`/`--font-heading` theme keys pointed at a CSS variable the old Geist setup never actually set.)*
- [x] `lib/utils.ts` (shadcn `cn` helper, already scaffolded by shadcn init).
- [x] Base `app/layout.tsx`: font setup, global metadata defaults. *(Header/Footer/CookieBanner wrapping deferred to Phase 1 as planned, once those components exist. Base metadata title/description set to real OOC copy instead of "Create Next App" boilerplate.)*

**Verified:** `npm run build` succeeds cleanly (Next.js 16.3, Turbopack) both right after scaffold and again after the token/font changes.

---

## Phase 1 — Shared Primitives ✅ done (commit `7de2fb8`)

Order matters — build top-down (layout shell → content patterns → forms → directory pieces):

1. [x] `<Placeholder>` component — the single reusable way to render every `[PLACEHOLDER; ...]` marker (dashed/muted styling, visible bracketed text). Used everywhere in PRD §8. *(`src/components/placeholder.tsx`; `inline`/`block` variants, renders the literal `[PLACEHOLDER; ...]` text so it's traceable back to the PRD marker.)*
2. [x] `<Header>` / nav — logo, links (About, Certification, For Employers, For Job Seekers/Directory, Partners, Resources, Contact), primary CTA "Apply for Certification" button, sticky. Mobile: hamburger → shadcn `Sheet` drawer. *(`src/components/layout/header.tsx`; active-link highlighting via `usePathname`. CTA routes to `/employers#apply` — an assumption, since PRD doesn't pin the CTA's target explicitly.)*
3. [x] `<Footer>` — 5 columns (Organisation of Choice / For Employers / For Job Seekers / Partners / Legal & Contact) per PRD §7.9, baseline copyright line with `<Placeholder>` year, social icon row (disabled `#` hrefs, placeholder URLs). *(`src/components/layout/footer.tsx` + link map in `src/lib/site-config.ts`. Deviation: the installed lucide-react ships no brand/logo icons at all (`Linkedin`/`Instagram`/`Twitter`/`Youtube` are all `undefined` — removed from the library, not a version-pin issue) — social row renders as disabled text-label pills instead of logo glyphs. Also embeds `<NewsletterSignup>` in the footer per PRD §7.10's "likely placed in footer" suggestion, so it's not duplicated on `/resources`.)*
4. [x] `<CookieConsentBanner>` + preference centre dialog — bottom-fixed bar (Accept all / Manage preferences), dialog with 3 toggles (Strictly necessary locked-on, Analytics, Functional), persists to localStorage, no real analytics wired. *(`src/components/layout/cookie-consent.tsx`. Added the shadcn `switch` primitive for the toggles — needed but not itemized in the original Phase 0 primitive list. Reads localStorage via `useSyncExternalStore` rather than `useEffect`+`setState`, which the project's `react-hooks/set-state-in-effect` lint rule flagged as an anti-pattern; same-tab updates are propagated via a manually-dispatched `StorageEvent` since the native `storage` event only fires cross-tab. No persistent way to reopen preferences after first dismissal — PRD only specifies the banner's own two entry points, so a footer/settings trigger would be scope creep.)*
5. [x] `<SectionHeaderBar>` — solid navy bar, white uppercase text pattern used atop every page (HOME, ABOUT, THE CERTIFICATION, etc.).
6. [x] `<CTABand>` — reusable closing-CTA section (Home, About, Certification, Contact, Directory).
7. [x] `<NumberedSteps>` — numbered-step pattern (Home "How it works", Partners "How partnership works").
8. [x] `<FAQAccordion>` — Q&A accordion (Certification page, FAQ page), built on shadcn `Accordion`.
9. [x] `<AudienceRouterCards>` — 3-card layout (Employers / Job Seekers / Partners) for Home.
10. [x] `<TrustStrip>` — trust marker row for Home.
11. [x] `<NewsletterSignup>` — email input + Subscribe, consent microcopy, success state; embeddable in footer and `/resources`. *(Placed in the footer only, per #3 above. Uses the exact PRD §7.10 success copy: "You're subscribed — welcome.")*
12. [x] Form infrastructure: shared `useWeb3Form` hook/util (POST to Web3Forms if key present, else return "not yet connected" result), shared success/thank-you state component, shared Zod schema patterns (email, phone, required-consent checkbox). *(`src/lib/forms/use-web3-form.ts`, `src/lib/forms/schemas.ts`, `src/components/forms/form-feedback.tsx`.)*

**Verified:** `npm run build` and `npm run lint` both pass with zero errors/warnings. Confirmed via the dev server's rendered HTML that header nav, footer (incl. newsletter), and the cookie banner all render on the placeholder `/` route. **Not done:** an actual browser check of the mobile drawer and cookie-banner interactions at ~375px — skipped at the user's direction; worth a manual pass before final sign-off.

**Known gap for Phase 3:** the source PDF (`758ab571-OOCWebsiteContentConsolidated.pdf`) referenced throughout PRD.md as the verbatim-copy source of truth is not present anywhere in this repo (confirmed via full-tree search). Phase 3 needs actual page body copy (Home hero paragraphs, About story, Certification FAQ answers, full Cookie Policy text, etc.) — PRD §7 only gives condensed summaries and explicitly defers the real text to that source doc. This should be resolved (get the PDF, or get the copy some other way) before Phase 3 starts.

---

## Phase 2 — Data Files (static, mock — no DB)

- [ ] `data/employers.ts` — 6–10 fictional certified employers (name, industry, location, level Bronze/Silver/Gold, scope, validity, logo placeholder). Structured for client-side search/filter.
- [ ] `data/blog-posts.ts` — 10 launch titles (verbatim from PRD/source doc) + slug + short teaser/lorem body + placeholder date/author.
- [ ] `data/glossary.ts` — 16 terms + definitions (verbatim, PRD §7.7c list).
- [ ] `data/faqs.ts` — Certification page FAQs (6 Q&A) + Resources FAQ page grouped Q&A (Employers 4 / Job seekers 3 / Partners 2) — verbatim.
- [ ] `data/guides.ts` — 3 placeholder guide entries (title/description as `[PLACEHOLDER]`).

**Verify:** each file typed, imported without error, matches PRD counts exactly (10 blog titles, 16 glossary terms, etc.).

---

## Phase 3 — Pages, in PRD §4 order

Each page: verbatim copy from PRD §7 (expand condensed PRD text into full copy — do not paraphrase), placeholders via `<Placeholder>`, wrapped in shared Header/Footer, per-page `<title>`/meta description, semantic heading hierarchy. Commit after each page reaches a buildable state.

- [ ] **3.1 Home (`/`)** — Hero (H1 + subhead + 2 CTAs) → TrustStrip (incl. placeholder org count) → "What is OOC" (H2 + 2 paragraphs + pull line) → AudienceRouterCards → "Why certification pays" (H2 + 4 benefit blocks) → NumberedSteps "How it works" + CTA → Certification levels summary (Bronze/Silver/Gold) → Testimonials (3 placeholder slots) → Insights preview (link/teaser row to resources) → CTABand.
- [ ] **3.2 About (`/about`)** — Hero → Our story (3 paragraphs, 2 placeholders) → Mission & Vision → "What makes us different" (3 bold-lead paragraphs) → Team & governance (Ketaki + 2 placeholder slots) → CTABand.
- [ ] **3.3 The Certification (`/certification`)** — Hero → What we assess (framework sections list + evidence/mandatory-gates explanation) → Assessment process (5 numbered stages, each with placeholder duration) → Certification levels (longer descriptions) → Scoring & criteria (+ placeholder thresholds) → FAQAccordion (6 Q&A) → CTABand.
- [ ] **3.4 For Employers (`/employers`)** — Hero+CTA → Problem we solve (2 paragraphs) → What you receive (6-item list) → Process narrative + link to `/certification` → Pricing framing + placeholder tiers block → Case studies (3 placeholder slots) → Application form (§7.4a fields, RHF+Zod, Web3Forms, thank-you referencing placeholder response time) at `#apply` anchor.
- [ ] **3.5 For Job Seekers + Directory (`/directory`)** — Hero+CTA → "Why it matters" (3 paragraphs) → "How to use the directory" (3 use-case blocks) → Certified Employer Directory: search box (org name) + filters (Industry/Location/Level) + card grid over `data/employers.ts`, verbatim empty-state copy → CTABand ("For Employers").
- [ ] **3.6 Channel Partners (`/partners`)** — Hero+CTA → "Why partner" (3 bold-lead blocks + placeholder commercial terms) → "Who we partner with" list → Partner tiers (Silver/Gold/Platinum + placeholder advancement criteria) → NumberedSteps "How partnership works" (4 steps) → Partner Application Form (§7.6 fields) + thank-you.
- [ ] **3.7 Resources Hub (`/resources`)** — Hub hero → 4 section cards (Blog/Guides/Glossary/FAQs) → NewsletterSignup section.
  - [ ] **3.7a Blog listing (`/resources/blog`)** — 10 cards from `data/blog-posts.ts`.
  - [ ] **3.7b Blog post stub (`/resources/blog/[slug]`)** — dynamic route, teaser/lorem body, title/meta from data.
  - [ ] **3.7c Guides (`/resources/guides`)** — 3 placeholder cards, disabled "coming soon" download action.
  - [ ] **3.7d Glossary (`/resources/glossary`)** — 16 terms alphabetical, term+definition list from `data/glossary.ts`.
  - [ ] **3.7e FAQ (`/resources/faq`)** — grouped FAQAccordion (Employers/Job seekers/Partners) from `data/faqs.ts`.
- [ ] **3.8 News & Press (`/news`)** — Hero → Media kit block (verbatim boilerplate, no placeholder) + disabled "available on request" logo/imagery note → Media enquiry form (§7.8 fields) + thank-you.
- [ ] **3.9 Contact (`/contact`)** — Hero + placeholder response time → Contact details block (all placeholder fields) → Enquiry form (§7.9 fields, enquiry-type select) + thank-you → CTABand.
- [ ] **3.10 Legal — Terms (`/terms`)** — prose page, `[PLACEHOLDER; final Terms text]` + placeholder grievance officer, clearly visible, not fabricated.
- [ ] **3.11 Legal — Privacy (`/privacy`)** — same treatment as Terms.
- [ ] **3.12 Legal — Cookies (`/cookies`)** — full verbatim real text from source doc (not a placeholder), cookie categories, with placeholder cookie inventory / contact email / effective date only where PRD marks them.

**Verify per page:** builds without error, matches PRD §7 subsection line-for-line (no skipped list items/paragraphs), responsive at 375/768/1280.

---

## Phase 4 — Cross-cutting Polish & Non-Functional Pass

- [ ] SEO: per-page metadata (`title`, `description`) for all routes; `sitemap.xml` + `robots.txt`.
- [ ] Accessibility pass: keyboard nav through header/drawer/accordions/forms, label associations, focus-visible states, contrast check against navy/gold/teal palette.
- [ ] Full responsive pass at ~375px / 768px / 1280px+ across every route (PRD §13).
- [ ] `npm run build` clean (zero errors/warnings), no console errors in dev.
- [ ] Final PRD §7 section-by-section diff pass — confirm no copy skipped/paraphrased, all 5 forms validate + show success state, directory search/filter works, cookie banner + preference centre works.
- [ ] Summarize build + assumptions made, per PROMPT.md closing instruction.

---

## Explicitly Out of Scope (PRD §10 — do not build in this phase)

Supabase/DB wiring · CMS/admin UI · real email delivery/server-side form handling beyond optional Web3Forms client POST · authentication · payments/checkout · real analytics · production legal text for Terms/Privacy.

---

## Git

- Commits as work lands per phase/page (not one giant commit), identity `nesora-ops` / `ops@nesora.co.in` (local config, verified before first commit).
- No remote add, no push — left for explicit user approval per AUTHOR.md.

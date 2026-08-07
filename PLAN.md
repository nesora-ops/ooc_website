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

## Phase 2 — Data Files (static, mock — no DB) ✅ done (commit `7584fb4`)

Files live at `src/data/` (not root `data/`) for import consistency with the rest of the app (`src/lib`, `src/components`) — import as `@/data/employers` etc.

- [x] `data/employers.ts` — 8 fictional certified employers (name, industry, location, level Bronze/Silver/Gold, scope, validity). Fully fabricated per PRD §8 exception 3, which explicitly permits this for directory demo data.
- [x] `data/blog-posts.ts` — 10 entries, correct shape (slug/teaser/date/author), but **titles are placeholder-marked, not real** — see blocker note below.
- [x] `data/glossary.ts` — 16 terms (the real term names, taken directly from PRD §7.7c's list), but **definitions are placeholder-marked** — see blocker note below.
- [x] `data/faqs.ts` — exact PRD counts (Certification 6; Resources FAQ Employers 4 / Job seekers 3 / Partners 2), but **both questions and answers are placeholder-marked** — see blocker note below.
- [x] `data/guides.ts` — 3 guide entries, title/description placeholder-marked. Not blocked on the source PDF — PRD §7.7b specifies these as placeholder content directly.

**Verified:** `npx tsc --noEmit` clean, `npm run build` clean, `npm run lint` clean, and every array/group length checked at runtime against PRD's exact counts (all matched).

**Blocker reflected in this phase:** blog titles, glossary definitions, and FAQ Q&A text all need the source PDF (see "Known gap for Phase 3" under Phase 1 above — still unresolved). Per CLAUDE.md ("never fabricate real-sounding facts") and PRD §8 policy #1, none of that content was invented — each field uses a `[PLACEHOLDER; ... — pending source PDF]` string instead, so the data shape is 100% ready and Phase 3 (or a follow-up patch) just needs to swap in real strings once the PDF is available. This is a deliberate deviation from the original Phase 2 plan text above, which assumed verbatim content would already be transcribable.

---

## Phase 3 — Pages, in PRD §4 order ✅ done (commits `6581d2f` → `1ea5a8a`)

**Unblocked as of 2026-08-07.** Source PDF (`758ab571-OOCWebsiteContentConsolidated.pdf`) now in repo root and verified to match this checklist's IA and Phase 2's data shapes exactly. (An earlier `.docx` upload this session briefly looked like a conflicting spec — it was an unrelated document, mistakenly uploaded; disregard it if it resurfaces.)

- [ ] Manual browser check of Phase 1 chrome (mobile drawer at ~375px, cookie banner accept/dismiss + preference persistence across reload) — moved here from a pre-Phase-3 gate per user instruction. User is doing this themselves; ask for the screenshot/result if it hasn't shown up by the time page work starts.
- [x] Replace `[PLACEHOLDER; ... — pending source PDF]` strings in `src/data/blog-posts.ts`, `glossary.ts`, `faqs.ts` with real text from the PDF (pages 16–18).

Each page: verbatim copy from PRD §7 (expand condensed PRD text into full copy — do not paraphrase), placeholders via `<Placeholder>`, wrapped in shared Header/Footer, per-page `<title>`/meta description, semantic heading hierarchy. Commit after each page reaches a buildable state.

- [x] **3.1 Home (`/`)** — Hero (H1 + subhead + 2 CTAs) → TrustStrip (incl. placeholder org count) → "What is OOC" (H2 + 2 paragraphs + pull line) → AudienceRouterCards → "Why certification pays" (H2 + 4 benefit blocks) → NumberedSteps "How it works" + CTA → Certification levels summary (Bronze/Silver/Gold) → Testimonials (3 placeholder slots) → Insights preview (link/teaser row to resources) → CTABand.
- [x] **3.2 About (`/about`)** — Hero → Our story (3 paragraphs, 2 placeholders) → Mission & Vision → "What makes us different" (3 bold-lead paragraphs) → Team & governance (Ketaki + 2 placeholder slots) → CTABand.
- [x] **3.3 The Certification (`/certification`)** — Hero → What we assess (framework sections list + evidence/mandatory-gates explanation) → Assessment process (5 numbered stages, each with placeholder duration) → Certification levels (longer descriptions) → Scoring & criteria (+ placeholder thresholds) → FAQAccordion (6 Q&A) → CTABand.
- [x] **3.4 For Employers (`/employers`)** — Hero+CTA → Problem we solve (2 paragraphs) → What you receive (6-item list) → Process narrative + link to `/certification` → Pricing framing + placeholder tiers block → Case studies (3 placeholder slots) → Application form (§7.4a fields, RHF+Zod, Web3Forms, thank-you referencing placeholder response time) at `#apply` anchor.
- [x] **3.5 For Job Seekers + Directory (`/directory`)** — Hero+CTA → "Why it matters" (3 paragraphs) → "How to use the directory" (3 use-case blocks) → Certified Employer Directory: search box (org name) + filters (Industry/Location/Level) + card grid over `data/employers.ts`, verbatim empty-state copy → CTABand ("For Employers").
- [x] **3.6 Channel Partners (`/partners`)** — Hero+CTA → "Why partner" (3 bold-lead blocks + placeholder commercial terms) → "Who we partner with" list → Partner tiers (Silver/Gold/Platinum + placeholder advancement criteria) → NumberedSteps "How partnership works" (4 steps) → Partner Application Form (§7.6 fields) + thank-you.
- [x] **3.7 Resources Hub (`/resources`)** — Hub hero → 4 section cards (Blog/Guides/Glossary/FAQs) → NewsletterSignup section.
  - [x] **3.7a Blog listing (`/resources/blog`)** — 10 cards from `data/blog-posts.ts`.
  - [x] **3.7b Blog post stub (`/resources/blog/[slug]`)** — dynamic route, teaser/lorem body, title/meta from data.
  - [x] **3.7c Guides (`/resources/guides`)** — 3 placeholder cards, disabled "coming soon" download action.
  - [x] **3.7d Glossary (`/resources/glossary`)** — 16 terms alphabetical, term+definition list from `data/glossary.ts`.
  - [x] **3.7e FAQ (`/resources/faq`)** — grouped FAQAccordion (Employers/Job seekers/Partners) from `data/faqs.ts`.
- [x] **3.8 News & Press (`/news`)** — Hero → Media kit block (verbatim boilerplate, no placeholder) + disabled "available on request" logo/imagery note → Media enquiry form (§7.8 fields) + thank-you.
- [x] **3.9 Contact (`/contact`)** — Hero + placeholder response time → Contact details block (all placeholder fields) → Enquiry form (§7.9 fields, enquiry-type select) + thank-you → CTABand.
- [x] **3.10 Legal — Terms (`/terms`)** — prose page, `[PLACEHOLDER; final Terms text]` + placeholder grievance officer, clearly visible, not fabricated.
- [x] **3.11 Legal — Privacy (`/privacy`)** — same treatment as Terms.
- [x] **3.12 Legal — Cookies (`/cookies`)** — full verbatim real text from source doc (not a placeholder), cookie categories, with placeholder cookie inventory / contact email / effective date only where PRD marks them.

**Verify per page:** builds without error, matches PRD §7 subsection line-for-line (no skipped list items/paragraphs), responsive at 375/768/1280.

**Verified (Phase 3):** all 13 routes build clean (`npm run build`, Next 16 Turbopack) and `npm run lint` is clean. Beyond the build, three checks were run against actual output rather than assumed:
1. **Rendered copy** — parsed the prerendered HTML for every page and asserted the presence of key verbatim headings/paragraphs from the source doc (hero lines, section headings, boilerplate, form labels, directory card data). All passed.
2. **Placeholders** — 61 `[PLACEHOLDER; ...]` markers render *visibly* across the pages; nothing silently blank or fabricated. Glossary's validity-period marker and all 16 terms confirmed present.
3. **Logic** — the employer form's Zod rules (empty fields / malformed email / unchecked consent all reject with intended messages; complete payload passes) and the directory filter predicate (case-insensitive + partial name match, whitespace-only query as no-op, single/combined filters, contradictory combination reaching the empty state) were each exercised in isolation.

**Not verified:** anything requiring a real browser — responsive behaviour at 375/768/1280, the mobile drawer, cookie-banner interaction, accordion/select keyboard behaviour, and live form submission (no `NEXT_PUBLIC_WEB3FORMS_KEY` set, so submits take the "not yet connected" path by design). These belong to the manual check above and the Phase 4 pass.

**Deviations/decisions worth knowing:**
- Blog slugs are derived from the real titles (e.g. `why-great-culture-claims-no-longer-work-and-what-does`) rather than the old `launch-article-N` stubs; all 10 prerender via `generateStaticParams`.
- Dynamic route params are awaited (`params: Promise<{slug}>`) — required by this Next version, confirmed against `node_modules/next/dist/docs`, not assumed from memory.
- Source-doc placeholders that sit *inside* FAQ answer text are kept as literal `[PLACEHOLDER; ...]` strings in `data/faqs.ts` (the accordion takes plain strings), rather than being restructured into `<Placeholder>` elements. They still render visibly.
- Glossary's `GlossaryTerm` gained an optional `definitionPlaceholder` field — only "Validity period" uses it, matching the one trailing marker the source doc leaves there.
- Home's "Insights preview" links the first 3 blog titles; the source doc specifies only the heading and hub link, so the teaser row is a judgement call within PRD §7.1's "link/teaser row" description.

---

## Phase 4 — Cross-cutting Polish & Non-Functional Pass ✅ done (commits `8c0d3ee`, `8ab367f`)

- [x] SEO: per-page metadata (`title`, `description`) for all routes; `sitemap.xml` + `robots.txt`. *(Metadata already landed per-route in Phase 3. Added `sitemap.ts`/`robots.ts` via the Next file conventions — 26 urls verified (16 static + 10 blog) — plus `metadataBase` and OpenGraph defaults, with the origin in `src/lib/site-url.ts` (`NEXT_PUBLIC_SITE_URL` override for previews).)*
- [x] Accessibility pass. *(Audited all 26 rendered pages. **Two real fixes:** footer/newsletter headings were `h3`, causing an h1→h3 jump on content-light pages — promoted to `h2`; and brand gold as *text* on light backgrounds failed WCAG AA (2.95:1 white / 2.73:1 muted) across every section eyebrow — added a `--gold-ink` token (#846722, 5.32:1 / 4.93:1) for text on light, keeping brand gold for fills/borders and gold-on-navy (5.61:1, passing). Header wordmark keeps brand gold: logotypes are exempt under WCAG 1.4.3. All 14 palette pairs now pass AA. Other initial findings were false positives — Radix `aria-hidden` proxy inputs, and controls named via `aria-label` or an associated `<label for>`, each verified correct.)*
- [ ] **Full responsive pass at ~375px / 768px / 1280px+ across every route (PRD §13)** — *not done; requires a browser. The user's 1280px screenshot looked correct. 375/768 still unverified.*
- [x] `npm run build` clean (zero errors/warnings). *(Also `npm run lint` and `npx tsc --noEmit` clean. "No console errors in dev" is browser-dependent and unverified.)*
- [x] Final source-doc section-by-section diff pass — confirmed no copy skipped or paraphrased. *(Asserted ~100 specific strings across 10 pages: all 6 "what you receive" items, all 11 employer + 10 partner form fields, all 8 partner types, all 3 tiers, all 5 process stages, all 3 cookie categories, all 3 directory use-cases, the 4 benefit blocks, mission/vision, and the 3 differentiators. The directory empty-state copy is conditionally rendered, so it is absent from prerendered HTML by design — confirmed present in the client bundle and exercised via the filter test.)*
- [x] Summarize build + assumptions made, per PROMPT.md closing instruction. *(In MEMORY.md and the session summary.)*

**Fixed in Phase 4 from the user's browser check:** the shadcn `outline` button variant sets `bg-background` (white), so `Manage preferences` on the navy cookie bar rendered white-on-white — invisible. The same bug hit `CTABand`'s secondary button on Home and Directory. Both now set `bg-transparent`. This was invisible to build/lint and to HTML-level checks — only the screenshot caught it.

**Also corrected:** Phase 1 chrome predated the source PDF and had paraphrased two pieces of copy (cookie banner body, newsletter success message) — both restored verbatim. And the Cookie Policy's verbatim promise that preferences are changeable "through the cookie preference centre linked in the website footer" was untrue: the dialog became unreachable once the banner was dismissed. `CookieConsent` now stays mounted (hiding only the banner) and a footer trigger reopens it via a window event — Phase 1 had judged this scope creep, but the source doc specifies it.

**Known remaining gaps:** the responsive pass above; `_global-error.html` (Next's built-in fallback, which we don't own) renders without a `lang` attribute — fixable only by adding our own `global-error.tsx`, deliberately not done as it adds a page outside the PRD site map.

---

## Phase 5.5 — Bug Fixes, Audits & Cleanups ✅ done (consolidated record)

Consolidated log of every defect found, audit run, and correction made after a phase was first marked complete. Recorded here rather than only in commit messages so the trail survives a context clear.

*Note on ordering: this work was carried out during Phase 4 (commits `8c0d3ee`, `8ab367f`), i.e. before any Phase 5 exists. It is numbered 5.5 at the user's request as the standing home for bug-fix/audit/cleanup records; future cleanup passes should be appended here.*

### A. Bugs found and fixed

| # | Severity | Bug | How it was caught | Fix |
|---|---|---|---|---|
| 1 | **High — invisible UI** | shadcn `outline` button variant sets `bg-background` (white). White-on-navy outline buttons rendered as blank white boxes: cookie banner "Manage preferences", and `CTABand`'s secondary CTA ("Explore Certified Employers") on Home and Directory. | **User's 1280px browser screenshot.** Build, lint, tsc, and HTML-string assertions all passed it — it is a computed-style defect, invisible to static analysis. | `bg-transparent` added to both call sites, with a comment explaining why. |
| 2 | **High — broken promise** | Cookie Policy states preferences are changeable "at any time through the cookie preference centre linked in the website footer". No such link existed, and `CookieConsent` returned `null` once consent was stored, making the dialog permanently unreachable. | Reading the Phase 3 legal copy against the Phase 1 implementation. | Component stays mounted and hides only the banner; new `CookiePreferencesLink` in the footer reopens the dialog via the `ooc:open-cookie-preferences` window event. |
| 3 | **Medium — a11y** | Brand gold `#b8912f` as text on light backgrounds = 2.95:1 on white, 2.73:1 on `--muted`; WCAG AA needs 4.5:1. Used for the section eyebrow on every page. | Contrast audit (computed WCAG ratios for 14 palette pairs). | New `--gold-ink` token `#846722` (5.32:1 / 4.93:1) for text on light. Brand gold retained for fills, borders, and gold-on-navy (5.61:1 — already passing). |
| 4 | **Low — a11y** | Footer column headings and the newsletter heading were `h3`, so content-light pages (glossary, guides, blog, legal) jumped `h1`→`h3`. | Heading-hierarchy audit across all 26 rendered pages. | Both promoted to `h2` — they are top-level footer sections. |
| 5 | **Low — fidelity** | Phase 1 chrome predated the source PDF and paraphrased two user-facing strings: cookie banner body ("with your permission…" vs "with your consent… You can accept all cookies, or manage your preferences") and the newsletter success line ("Keep an eye on your inbox…" vs "The next edition will find you."). | Diffing Phase 1 output against the PDF once it arrived. | Both restored verbatim. |

### B. Audits run (and what they proved)

- **Rendered-copy audit** — parsed prerendered HTML for all pages, asserting ~100 specific source-doc strings (all 6 "what you receive" items, all 11 employer + 10 partner form fields, all 8 partner types, 3 tiers, 5 process stages, 3 cookie categories, 3 directory use-cases, 4 benefit blocks, mission/vision, 3 differentiators). **Result:** no copy skipped or paraphrased.
- **Placeholder audit** — 61 `[PLACEHOLDER; …]` markers confirmed rendering *visibly*. **Result:** nothing silently blank or fabricated.
- **Accessibility audit** — 26 pages checked for `h1` count, heading jumps, `lang`, and control labelling. **Result:** 2 real issues (rows 3–4 above); the remainder were false positives — Radix `aria-hidden` proxy inputs and controls named via `aria-label` or an associated `<label for>`, each individually verified rather than "fixed".
- **Contrast audit** — 14 palette pairs computed against WCAG AA. **Result:** all pass after the `--gold-ink` fix.
- **Logic audits** — form Zod rules (empty / malformed email / unchecked consent reject with intended messages; valid payload passes) and the directory filter predicate (case-insensitive, partial match, whitespace-only no-op, combined filters, empty-state path) exercised in isolation.
- **Sitemap audit** — 26 URLs verified (16 static + 10 blog); `robots.txt` output inspected.

### C. Cleanups

- Removed a clumsy `.map((t) => t as …)` cast in `data/glossary.ts` in favour of an optional field on the `GlossaryTerm` type.
- Replaced a hack in the Home testimonials that abused `<Placeholder>`'s bracket-wrapping to fake two markers; now honest `<figure>`/`<blockquote>`/`<figcaption>` with two real markers.
- Dropped a needless `benefits[0]`/`benefits[1]` array indirection on the Partners page — the array bought nothing when one paragraph needed inline JSX anyway.
- Centralised the production origin in `src/lib/site-url.ts` (`NEXT_PUBLIC_SITE_URL` override) instead of hardcoding it in both `sitemap.ts` and `robots.ts`.

### D. Standing rules learned

1. **Static checks cannot catch computed-style defects.** Build/lint/tsc/HTML assertions all missed bug #1. Any white-on-dark `outline` button needs an explicit `bg-transparent`.
2. **`text-gold` on a light background is a WCAG failure** — use `text-gold-ink`. The header wordmark is the one intentional exception (logotype, WCAG 1.4.3-exempt).
3. **Treat pre-PDF copy as suspect.** Anything written in Phases 0–1 that reads like a summary rather than a quote should be re-checked against the source doc.

---

## Explicitly Out of Scope (PRD §10 — do not build in this phase)

Supabase/DB wiring · CMS/admin UI · real email delivery/server-side form handling beyond optional Web3Forms client POST · authentication · payments/checkout · real analytics · production legal text for Terms/Privacy.

---

## Git

- Commits as work lands per phase/page (not one giant commit), identity `nesora-ops` / `ops@nesora.co.in` (local config, verified before first commit).
- ~~No remote add, no push~~ — superseded. Remote is `https://github.com/nesora-ops/ooc_website.git` (**private**), branch `main`, and everything through Phase 4 + 5.5 is pushed. Pushes still happen only on explicit user request, not automatically.
- Before pushing: confirm the repo-local identity is `nesora-ops` (the machine's *global* git identity is a different user), confirm `gh` has `nesora-ops` as the active account, and check nothing sensitive is staged. Note the repo contains the client's confidential source copy document — it must stay private.

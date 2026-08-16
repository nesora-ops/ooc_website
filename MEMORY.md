# MEMORY.md — Project Status & Handoff

Narrative/handoff layer. `PRD.md` is the spec, `PLAN.md` is the source of truth for what's checked off (with per-phase build notes), and `758ab571-OOCWebsiteContentConsolidated.pdf` (repo root) is the verbatim copy source. Read all three before acting.

**Last updated:** 2026-08-15, Phase 6 visual redesign and content-density revision complete.

---

## TL;DR for a fresh session

**The frontend and Phase 6 visual redesign are complete.** All 13 routes retain source-document copy and now share a premium light design system, responsive chrome, and progressive GSAP motion. Build/lint/tsc are clean.

The deferred backend work (PRD §10) becomes relevant only when the user asks. Forms intentionally remain unconnected when `NEXT_PUBLIC_WEB3FORMS_KEY` is unset.

---

## Status by phase

| Phase | State | Commits |
|---|---|---|
| 0 — Scaffold & foundations | ✅ done | `620de19`, `e9a2659` |
| 1 — Shared primitives | ✅ done | `7de2fb8`, `1d58291` |
| 2 — Mock data files | ✅ done | `7584fb4`, `f239a96` |
| 3 — All 13 pages | ✅ done | `6581d2f` → `1ea5a8a`, `0cdca35` |
| 4 — Cross-cutting polish | ✅ done | `8c0d3ee`, `8ab367f`, `a7cccca` |
| 5.5 — Bug fixes, audits, cleanups | ✅ done | `12818b0` + this session |
| 5 | **does not exist** — never defined | — |
| 6 — Premium visual redesign | ✅ done | uncommitted workspace changes (2026-08-15) |

Everything through Phase 5.5 is pushed to `origin/main`. Phase 6 is implemented locally and has not been committed or pushed.

### Responsive verification

The redesigned homepage was visually checked at 1280px and 390px. Mobile navigation was opened and verified, touch targets are at least 44px, and primary public routes were checked for rendered H1 content and horizontal overflow. No overflow was found. A production build generated all 31 static/SSG pages successfully.

The follow-up visual pass centres inner-page heroes, adds generated workplace and assessment imagery, and moves long supporting copy into native expandable sections. The Certified Employer Directory now has an explicit three-tier legend and tier-specific card surfaces. Desktop and 390px mobile browser checks passed with no overflow or console errors.

---

## What exists

**13 routes:** `/` · `/about` · `/certification` · `/employers` (+`#apply`) · `/directory` · `/partners` (+`#apply`) · `/resources` (+`/blog`, `/blog/[slug]`, `/guides`, `/glossary`, `/faq`) · `/news` · `/contact` · `/terms` · `/privacy` · `/cookies`. Plus generated `sitemap.xml` and `robots.txt`.

**Stack:** Next.js 16 (App Router, Turbopack), TypeScript, Tailwind v4, shadcn/ui (Radix), RHF + Zod, lucide-react, GSAP, and the self-hosted Geist font package. Deploy target is Vercel (not yet deployed).

**Global chrome** (`src/app/layout.tsx`): sticky `Header` with mobile Sheet drawer · `Footer` (5-column sitemap from `src/lib/site-config.ts`, embedded `NewsletterSignup`, `CookiePreferencesLink`) · `CookieConsent` (banner + preference dialog, localStorage via `useSyncExternalStore`).

**Five forms**, all sharing `useWeb3Form` + `src/lib/forms/schemas.ts`: employer application, partner application, contact, media enquiry, newsletter. **None submit anywhere** — `NEXT_PUBLIC_WEB3FORMS_KEY` is unset, so they validate then show a "not yet connected" state. That is intended behaviour, not a bug.

**Temporary content** in `src/data/`: `employers.ts` (8 fictional records), `blog-posts.ts` (10 source titles with temporary teasers/dates), `glossary.ts` (16 source definitions), `faqs.ts` (source Q&A with illustrative estimates), and `guides.ts` (temporary guide records). Former source placeholders render through `<Placeholder>` with `data-content-key` hooks; backend integration must replace them before production.

**Former source placeholders now render as temporary content.** The original field key remains in `data-content-key` and a tooltip. Replace every such value from the backend or confirmed client copy before production.

---

## Rules that bit us before — do not relearn these the hard way

1. **Static checks cannot catch computed-style bugs.** The shadcn `outline` variant sets `bg-background` (white); white-on-navy outline buttons rendered as invisible white boxes on the cookie banner and CTA bands. Build, lint, tsc, and HTML-string assertions all passed it — only the user's screenshot caught it. **Any white-on-dark outline button needs an explicit `bg-transparent`.**
2. **`text-gold` on a light background is a WCAG AA failure** (2.95:1). Use **`text-gold-ink`** (`#846722`). `--gold` (`#b8912f`) is for fills, borders, and gold-on-navy only. The header wordmark is the one intentional exception (logotype, WCAG-exempt).
3. **Verify against the PDF, not PRD summaries.** PRD §7 is condensed; the PDF is verbatim. Phases 0–1 predated the PDF and paraphrased two user-facing strings (cookie banner, newsletter success) — both later corrected. If any Phase 0/1 string reads like a summary rather than a quote, check it.
4. **Check the bundled Next docs, not memory.** This is Next 16 and differs from training data — e.g. dynamic-route `params` is a `Promise` and must be awaited. Docs live at `node_modules/next/dist/docs/`.
5. **shadcn CLI is pinned to `3.8.5`.** Do not `npx shadcn@latest add …` — the newer default CLI ships a broken empty `form` registry stub under its "Base UI" flavour.
6. **`next dev` rewrites `CLAUDE.md`**, re-appending a Next 16 agent-guidance block. Expected; commit it rather than stripping it.
7. **Replace temporary content before production.** The user authorised temporary values on 2026-08-15 and removed their visible labels on 2026-08-17. Preserve `data-content-key` hooks until confirmed backend content replaces them.

---

## Git / repo

- Remote `https://github.com/nesora-ops/ooc_website.git`, branch `main`. **Private, and must stay private** — the repo contains the client's confidential copy document.
- Repo-local identity `nesora-ops` / `ops@nesora.co.in`. **The machine's global git identity is a different user** — always confirm with `git config user.name` (no `--global`) before committing.
- `gh` has three accounts authenticated (`nesora-ops`, `hkforprojects`, `boliwaladevs`). `nesora-ops` must be active; switch with `gh auth switch --user nesora-ops`.
- Push only when the user asks. `.env` is untracked and must stay that way.

---

## Decisions and deviations worth knowing

- **Header CTA** routes to `/employers#apply` — an assumption; the source doc doesn't pin it.
- **Newsletter lives only in the footer** (global), not duplicated on `/resources`. The doc allowed either.
- **Blog slugs derive from real titles** (e.g. `silver-gold-platinum-diamond-how-to-read-an-ooc-certification-level`), replacing Phase 2's `launch-article-N` stubs. All 10 prerender via `generateStaticParams`.
- **Social links render as disabled text pills**, not logo glyphs — the installed lucide-react ships no brand icons at all (verified by inspecting its exports, not a version-pin issue).
- **FAQ estimates are illustrative values** in `data/faqs.ts`. Backend integration must replace pricing, timing, and validity estimates with confirmed values.
- **Cookie preference centre is reachable from the footer** via the `ooc:open-cookie-preferences` window event. Phase 1 had judged this scope creep; the source doc's Cookie Policy explicitly promises it, so Phase 4 reversed that call.
- **`radio-group` and `separator` shadcn primitives are unused** — installed speculatively in Phase 0, deliberately retained since Phase 6 design may want them.
- **No custom `not-found.tsx` or `global-error.tsx`.** A 404 renders Next's bare default inside our chrome; `global-error` renders without a `lang` attribute (a real, minor a11y gap). Both were left out as pages outside the PRD site map — good candidates to add during Phase 6.
- **`TrustStrip` was deleted** in sprint 5.5 as dead code — Phase 1 built it as a 4-tile grid guessing at the format; the real doc specifies an inline bullet strip, which Home implements directly.

---

## Verification approach (repeat it — build-passing is not evidence)

Across Phases 3–5.5, correctness was established by parsing the *rendered* HTML rather than trusting the build: ~100 verbatim source-doc strings asserted across 10 pages; all 61 placeholders confirmed visibly rendered; a 26-page audit of heading hierarchy, `lang`, and control labelling; 14 palette pairs computed against WCAG AA; and the two pieces of real logic (form Zod rules, directory filter predicate) exercised in isolation with edge cases including the empty-state path.

Most first-pass audit "findings" were false positives (Radix `aria-hidden` proxies, controls named via `aria-label`). **Verify each before fixing** — do not "fix" things that are already correct.

Anything browser-dependent — responsive reflow, drawer behaviour, focus rings, console errors — remains outside what these checks can prove.

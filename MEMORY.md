# MEMORY.md — Project Status Log

Records project overview and status. Read this alongside `PRD.md` (spec) and `PLAN.md` (checklist with build notes) before doing anything — this file is the narrative/handoff layer; `PLAN.md` is the source of truth for what's checked off.

## Current status (as of 2026-08-07, end of session 3)

- **Phase 0 (scaffold)** ✅ done — commits `620de19`, `e9a2659`.
- **Phase 1 (shared primitives)** ✅ done — commits `7de2fb8`, `1d58291`.
- **Phase 2 (mock data files)** ✅ done — commits `7584fb4`, `f239a96`.
- **Phase 3 (build all pages) is next — unblocked as of 2026-08-07.** Both prior blockers (source PDF, browser check) are resolved/deferred — see below.
- All commits are pushed to `origin/main` (`https://github.com/nesora-ops/ooc_website.git`) as of this session.

## Blockers status — both resolved as of 2026-08-07, Phase 3 is unblocked

1. **Source PDF received and verified.** The user first uploaded `OOC_Website_Content_Document.docx` (a Word doc by a different author/client framing — 12-page IA with `/apply`, `/certified-organizations`, `/verify`, `/events`, `/team`, no Employers/Partners split, no Bronze/Silver/Gold levels). This turned out to be **the wrong document** — unrelated to this project's brief, flagged by the user ("Wait i think its wrong") and superseded. The user then supplied the correct file, matching the exact name PRD.md cites: `758ab571-OOCWebsiteContentConsolidated.pdf` — now copied into the repo root (was previously only in Claude's upload store, never in the repo, which is why prior sessions couldn't find it via `Glob **/*.pdf`).
   - **Verified this PDF matches PRD.md's site map and Phase 2's data shapes exactly**: same 13-route IA (Home/About/Certification/Employers+apply/Directory/Partners/Resources hub with Blog+Guides+Glossary+FAQ/News & Press/Contact/Terms/Privacy/Cookies), Bronze/Silver/Gold levels throughout, and — cross-checked directly — 10 blog launch titles, exactly 16 glossary terms, exactly 6 Certification-page FAQs, exactly 4/3/2 Resources-FAQ groups (Employers/Job seekers/Partners), all matching what Phase 2's `src/data/*.ts` files were already built with correct shape/counts for.
   - **Next actual work**: replace the `[PLACEHOLDER; ... — pending source PDF]` strings in `src/data/blog-posts.ts`, `glossary.ts`, `faqs.ts` with the real text now available in the PDF (pages 16–18 for those three; full page-by-page copy is in the PDF for the Phase 3 page-building itself). Many other fields in the PDF are themselves still `[PLACEHOLDER; ...]` in the source doc (e.g. pricing tiers, validity period, response times, testimonial quotes, team bios, case studies, contact details, legal text) — those stay as `<Placeholder>` in the built site per PRD §8 policy, they are not blockers.

2. **Visual/manual browser check — moved into Phase 3, no longer a gate.** Per the user's explicit instruction this session, this is no longer a blocker that must clear *before* Phase 3 starts. Phase 1 built the sticky Header, mobile hamburger → Sheet drawer, Footer, and the cookie consent banner + preference-centre dialog (Accept all / Manage preferences / 3 toggles, persisted to `localStorage`) — never checked in an actual browser (build/lint/rendered-HTML only). Tracked now as a task *within* Phase 3 (see `PLAN.md`) rather than a pre-Phase-3 gate. The user still intends to do this check themselves (screenshot), just not before Phase 3 can begin.

## What's built so far (by phase)

**Phase 0** — Next.js 16 (App Router, TypeScript, Tailwind v4) scaffolded in place (had to build in a temp dir and copy in, since this directory already had PRD/PLAN/etc. and `create-next-app` refuses non-empty dirs). shadcn/ui pinned to `shadcn@3.8.5` (the Radix-based CLI) after the newer default CLI's `form` component turned out to be a broken/empty registry stub under its new "Base UI" flavor. RHF + Zod + lucide-react installed. Tailwind theme tokens in `src/app/globals.css` carry the exact PRD §5 navy/gold/teal hex values, mapped into shadcn's semantic slots plus raw `navy`/`navy-ink`/`gold`/`teal` Tailwind color keys. Fonts: Inter (body) + Fraunces (heading) via `next/font`. Git identity set locally (not globally) to `nesora-ops` / `ops@nesora.co.in`; branch renamed `master` → `main`.

**Phase 1** — Global chrome wired into `src/app/layout.tsx`: `Header` (sticky, active-link nav via `usePathname`, mobile `Sheet` drawer), `Footer` (5-column sitemap from `src/lib/site-config.ts`, embedded `NewsletterSignup`, disabled text-label social placeholders — the installed lucide-react ships **no** brand/logo icons at all, confirmed by inspecting its exports), `CookieConsent` (banner + preference dialog, `localStorage`-backed via `useSyncExternalStore` rather than `useEffect`+`setState` — the project's `react-hooks/set-state-in-effect` lint rule flagged the effect+setState pattern as an anti-pattern and pushed toward `useSyncExternalStore` for reading external state cleanly). Also built: `Placeholder`, `SectionHeaderBar`, `CTABand`, `NumberedSteps`, `FAQAccordion`, `AudienceRouterCards`, `TrustStrip`, and form infrastructure (`useWeb3Form` hook with graceful "not connected" fallback when `NEXT_PUBLIC_WEB3FORMS_KEY` is unset, `FormFeedback`, shared Zod field schemas in `src/lib/forms/schemas.ts`). Added the shadcn `switch` primitive (needed for cookie toggles, missed in the original Phase 0 primitive list). `src/app/page.tsx` is currently a **temporary placeholder** exercising the shared shell — Phase 3 replaces it with the real Home page.

One side effect from this phase worth knowing about: running `next dev` auto-appends a "Next 16 agent guidance" block to the bottom of `CLAUDE.md` (a real Next 16 feature — `node_modules/next/dist/server/lib/generate-agent-files.js` — that regenerates on every dev run). It was kept and committed rather than stripped, since Next's own comment in that block says stripping it just recreates the diff on the next `next dev` run. If it reappears as an uncommitted diff after running `npm run dev` again, that's expected — just commit it.

**Phase 2** — `src/data/employers.ts` (8 fictional certified employers, fully fabricated per PRD §8's explicit exception for directory demo data), `src/data/guides.ts` (3 entries, explicitly placeholder content per PRD §7.7b, not blocked on anything), `src/data/blog-posts.ts` / `glossary.ts` / `faqs.ts` (correct shape and exact PRD counts, content placeholder-marked pending the source PDF — see blocker #1 above).

## Key deviations / assumptions made (flagged, not silent)

- Header's primary CTA ("Apply for Certification") routes to `/employers#apply` — PRD doesn't pin this explicitly.
- Footer link hrefs for items that PRD groups under a single route (e.g., all 4 "For Employers" footer links point into the one `/employers` page) use anchor ids (`#apply`, `#pricing`, `#case-studies`, etc.) that don't exist yet — Phase 3 needs to add matching `id` attributes to those page sections.
- `NewsletterSignup` is placed only in the footer (global, every page), not duplicated on `/resources` — PRD offered both options and called it the build agent's call.
- Cookie preference centre has no way to reopen after first dismissal (no persistent footer trigger) — PRD only specifies the banner's own two entry points; anything more would be scope creep per CLAUDE.md.
- shadcn CLI pinned to `3.8.5` project-wide — don't `npx shadcn@latest add ...` for future components without checking this still applies, or the `form`-registry-stub problem will resurface.

## Git / repo state

- Local git identity (repo-local, not global): `nesora-ops` / `ops@nesora.co.in`. The machine's *global* git config is a different identity (`hkforprojects`) — always confirm `git config user.name`/`user.email` (no `--global`) before committing here.
- `gh` CLI: multiple accounts authenticated on this machine (`nesora-ops`, `hkforprojects`, `boliwaladevs`). Active account was switched to `nesora-ops` via `gh auth switch --user nesora-ops` this session — if a future session finds a different account active, switch back before pushing/creating anything under this repo's identity.
- Remote: `https://github.com/nesora-ops/ooc_website.git`, branch `main`.
- **Pushed to origin as of this session.** AUTHOR.md's original instruction was to defer pushing until explicit user approval — the user gave that approval explicitly in this session's request ("git push everything"), so all commits through Phase 2 are on GitHub now. Future sessions should go back to the default-defer-push posture (confirm before pushing) unless told otherwise again.
- `.env` stays empty and gitignored (`.env*` in the default Next.js `.gitignore`) — never commit real secrets/keys there.

## For the next agent picking this up

1. Read `PRD.md`, `PLAN.md` (Phase 3 checklist — it's the detailed page-by-page task list), and this file, in that order.
2. The source PDF is now at repo root: `758ab571-OOCWebsiteContentConsolidated.pdf` — read it directly for verbatim page copy per page (24 pages, one section per page roughly). Confirmed to match PRD.md's IA.
3. Check whether the user has done their promised browser check of Phase 1 chrome (mobile drawer, cookie banner) — it's tracked as a task inside Phase 3 now, not a gate, but ask if it hasn't happened and page work is far enough along that it matters.
4. Start Phase 3 in the order `PLAN.md` lists (Home → About → Certification → For Employers → Directory → Partners → Resources hub/blog/guides/glossary/FAQ → News → Contact → legal pages), committing after each page reaches a buildable state, same cadence as Phases 0–2. First sub-task: replace the `[PLACEHOLDER; ... — pending source PDF]` strings in `src/data/blog-posts.ts`/`glossary.ts`/`faqs.ts` with the real text from PDF pages 16–18.
5. Ignore `OOC_Website_Content_Document.docx` if it resurfaces anywhere — it was a different, unrelated document mistakenly uploaded earlier in the 2026-08-07 session, not a source for this project.

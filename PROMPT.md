# Master Build Prompt — Organisation of Choice™ Website (Frontend Phase)

You are building the frontend for the **Organisation of Choice™ (OOC)** marketing + directory website, in this exact folder, from scratch. This folder currently has no app in it — you are scaffolding it.

## 0. Before you touch anything

Read these files in this directory, in full, before doing anything else:

1. `PRD.md` — the full product spec. This is your source of truth for pages, copy, forms, data model, and scope boundaries. Do not skip sections.
2. `CLAUDE.md` — behavioral guidelines for this repo (simplicity first, surgical changes, no speculative abstractions, state assumptions instead of guessing).
3. `PILOT.md` — confirms this is frontend-only for now; a bigger project with existing DB/backend will integrate later.
4. `AUTHOR.md` — git identity and remote info for this repo.

Then write your implementation plan to `PLAN.md` (overwrite its placeholder content) before writing any code. The plan should be a straightforward checklist derived from PRD §4 (site map) and §7 (page specs) — routes to create, shared components to build first, data files needed, in what order. Keep it short and actionable, not a restatement of the whole PRD.

## 1. What to build

Everything in `PRD.md`. In summary:

- A Next.js (App Router, TypeScript) site with the routes listed in PRD §4.
- Tailwind CSS + shadcn/ui for the design system and accessible form/accordion/filter primitives, per PRD §3.
- All page copy transcribed **verbatim** from the source content described in PRD §7 — this is real copy for a real certification business, not filler. Where the PRD notes a page's copy is "condensed here for structure," the actual page must contain the full verbatim text (headings, body paragraphs, list items, form field labels, button labels, success/thank-you states) as documented in PRD §7 — do not paraphrase or shorten it.
- `[PLACEHOLDER; ...]` markers preserved and visually distinguished per PRD §8 — never invent real-sounding facts (pricing, legal text, contact details, team bios, thresholds, durations) to fill them in.
- The Certified Employer Directory with a small, clearly-fictional mock dataset (PRD §7.5) and working client-side search + filter (org name, industry, location, certification level).
- Five forms (employer application, partner application, contact enquiry, media enquiry, newsletter signup) with client-side validation and a success state, wired optionally to Web3Forms per PRD §3 — if `NEXT_PUBLIC_WEB3FORMS_KEY` is unset, forms must still render and validate correctly and show a "not yet connected" message on submit instead of throwing.
- Cookie consent banner + preference centre (localStorage-based, no real analytics), per PRD §6.
- Shared header/nav and footer (PRD §7.9) present on every page.
- Design direction per PRD §5 (navy/gold/teal, institutional-but-modern B2B tone) — treat the suggested hex values as a starting palette, not a hard requirement; use your judgement to make it look polished and cohesive.

## 2. What NOT to build

Everything in PRD §10 (Explicitly Deferred): no Supabase, no CMS admin, no real backend form persistence, no auth, no payments, no real analytics, no drafting of real legal text for Terms/Privacy. If you find yourself about to add a database call, a login flow, or an API integration beyond the optional Web3Forms client-side POST — stop, that's out of scope for this phase.

## 3. Working method

- Scaffold the Next.js app directly in this directory (not a subfolder) using `npx create-next-app@latest` (or equivalent) with TypeScript + Tailwind + App Router, then layer in shadcn/ui.
- Build shared layout/components (header, footer, cookie banner, CTA band, section components) before individual pages, since every page depends on them.
- Work through pages in the order they appear in PRD §4, committing to a working, buildable state incrementally rather than writing everything and debugging at the end.
- After each meaningful chunk of work, run `npm run build` (or `next build`) and fix errors before moving on — don't accumulate broken state.
- Keep components small and page-specific where content is one-off; only extract a shared component when the same pattern repeats (e.g., the "closing CTA band" used on 5+ pages, the numbered-steps pattern used on Home and Certification, the FAQ accordion used on Certification and the FAQ page).
- Do not add features, pages, or content sections beyond what `PRD.md` specifies. If something seems missing or ambiguous, note it as an assumption (in `PLAN.md` or a code comment only where genuinely non-obvious) rather than silently inventing scope.

## 4. Git

- `.env` must be gitignored (it already exists at the repo root and is currently empty — leave it empty unless the user supplies a Web3Forms key). `.gitignore` should also cover the standard Next.js/Node artifacts (`node_modules`, `.next`, etc.).
- Git commits should use the `nesora-ops` identity per `AUTHOR.md` — check `git config user.name`/`user.email` (local, not global) before committing if the machine has multiple authenticated identities.
- Get the repo to a clean, committed local state (`git init` if not already a repo, meaningful commits as you go). **Do not run `git push` or add the `origin` remote yourself** — that's a deliberate, user-confirmed step per `AUTHOR.md`'s own instructions; leave it for the user to trigger explicitly once they've reviewed the result.

## 5. Definition of done

Match PRD §13 (Success Criteria) exactly:

- All routes from PRD §4 exist and render the correct verbatim copy.
- Header/footer/nav consistent across all pages.
- Directory search + filter works against mock data.
- All 5 forms validate client-side and show a success/thank-you state.
- Cookie consent banner + preference centre works.
- `npm run build` succeeds with zero errors.
- Manual responsive check at mobile (~375px), tablet (~768px), and desktop (1280px+) — no obvious breakage.

When you believe you're done, do a final pass against PRD §7 section-by-section and confirm nothing was skipped or paraphrased away, then summarize what was built and any assumptions you made along the way.

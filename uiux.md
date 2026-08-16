# Organisation of Choice UI/UX System

> Agent-facing reference for the current OOC website implementation. Last audited: 16 August 2026.
>
> This document describes what is implemented, why it works, and the constraints another AI agent must preserve. It is not permission to invent claims, metrics, testimonials, team biographies, certification thresholds, pricing, or legal copy.

## 1. Product experience in one sentence

Organisation of Choice is a premium, evidence-led workplace-certification website that helps employers prove workplace quality, helps job seekers verify employer claims, and helps partners understand and join the programme.

The interface should feel like a modern certification body with SaaS clarity: authoritative but approachable, rigorous but not bureaucratic, warm but not childish.

## 2. Moodboard

### Core mood

| Dimension | Direction |
|---|---|
| Brand character | Independent, credible, human, optimistic, evidence-first |
| Visual tone | Premium light editorial with restrained playful accents |
| Emotional result | Calm confidence rather than urgency or hype |
| Product analogy | Modern audit firm crossed with a people-focused SaaS product |
| Density | Concise summaries first; long source content behind disclosure controls |
| Energy | Spacious, assured, lightly tactile |
| Trust language | Published standards, evidence, verification, multiple perspectives |

Recommended personality balance:

- 65% professional and institutional.
- 20% warm and people-centred.
- 10% modern SaaS clarity.
- 5% playful interaction and colour.

### Visual keywords

`evidence-led` · `premium light` · `warm white` · `deep navy` · `restrained teal` · `muted pastels` · `editorial scale` · `soft geometry` · `tinted shadows` · `frosted surfaces` · `clear pathways` · `human credibility`

### Materials and surfaces

- Warm off-white canvas instead of sterile white.
- Frosted white panels with subtle transparency.
- Pale mint, sky, butter, and coral surfaces for functional grouping.
- Deep navy ink for authority and maximum legibility.
- Fine tinted borders rather than heavy outlines.
- Navy-tinted shadows rather than generic black shadows.
- Subtle radial washes, soft grid lines, and ambient colour fields.
- Large rounded containers with tighter radii inside them.

### Anti-moodboard

Do not drift into:

- dark-tech or cyberpunk presentation;
- neon gradients or high-saturation colour everywhere;
- purple/blue generic AI gradients;
- stock-photo-heavy corporate layouts;
- dense text walls on the first visual layer;
- nested cards inside cards without information-hierarchy value;
- permanent dark testimonial cards;
- excessive badges, pills, decorative stamps, or floating icons;
- invented metrics, customer logos, testimonials, biographies, prices, or legal claims;
- sticky or pinned section headings that change position while the section scrolls;
- imagery added only to fill space.

### Current imagery position

The current project deliberately has no large project-owned illustration in the homepage proof area and no certification-pathway image in the Job Seeker directory hero. Those image treatments were reviewed and removed. Do not restore them without a new explicit request.

If future imagery is approved, it must explain a concept, show a real person/product context, or reduce cognitive load. It must not become decorative wallpaper.

## 3. Visual design tokens

Source: `src/app/globals.css`.

### Colour palette

| Token | Hex | Role |
|---|---:|---|
| Background | `#FBFCF8` | Warm primary canvas |
| Foreground | `#263846` | Default body copy |
| Navy | `#17324D` | Dark surfaces and secondary brand colour |
| Navy ink | `#102A43` | Headings and strongest text |
| Teal | `#0A7168` | Primary action, links, focus, active navigation |
| Mint | `#DFF4EC` | Soft active state and supportive surface |
| Gold | `#E4B94F` | Tier fill and decorative emphasis, not small text on light backgrounds |
| Gold ink | `#735A12` | Accessible gold-family text on light surfaces |
| Coral | `#FF8B70` | Warm accent, CTA bands, demo markers |
| Sky | `#DFE9FF` | Cool secondary surface and header bar |
| Butter | `#F7E8A4` | Warm tier/card surface |
| Muted surface | `#F0F6F3` | Alternating section background |
| Muted text | `#536673` | Supporting copy |
| Border | `#DCE7E3` | Default fine outline |
| Destructive | `#B42318` | Validation and error feedback |

Colour usage rules:

1. Navy ink owns headlines and essential information.
2. Teal owns primary action, active state, links, and focus.
3. Pastels create sections or card families; they are not interchangeable decoration.
4. Gold is safe for fills and large accents. Use gold ink for normal text on light backgrounds.
5. Coral is a controlled attention cue, not a second primary action colour.
6. A region should normally have one dominant accent.

### Typography

| Role | Implementation |
|---|---|
| Font family | Geist Sans with Avenir Next and sans-serif fallbacks |
| Display headings | Same Geist family, semibold/bold, tight tracking |
| Large heading tracking | Approximately `-0.035em` to `-0.075em` |
| Large heading line-height | Approximately `0.84` to `1.02` |
| Body copy | Regular/medium, relaxed line-height around `1.6–1.75` |
| Numeric labels | Monospace, tabular numbers |
| Wrapping | `text-wrap: balance` on headings, `text-wrap: pretty` on prose |

Typography rules:

- Desktop H1s should remain within two or three lines.
- Use wide containers such as `max-w-5xl` or `max-w-6xl` before shrinking text aggressively.
- Body paragraphs should stay near 55–70 characters per line.
- Large type is the primary visual device; do not compensate for weak hierarchy with more cards.
- Use sentence case. Avoid all-caps labels except compact utility metadata where necessary.

### Shape and elevation

- Global base radius: `0.9rem`.
- Buttons and inputs: approximately `0.75rem` rounded corners.
- Content cards: `1.35rem` to `2rem`.
- Major panels: up to `2.5rem`.
- Shadows are wide, soft, and navy-tinted.
- Borders are typically navy or teal at 8–20% opacity.
- Use elevation only to explain hierarchy or interactivity.

### Layout and spacing

- Primary page shell: `max-w-7xl`, centred, responsive horizontal padding.
- Inner content pages: up to approximately `80rem` after global refinements.
- Major homepage sections: `py-24`, `sm:py-32`, up to `lg:py-40`.
- Section rhythm should feel like distinct chapters.
- Bento layouts use `grid-flow-dense` and mathematically complete spans.
- Mobile starts as one column; two-column layouts generally begin at `sm`, editorial splits at `lg`.
- The global main element clips horizontal overflow.

## 4. Experience architecture

The site uses an AIDA-like narrative:

1. **Attention:** wide editorial hero, clear proposition, one primary CTA and one secondary route.
2. **Interest:** proof model, audience routes, benefits, assessment dimensions, and process education.
3. **Desire:** certification levels, directory evidence, outcomes, testimonials, and partner/employer value.
4. **Action:** application forms, search, repeated CTA bands, newsletter, and footer navigation.

Every major section should answer one question:

- What is this?
- Why should I trust it?
- Is it for me?
- How does it work?
- What do I receive?
- What should I do next?

Do not make a section compete across several of these questions at once.

## 5. Implemented UX laws and principles

“Used” below means the current interface visibly exhibits the principle. It does not claim the original team consciously selected the named law.

| UX law or principle | Current implementation | Rule for future agents |
|---|---|---|
| Aesthetic–Usability Effect | Polished light palette, large editorial type, generous whitespace, tinted shadows, and consistent rounded geometry make certification feel easier to understand. | Visual quality must reinforce clarity; never hide essential content for aesthetics. |
| Jakob’s Law | Familiar sticky header, logo-to-home link, desktop navigation, mobile drawer, labelled forms, accordions, footer sitemap, and conventional CTAs. | Innovate in composition, not in basic navigation or form behaviour. |
| Hick’s Law | Each region limits primary decisions; hero and CTA bands generally expose one or two clear routes. | One visually dominant action per region. Avoid clusters of equal-priority buttons. |
| Fitts’s Law | Buttons and icon controls generally use 44px or larger targets; mobile menu and carousel controls are large and isolated. | Preserve minimum 44×44 CSS-pixel touch targets and sufficient spacing. |
| Miller’s Law / Chunking | Three certification levels, three audiences, grouped assessment steps, footer columns, FAQ groups, and form field groups. | Present 3–7 meaningful items per group; split larger sets into clear categories. |
| Von Restorff Effect | Teal primary CTAs, coral CTA bands, and navy hover states stand apart from pale surfaces. | Reserve the strongest contrast for the action or fact that should be remembered. |
| Serial Position Effect | Primary action appears in the header and returns near the page conclusion; the final CTA closes the narrative. | Put the most important action near both entry and decision points, not after every section. |
| Gestalt Proximity | Labels sit close to their controls; card titles, descriptions, and actions are vertically grouped; related footer links are grouped by column. | Spacing must communicate relationships before borders do. |
| Gestalt Common Region | Cards, filter panels, form shells, disclosure rows, and CTA bands place related content inside a shared surface. | Use a container only when it explains grouping. Avoid decorative containers. |
| Gestalt Similarity | Repeated card anatomy, tier badge structure, button variants, and form controls signal shared behaviour. | Components with the same behaviour must look related; different behaviour must not look identical. |
| Gestalt Continuity | Numbered certification steps, tier progression, and pathway language guide the eye through a sequence. | Keep process content ordered, directional, and semantically numbered. |
| Figure–Ground | Dark navy text and controls sit clearly above warm, low-contrast canvases; CTA bands create a distinct decision layer. | Maintain strong contrast and avoid translucent text over busy backgrounds. |
| Law of Prägnanz | Complex certification ideas are reduced to clear headings, short summaries, three-level systems, and familiar controls. | Prefer the simplest correct representation; do not oversimplify legal or assessment meaning. |
| Progressive Disclosure | Native `details`, FAQ accordions, mobile Sheet navigation, select popovers, and cookie preferences reveal complexity on demand. | Show the decision-useful summary first and preserve full source copy behind an accessible disclosure. |
| Goal-Gradient Effect | Apply → Get assessed → Get certified and Bronze → Silver → Gold make progress visible. | Use progression only when the underlying process is real; do not imply guaranteed advancement. |
| Recognition over Recall | Explicit labels, visible tier legend, active navigation, descriptive CTA text, and directory filters reduce memory burden. | Prefer named choices over icon-only controls. Icon-only controls require accessible labels. |
| Visibility of System Status | Active nav state, result count, submission/loading labels, form success/error/not-connected messages, open accordion state, and consent state. | Every user action must produce immediate and understandable feedback. |
| Error Prevention | Input types, Zod validation, required consent, labelled controls, disabled submit state, and structured selects constrain invalid input. | Validate near the source, explain the fix, and preserve entered data after errors. |
| Law of Locality | Validation messages appear beside the associated field; disclosure controls sit beside their labels; carousel arrows sit beside the track. | Put instructions and feedback next to the object they affect. |
| Tesler’s Law | The interface absorbs complexity through filter logic, form schemas, grouped sections, and progressive details rather than placing all complexity on the user. | Do not remove necessary complexity; move it into structure, defaults, and validation. |
| Postel’s Law | Directory search trims whitespace, ignores case, supports partial organisation-name matches, and treats an empty query as “all”. | Accept reasonable input variation while keeping outputs strict and predictable. |
| Peak–End Rule | High-contrast CTA bands and a composed footer provide a deliberate conclusion after educational content. | End with a useful next step and reassurance, not a dead end. |
| Social Proof Principle | Trust strip and testimonials demonstrate external validation. Current testimonials are visibly marked as demo content. | Never publish demo proof as real proof. Replace with verified organisations and quotes before production. |
| Authority and Transparency | Independent assessment, published standard, annual verification, evidence-based tiers, visible scope, validity, and demo disclosures. | Trust must come from verifiable process and honest data status, not visual prestige alone. |
| Cognitive Load Reduction | Long copy is summarised on the first layer; the full meaning remains available through disclosures. | Concise does not mean deleted. Preserve meaning and source fidelity. |

## 6. UI element inventory

### Global chrome

#### Sticky glass header

- OOC monogram and two-line wordmark.
- Logo links to the homepage.
- Desktop primary navigation.
- Current-page styling via `aria-current="page"`.
- Primary “Apply for Certification” CTA.
- Mobile menu button.
- Right-side Sheet drawer on smaller screens.
- Clear hover, focus, and active states.

Source: `src/components/layout/header.tsx`.

#### Section header bar

- Compact `OOC / Page name` context label.
- Desktop-only programme qualities: Independent, Evidence-led, Verified annually.
- Pale sky surface with fine borders.

Source: `src/components/sections/section-header-bar.tsx`.

#### Footer

- Newsletter panel.
- Five-column sitemap.
- Legal and copyright copy.
- Cookie preference trigger.
- Disabled social placeholders with coming-soon hints.

Source: `src/components/layout/footer.tsx`.

### Hero system

- Wide editorial H1.
- Short evidence-led eyebrow.
- One concise supporting paragraph.
- Primary filled CTA and secondary outline CTA.
- Ambient radial wash.
- Homepage proof bento below the CTA pair.
- Inner-page heroes are centred through global CSS refinement.

The homepage proof bento contains:

- independent-assessment proof card;
- employee, leadership, and assessor perspectives;
- Bronze, Silver, and Gold pathway graphic.

Do not replace this bento with the previously rejected team illustration unless explicitly requested.

### Navigation and routing elements

- Desktop text navigation.
- Mobile Sheet drawer.
- Active route styling.
- Audience router bento for Employers, Job Seekers, and Partners.
- Descriptive text links with directional arrows.
- Resource cards and blog links.
- Footer sitemap.

### Content and trust elements

- Infinite trust marquee.
- Benefit bento cards.
- Numbered process cards.
- Certification level cards.
- Tier legend and tier-specific directory cards.
- Testimonials carousel.
- Insight teaser cards.
- CTA bands.
- FAQ accordions.
- Native progressive-detail disclosures.
- Placeholder/demo badges and backend-readable data hooks.

### Testimonials carousel

Current locked behaviour:

- All cards have the same `22rem` minimum height.
- No card is permanently navy.
- The hovered or keyboard-focused card turns navy.
- Hover/focus lifts and scales the card slightly with a navy-tinted shadow.
- Cards remain keyboard focusable.
- Side arrow buttons move exactly one card at a time.
- The track uses mandatory horizontal scroll snapping.
- One card is visible on mobile, two at `sm`, three at `lg`.
- Scrollbars are visually hidden while native scrolling remains available.
- Demo testimonials carry `data-demo-content`, a tooltip, and visible “Demo testimonial” text.

Source: `src/components/sections/testimonials-carousel.tsx`.

### Certification process

- Ordered list semantics.
- Two-digit monospaced step numbers.
- Large step title, concise summary, restrained decorative circle.
- Static section heading in normal document flow.
- On desktop, the heading block is vertically centred beside the step cards.
- No sticky or GSAP-pinned heading.

Source: `src/components/sections/numbered-steps.tsx` and the homepage process section.

### Certified Employer Directory

- Visible “Demo directory” disclosure.
- Bronze/Silver/Gold legend before filters.
- Organisation-name search input.
- Industry, location, and certification-level selects.
- Live result count with `role="status"`.
- Responsive results grid.
- Empty-state guidance.
- Tier-specific badge, marker, border, and background.
- Scope and validity metadata.
- Fictional records marked with `data-demo-record`.

Tier semantics:

| Tier | Meaning | Surface family |
|---|---|---|
| Bronze | Strong workplace foundations | Warm brown / pale peach |
| Silver | Mature systems and positive employee experience | Cool grey / pale silver |
| Gold | A workplace others can benchmark against | Gold / pale butter |

Source: `src/components/directory/employer-directory.tsx`.

The large assessment-pathway image previously shown in the directory hero was removed and its file deleted. Do not restore it without an explicit request.

### Forms

Implemented forms:

- employer application;
- partner application;
- contact form;
- media enquiry;
- newsletter signup.

Shared anatomy:

- visible labels;
- text, email, telephone, select, textarea, and checkbox controls;
- responsive two-column field groups;
- inline validation messages;
- consent language;
- submitting/disabled state;
- success state;
- error state;
- explicit “not yet connected” fallback when no Web3Forms key exists.

Important: forms validate, but production delivery is not guaranteed unless the integration key is configured. Do not present fallback validation as a sent submission.

### Cookie controls

- Consent banner.
- Accept-all action.
- Manage-preferences action.
- Preferences dialog.
- Category switches.
- Persistent preference storage.
- Footer link that can reopen preferences.

The white-on-dark outline-button issue is a known risk. Outline actions on dark surfaces need an explicit transparent or contrast-safe background.

### Primitive library

Implemented primitives include:

- Accordion and accordion item.
- Badge.
- Button with default, outline, secondary, ghost, link, and destructive variants.
- Card with header, content, action, and footer slots.
- Checkbox.
- Dialog.
- Form field, label, description, control, and message.
- Input.
- Label.
- Radio group.
- Select.
- Separator.
- Sheet/drawer.
- Switch.
- Textarea.

`radio-group.tsx` and `separator.tsx` are currently installed but unused. Do not describe them as visible page elements until a route imports them.

## 7. Interaction and motion language

### Current motion

- Global one-time section reveal: opacity `0.45 → 1` and vertical offset `28px → 0`.
- Selected `[data-motion-media]` elements use scrubbed scale and opacity.
- Trust strip uses a continuous 32-second linear marquee.
- Buttons lift slightly on hover and compress on press.
- Cards use small hover lifts.
- Testimonial cards use hover/focus scale, lift, colour change, and shadow.
- Carousel navigation uses native smooth scrolling.
- Accordions and dialogs use short state transitions.

### Motion guardrails

- Respect `prefers-reduced-motion`; global CSS collapses transitions and animation duration.
- Motion must not hide content or become necessary for comprehension.
- Do not pin the homepage “Three steps to certification” heading.
- Do not make headings move position while the user reads them.
- Avoid large parallax, perpetual decorative motion, or scroll-jacking.
- Prefer transform and opacity over layout-changing properties.
- Keep hover motion subtle: approximately 1–3% scale and 2–6px lift.

## 8. Accessibility model

Implemented accessibility patterns:

- `lang="en"` on the document.
- Skip link to `#main-content`.
- Semantic header, nav, main, section, article, figure, form, list, and footer elements.
- One page-level H1 with logical section headings.
- `aria-current` for active navigation.
- Accessible names for icon-only controls.
- Visible focus rings.
- Keyboard-operable Radix primitives.
- Associated labels and `aria-invalid` for forms.
- `aria-describedby` connections to descriptions and errors.
- Status regions for filter results and form feedback.
- Reduced-motion support.
- Body and heading wrap controls.
- Accessible gold-ink token for light surfaces.
- Responsive layouts verified around 390px and desktop widths.
- Main content clips horizontal overflow.

Accessibility rules for future work:

1. Keep interactive targets at least 44×44 CSS pixels.
2. Do not use colour alone to communicate tier, error, selection, or status.
3. Preserve visible labels; placeholders are not labels.
4. Check real computed styles, not only Tailwind class strings.
5. Test keyboard focus, mobile reflow, and contrast in a browser.
6. Preserve native semantics for details, buttons, lists, and forms.
7. Provide meaningful alt text only for meaningful imagery; use empty alt text for decoration.
8. Keep critical content available when motion is disabled.
9. Do not place important text only inside an image.

Known gaps:

- No custom `not-found.tsx`.
- No custom `global-error.tsx`.
- Social destinations are disabled placeholders.
- Real backend submission, analytics, authentication, and payments are deferred.

## 9. Content hierarchy and copy rules

### Voice

- Authoritative.
- Declarative.
- Evidence-based.
- Specific.
- Calm.
- Free of hype.

Avoid startup clichés such as “revolutionary”, “game-changing”, “unleash”, “next-gen”, and “seamless”.

### Density strategy

Use this order:

1. short eyebrow or context label;
2. strong outcome-led heading;
3. one concise summary;
4. visible proof, list, or action;
5. full source detail inside `ProgressiveDetails` or an accordion when appropriate.

Do not delete required source copy merely to make the page shorter. Summarise the first layer without changing meaning, then keep the full text accessible.

### Demo and placeholder policy

- Never silently invent production facts.
- Demo data must remain visibly labelled.
- Preserve `data-demo-content`, `data-demo-record`, and `data-demo-directory` hooks.
- Tooltips identify the backend field that must replace demo values.
- Directory records are fictional and intentionally replaceable from one data source.
- Testimonials are demo content, not published social proof.
- Production legal copy must come from counsel or confirmed client content.

## 10. Responsive rules

### Mobile

- Single-column reading order.
- Header collapses to a menu button and full-height Sheet.
- CTAs stack or wrap without shrinking below usable touch size.
- Cards become full-width.
- Testimonial carousel shows one card.
- Form grids become one column.
- Secondary programme-quality text in the header bar hides.
- Long headings reduce through `clamp()` while keeping strong hierarchy.

### Tablet

- Two-column cards where content remains readable.
- Forms commonly use two columns.
- Testimonial carousel shows two cards.

### Desktop

- Wide page shell up to `max-w-7xl`.
- Editorial split layouts activate around `lg`.
- Dense bento layouts use 12 columns.
- Testimonial carousel shows three cards and can slide to remaining content.
- Full navigation appears at `xl`.

## 11. Route-level pattern map

| Route | Primary UI patterns |
|---|---|
| `/` | Cinematic hero, proof bento, trust marquee, progressive disclosure, audience router, benefit bento, numbered process, tier cards, testimonial carousel, insight cards, final CTA |
| `/about` | Centred hero, story disclosure, mission/vision split, differentiator cards, team/demo cards, CTA |
| `/certification` | Hero, assessment dimensions, process sequence, tier cards, scoring disclosure, FAQ, CTA |
| `/employers` | Hero, problem/solution disclosure, deliverables list, journey disclosure, pricing/demo block, case-study demos, application form |
| `/directory` | Hero, trust explanation, use cases, tier legend, search/filter panel, live count, employer cards, empty state, CTA |
| `/partners` | Hero, value disclosure, partner types, tier cards, process, application form |
| `/resources` | Hero and resource navigation cards |
| `/resources/blog` | Article-card index |
| `/resources/blog/[slug]` | Editorial article layout |
| `/resources/guides` | Guide listing |
| `/resources/glossary` | Definition list |
| `/resources/faq` | Grouped FAQ accordions |
| `/news` | Press content and media enquiry form |
| `/contact` | Contact details, contact form, CTA |
| `/terms`, `/privacy`, `/cookies` | Narrow prose layouts with visible placeholder/demo treatment where source content is pending |

## 12. Component source map

| Concern | Source |
|---|---|
| Global tokens and cross-route refinements | `src/app/globals.css` |
| Root structure | `src/app/layout.tsx` |
| Header and mobile navigation | `src/components/layout/header.tsx` |
| Footer and newsletter | `src/components/layout/footer.tsx` |
| Cookie UI | `src/components/layout/cookie-consent.tsx` |
| Section motion | `src/components/layout/site-motion.tsx` |
| Audience bento | `src/components/sections/audience-router-cards.tsx` |
| CTA band | `src/components/sections/cta-band.tsx` |
| FAQ | `src/components/sections/faq-accordion.tsx` |
| Numbered steps | `src/components/sections/numbered-steps.tsx` |
| Long-copy disclosure | `src/components/sections/progressive-details.tsx` |
| Section context bar | `src/components/sections/section-header-bar.tsx` |
| Testimonials | `src/components/sections/testimonials-carousel.tsx` |
| Employer directory | `src/components/directory/employer-directory.tsx` |
| Demo placeholders | `src/components/placeholder.tsx` |
| Forms | `src/components/forms/` |
| UI primitives | `src/components/ui/` |
| Navigation and footer configuration | `src/lib/site-config.ts` |
| Certified-employer demo data | `src/data/employers.ts` |

## 13. Locked decisions from reviewed iterations

Another agent must preserve these unless the user explicitly changes them:

1. The homepage certification-process heading is static and vertically centred on desktop.
2. Do not pin or make that heading change position during scroll.
3. Testimonial cards have equal height.
4. No testimonial is permanently navy.
5. Hovered or keyboard-focused testimonial cards turn navy and pop out slightly.
6. Testimonials retain previous/next side controls and one-card scroll steps.
7. The large workplace meeting photo previously used in the homepage proof area remains removed.
8. The team illustration experiment remains reverted.
9. The large certification-pathway image in the directory hero remains removed.
10. Long content is summarised on the first layer, not deleted or semantically changed.
11. Demo values remain clearly identified for backend replacement.
12. The site stays premium-light, professional, minimally playful, and not heavily dark or vibrantly saturated.

## 14. Agent implementation checklist

Before changing UI:

- Read `PRD.md`, `MEMORY.md`, this file, and the source-content document relevant to the page.
- Inspect the existing component before creating a new abstraction.
- Confirm whether the content is verified, demo, placeholder, or legally sensitive.
- Identify the one user decision each section supports.
- Check the current breakpoint behaviour.

While changing UI:

- Reuse tokens from `globals.css`.
- Keep desktop H1s to two or three lines.
- Use `page-shell` or the established max-width pattern.
- Preserve semantic elements and keyboard behaviour.
- Keep long copy available through progressive disclosure.
- Use one dominant CTA per region.
- Provide hover, focus, pressed, loading, success, error, and empty states where relevant.
- Keep tier colour and text labels together.
- Preserve demo hooks.
- Do not add a library when CSS or an installed primitive already solves the problem.

Before handing off:

- Test at approximately 390px, 768px, and 1280px.
- Verify no horizontal overflow.
- Check computed contrast and invisible-button risks.
- Navigate with the keyboard.
- Test reduced motion.
- Exercise directory empty state and combined filters.
- Exercise invalid, submitting, success, error, and not-connected form states.
- Run TypeScript, lint, and production build checks proportionate to the change.
- Verify every visible fact against confirmed content.

## 15. Compact prompt for another AI agent

> Extend the Organisation of Choice website using its existing premium-light, evidence-led design system. Use Geist Sans, warm off-white backgrounds, navy editorial headings, teal primary actions, and restrained mint, sky, butter, and coral surfaces. Keep wide two-to-three-line headings, large chapter spacing, subtle tinted borders and shadows, complete dense bento grids, and concise first-layer summaries with full source meaning preserved through accessible progressive disclosure. Reuse the sticky glass header, section context bar, CTA bands, cards, forms, directory tier system, and existing Radix/shadcn primitives. Maintain 44px touch targets, visible focus, semantic HTML, reduced-motion support, and responsive one/two/three-column behaviour. Never invent proof, pricing, metrics, testimonials, legal text, or biographies; label demo data and preserve backend hooks. Do not restore rejected image treatments, pin the certification-process heading, or keep one testimonial permanently dark. Test real browser rendering, keyboard states, mobile overflow, and computed contrast before handoff.

## 16. Scope note

This file records the current frontend state. Backend data, CMS editing, authentication, payments, real analytics, and production form delivery are outside the present implementation. If those systems are added, update this document to describe the resulting loading, permission, empty, failure, and success states.

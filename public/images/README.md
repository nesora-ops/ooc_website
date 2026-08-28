# Image slots

Every approved slot on the site is an `<ImageSlot>` (`src/components/image-slot.tsx`).
An empty slot renders as a dashed block labelled with its `contentKey`, so you can
find it in the browser and in the DOM via `[data-content-key="..."]`.

To fill one: drop the file in the folder below, then set the `src` on the slot
(or on the record that feeds it). Paths are public URLs — `/images/blog/foo.jpg`,
not `public/images/blog/foo.jpg`.

| Slot (`contentKey`) | Folder | Aspect | Where |
|---|---|---|---|
| `blog thumbnail — <slug>` | `blog/` | 16:9 | `src/app/resources/blog/page.tsx` |
| `article hero — <slug>` | `blog/` | 21:9 | `src/app/resources/blog/[slug]/page.tsx` |
| `insight thumbnail — <slug>` | `blog/` | 16:9 | `src/app/page.tsx` (Latest insights) |
| `case study 1..3 — certified workplace` | `case-studies/` | 16:9 | `src/app/employers/page.tsx` (`#case-studies`) |
| `headshot — Ketaki, founder` | `team/` | 1:1 | `src/app/about/page.tsx` |
| `headshot — team member 1..2` | `team/` | 1:1 | `src/app/about/page.tsx` |
| `testimonial portrait — <name>` | `testimonials/` | 1:1 | `src/components/sections/testimonials-carousel.tsx` |
| `media kit — approved logo lockups` | `media-kit/` | 16:9 | `src/app/news/page.tsx` |

Blog and insight thumbnails share one source: set `image` on the record in
`src/data/blog-posts.ts` and all three slots for that article fill at once.

```ts
{ slug: "...", title: "...", image: { src: "/images/blog/attrition.jpg", alt: "..." } }
```

Testimonial portraits: set `avatar` on the entry in the carousel's own array.

## Out of scope

`uiux.md` §13 keeps three previously removed images out: the homepage proof-area
photo, the directory hero, and the team illustration. Do not add slots there.

## Notes

- Local files only — `next.config.ts` has no `images.remotePatterns`, so a remote
  host needs one added first.
- Ship reasonable sizes; these are served through `next/image` but the source file
  is still what gets optimised.
- Every slot needs a real `alt`. `ImageSlot` requires it.

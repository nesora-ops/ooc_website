// Guides & whitepapers seed data (PRD §7.7b: 3 placeholder cards with a
// disabled "coming soon" download action). Explicitly placeholder content
// per PRD itself — not blocked on the source PDF.

export type Guide = { id: string; title: string; description: string };

export const guides: Guide[] = [
  {
    id: "guide-1",
    title: "[PLACEHOLDER; guide title]",
    description: "[PLACEHOLDER; guide description]",
  },
  {
    id: "guide-2",
    title: "[PLACEHOLDER; guide title]",
    description: "[PLACEHOLDER; guide description]",
  },
  {
    id: "guide-3",
    title: "[PLACEHOLDER; guide title]",
    description: "[PLACEHOLDER; guide description]",
  },
];

// BACKEND TODO: demo guide records for layout only. Replace with CMS content.

export type Guide = { id: string; title: string; description: string; isDemo: true };

export const guides: Guide[] = [
  {
    id: "guide-1",
    title: "The evidence-led employer brand guide",
    description: "Demo guide covering the signals candidates can verify before accepting an offer.",
    isDemo: true,
  },
  {
    id: "guide-2",
    title: "Preparing for workplace assessment",
    description: "Demo checklist for gathering stakeholder input and organising assessment evidence.",
    isDemo: true,
  },
  {
    id: "guide-3",
    title: "Reading Bronze, Silver, and Gold",
    description: "Demo explainer for understanding what each certification level communicates.",
    isDemo: true,
  },
];

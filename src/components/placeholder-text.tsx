import { Fragment, type ReactNode } from "react";

import { cn } from "@/lib/utils";

// The rendering half of <Placeholder>, safe in client components (the forms
// get their values passed down from the page). The key preserves the source
// field in `data-content-key`.

// Built-in values. The editable ones are overridden by the CMS through
// getPlaceholderValues() in lib/content.ts; the rest (legal-page keys) stay here.
const builtInValues: Record<string, string> = {
  year: "2026",
  "grievance officer name and contact": "Aarav Mehta · certify@betterearthworkplace.com",
  "contact email": "certify@betterearthworkplace.com",
  "business hours": "Monday–Friday · 9:30am–6:00pm IST",
  "certification email": "certify@betterearthworkplace.com",
  "partners email": "certify@betterearthworkplace.com",
  "media email": "certify@betterearthworkplace.com",
  "response time": "two working days",
  duration: "approximately two weeks",
  "typical duration": "8–12 weeks",
  "validity period": "12 months",
  "pricing tiers": "Illustrative plans from ₹1.8 lakh, scaled by organisation size",
  "level thresholds": "illustrative evidence thresholds defined during assessment",
  "partner commercial terms": "illustrative referral terms agreed per engagement",
  "tier advancement criteria": "illustrative referral, training, and quality milestones",
  "available on request": "available through the media desk",
  "cookie inventory": "Essential preference storage and privacy-safe analytics",
  "effective date": "15 August 2026",
};

/** The value for a key: the CMS value if given, else the built-in one. */
export function placeholderValue(key: string, values?: Record<string, string>) {
  if (values?.[key]) return values[key];
  if (key.startsWith("testimonial quote")) {
    return "The assessment gave us a clear, practical view of where our employee experience was strong and where to act next.";
  }
  if (key === "name, designation, organisation") {
    return "Naina Rao, People Director, Northstar Works";
  }
  if (key.startsWith("case study")) {
    return "A growing employer used its assessment report to prioritise manager development and employee listening.";
  }
  return builtInValues[key] ?? `Illustrative ${key}`;
}

type PlaceholderTextProps = {
  contentKey: string;
  value: ReactNode;
  variant?: "inline" | "block";
  className?: string;
};

export function PlaceholderText({ contentKey, value, variant = "inline", className }: PlaceholderTextProps) {
  if (variant === "block") {
    return (
      <div
        data-content-key={contentKey}
        title={`Temporary content: replace from backend field: ${contentKey}`}
        className={cn(
          "rounded-2xl border border-navy/8 bg-white/75 p-5 text-sm text-navy-ink",
          className
        )}
      >
        {value}
      </div>
    );
  }

  return (
    <span
      data-content-key={contentKey}
      title={`Temporary content: replace from backend field: ${contentKey}`}
      className={cn(
        "whitespace-normal text-[0.96em] font-medium text-navy-ink [hyphens:none] [overflow-wrap:normal] [word-break:normal]",
        className
      )}
    >
      {value}
    </span>
  );
}

/**
 * Renders copy that may carry {key} tokens (for example "within {response
 * time}."), turning each token into its placeholder span. Plain text otherwise.
 */
export function renderTokens(text: string, values?: Record<string, string>): ReactNode {
  const parts = text.split(/\{([^{}]+)\}/);
  if (parts.length === 1) return text;
  return parts.map((part, index) =>
    index % 2 === 0 ? (
      <Fragment key={index}>{part}</Fragment>
    ) : (
      <PlaceholderText key={index} contentKey={part} value={placeholderValue(part, values)} />
    )
  );
}

/** Splits a multi-paragraph field on blank lines. */
export function paragraphs(text: string): string[] {
  return text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

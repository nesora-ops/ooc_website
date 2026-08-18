import { Children } from "react";

import { cn } from "@/lib/utils";

type PlaceholderProps = {
  children: React.ReactNode;
  variant?: "inline" | "block";
  className?: string;
};

// Temporary presentation values. Backend integration should replace every
// element carrying `data-content-key`; the key preserves the source field.
const placeholderValues: Record<string, string> = {
  year: "2026",
  "grievance officer name and contact": "Aarav Mehta · grievance@organisationofchoice.com",
  "contact email": "hello@organisationofchoice.com",
  "phone number": "+91 22 4173 8200",
  "office address": "Bandra Kurla Complex, Mumbai, Maharashtra",
  "business hours": "Monday–Friday · 9:30am–6:00pm IST",
  "certification email": "certification@organisationofchoice.com",
  "partners email": "partners@organisationofchoice.com",
  "media email": "media@organisationofchoice.com",
  "response time": "two working days",
  duration: "approximately two weeks",
  "typical duration": "8–12 weeks",
  "validity period": "12 months",
  "pricing tiers": "Illustrative plans from ₹1.8 lakh, scaled by organisation size",
  "level thresholds": "illustrative evidence thresholds defined during assessment",
  "partner commercial terms": "illustrative referral terms agreed per engagement",
  "tier advancement criteria": "illustrative referral, training, and quality milestones",
  "founder designation": "Founder & Programme Director",
  "founder background summary": "people strategy, organisational development, and responsible business",
  designation: "Programme Director",
  "two-line biography": "Workplace-culture specialist focused on evidence-led people practices and responsible growth.",
  "team member name": "Rhea Kapoor",
  "available on request": "available through the media desk",
  "cookie inventory": "Essential preference storage and privacy-safe analytics",
  "effective date": "15 August 2026",
};

function placeholderValue(key: string) {
  if (key.startsWith("testimonial quote")) {
    return "The assessment gave us a clear, practical view of where our employee experience was strong and where to act next.";
  }
  if (key === "name, designation, organisation") {
    return "Naina Rao, People Director, Northstar Works";
  }
  if (key.startsWith("case study")) {
    return "A growing employer used its assessment report to prioritise manager development and employee listening.";
  }
  return placeholderValues[key] ?? `Illustrative ${key}`;
}

export function Placeholder({ children, variant = "inline", className }: PlaceholderProps) {
  const key = Children.toArray(children).join("").trim();
  const content = placeholderValue(key);

  if (variant === "block") {
    return (
      <div
        data-content-key={key}
        title={`Temporary content — replace from backend field: ${key}`}
        className={cn(
          "rounded-2xl border border-navy/8 bg-white/75 p-5 text-sm text-navy-ink",
          className
        )}
      >
        {content}
      </div>
    );
  }

  return (
    <span
      data-content-key={key}
      title={`Temporary content — replace from backend field: ${key}`}
      className={cn(
        "whitespace-normal text-[0.96em] font-medium text-navy-ink [hyphens:none] [overflow-wrap:normal] [word-break:normal]",
        className
      )}
    >
      {content}
    </span>
  );
}

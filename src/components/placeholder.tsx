import { Children } from "react";

import { cn } from "@/lib/utils";

type PlaceholderProps = {
  children: React.ReactNode;
  variant?: "inline" | "block";
  className?: string;
};

// Temporary presentation values. Backend integration should replace every
// element carrying `data-demo-content`; the key preserves the source field.
const demoValues: Record<string, string> = {
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

function demoValue(key: string) {
  if (key.startsWith("testimonial quote")) {
    return "The assessment gave us a clear, practical view of where our employee experience was strong and where to act next.";
  }
  if (key === "name, designation, organisation") {
    return "Naina Rao, People Director, Northstar Works";
  }
  if (key.startsWith("case study")) {
    return "Demo case study: a growing employer used its assessment report to prioritise manager development and employee listening.";
  }
  return demoValues[key] ?? `Illustrative ${key}`;
}

export function Placeholder({ children, variant = "inline", className }: PlaceholderProps) {
  const key = Children.toArray(children).join("").trim();
  const content = demoValue(key);

  if (variant === "block") {
    return (
      <div
        data-demo-content={key}
        title={`Temporary demo data — replace from backend field: ${key}`}
        className={cn(
          "relative rounded-2xl border border-dashed border-coral/55 bg-coral/8 p-5 pt-9 text-sm text-navy-ink",
          className
        )}
      >
        <span className="absolute left-4 top-3 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#9a4635]">
          Demo content
        </span>
        {content}
      </div>
    );
  }

  return (
    <span
      data-demo-content={key}
      title={`Temporary demo data — replace from backend field: ${key}`}
      className={cn(
        "rounded-md border border-dashed border-coral/55 bg-coral/10 px-1.5 py-0.5 text-[0.92em] font-medium text-navy-ink",
        className
      )}
    >
      {content} <sup className="text-[0.58rem] font-bold uppercase tracking-wide text-[#9a4635]">demo</sup>
    </span>
  );
}

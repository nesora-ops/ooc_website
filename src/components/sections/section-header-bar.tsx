import { Fragment } from "react";

import { getSite } from "@/lib/content";

// Dots between the programme qualities, in turn.
const DOT_TONES = ["bg-coral", "bg-teal"];

export async function SectionHeaderBar({ label }: { label: string }) {
  const site = await getSite();

  return (
    <div className="border-y border-navy/8 bg-sky/45">
      <div className="mx-auto flex min-h-10 max-w-7xl items-center justify-between gap-4 px-5 py-2 sm:px-8 lg:px-10">
        <p className="text-xs font-semibold text-navy-ink">{site.breadcrumbPrefix} / {label}</p>
        <div className="hidden items-center gap-4 text-[0.68rem] font-medium text-muted-foreground sm:flex" aria-label="Programme qualities">
          {site.qualities.map((quality, index) => (
            <Fragment key={index}>
              {index > 0 && <span aria-hidden className={`size-1 rounded-full ${DOT_TONES[(index - 1) % DOT_TONES.length]}`} />}
              <span>{quality.label}</span>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

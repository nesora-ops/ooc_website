import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function ProgressiveDetails({
  children,
  label = "Read the full detail",
  className,
}: {
  children: ReactNode;
  label?: string;
  className?: string;
}) {
  return (
    <details className={cn("group border-t border-navy/10 pt-4", className)}>
      <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-teal marker:content-none">
        {label}
        <span
          aria-hidden
          className="grid size-8 place-items-center rounded-full border border-teal/20 transition-transform duration-300 group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <div className="space-y-5 pb-2 pt-4 text-muted-foreground">{children}</div>
    </details>
  );
}

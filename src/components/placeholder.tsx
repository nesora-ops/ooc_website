import { cn } from "@/lib/utils";

type PlaceholderProps = {
  children: React.ReactNode;
  variant?: "inline" | "block";
  className?: string;
};

/**
 * Renders a `[PLACEHOLDER; ...]` marker per PRD §8: visibly styled, never
 * silently blank or fabricated. `children` is the description text only —
 * this component adds the `[PLACEHOLDER; ...]` wrapper.
 */
export function Placeholder({ children, variant = "inline", className }: PlaceholderProps) {
  const content = (
    <>
      [PLACEHOLDER; {children}]
    </>
  );

  if (variant === "block") {
    return (
      <div
        className={cn(
          "rounded-lg border border-dashed border-gold/60 bg-muted p-4 text-sm text-muted-foreground",
          className
        )}
      >
        {content}
      </div>
    );
  }

  return (
    <span
      className={cn(
        "rounded border border-dashed border-gold/60 bg-gold/10 px-1 py-0.5 text-[0.92em] font-medium text-navy-ink",
        className
      )}
    >
      {content}
    </span>
  );
}

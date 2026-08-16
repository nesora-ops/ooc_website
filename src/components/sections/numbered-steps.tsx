import { cn } from "@/lib/utils";

type Step = { title: string; description: string };

export function NumberedSteps({ steps, className }: { steps: Step[]; className?: string }) {
  return (
    <ol className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="group relative overflow-hidden rounded-3xl border border-navy/8 bg-white/78 p-6 shadow-[0_16px_44px_rgba(23,50,77,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-teal/25"
        >
          <span className="font-mono text-sm font-semibold tabular-nums text-teal">{String(index + 1).padStart(2, "0")}</span>
          <h3 className="mt-10 text-xl font-semibold text-navy-ink">{step.title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.description}</p>
          <span aria-hidden className="absolute -bottom-8 -right-5 size-24 rounded-full bg-mint transition-transform duration-500 group-hover:scale-125" />
        </li>
      ))}
    </ol>
  );
}

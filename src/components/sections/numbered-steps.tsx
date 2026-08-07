import { cn } from "@/lib/utils";

type Step = { title: string; description: string };

export function NumberedSteps({ steps, className }: { steps: Step[]; className?: string }) {
  return (
    <ol className={cn("grid gap-8 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {steps.map((step, i) => (
        <li key={step.title} className="flex flex-col gap-2">
          <span className="font-heading text-3xl font-bold text-gold">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="font-heading text-lg font-semibold text-navy-ink">{step.title}</h3>
          <p className="text-sm text-muted-foreground">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}

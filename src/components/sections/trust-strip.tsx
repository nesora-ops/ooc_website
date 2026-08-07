import { cn } from "@/lib/utils";

type TrustItem = { value: React.ReactNode; label: string };

export function TrustStrip({ items, className }: { items: TrustItem[]; className?: string }) {
  return (
    <div className={cn("border-y border-border bg-muted/60 py-6", className)}>
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 sm:grid-cols-4 sm:px-6 lg:px-8">
        {items.map((item, i) => (
          <div key={i} className="text-center">
            <div className="font-heading text-xl font-bold text-navy">{item.value}</div>
            <div className="text-xs text-muted-foreground">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

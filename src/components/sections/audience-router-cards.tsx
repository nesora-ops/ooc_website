import Link from "next/link";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type AudienceCard = { title: string; description: string; href: string; linkLabel: string };

export function AudienceRouterCards({
  cards,
  className,
}: {
  cards: AudienceCard[];
  className?: string;
}) {
  return (
    <div className={cn("grid gap-6 sm:grid-cols-3", className)}>
      {cards.map((card) => (
        <Card key={card.title}>
          <CardHeader>
            <CardTitle className="font-heading text-lg text-navy-ink">{card.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <p className="text-sm text-muted-foreground">{card.description}</p>
            <Link href={card.href} className="text-sm font-medium text-teal hover:underline">
              {card.linkLabel} →
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

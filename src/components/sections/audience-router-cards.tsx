import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

type AudienceCard = { title: string; description: string; href: string; linkLabel: string };

const styles = ["bg-mint", "bg-sky", "bg-butter/70"];
const spans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-12"];

export function AudienceRouterCards({ cards, className }: { cards: AudienceCard[]; className?: string }) {
  return (
    <div className={cn("grid grid-flow-dense gap-4 lg:grid-cols-12", className)}>
      {cards.map((card, index) => (
        <article
          key={card.title}
          className={cn(
            "group flex min-h-72 flex-col justify-between overflow-hidden rounded-[2rem] border border-navy/8 p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-8",
            styles[index],
            spans[index]
          )}
        >
          <div>
            <p className="text-sm font-semibold text-teal">0{index + 1}</p>
            <h3 className="mt-5 text-[clamp(1.8rem,4vw,3.4rem)] font-semibold leading-none tracking-[-0.045em]">{card.title}</h3>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-navy/75 sm:text-base">{card.description}</p>
          </div>
          <Link href={card.href} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-teal">
            {card.linkLabel}
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </article>
      ))}
    </div>
  );
}

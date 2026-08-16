import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

type FAQItem = { question: string; answer: string };

export function FAQAccordion({ items, className }: { items: FAQItem[]; className?: string }) {
  return (
    <Accordion type="single" collapsible className={cn("space-y-3", className)}>
      {items.map((item, i) => (
        <AccordionItem key={item.question} value={`item-${i}`} className="rounded-2xl border border-navy/8 bg-white/75 px-5 shadow-[0_10px_30px_rgba(23,50,77,0.04)]">
          <AccordionTrigger className="text-left font-heading font-semibold text-navy-ink hover:text-teal hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-left text-muted-foreground">{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

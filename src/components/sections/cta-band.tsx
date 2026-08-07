import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CTALink = { label: string; href: string };

type CTABandProps = {
  heading: string;
  body?: string;
  primaryCta: CTALink;
  secondaryCta?: CTALink;
  className?: string;
};

export function CTABand({ heading, body, primaryCta, secondaryCta, className }: CTABandProps) {
  return (
    <section className={cn("bg-navy py-16 text-center text-white", className)}>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-bold sm:text-3xl">{heading}</h2>
        {body && <p className="mt-4 text-white/80">{body}</p>}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link href={primaryCta.href}>{primaryCta.label}</Link>
          </Button>
          {secondaryCta && (
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-navy"
            >
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

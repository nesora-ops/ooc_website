import Link from "next/link";

import { ArrowUpRight } from "lucide-react";
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
    <section className={cn("noise-wash border-y border-coral/20 bg-coral/45 py-20 text-navy-ink lg:py-28", className)}>
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:px-10">
        <div className="max-w-4xl">
          <h2 className="text-[clamp(2.4rem,6vw,5.5rem)] font-semibold leading-[0.96] tracking-[-0.055em]">{heading}</h2>
          {body && <p className="mt-5 max-w-2xl text-base leading-7 text-navy/75 sm:text-lg">{body}</p>}
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <Button asChild size="lg" className="group bg-navy text-white hover:bg-navy/90">
            <Link href={primaryCta.href}>
              {primaryCta.label}
              <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Button>
          {secondaryCta && (
            <Button asChild size="lg" variant="outline" className="border-navy/20 bg-white/65 text-navy hover:bg-white">
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

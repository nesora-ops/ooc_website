import Link from "next/link";
import type { Metadata } from "next";

import { Seal } from "@/components/brand/seal";
import { SectionHeaderBar } from "@/components/sections/section-header-bar";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Certification Badge",
  description:
    "Certified organisations receive the Organisation of Choice seal and embeddable brand kit as part of certification onboarding.",
};

export default function BadgePage() {
  return (
    <>
      <SectionHeaderBar label="Certification Badge" />

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <Seal size={240} priority />
        <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold text-navy-ink sm:text-5xl">
          Show your certification.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Certified organisations may display the Organisation of Choice seal for the term of
          their certification. The embeddable badge code and full brand kit are issued directly
          during onboarding, once certification is confirmed, so the mark is only ever in the
          hands of organisations who have actually earned it.
        </p>

        <div className="mt-10">
          <Button asChild size="lg">
            <Link href="/employers#apply">Apply for Certification</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

import { SectionHeaderBar } from "@/components/sections/section-header-bar";
import { CTABand } from "@/components/sections/cta-band";

// Temporary placeholder — Phase 3 replaces this with the real Home page (PRD §7.1).
export default function Home() {
  return (
    <>
      <SectionHeaderBar label="Home" />
      <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl font-bold text-navy-ink">
          Phase 1 scaffold check
        </h1>
        <p className="mt-4 text-muted-foreground">
          Shared header, footer, and cookie consent banner are wired in. Real page content
          lands in Phase 3.
        </p>
      </div>
      <CTABand
        heading="Ready to prove you're a great place to work?"
        primaryCta={{ label: "Apply for Certification", href: "/employers#apply" }}
        secondaryCta={{ label: "Explore Certified Employers", href: "/directory" }}
      />
    </>
  );
}

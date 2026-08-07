import type { Metadata } from "next";

import { Placeholder } from "@/components/placeholder";
import { SectionHeaderBar } from "@/components/sections/section-header-bar";

export const metadata: Metadata = {
  title: "Terms of Service — Organisation of Choice™",
  description: "Terms of Service for Organisation of Choice™, a programme of Carbon Value Partners Private Limited.",
};

export default function TermsPage() {
  return (
    <>
      <SectionHeaderBar label="Legal — Terms of Service" />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-navy-ink">Terms of Service.</h1>

        <div className="mt-10 space-y-6 text-muted-foreground">
          <p>
            Text supplied in full from the approved legal document prepared for Carbon Value
            Partners Private Limited:
          </p>
          <Placeholder variant="block">
            final Terms of Service text from approved legal document
          </Placeholder>
          <p>
            Grievance officer: <Placeholder>grievance officer name and contact</Placeholder>
          </p>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";

import { Placeholder } from "@/components/placeholder";
import { SectionHeaderBar } from "@/components/sections/section-header-bar";

export const metadata: Metadata = {
  title: "Privacy Policy — Organisation of Choice™",
  description:
    "Privacy Policy for Organisation of Choice™, a programme of Carbon Value Partners Private Limited.",
};

export default function PrivacyPage() {
  return (
    <>
      <SectionHeaderBar label="Legal — Privacy Policy" />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-navy-ink">Privacy Policy.</h1>

        <div className="mt-10 space-y-6 text-muted-foreground">
          <p>
            Text supplied in full from the approved legal document prepared for Carbon Value
            Partners Private Limited:
          </p>
          <Placeholder variant="block">
            final Privacy Policy text from approved legal document
          </Placeholder>
          <p>
            Grievance officer: <Placeholder>grievance officer name and contact</Placeholder>
          </p>
        </div>
      </section>
    </>
  );
}

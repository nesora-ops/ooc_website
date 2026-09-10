import type { Metadata } from "next";

import { Markdown } from "@/components/markdown";
import { Placeholder } from "@/components/placeholder";
import { SectionHeaderBar } from "@/components/sections/section-header-bar";
import { getLegalSection } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Organisation of Choice™, a programme of Carbon Value Partners Private Limited.",
};

export default async function TermsPage() {
  const section = await getLegalSection("terms");

  return (
    <>
      <SectionHeaderBar label="Legal: Terms of Service" />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-navy-ink">
          {section?.title || "Terms of Service."}
        </h1>

        {section ? (
          <>
            <Markdown className="mt-10">{section.bodyMarkdown}</Markdown>
            {section.effectiveDate && (
              <p className="mt-10 border-t border-navy/8 pt-6 text-sm text-muted-foreground">
                Last updated {section.effectiveDate}.
              </p>
            )}
          </>
        ) : (
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
        )}
      </section>
    </>
  );
}

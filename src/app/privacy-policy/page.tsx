import type { Metadata } from "next";

import { Markdown } from "@/components/markdown";
import { Placeholder } from "@/components/placeholder";
import { SectionHeaderBar } from "@/components/sections/section-header-bar";
import { getLegalSection } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Organisation of Choice™, a programme of Carbon Value Partners Private Limited.",
};

export default async function PrivacyPage() {
  // Published from /admin/website-content → Privacy Policy. Until something is
  // published there, the page keeps the placeholder it has always shown rather
  // than rendering an empty legal page.
  const section = await getLegalSection("privacy");

  return (
    <>
      <SectionHeaderBar label="Legal: Privacy Policy" />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-navy-ink">
          {section?.title || "Privacy Policy."}
        </h1>

        {section ? (
          <>
            <Markdown className="mt-10">{section.bodyMarkdown}</Markdown>
            <div className="mt-10 space-y-2 border-t border-navy/8 pt-6 text-sm text-muted-foreground">
              {section.grievanceOfficer && <p>Grievance officer: {section.grievanceOfficer}</p>}
              {section.effectiveDate && <p>Last updated {section.effectiveDate}.</p>}
            </div>
          </>
        ) : (
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
        )}
      </section>
    </>
  );
}

import type { Metadata } from "next";

import { Placeholder } from "@/components/placeholder";
import { SectionHeaderBar } from "@/components/sections/section-header-bar";
import { glossaryTerms } from "@/data/glossary";

export const metadata: Metadata = {
  title: "Glossary — Organisation of Choice™",
  description: "The language of workplace certification, defined.",
};

export default function GlossaryPage() {
  return (
    <>
      <SectionHeaderBar label="Resources — Glossary" />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-navy-ink">Glossary.</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          The language of workplace certification, in plain terms.
        </p>

        <dl className="mt-12 space-y-8">
          {glossaryTerms.map((entry) => (
            <div key={entry.term}>
              <dt className="font-heading text-lg font-semibold text-navy-ink">{entry.term}</dt>
              <dd className="mt-2 text-muted-foreground">
                {entry.definition}
                {entry.definitionPlaceholder && (
                  <> <Placeholder>{entry.definitionPlaceholder}</Placeholder></>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}

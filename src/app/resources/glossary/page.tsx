import type { Metadata } from "next";

import { Placeholder } from "@/components/placeholder";
import { SectionHeaderBar } from "@/components/sections/section-header-bar";
import type { GlossaryTerm } from "@/data/glossary";
import { getGlossaryTerms } from "@/lib/content";

export const metadata: Metadata = {
  title: "Glossary",
  description: "The language of workplace certification, defined.",
};

// Group by first letter so each block gets a heading, an anchor, and a
// quick-nav target. Sorted here rather than trusting the source: admin-entered
// terms arrive in whatever order they were added.
function groupByLetter(terms: GlossaryTerm[]) {
  return [...terms]
    .sort((a, b) => a.term.localeCompare(b.term))
    .reduce<{ letter: string; terms: GlossaryTerm[] }[]>((acc, entry) => {
      const letter = entry.term[0].toUpperCase();
      const current = acc[acc.length - 1];
      if (current && current.letter === letter) current.terms.push(entry);
      else acc.push({ letter, terms: [entry] });
      return acc;
    }, []);
}

export default async function GlossaryPage() {
  const glossaryTerms = await getGlossaryTerms();
  const groups = groupByLetter(glossaryTerms);

  return (
    <>
      <SectionHeaderBar label="Resources: Glossary" />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-navy-ink">Glossary.</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          The language of workplace certification, in plain terms.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3 border-y border-navy/8 py-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-ink">
            {glossaryTerms.length} terms
          </span>
          <nav aria-label="Jump to letter" className="flex flex-wrap gap-1.5">
            {groups.map((group) => (
              <a
                key={group.letter}
                href={`#letter-${group.letter}`}
                className="grid size-7 place-items-center rounded-md text-sm font-semibold text-navy-ink/70 transition-colors hover:bg-mint hover:text-navy-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
              >
                {group.letter}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 space-y-14">
          {groups.map((group) => (
            <div key={group.letter} id={`letter-${group.letter}`} className="scroll-mt-24">
              <div className="grid gap-6 sm:grid-cols-[3.5rem_1fr] sm:items-start">
                <span
                  aria-hidden
                  className="font-heading text-5xl font-semibold leading-none text-navy/12 sm:text-6xl"
                >
                  {group.letter}
                </span>
                <dl className="grid gap-4 sm:grid-cols-2">
                  {group.terms.map((entry) => (
                    <div
                      key={entry.term}
                      className="rounded-2xl border border-navy/8 border-t-2 border-t-ooc-gold/70 bg-white p-6"
                    >
                      <dt className="font-heading text-base font-semibold text-navy-ink">
                        {entry.term}
                      </dt>
                      <dd className="mt-2 text-sm leading-6 text-muted-foreground">
                        {entry.definition}
                        {entry.definitionPlaceholder && (
                          <> <Placeholder>{entry.definitionPlaceholder}</Placeholder></>
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

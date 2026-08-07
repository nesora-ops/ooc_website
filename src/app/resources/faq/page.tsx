import type { Metadata } from "next";

import { FAQAccordion } from "@/components/sections/faq-accordion";
import { SectionHeaderBar } from "@/components/sections/section-header-bar";
import { resourcesFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQs — Organisation of Choice™",
  description: "Straight answers for employers, job seekers, and partners.",
};

const groups = [
  { heading: "For employers.", items: resourcesFaqs.employers },
  { heading: "For job seekers.", items: resourcesFaqs.jobSeekers },
  { heading: "For partners.", items: resourcesFaqs.partners },
];

export default function FAQPage() {
  return (
    <>
      <SectionHeaderBar label="Resources — FAQs" />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-navy-ink">
          Frequently asked questions.
        </h1>

        <div className="mt-12 space-y-12">
          {groups.map((group) => (
            <div key={group.heading}>
              <h2 className="font-heading text-xl font-semibold text-teal">{group.heading}</h2>
              <FAQAccordion className="mt-4" items={group.items} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

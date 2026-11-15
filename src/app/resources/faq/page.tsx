import type { Metadata } from "next";

import { FAQAccordion } from "@/components/sections/faq-accordion";
import { SectionHeaderBar } from "@/components/sections/section-header-bar";
import { faqDefaults } from "@/content/pages/faq";
import { getFaqs, getPage } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("faq", faqDefaults);
  return { title: page.metaTitle, description: page.metaDescription };
}

export default async function FAQPage() {
  const [page, employers, jobSeekers, partners] = await Promise.all([
    getPage("faq", faqDefaults),
    getFaqs("employers"),
    getFaqs("jobSeekers"),
    getFaqs("partners"),
  ]);

  const groups = [
    { heading: page.employersHeading, items: employers },
    { heading: page.jobSeekersHeading, items: jobSeekers },
    { heading: page.partnersHeading, items: partners },
  ];

  return (
    <>
      <SectionHeaderBar label={page.breadcrumb} />

      <section data-standard-layout className="mx-auto max-w-3xl px-4 py-16 text-left sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-navy-ink">
          {page.heroTitle}
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

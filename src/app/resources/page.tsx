import Link from "next/link";
import type { Metadata } from "next";

import { SectionHeaderBar } from "@/components/sections/section-header-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Resources — Organisation of Choice™",
  description:
    "Practical insight on workplace culture, employer branding, and what actually makes organisations worth choosing — from the team that assesses them for a living.",
};

const sections = [
  {
    title: "Blog.",
    description: "Regular insight on culture, talent, and certification.",
    href: "/resources/blog",
  },
  {
    title: "Guides & whitepapers.",
    description: "Deeper, downloadable resources for HR leaders.",
    href: "/resources/guides",
  },
  {
    title: "Glossary.",
    description: "The language of workplace certification, defined.",
    href: "/resources/glossary",
  },
  {
    title: "FAQs.",
    description: "Straight answers for employers, job seekers, and partners.",
    href: "/resources/faq",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <SectionHeaderBar label="Resources" />

      {/* HUB HERO */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold-ink">Hub hero</p>
        <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold text-navy-ink sm:text-5xl">
          Ideas worth working with.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Practical insight on workplace culture, employer branding, and what actually makes
          organisations worth choosing — from the team that assesses them for a living.
        </p>
      </section>

      {/* HUB SECTIONS */}
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-ink">Hub sections</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sections.map((section) => (
              <Card key={section.title} className="h-full">
                <CardHeader>
                  <CardTitle className="font-heading text-lg text-navy-ink">
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <p className="text-sm text-muted-foreground">{section.description}</p>
                  <Link
                    href={section.href}
                    className="text-sm font-medium text-teal hover:underline"
                  >
                    Explore →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

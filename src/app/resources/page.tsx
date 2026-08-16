import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, BookOpen, CircleHelp, FileText, Languages } from "lucide-react";

import { SectionHeaderBar } from "@/components/sections/section-header-bar";

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
    icon: BookOpen,
    className: "bg-navy text-white lg:col-span-7 lg:row-span-2",
  },
  {
    title: "Guides & whitepapers.",
    description: "Deeper, downloadable resources for HR leaders.",
    href: "/resources/guides",
    icon: FileText,
    className: "bg-sky/80 lg:col-span-5",
  },
  {
    title: "Glossary.",
    description: "The language of workplace certification, defined.",
    href: "/resources/glossary",
    icon: Languages,
    className: "bg-mint/80 lg:col-span-3",
  },
  {
    title: "FAQs.",
    description: "Straight answers for employers, job seekers, and partners.",
    href: "/resources/faq",
    icon: CircleHelp,
    className: "bg-butter/60 lg:col-span-2",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <SectionHeaderBar label="Resources" />

      {/* HUB HERO */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
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
          <div className="grid grid-flow-dense gap-3 lg:grid-cols-12 lg:grid-rows-2">
            {sections.map((section, index) => {
              const Icon = section.icon;
              const isDark = index === 0;
              return (
                <Link
                  key={section.title}
                  href={section.href}
                  className={`group min-h-56 rounded-[2rem] border border-navy/8 p-7 shadow-[0_18px_55px_rgba(23,50,77,0.06)] transition-transform hover:-translate-y-1 lg:p-9 ${section.className}`}
                >
                  <span className="flex h-full flex-col justify-between gap-10">
                    <span className="flex items-start justify-between gap-6">
                      <Icon className={`size-8 ${isDark ? "text-butter" : "text-teal"}`} aria-hidden strokeWidth={1.6} />
                      <ArrowUpRight className={`size-5 ${isDark ? "text-white/60" : "text-navy/45"}`} aria-hidden />
                    </span>
                    {isDark && (
                      <span className="font-heading text-5xl font-semibold leading-none text-white/12 sm:text-7xl">
                        Ideas,<br />unpacked.
                      </span>
                    )}
                    <span>
                      <span className={`block font-heading text-3xl font-semibold ${isDark ? "text-white" : "text-navy-ink"}`}>
                        {section.title}
                      </span>
                      <span className={`mt-3 block text-sm leading-6 ${isDark ? "text-white/70" : "text-muted-foreground"}`}>
                        {section.description}
                      </span>
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

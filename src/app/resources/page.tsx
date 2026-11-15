import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, BookOpen, CircleHelp, FileText, Languages } from "lucide-react";

import { ImageSlot } from "@/components/image-slot";
import { SectionHeaderBar } from "@/components/sections/section-header-bar";
import { resourcesDefaults } from "@/content/pages/resources";
import { getPage } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("resources", resourcesDefaults);
  return { title: page.metaTitle, description: page.metaDescription };
}

// Per-card icon and layout, in card order. The words are in
// src/content/pages/resources.ts.
const SECTION_STYLES = [
  { icon: BookOpen, className: "bg-navy text-white lg:col-span-7 lg:row-span-2" },
  { icon: FileText, className: "bg-sky/80 lg:col-span-5" },
  { icon: Languages, className: "bg-mint/80 lg:col-span-3" },
  { icon: CircleHelp, className: "bg-butter/60 lg:col-span-2" },
];

export default async function ResourcesPage() {
  const page = await getPage("resources", resourcesDefaults);

  return (
    <>
      <SectionHeaderBar label={page.breadcrumb} />

      {/* HUB HERO */}
      <section data-standard-layout className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
        <div>
          <h1 className="max-w-2xl font-heading text-4xl font-bold text-navy-ink sm:text-5xl">
            {page.heroTitle}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            {page.heroIntro}
          </p>
        </div>
        <ImageSlot
          contentKey="workplace resource library"
          alt={page.heroImageAlt}
          src={page.heroImage}
          aspect="video"
          priority
          sizes="(min-width: 1024px) 56vw, 100vw"
          className="rounded-[2.25rem] bg-white shadow-[0_28px_80px_rgba(23,50,77,0.1)]"
        />
      </section>

      {/* HUB SECTIONS */}
      <section className="bg-muted/40 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-flow-dense gap-3 lg:grid-cols-12 lg:grid-rows-2">
            {page.sections.map((section, index) => {
              const style = SECTION_STYLES[index % SECTION_STYLES.length];
              const Icon = style.icon;
              const isDark = index === 0;
              return (
                <Link
                  key={index}
                  href={section.href}
                  className={`group min-h-56 rounded-[2rem] border border-navy/8 p-7 shadow-[0_18px_55px_rgba(23,50,77,0.06)] transition-transform hover:-translate-y-1 lg:p-9 ${style.className}`}
                >
                  <span className="flex h-full flex-col justify-between gap-10">
                    <span className="flex items-start justify-between gap-6">
                      <Icon className={`size-8 ${isDark ? "text-butter" : "text-teal"}`} aria-hidden strokeWidth={1.6} />
                      <ArrowUpRight className={`size-5 ${isDark ? "text-white/60" : "text-navy/45"}`} aria-hidden />
                    </span>
                    {isDark && (
                      <span className="font-heading text-5xl font-semibold leading-none text-white/90 sm:text-7xl">
                        {page.featureLine1}<br />{page.featureLine2}
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

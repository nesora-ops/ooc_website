import Link from "next/link";
import type { Metadata } from "next";

import { Seal } from "@/components/brand/seal";
import { SectionHeaderBar } from "@/components/sections/section-header-bar";
import { Button } from "@/components/ui/button";
import { badgeDefaults } from "@/content/pages/badge";
import { getPage } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("badge", badgeDefaults);
  return { title: page.metaTitle, description: page.metaDescription };
}

export default async function BadgePage() {
  const page = await getPage("badge", badgeDefaults);

  return (
    <>
      <SectionHeaderBar label={page.breadcrumb} />

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <Seal size={240} priority />
        <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold text-navy-ink sm:text-5xl">
          {page.heroTitle}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          {page.heroIntro}
        </p>

        <div className="mt-10">
          <Button asChild size="lg">
            <Link href={page.buttonHref}>{page.buttonLabel}</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

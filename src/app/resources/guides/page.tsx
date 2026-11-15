import type { Metadata } from "next";

import { SectionHeaderBar } from "@/components/sections/section-header-bar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { guidesDefaults } from "@/content/pages/guides";
import { getGuides, getPage } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("guides", guidesDefaults);
  return { title: page.metaTitle, description: page.metaDescription };
}

/** "2.4 MB" for the download button. */
function formatSize(bytes?: number) {
  if (!bytes) return null;
  const mb = bytes / (1024 * 1024);
  return mb >= 1 ? `${mb.toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`;
}

export default async function GuidesPage() {
  const [page, guides] = await Promise.all([getPage("guides", guidesDefaults), getGuides()]);

  return (
    <>
      <SectionHeaderBar label={page.breadcrumb} />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-navy-ink">{page.heroTitle}</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          {page.heroIntro}
        </p>

        <ul className="mt-12 grid gap-6 sm:grid-cols-3">
          {guides.map((guide) => (
            <li key={guide.id}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="font-heading text-lg text-navy-ink">
                    {guide.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-start gap-4">
                  <p className="text-sm text-muted-foreground">{guide.description}</p>
                  {guide.fileUrl ? (
                    <Button variant="outline" asChild>
                      <a href={guide.fileUrl} target="_blank" rel="noreferrer" download>
                        {page.downloadLabel}
                        {formatSize(guide.fileSize) && (
                          <span className="ml-1 text-xs opacity-70">
                            ({formatSize(guide.fileSize)})
                          </span>
                        )}
                      </a>
                    </Button>
                  ) : (
                    <Button variant="outline" disabled>
                      {page.comingSoonLabel}
                    </Button>
                  )}
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

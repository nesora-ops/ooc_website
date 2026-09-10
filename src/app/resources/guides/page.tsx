import type { Metadata } from "next";

import { SectionHeaderBar } from "@/components/sections/section-header-bar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getGuides } from "@/lib/content";

export const metadata: Metadata = {
  title: "Guides & Whitepapers",
  description: "Deeper, downloadable resources for HR leaders.",
};

/** "2.4 MB" for the download button. */
function formatSize(bytes?: number) {
  if (!bytes) return null;
  const mb = bytes / (1024 * 1024);
  return mb >= 1 ? `${mb.toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`;
}

export default async function GuidesPage() {
  const guides = await getGuides();

  return (
    <>
      <SectionHeaderBar label="Resources: Guides" />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-navy-ink">Guides &amp; whitepapers.</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Longer-form resources for leaders who want to go deeper on building workplaces worth
          certifying, and on making the most of certification once it&apos;s earned. Each guide is
          free to download.
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
                        Download PDF
                        {formatSize(guide.fileSize) && (
                          <span className="ml-1 text-xs opacity-70">
                            ({formatSize(guide.fileSize)})
                          </span>
                        )}
                      </a>
                    </Button>
                  ) : (
                    <Button variant="outline" disabled>
                      Download (coming soon)
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

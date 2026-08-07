import type { Metadata } from "next";

import { SectionHeaderBar } from "@/components/sections/section-header-bar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { guides } from "@/data/guides";

export const metadata: Metadata = {
  title: "Guides & Whitepapers — Organisation of Choice™",
  description: "Deeper, downloadable resources for HR leaders.",
};

export default function GuidesPage() {
  return (
    <>
      <SectionHeaderBar label="Resources — Guides" />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-navy-ink">Guides &amp; whitepapers.</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Longer-form resources for leaders who want to go deeper — on building workplaces worth
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
                  <Button variant="outline" disabled>
                    Download — coming soon
                  </Button>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

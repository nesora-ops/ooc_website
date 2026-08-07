import Link from "next/link";
import type { Metadata } from "next";

import { SectionHeaderBar } from "@/components/sections/section-header-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog — Organisation of Choice™",
  description: "Regular insight on culture, talent, and certification.",
};

export default function BlogListingPage() {
  return (
    <>
      <SectionHeaderBar label="Resources — Blog" />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-navy-ink">Blog.</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Regular insight on culture, talent, and certification.
        </p>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="font-heading text-lg leading-snug text-navy-ink">
                    <Link href={`/resources/blog/${post.slug}`} className="hover:text-teal">
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>{post.teaser}</p>
                  <p className="text-xs">
                    {post.date} · {post.author}
                  </p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

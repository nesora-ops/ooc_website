import Link from "next/link";
import type { Metadata } from "next";

import { ImageSlot } from "@/components/image-slot";
import { SectionHeaderBar } from "@/components/sections/section-header-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blogDefaults } from "@/content/pages/blog";
import { getBlogPosts, getPage } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("blog", blogDefaults);
  return { title: page.metaTitle, description: page.metaDescription };
}

export default async function BlogListingPage() {
  const [page, blogPosts] = await Promise.all([getPage("blog", blogDefaults), getBlogPosts()]);

  return (
    <>
      <SectionHeaderBar label={page.breadcrumb} />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-navy-ink">{page.heroTitle}</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          {page.heroIntro}
        </p>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <Card className="h-full overflow-hidden pt-0">
                <ImageSlot
                  contentKey={`blog thumbnail — ${post.slug}`}
                  alt={post.image?.alt ?? post.title}
                  src={post.image?.src}
                  aspect="video"
                  className="rounded-none rounded-t-3xl border-0 border-b border-navy/8"
                />
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

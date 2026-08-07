import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Placeholder } from "@/components/placeholder";
import { SectionHeaderBar } from "@/components/sections/section-header-bar";
import { blogPosts } from "@/data/blog-posts";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return {};

  return {
    title: `${post.title} — Organisation of Choice™`,
    description: post.teaser,
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <>
      <SectionHeaderBar label="Resources — Blog" />

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl font-bold text-navy-ink sm:text-4xl">{post.title}</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          {post.date} · {post.author}
        </p>

        <div className="mt-10 space-y-6 text-muted-foreground">
          <p className="text-lg">{post.teaser}</p>
          <Placeholder variant="block">
            full article body for &ldquo;{post.title}&rdquo;
          </Placeholder>
        </div>

        <Link
          href="/resources/blog"
          className="mt-12 inline-block font-medium text-teal hover:underline"
        >
          ← Back to all articles
        </Link>
      </article>
    </>
  );
}

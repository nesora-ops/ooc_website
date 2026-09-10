import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { ImageSlot } from "@/components/image-slot";
import { Markdown } from "@/components/markdown";
import { Placeholder } from "@/components/placeholder";
import { SectionHeaderBar } from "@/components/sections/section-header-bar";
import { getBlogPost, getBlogPosts } from "@/lib/content";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// A post published in the admin after this page was built is not in
// generateStaticParams, so it must still render on first request rather than
// 404. Unpublishing one leaves a stale page until the tag is revalidated, which
// the admin's save already triggers.
export const dynamicParams = true;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.teaser,
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) notFound();

  return (
    <>
      <SectionHeaderBar label="Resources: Blog" />

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl font-bold text-navy-ink sm:text-4xl">{post.title}</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          {post.date} · {post.author}
        </p>

        <ImageSlot
          contentKey={`article hero — ${post.slug}`}
          alt={post.image?.alt ?? post.title}
          src={post.image?.src}
          aspect="wide"
          sizes="(min-width: 768px) 48rem, 100vw"
          priority
          className="mt-8"
        />

        {post.bodyMarkdown ? (
          <Markdown className="mt-10">{post.bodyMarkdown}</Markdown>
        ) : (
          <div className="mt-10 space-y-6 text-muted-foreground">
            <p className="text-lg">{post.teaser}</p>
            <Placeholder variant="block">
              full article body for &ldquo;{post.title}&rdquo;
            </Placeholder>
          </div>
        )}

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

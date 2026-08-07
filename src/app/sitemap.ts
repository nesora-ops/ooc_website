import type { MetadataRoute } from "next";

import { blogPosts } from "@/data/blog-posts";
import { siteUrl } from "@/lib/site-url";

// Static routes in PRD §4 order, with the blog posts appended.
const staticRoutes = [
  { path: "/", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/certification", priority: 0.9 },
  { path: "/employers", priority: 0.9 },
  { path: "/directory", priority: 0.9 },
  { path: "/partners", priority: 0.8 },
  { path: "/resources", priority: 0.7 },
  { path: "/resources/blog", priority: 0.7 },
  { path: "/resources/guides", priority: 0.6 },
  { path: "/resources/glossary", priority: 0.6 },
  { path: "/resources/faq", priority: 0.6 },
  { path: "/news", priority: 0.6 },
  { path: "/contact", priority: 0.7 },
  { path: "/terms", priority: 0.3 },
  { path: "/privacy", priority: 0.3 },
  { path: "/cookies", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route.path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: route.priority,
    })),
    ...blogPosts.map((post) => ({
      url: `${siteUrl}/resources/blog/${post.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}

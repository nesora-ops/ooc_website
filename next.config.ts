import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Blog covers and team headshots uploaded through CertifyDB's website
    // content admin live in that project's Supabase Storage bucket, so
    // next/image has to be told the host is trusted.
    remotePatterns: [
      { protocol: "https", hostname: "*.supabase.co", pathname: "/storage/v1/object/public/**" },
    ],
  },

  // The policy pages moved to their canonical marketing URLs. These keep the
  // old paths — already published in the sitemap and linked externally — alive
  // as permanent (308) redirects rather than 404s.
  async redirects() {
    return [
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      { source: "/terms", destination: "/terms-of-service", permanent: true },
    ];
  },
};

export default nextConfig;

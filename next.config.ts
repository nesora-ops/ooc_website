import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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

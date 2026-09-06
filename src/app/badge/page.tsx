import type { Metadata } from "next";

import { BadgeEmbed } from "@/components/brand/badge-embed";
import { Seal } from "@/components/brand/seal";
import { SectionHeaderBar } from "@/components/sections/section-header-bar";
import { siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Certification Badge | Organisation of Choice™",
  description:
    "Certified organisations can embed the Organisation of Choice seal on their own website. Copy the ready-made HTML snippet.",
};

// Absolute, not root-relative: the snippet is pasted onto the employer's own
// domain, where "/images/brand/seal.png" would resolve against their host.
const snippet = `<a href="${siteUrl}" target="_blank" rel="noopener">
  <img
    src="${siteUrl}/images/brand/seal.png"
    alt="Certified Organisation of Choice"
    width="160"
    height="160"
  />
</a>`;

export default function BadgePage() {
  return (
    <>
      <SectionHeaderBar label="Certification Badge" />

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <Seal size={240} priority />
        <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold text-navy-ink sm:text-5xl">
          Show your certification.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Certified organisations may display the Organisation of Choice seal for the term of
          their certification. Paste this snippet wherever you want the badge to appear.
        </p>

        <div className="mx-auto mt-10 w-full max-w-2xl text-left">
          <BadgeEmbed snippet={snippet} />
        </div>
      </section>
    </>
  );
}

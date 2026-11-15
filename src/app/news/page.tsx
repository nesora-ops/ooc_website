import type { Metadata } from "next";
import { FileText, Image, MessageSquareText, UserRound } from "lucide-react";

import { MediaEnquiryForm } from "@/components/forms/media-enquiry-form";
import { Rich } from "@/components/placeholder";
import { ImageSlot } from "@/components/image-slot";
import { SectionHeaderBar } from "@/components/sections/section-header-bar";
import { newsDefaults } from "@/content/pages/news";
import { getFormCopy, getPage } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("news", newsDefaults);
  return { title: page.metaTitle, description: page.metaDescription };
}

// Icons for the three media kit cards, in order. The third card carries the
// logo lockup image.
const MEDIA_KIT_ICONS = [FileText, UserRound, Image];

export default async function NewsPage() {
  const page = await getPage("news", newsDefaults);
  const formCopy = await getFormCopy(page.formSuccessTitle, page.formSuccessMessage);

  return (
    <>
      <SectionHeaderBar label={page.breadcrumb} />

      {/* HERO */}
      <section data-standard-layout className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:px-8">
        <div>
          <h1 className="max-w-3xl font-heading text-4xl font-bold text-navy-ink sm:text-5xl">
            {page.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            {page.heroIntro}
          </p>
        </div>
        <ImageSlot
          contentKey="news and press editorial"
          alt={page.heroImageAlt}
          src={page.heroImage}
          aspect="4/3"
          priority
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="rounded-[2.25rem] bg-white shadow-[0_28px_80px_rgba(23,50,77,0.1)]"
        />
      </section>

      {/* MEDIA KIT */}
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
            {page.mediaKitTitle}
          </h2>
          <div className="mt-12 grid gap-3 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[2rem] bg-navy p-8 text-white lg:p-10">
              <MessageSquareText className="size-8 text-butter" aria-hidden strokeWidth={1.6} />
              <p className="mt-12 font-heading text-2xl leading-snug text-white sm:text-3xl">
                {page.boilerplateQuote}
              </p>
              <p className="mt-8 text-sm leading-6 text-white/65">
                {page.boilerplateNote}
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {page.mediaKitItems.map((item, index) => {
                const Icon = MEDIA_KIT_ICONS[index % MEDIA_KIT_ICONS.length];
                return (
                  <div key={index} className="rounded-[1.75rem] border border-navy/8 bg-white/80 p-6">
                    <Icon className="size-6 text-teal" aria-hidden strokeWidth={1.6} />
                    <h3 className="mt-6 text-lg font-semibold text-navy-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
                    {index === 2 && (
                      <ImageSlot
                        contentKey="media kit — approved logo lockups"
                        alt={page.logoLockupImageAlt}
                        src={page.logoLockupImage || undefined}
                        aspect="video"
                        sizes="(min-width: 1024px) 24rem, 100vw"
                        className="mt-5"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            <Rich text={page.mediaKitNote} />
          </p>
        </div>
      </section>

      {/* MEDIA ENQUIRY FORM */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mt-8 max-w-3xl">
          <MediaEnquiryForm copy={formCopy} />
        </div>
      </section>
    </>
  );
}

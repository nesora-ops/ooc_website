import type { Metadata } from "next";
import { FileText, Image, MessageSquareText, UserRound } from "lucide-react";

import { MediaEnquiryForm } from "@/components/forms/media-enquiry-form";
import { Placeholder } from "@/components/placeholder";
import { SectionHeaderBar } from "@/components/sections/section-header-bar";

export const metadata: Metadata = {
  title: "News & Press — Organisation of Choice™",
  description:
    "Programme announcements, newly certified organisations, and resources for journalists covering the changing world of work.",
};

export default function NewsPage() {
  return (
    <>
      <SectionHeaderBar label="News & Press" />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold text-navy-ink sm:text-5xl">
          News &amp; press.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Programme announcements, newly certified organisations, and resources for journalists
          covering the changing world of work.
        </p>
      </section>

      {/* MEDIA KIT */}
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
            Everything a clear story needs.
          </h2>
          <div className="mt-12 grid gap-3 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[2rem] bg-navy p-8 text-white lg:p-10">
              <MessageSquareText className="size-8 text-butter" aria-hidden strokeWidth={1.6} />
              <p className="mt-12 font-heading text-2xl leading-snug text-white sm:text-3xl">
                “Organisation of Choice™ is an independent workplace certification programme that
                turns workplace culture, systems, and employee experience into verified proof.”
              </p>
              <p className="mt-8 text-sm leading-6 text-white/65">
                Approved short description for press use. The programme operates across India,
                certifies at Silver, Gold, Platinum, and Diamond, and lists every current outcome publicly.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {[
                { icon: FileText, title: "Programme boilerplate", body: "Approved long-form description and key facts." },
                { icon: UserRound, title: "Founder biography", body: "Background, designation, and interview context." },
                { icon: Image, title: "Logos & imagery", body: "Usage guidance and approved visual assets." },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-[1.75rem] border border-navy/8 bg-white/80 p-6">
                    <Icon className="size-6 text-teal" aria-hidden strokeWidth={1.6} />
                    <h3 className="mt-6 text-lg font-semibold text-navy-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Complete media kit: <Placeholder>available on request</Placeholder>
          </p>
        </div>
      </section>

      {/* MEDIA ENQUIRY FORM */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mt-8 max-w-3xl">
          <MediaEnquiryForm />
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { Check, Eye, Scale, Users } from "lucide-react";

import { ImageSlot } from "@/components/image-slot";
import { CTABand } from "@/components/sections/cta-band";
import { ProgressiveDetails } from "@/components/sections/progressive-details";
import { RichParagraphs } from "@/components/placeholder";
import { SectionHeaderBar } from "@/components/sections/section-header-bar";
import { aboutDefaults } from "@/content/pages/about";
import { getPage, getTeam } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("about", aboutDefaults);
  return { title: page.metaTitle, description: page.metaDescription };
}

// Defaults for the founder and advisor. Anything published from
// /admin/website-content -> Founder & Team overrides the matching field by name;
// people only in the CMS are listed after these.
const fallbackTeam = [
  {
    name: "Ketaki",
    designation: "Founder",
    imageUrl: "/images/team/ketaki.jpg",
    bio: "As the Founder of Organisation of Choice™ (OOC), Ketaki believes that true certification must be earned through evidence, integrity, and transparency, never negotiation. Her vision is to redefine workplace excellence by ensuring that every assessment reflects the perspectives of employees, leadership, and independent assessors. Recognising that an organisation is experienced differently at every level, she advocates a holistic and unbiased approach to certification. Under her leadership, OOC goes beyond recognition, providing organisations with actionable insights, detailed assessment reports, and a clear roadmap for continuous improvement, sustainable growth, and long-term organisational excellence.",
  },
  {
    name: "Dipak",
    designation: "Sales & Growth Advisor",
    imageUrl: "/images/team/dipak.jpg",
    bio: "As Sales & Growth Advisor at Organisation of Choice™ (OOC), Dipak brings a strategic perspective to business growth, market positioning, and meaningful corporate engagement. The role goes beyond conventional sales, focusing on building influential partnerships, unlocking new market opportunities, and positioning OOC as a trusted benchmark for organisational excellence. By connecting business ambition with responsible leadership, workplace culture, and long-term value creation, Dipak helps shape OOC's growth journey while championing a future where business success and people-centric practices advance together.",
  },
];

export default async function AboutPage() {
  const [page, published] = await Promise.all([getPage("about", aboutDefaults), getTeam()]);
  const team = [
    ...fallbackTeam.map((base) => {
      const row = published.find((member) => member.name === base.name);
      return {
        name: base.name,
        designation: row?.designation || base.designation,
        bio: row?.bio || base.bio,
        imageUrl: row?.imageUrl || base.imageUrl,
      };
    }),
    ...published.filter((row) => !fallbackTeam.some((base) => base.name === row.name)),
  ];

  return (
    <>
      <SectionHeaderBar label={page.breadcrumb} />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold text-navy-ink sm:text-5xl">
          {page.heroTitle}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          {page.heroIntro}
        </p>
      </section>

      {/* TEAM AND GOVERNANCE */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-[23px] font-bold uppercase leading-none tracking-[0.06em] text-gold-ink">
          {page.teamEyebrow}
        </p>
        <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
          {page.teamTitle}
        </h2>
        <p className="mt-8 max-w-3xl text-muted-foreground">
          {page.teamIntro}
        </p>
        <ul className="mx-auto mt-8 grid max-w-3xl gap-6 sm:grid-cols-2">
          {team.map((member) => (
            <li
              key={member.name}
              className="flex flex-col rounded-2xl border border-navy/8 bg-white/70 p-6 text-sm text-muted-foreground"
            >
              <ImageSlot
                contentKey={`headshot — ${member.name}`}
                alt={member.designation ? `${member.name}, ${member.designation}` : member.name}
                src={member.imageUrl}
                aspect="square"
                sizes="(min-width: 640px) 18rem, 100vw"
                className="mb-5"
              />
              <p className="font-heading text-base font-semibold text-navy-ink">
                {member.designation ? `${member.name}, ${member.designation}` : member.name}
              </p>
              {member.bio && <p className="mt-3 leading-6">{member.bio}</p>}
            </li>
          ))}
        </ul>
      </section>

      {/* OUR STORY */}
      <section className="bg-muted/40 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <ImageSlot
              contentKey="evidence becomes trust"
              alt={page.storyImageAlt}
              src={page.storyImage}
              aspect="video"
              sizes="(min-width: 1024px) 42vw, 100vw"
              priority
              className="mx-auto max-w-md rounded-[2.25rem] bg-white shadow-[0_28px_80px_rgba(23,50,77,0.1)]"
            />

            <div>
              <h2 className="font-heading text-3xl font-bold text-navy-ink sm:text-5xl">
                {page.storyTitle}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                {page.storyIntro}
              </p>
              <ProgressiveDetails className="mt-8 max-w-xl" label={page.storyDetailsLabel}>
                <RichParagraphs text={page.storyDetails} />
              </ProgressiveDetails>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl overflow-hidden rounded-[2.25rem] border border-navy/8 bg-white/70 sm:grid-cols-2">
          <div className="p-8 sm:p-10 lg:p-12">
            <Eye className="size-8 text-teal" aria-hidden strokeWidth={1.6} />
            <h2 className="mt-8 font-heading text-3xl font-semibold text-navy-ink">{page.missionTitle}</h2>
            <p className="mt-3 text-muted-foreground">
              {page.missionBody}
            </p>
          </div>
          <div className="border-t border-navy/8 bg-navy p-8 sm:border-l sm:border-t-0 sm:p-10 lg:p-12">
            <Check className="size-8 text-butter" aria-hidden strokeWidth={1.6} />
            <h2 className="mt-8 font-heading text-3xl font-semibold text-white">{page.visionTitle}</h2>
            <p className="mt-3 text-white/72">
              {page.visionBody}
            </p>
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="bg-muted/40 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mt-4 border-b border-gold/40 pb-4 font-heading text-3xl font-bold text-navy-ink">
            {page.principlesTitle}
          </h2>
          <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <ImageSlot
              contentKey="leadership discussion and rigour"
              alt={page.principlesImageAlt}
              src={page.principlesImage}
              aspect="square"
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="rounded-[2.25rem] bg-white shadow-[0_28px_80px_rgba(23,50,77,0.1)]"
            />
            <div className="mx-auto max-w-5xl divide-y divide-navy/10 border-y border-navy/10">
              {page.principles.map((item, index) => {
                const icons = [Scale, Users, Eye];
                const Icon = icons[index % icons.length];
                return (
                  <details key={index} className="group py-2">
                    <summary className="grid cursor-pointer list-none items-center gap-5 py-6 marker:content-none sm:grid-cols-[3.5rem_1fr_auto]">
                      <span className="grid size-12 place-items-center rounded-full bg-white text-teal shadow-sm">
                        <Icon className="size-5" aria-hidden strokeWidth={1.7} />
                      </span>
                      <span>
                        <span className="block text-xl font-semibold text-navy-ink">{item.lead}</span>
                        <span className="mt-1 block text-sm text-muted-foreground">{item.summary}</span>
                      </span>
                      <span className="hidden text-[23px] font-bold uppercase leading-none tracking-[0.06em] text-teal sm:block">
                        <span className="group-open:hidden">{page.principlesOpenLabel}</span>
                        <span className="hidden group-open:inline">{page.principlesCloseLabel}</span>
                      </span>
                    </summary>
                    <p className="max-w-3xl pb-7 text-sm leading-7 text-muted-foreground sm:pl-[5.1rem]">
                      {item.body}
                    </p>
                  </details>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CTABand
        heading={page.ctaTitle}
        body={page.ctaBody}
        primaryCta={{ label: page.ctaPrimaryLabel, href: page.ctaPrimaryHref }}
      />
    </>
  );
}

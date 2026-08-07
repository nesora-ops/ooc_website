import type { Metadata } from "next";

import { Placeholder } from "@/components/placeholder";
import { SectionHeaderBar } from "@/components/sections/section-header-bar";

export const metadata: Metadata = {
  title: "Cookie Policy — Organisation of Choice™",
  description:
    "How Organisation of Choice™ uses cookies and similar technologies on organisationofchoice.com.",
};

export default function CookiesPage() {
  return (
    <>
      <SectionHeaderBar label="Legal — Cookie Policy" />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-navy-ink">Cookie Policy.</h1>

        <div className="mt-10 space-y-6 text-muted-foreground">
          <p>
            This Cookie Policy explains how Organisation of Choice™, a programme of Carbon Value
            Partners Private Limited, uses cookies and similar technologies on
            organisationofchoice.com. A cookie is a small text file placed on your device when you
            visit a website, used to make the site work properly, to understand how it is used, and,
            where you consent, to support analytics and communications.
          </p>
          <p>
            We use the following categories of cookies. (a) Strictly necessary cookies, which are
            required for the website to function — including cookies that maintain form state and
            remember your cookie preferences — and which cannot be switched off through the site.
            (b) Analytics cookies, which help us understand how visitors use the site so that we can
            improve it; these are set only with your consent and the information they collect is
            aggregated. (c) Functional cookies, which remember choices you make — such as directory
            filters — to improve your experience on return visits. The specific cookies in use,
            their providers, and their durations are listed in the cookie preference centre:{" "}
            <Placeholder>cookie inventory</Placeholder>.
          </p>
          <p>
            When you first visit the site, a consent banner allows you to accept or decline
            non-essential cookies, and you may change your preferences at any time through the
            cookie preference centre linked in the website footer. Declining non-essential cookies
            does not restrict your access to any part of the site. For information about how we
            handle personal data more broadly, including your rights and how to exercise them,
            please refer to our Privacy Policy. Questions about this Cookie Policy may be directed
            to <Placeholder>contact email</Placeholder>. This policy was last updated on{" "}
            <Placeholder>effective date</Placeholder> and may be revised from time to time; the
            version published on this page is the version in force.
          </p>
        </div>
      </section>
    </>
  );
}

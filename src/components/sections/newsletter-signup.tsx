"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormFeedback } from "@/components/forms/form-feedback";
import { useFormSubmit } from "@/lib/forms/use-form-submit";
import { emailField } from "@/lib/forms/schemas";
import type { SiteContent } from "@/content/site";

export function NewsletterSignup({ site }: { site: SiteContent }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { state, submit } = useFormSubmit("newsletter");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = emailField.safeParse(email);
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "Enter a valid email address.");
      return;
    }
    setError(null);
    submit({ email: result.data });
  }

  if (state.status === "success") {
    return (
      <FormFeedback
        status="success"
        title={site.newsletterSuccessTitle}
        message={site.newsletterSuccessMessage}
      />
    );
  }

  if (state.status === "not-connected") {
    return (
      <FormFeedback
        status="not-connected"
        title={site.formNotConnectedTitle}
        message={site.newsletterNotConnected}
      />
    );
  }

  return (
    <div>
      {/* h2, not h3: this is a top-level footer section, and content-light
          pages have no intervening h2 — h3 here created an h1→h3 jump. */}
      <h2 className="font-heading text-xl font-semibold text-navy-ink">
        {site.newsletterHeading}
      </h2>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2 sm:flex-row">
        <Input
          type="email"
          placeholder={site.newsletterPlaceholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email address"
          aria-invalid={!!error}
          className="border-white bg-white text-foreground"
        />
        <Button type="submit" disabled={state.status === "submitting"}>
          {state.status === "submitting" ? site.newsletterButtonBusy : site.newsletterButton}
        </Button>
      </form>
      {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
      <p className="mt-3 text-xs text-muted-foreground">
        {site.newsletterConsentBefore}{" "}
        <Link href="/privacy-policy" className="underline hover:text-teal">
          {site.newsletterConsentLink}
        </Link>
        .
      </p>
    </div>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormFeedback } from "@/components/forms/form-feedback";
import { useWeb3Form } from "@/lib/forms/use-web3-form";
import { emailField } from "@/lib/forms/schemas";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { state, submit } = useWeb3Form("Newsletter signup");

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
        title="You're subscribed — welcome."
        message="The next edition will find you."
      />
    );
  }

  if (state.status === "not-connected") {
    return (
      <FormFeedback
        status="not-connected"
        message="Newsletter signup isn't connected to a live email service yet, but your address was validated successfully."
      />
    );
  }

  return (
    <div>
      <h3 className="font-heading text-lg font-semibold text-white">
        Insight worth hiring for, monthly.
      </h3>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2 sm:flex-row">
        <Input
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email address"
          aria-invalid={!!error}
          className="bg-white text-foreground"
        />
        <Button type="submit" disabled={state.status === "submitting"}>
          {state.status === "submitting" ? "Subscribing…" : "Subscribe"}
        </Button>
      </form>
      {error && <p className="mt-2 text-sm text-red-300">{error}</p>}
      <p className="mt-3 text-xs text-white/60">
        By subscribing you agree to our{" "}
        <Link href="/privacy" className="underline hover:text-white">
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
}

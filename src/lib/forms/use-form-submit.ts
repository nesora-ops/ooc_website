"use client";

import { useState } from "react";

export type FormStatus =
  | "idle"
  | "submitting"
  | "success"
  | "error"
  | "not-connected";

export type FormState = {
  status: FormStatus;
  message?: string;
};

/**
 * Shared submit handler for all 5 forms. POSTs cross-origin to CertifyDB's
 * public website endpoints (the Code repo, app/api/public/website/*), which
 * own the tables and the transactional email.
 *
 * If NEXT_PUBLIC_FORMS_API_URL is unset, submission is skipped and the caller
 * gets a "not-connected" state instead of an error — the form still validated
 * correctly, and a fresh clone with an empty .env still exercises every form.
 *
 * `path` is the endpoint segment: contact | certification | partner | media |
 * newsletter.
 */
const apiBase = process.env.NEXT_PUBLIC_FORMS_API_URL;

export function useFormSubmit(path: string) {
  const [state, setState] = useState<FormState>({ status: "idle" });

  async function submit(data: Record<string, unknown>) {
    if (!apiBase) {
      setState({ status: "not-connected" });
      return;
    }

    setState({ status: "submitting" });

    try {
      const response = await fetch(`${apiBase}/api/public/website/${path}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json().catch(() => ({}));

      if (response.ok && result.success) {
        setState({ status: "success" });
      } else {
        // The API returns { error }, so a server-side validation message
        // surfaces to the user verbatim.
        setState({
          status: "error",
          message: result.error ?? "Something went wrong. Please try again.",
        });
      }
    } catch {
      setState({
        status: "error",
        message: "Something went wrong. Please try again.",
      });
    }
  }

  function reset() {
    setState({ status: "idle" });
  }

  return { state, submit, reset };
}

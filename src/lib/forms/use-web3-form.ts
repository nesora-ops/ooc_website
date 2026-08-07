"use client";

import { useState } from "react";

export type Web3FormStatus =
  | "idle"
  | "submitting"
  | "success"
  | "error"
  | "not-connected";

export type Web3FormState = {
  status: Web3FormStatus;
  message?: string;
};

/**
 * Shared submit handler for all 5 forms. If NEXT_PUBLIC_WEB3FORMS_KEY is
 * unset, submission is skipped and the caller gets a "not-connected" state
 * instead of an error — the form still validated correctly (PROMPT.md §1).
 */
export function useWeb3Form(subject: string) {
  const [state, setState] = useState<Web3FormState>({ status: "idle" });

  async function submit(data: Record<string, unknown>) {
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (!accessKey) {
      setState({ status: "not-connected" });
      return;
    }

    setState({ status: "submitting" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ access_key: accessKey, subject, ...data }),
      });
      const result = await response.json();

      if (result.success) {
        setState({ status: "success" });
      } else {
        setState({
          status: "error",
          message: result.message ?? "Something went wrong. Please try again.",
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

"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

import { Button } from "@/components/ui/button";

export function BadgeEmbed({ snippet }: { snippet: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="mt-6">
      <pre className="overflow-x-auto rounded-2xl border border-navy/10 bg-white/85 p-4 text-left text-xs leading-6 text-ooc-navy">
        <code>{snippet}</code>
      </pre>
      <Button type="button" onClick={copy} className="mt-4">
        {copied ? <Check /> : <Copy />}
        {copied ? "Copied" : "Copy embed code"}
      </Button>
      <p aria-live="polite" className="sr-only">
        {copied ? "Embed code copied to clipboard" : ""}
      </p>
    </div>
  );
}

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { cn } from "@/lib/utils";

/**
 * Renders admin-authored markdown (legal pages, article bodies) in the site's
 * own type styles.
 *
 * Raw HTML is left disabled — react-markdown's default. Admin input is already
 * stripped of tags on the way into the database, and keeping HTML off here means
 * a tag that somehow survives prints as text instead of executing.
 */
export function Markdown({ children, className }: { children: string; className?: string }) {
  return (
    <div className={cn("space-y-6 text-muted-foreground", className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h2 className="font-heading text-2xl font-semibold text-navy-ink">{children}</h2>
          ),
          h2: ({ children }) => (
            <h2 className="font-heading text-xl font-semibold text-navy-ink">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="font-heading text-lg font-semibold text-navy-ink">{children}</h3>
          ),
          p: ({ children }) => <p className="leading-7">{children}</p>,
          ul: ({ children }) => <ul className="list-disc space-y-2 pl-6">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal space-y-2 pl-6">{children}</ol>,
          strong: ({ children }) => <strong className="font-semibold text-navy-ink">{children}</strong>,
          a: ({ href, children }) => (
            <a
              href={href}
              className="font-medium text-teal underline underline-offset-2 hover:no-underline"
              // Admin-supplied links are external as often as not, and noreferrer
              // is required alongside target to close the opener hole.
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={href?.startsWith("http") ? "noreferrer" : undefined}
            >
              {children}
            </a>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-2 border-gold/60 pl-4 italic">{children}</blockquote>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">{children}</table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border-b border-navy/10 pb-2 font-semibold text-navy-ink">{children}</th>
          ),
          td: ({ children }) => <td className="border-b border-navy/5 py-2">{children}</td>,
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}

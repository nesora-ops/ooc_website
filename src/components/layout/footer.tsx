import Link from "next/link";

import { CookiePreferencesLink } from "@/components/layout/cookie-preferences-link";
import { NewsletterSignup } from "@/components/sections/newsletter-signup";
import { Placeholder } from "@/components/placeholder";
import { footerColumns, socialLinks } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-xl">
          <NewsletterSignup />
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {footerColumns.map((column) => (
            <div key={column.title}>
              {/* h2 for the same reason as the newsletter heading above. */}
              <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-gold">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/80 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
            <p className="text-xs text-white/60">
              © <Placeholder className="border-white/30 bg-white/5 text-white">year</Placeholder>{" "}
              Organisation of Choice™ — a programme of Carbon Value Partners Private Limited.
            </p>
            <CookiePreferencesLink />
          </div>
          <div className="flex items-center gap-3">
            {socialLinks.map((platform) => (
              <span
                key={platform}
                title={`${platform} — coming soon`}
                aria-disabled="true"
                className="rounded border border-dashed border-white/25 px-2 py-1 text-[11px] font-medium text-white/50"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

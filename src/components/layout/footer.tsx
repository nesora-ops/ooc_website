import Link from "next/link";

import { CookiePreferencesLink } from "@/components/layout/cookie-preferences-link";
import { NewsletterSignup } from "@/components/sections/newsletter-signup";
import { Placeholder } from "@/components/placeholder";
import { footerColumns, socialLinks } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-navy/8 bg-[#edf5f2] text-navy-ink">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mb-16 grid gap-8 rounded-[2rem] border border-teal/10 bg-mint/80 p-6 shadow-[0_24px_70px_rgba(23,50,77,0.08)] sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:p-10">
          <div>
            <p className="text-sm font-semibold text-teal">Useful thinking, once a month.</p>
            <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
              Practical insight on workplace culture, employer branding, and certification.
            </p>
          </div>
          <NewsletterSignup />
        </div>

        <div className="mx-auto grid max-w-6xl gap-10 text-left sm:grid-cols-2 lg:grid-cols-5">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm font-semibold text-navy-ink">{column.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-teal">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col justify-between gap-5 border-t border-navy/10 pt-7 lg:flex-row lg:items-start">
          <div className="max-w-3xl space-y-2">
            <p className="text-xs leading-5 text-muted-foreground">
              © <Placeholder>year</Placeholder> Organisation of Choice™ — a programme of Carbon Value Partners Private Limited.
            </p>
            <CookiePreferencesLink />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {socialLinks.map((platform) => (
              <span
                key={platform}
                title={`${platform} — coming soon`}
                aria-disabled="true"
                className="rounded-lg border border-dashed border-navy/20 bg-white/55 px-2.5 py-1.5 text-[11px] font-semibold text-muted-foreground"
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

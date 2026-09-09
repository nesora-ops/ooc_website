import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CookieConsent } from "@/components/layout/cookie-consent";
import { SiteMotion } from "@/components/layout/site-motion";
import { siteName } from "@/lib/site-config";
import { siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  // A `default` + `template` pair, so the tab reads "Organisation of Choice" on
  // home and "About · Organisation of Choice" everywhere else. Every page's own
  // `title` must therefore be the bare page name, not a full composed string.
  title: {
    default: "Organisation of Choice",
    template: "%s · Organisation of Choice",
  },
  description:
    "Independent workplace certification for employers who invest in their people.",
  openGraph: {
    title: "Organisation of Choice",
    siteName,
    type: "website",
    locale: "en_IN",
  },
  // Explicit files in public/images/brand replace the old app/favicon.ico convention.
  // 16 and 32 are the gold CC monogram, not the full seal - the seal's inner
  // wording is unreadable at those sizes.
  icons: {
    icon: [
      { url: "/images/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/brand/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/brand/favicon-48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/images/brand/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <SiteMotion>
          <main id="main-content" className="w-full max-w-full flex-1 overflow-x-clip">
            {children}
          </main>
        </SiteMotion>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}

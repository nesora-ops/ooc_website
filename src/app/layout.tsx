import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CookieConsent } from "@/components/layout/cookie-consent";
import { SiteMotion } from "@/components/layout/site-motion";
import { siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Organisation of Choice™",
  description:
    "Independent workplace certification for employers who want to prove they're a great place to work.",
  openGraph: {
    siteName: "Organisation of Choice™",
    type: "website",
    locale: "en_IN",
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

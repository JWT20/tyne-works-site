import type { Metadata } from "next";
import { Source_Serif_4, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://tyneworks.nl";
const siteDescription =
  "Tyne Works bouwt lichte software die past bij hoe jouw bedrijf echt werkt. Tussen generieke SaaS en duur maatwerk, met AI als capability waar dat nodig is.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tyne Works — Lichte software op maat",
    template: "%s — Tyne Works",
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: siteUrl,
    siteName: "Tyne Works",
    title: "Tyne Works — Lichte software op maat",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Tyne Works — Lichte software op maat",
    description: siteDescription,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Tyne Works",
  url: siteUrl,
  description: siteDescription,
  email: "jans.tigelaar@tyneworks.nl",
  founder: {
    "@type": "Person",
    name: "Jans Tigelaar",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body className="min-h-screen flex flex-col bg-paper">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

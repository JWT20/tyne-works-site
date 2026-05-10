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

export const metadata: Metadata = {
  title: "Tyne Works — Lichte software op maat",
  description:
    "Tyne Works bouwt lichte software die past bij hoe jouw bedrijf echt werkt. Tussen generieke SaaS en duur maatwerk, met AI als capability waar dat nodig is.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body className="min-h-screen flex flex-col bg-paper">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

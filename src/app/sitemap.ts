import type { MetadataRoute } from "next";
import { getAllCases } from "@/lib/cases";

const siteUrl = "https://tyneworks.nl";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/contact"].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const caseRoutes = getAllCases().map((c) => ({
    url: `${siteUrl}/cases/${c.slug}`,
    lastModified: c.date ? new Date(c.date) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...caseRoutes];
}

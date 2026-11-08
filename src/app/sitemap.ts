import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { legalDocuments } from "@/config/legal";
import { useCases } from "@/config/use-cases";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.startsWith("[")
    ? "https://localhost"
    : siteConfig.url;

  const staticPages = [
    "",
    "/solutions",
    "/process",
    "/security",
    "/about",
    "/contact",
    "/legal",
    "/privacy-policy",
    "/terms-and-conditions",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const legalPages = legalDocuments.map((doc) => ({
    url: `${baseUrl}${doc.href}`,
    lastModified: new Date(doc.lastUpdated).toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const solutionPages = useCases.map((item) => ({
    url: `${baseUrl}/solutions/${item.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...legalPages, ...solutionPages];
}

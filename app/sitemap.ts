import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, priority: 1 },
    { url: `${site.url}/impressum`, lastModified: now, priority: 0.3 },
    { url: `${site.url}/datenschutz`, lastModified: now, priority: 0.3 },
  ];
}

import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    entries.push(
      { url: `${site.url}/${locale}`, lastModified: now, priority: 1 },
      { url: `${site.url}/${locale}/impressum`, lastModified: now, priority: 0.3 },
      { url: `${site.url}/${locale}/datenschutz`, lastModified: now, priority: 0.3 }
    );
  }
  return entries;
}

export const locales = ["de", "en", "ja"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "de";

export const localeNames: Record<Locale, string> = {
  de: "Deutsch",
  en: "English",
  ja: "日本語",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

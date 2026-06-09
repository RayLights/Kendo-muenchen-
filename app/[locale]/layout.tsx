import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter, Zen_Old_Mincho } from "next/font/google";
import "../globals.css";
import { site } from "@/lib/site";
import { locales, isLocale, type Locale } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const display = Zen_Old_Mincho({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const c = getContent(isLocale(locale) ? locale : "de");
  return {
    metadataBase: new URL(site.url),
    title: c.meta.title,
    description: c.meta.description,
    openGraph: {
      type: "website",
      url: `${site.url}/${locale}`,
      title: c.meta.title,
      description: c.meta.description,
      siteName: site.name,
    },
    twitter: { card: "summary_large_image", title: c.meta.title, description: c.meta.description },
    alternates: {
      canonical: `${site.url}/${locale}`,
      languages: {
        de: `${site.url}/de`,
        en: `${site.url}/en`,
        ja: `${site.url}/ja`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const c = getContent(locale as Locale);

  return (
    <html lang={locale} className={`${inter.variable} ${display.variable}`}>
      <body className="antialiased">
        <Header c={c} locale={locale as Locale} />
        {children}
        <Footer c={c} locale={locale as Locale} />
      </body>
    </html>
  );
}

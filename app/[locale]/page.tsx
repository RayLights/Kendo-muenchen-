import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import { site } from "@/lib/site";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Glossary from "@/components/Glossary";
import Gallery from "@/components/Gallery";
import { BeginnerCoach, Trainers } from "@/components/Team";
import Training from "@/components/Training";
import BeginnerCourse from "@/components/BeginnerCourse";
import Calendar from "@/components/Calendar";
import Social from "@/components/Social";
import Downloads from "@/components/Downloads";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const c = getContent(locale as Locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsClub",
    name: site.name,
    sport: "Kendo",
    foundingDate: "1980-05-14",
    url: `${site.url}/${locale}`,
    email: site.email,
    description: c.meta.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.location.street,
      postalCode: site.location.zip,
      addressLocality: "München",
      addressCountry: "DE",
    },
    sameAs: [site.social.instagram.url, site.social.facebook.url],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Hero c={c.hero} />
        <About c={c.about} />
        <Glossary c={c.glossary} />
        <Gallery c={c.gallery} />
        <Trainers c={c.trainers} />
        <Training c={c.training} />
        <BeginnerCoach c={c.beginnerCoach} />
        <BeginnerCourse c={c.beginnerCourse} />
        <Calendar c={c.calendar} />
        <Social c={c.social} />
        <Downloads c={c.downloads} />
        <FAQ c={c.faq} />
        <Contact c={c.contact} />
      </main>
    </>
  );
}

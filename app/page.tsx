import Header from "@/components/Header";
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
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsClub",
  name: site.name,
  sport: "Kendo",
  foundingDate: "1980-05-14",
  url: site.url,
  email: site.email,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.location.street,
    postalCode: site.location.zip,
    addressLocality: "München",
    addressCountry: "DE",
  },
  sameAs: [site.social.instagram.url, site.social.facebook.url],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Glossary />
        <Gallery />
        <Trainers />
        <Training />
        <BeginnerCoach />
        <BeginnerCourse />
        <Calendar />
        <Social />
        <Downloads />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

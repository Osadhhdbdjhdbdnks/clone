import { SiteHeader } from "@/components/sites/klimtwine/site-header";
import { HeroCarousel } from "@/components/sites/klimtwine/hero-carousel";
import { WinesSection } from "@/components/sites/klimtwine/wines-section";
import { HeritageSection } from "@/components/sites/klimtwine/heritage-section";
import { RegionSection } from "@/components/sites/klimtwine/region-section";
import { BuySection } from "@/components/sites/klimtwine/buy-section";
import { ContactsFooter } from "@/components/sites/klimtwine/contacts-footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Klimt Wine",
  description:
    "Explore the taste of KLIMT Wines - a collection crafted with passion and inspired by art.",
  alternates: { languages: { en: "/", fr: "/fr" } },
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroCarousel />
        <WinesSection />
        <HeritageSection />
        <RegionSection />
        <BuySection />
      </main>
      <ContactsFooter />
    </>
  );
}

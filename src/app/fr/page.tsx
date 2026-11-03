import type { Metadata } from "next";
import { SiteHeader } from "@/components/sites/klimtwine/site-header";
import { HeroSection } from "@/components/sites/klimtwine/hero-section";
import { WinesSection } from "@/components/sites/klimtwine/wines-section";
import { HeritageSection } from "@/components/sites/klimtwine/heritage-section";
import { RegionSection } from "@/components/sites/klimtwine/region-section";
import { BuySection } from "@/components/sites/klimtwine/buy-section";
import { ContactsFooter } from "@/components/sites/klimtwine/contacts-footer";

export const metadata: Metadata = {
  title: "Klimt Wine — Quand l'art rencontre le vin",
  description:
    "Découvrez les saveurs des vins KLIMT – une collection élaborée avec passion et inspirée par l'art.",
  alternates: { languages: { en: "/", fr: "/fr" } },
};

export default function HomeFr() {
  const locale = "fr" as const;
  return (
    <>
      <SiteHeader locale={locale} />
      <main className="flex-1">
        <HeroSection locale={locale} />
        <WinesSection locale={locale} />
        <HeritageSection locale={locale} />
        <RegionSection locale={locale} />
        <BuySection locale={locale} />
      </main>
      <ContactsFooter locale={locale} />
    </>
  );
}

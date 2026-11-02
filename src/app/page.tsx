import { SiteHeader } from "@/components/sites/klimtwine/site-header";
import { HeroSection } from "@/components/sites/klimtwine/hero-section";
import { WinesSection } from "@/components/sites/klimtwine/wines-section";
import { HeritageSection } from "@/components/sites/klimtwine/heritage-section";
import { RegionSection } from "@/components/sites/klimtwine/region-section";
import { BuySection } from "@/components/sites/klimtwine/buy-section";
import { ContactsFooter } from "@/components/sites/klimtwine/contacts-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <WinesSection />
        <HeritageSection />
        <RegionSection />
        <BuySection />
      </main>
      <ContactsFooter />
    </>
  );
}

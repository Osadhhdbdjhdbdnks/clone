export const KLIMT_ASSET = "/sites/klimtwine";

export const SAQ_SEARCH_URL =
  "https://www.saq.com/fr/catalogsearch/result/?q=esterhazy&catalog_type=1&availability_front=En+ligne&availability_front=En+succursale";
export const SAQ_BUY_NOW_URL = "https://www.saq.com/fr/15539682";
export const SAQ_VISIT_URL = "https://www.saq.com/fr/search?query=Klimt%20Esterhazy";
export const LCBO_VISIT_URL = "https://www.lcbo.com/en/search#q=klimt";
export const CONTACT_EMAIL = "weingut@esterhazywein.at";
export const CONTACT_PHONE = "1 450 463-1020";
export const CONTACT_ADDRESS =
  "184 de Normandie, Boucherville Québec, Canada (J4B5S7)";

export type Wine = {
  id: string;
  number: string;
  name: string;
  title: string;
  tasting: string;
  description: string;
  image: string;
  bottleTexture: string;
  coverTexture: string;
};

export const WINES: Wine[] = [
  {
    id: "wine-gv",
    number: "01",
    name: "Grüner Veltliner",
    title: "2025 KLIMT Grüner Veltliner",
    tasting:
      "Citrus, yellow apple, ripe pear, paired with its typical hints of pepper",
    description:
      "A fresh and lively Austrian white with bright citrus, crisp apple and subtle pepper notes. A clean, refreshing wine that pairs effortlessly with light dishes and chilled moments.",
    image: `${KLIMT_ASSET}/gruner_veltliner_632b1976ea.webp`,
    bottleTexture: `${KLIMT_ASSET}/wine_veltliner_bottle_texture_e4ed053c52.webp`,
    coverTexture: `${KLIMT_ASSET}/wine_veltliner_cover_texture_4a741b879a.webp`,
  },
  {
    id: "wine-wb",
    number: "02",
    name: "White Blend",
    title: "2025 KLIMT White Blend",
    tasting:
      "Fruity - refreshing - floral flavours - green apple - hint of elderflower and exotic.",
    description:
      "A smooth, elegant white blend with ripe stone-fruit aromas, gentle florals and a soft, rounded palate. Balanced and approachable, it is a versatile wine for everyday enjoyment and relaxed gatherings.",
    image: `${KLIMT_ASSET}/white_blend_3978284690.webp`,
    bottleTexture: `${KLIMT_ASSET}/wine_white_bottle_texture_49ecbf6e48.webp`,
    coverTexture: `${KLIMT_ASSET}/wine_white_cover_texture_f096ed3faa.webp`,
  },
  {
    id: "wine-rb",
    number: "03",
    name: "Red Blend",
    title: "2023 KLIMT Red Blend",
    tasting:
      "Dark ruby red - black cherries - ripe plums - dark chocolate - fruity and juicy style - smooth tannins.",
    description:
      "A juicy, expressive red blend offering dark berries, soft spices and a velvety finish. Harmonious and modern in style, it is an easy-drinking wine that shines both on its own and with food.",
    image: `${KLIMT_ASSET}/red_blend_e2fec91509.webp`,
    bottleTexture: `${KLIMT_ASSET}/wine_red_bottle_texture_1ec4e2fed6.webp`,
    coverTexture: `${KLIMT_ASSET}/wine_red_cover_texture_4928d1e811.webp`,
  },
];

export const NAV_LINKS = [
  { label: "Heritage", href: "#heritage" },
  { label: "Region", href: "#region" },
  { label: "Contacts", href: "#contacts" },
];

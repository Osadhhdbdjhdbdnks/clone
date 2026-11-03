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

export type Locale = "en" | "fr";

export const LOCALE_PATH: Record<Locale, string> = {
  en: "",
  fr: "/fr",
};

export const OTHER_LOCALE: Record<Locale, Locale> = {
  en: "fr",
  fr: "en",
};

export const NAV_LINKS_EN = [
  { label: "Heritage", href: "#heritage" },
  { label: "Region", href: "#region" },
  { label: "Contacts", href: "#contacts" },
];

export const NAV_LINKS_FR = [
  { label: "Patrimoine", href: "#heritage" },
  { label: "Région", href: "#region" },
  { label: "Contacts", href: "#contacts" },
];

export function navLinks(locale: Locale) {
  return locale === "fr" ? NAV_LINKS_FR : NAV_LINKS_EN;
}

type WineCopyFr = Pick<Wine, "title" | "tasting" | "description">;

export const WINES_FR: Record<string, WineCopyFr> = {
  "wine-gv": {
    title: "2025 KLIMT Grüner Veltliner",
    tasting:
      "Agrumes, pomme jaune, poire mûre, associés à ses notes typiques de poivre",
    description:
      "Un vin blanc autrichien frais et vif, aux arômes d'agrumes éclatants, de pomme croquante et de subtiles notes poivrées. Un vin net et rafraîchissant qui s'accorde à merveille avec des plats légers et des moments de détente.",
  },
  "wine-wb": {
    title: "Mélange blanc KLIMT 2025",
    tasting:
      "Fruité - rafraîchissant - arômes floraux - pomme verte - une pointe de fleur de sureau et d'exotisme.",
    description:
      "Un assemblage blanc soyeux et élégant, aux arômes de fruits à noyau mûrs, aux notes florales délicates et à la bouche ronde et souple. Équilibré et accessible, c'est un vin polyvalent, idéal au quotidien comme lors de moments conviviaux.",
  },
  "wine-rb": {
    title: "Mélange rouge KLIMT 2023",
    tasting:
      "Rouge rubis foncé - cerises noires - prunes mûres - chocolat noir - style fruité et juteux - tanins soyeux.",
    description:
      "Un assemblage rouge juteux et expressif, aux arômes de fruits noirs, d'épices douces et à la finale veloutée. Harmonieux et moderne, c'est un vin facile à boire qui se déguste aussi bien seul qu'accompagné d'un plat.",
  },
};

export const COPY = {
  heroTitle: {
    en: ["Where Art", "Meets Wine"],
    fr: ["Quand l'art", "rencontre le vin"],
  } as Record<Locale, [string, string]>,
  heroSubtitle: {
    en: "Explore the taste of KLIMT Wines - a collection crafted with passion and inspired by art.",
    fr: "Découvrez les saveurs des vins KLIMT – une collection élaborée avec passion et inspirée par l'art.",
  } as Record<Locale, string>,
  heroLead: {
    en: "The Esterházy family has shaped Austrian culture for centuries. KLIMT wines continue this legacy, inspired by Gustav Klimt's The Kiss.",
    fr: "La famille Esterházy a façonné la culture autrichienne pendant des siècles. Les vins KLIMT perpétuent cet héritage, inspirés par Le Baiser de Gustav Klimt.",
  } as Record<Locale, string>,
  ourWines: { en: "Our Wines", fr: "Nos vins" } as Record<Locale, string>,
  behindTheBrand: {
    en: "Behind the brand",
    fr: "Derrière la marque",
  } as Record<Locale, string>,
  scroll: { en: "Scroll to explore", fr: "Défilez pour explorer" } as Record<Locale, string>,
  buyNow: { en: "Buy Now", fr: "Acheter" } as Record<Locale, string>,
  buyNav: {
    en: "Buy Klimt Wines",
    fr: "Acheter des vins Klimt",
  } as Record<Locale, string>,
  buyShort: { en: "Buy", fr: "Acheter" } as Record<Locale, string>,
  heritageLead: {
    en: "The Esterházy family has shaped Austrian culture for centuries. KLIMT wines continue this legacy, inspired by Gustav Klimt's The Kiss.",
    fr: "La famille Esterházy a façonné la culture autrichienne pendant des siècles. Les vins KLIMT perpétuent cet héritage, inspirés par Le Baiser de Gustav Klimt.",
  } as Record<Locale, string>,
  heritageTitle1: {
    en: "The culture shaped the spirit",
    fr: "La culture a façonné l'esprit",
  } as Record<Locale, string>,
  heritageTitle2: {
    en: "Together, they shaped KLIMT",
    fr: "Ensemble, ils ont façonné KLIMT",
  } as Record<Locale, string>,
  heritageText: {
    en: "Klimt Wine follows the quiet rhythm of the vineyard, from generous tables to open fields and golden evening light.",
    fr: "Klimt Wine épouse le rythme paisible du vignoble, des tables généreuses aux champs ouverts et à la douce lumière dorée du soir.",
  } as Record<Locale, string>,
  regionTitle1: { en: "Burgenland:", fr: "Burgenland :" } as Record<Locale, string>,
  regionTitle2: {
    en: "The Wine Region",
    fr: "La région viticole",
  } as Record<Locale, string>,
  regionEyebrow: {
    en: "Austria: Land of Art & Wine",
    fr: "Autriche : Terre de l'art et du vin",
  } as Record<Locale, string>,
  regionText: {
    en: "Burgenland lies along Austria's warm eastern edge — a landscape shaped by sun, wind, and long-standing winemaking traditions. Here, wines with clear, expressive character take form: balanced, structured, and unmistakably Austrian.",
    fr: "Le Burgenland se situe le long de la frontière orientale chaude de l'Autriche, un paysage façonné par le soleil, le vent et de longues traditions viticoles. Ici prennent forme des vins au caractère clair et expressif : équilibrés, structurés et indéniablement autrichiens.",
  } as Record<Locale, string>,
  buyTitle: {
    en: ["Taste the Art", "of Wine"],
    fr: ["Goûtez à", "l'art du vin"],
  } as Record<Locale, [string, string]>,
  buyText: {
    en: "KLIMT wines are available for purchase in Quebec through our official partner.",
    fr: "Les vins KLIMT sont disponibles à l'achat au Québec par l'intermédiaire de notre partenaire officiel.",
  } as Record<Locale, string>,
  whereToBuy: { en: "Where to Buy", fr: "Où acheter" } as Record<Locale, string>,
  visitNow: { en: "Visit now", fr: "Visiter le site" } as Record<Locale, string>,
  intlContact: {
    en: "For more information on our international distribution partners please contact us at:",
    fr: "Pour plus d'informations sur nos partenaires de distribution internationaux, veuillez nous contacter à :",
  } as Record<Locale, string>,
  footerTagline: {
    en: "KLIMT Wine by Esterházy Distributed in Québec by Divin Paradis",
    fr: "Vin KLIMT par Esterházy, distribué au Québec par Divin Paradis",
  } as Record<Locale, string>,
  privacyLink: {
    en: "Privacy Policy",
    fr: "Politique de confidentialité",
  } as Record<Locale, string>,
  qcRegion: {
    en: "Québec, Canada",
    fr: "Québec, Canada",
  } as Record<Locale, string>,
  onRegion: {
    en: "Ontario, Canada",
    fr: "Ontario, Canada",
  } as Record<Locale, string>,
};

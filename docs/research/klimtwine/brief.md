# KLIMT Wine (klimtwine.com/en) — Page Brief

Source: https://klimtwine.com/en (Next.js site, captured 2026-11-02; home.html + home.css in this folder)
Route map: `/en` → local `/` (first root clone replaces untouched template homepage). `/fr` out of scope (link kept pointing to source).

## Design tokens (from production CSS)
- Colors: sand `#f3f0eb`, background `#cfc6bd`, brown `#191714`, white `#fff`, light-yellow `#e1d6a2`, green `#a4a473`, yellow `#a08921`, red `#670000`
- Fonts: headings = **Canela Thin** (weight 100), body/UI = **ABC Monument Grotesk Regular** (400). Downloaded woff2 in `public/sites/klimtwine/fonts/`.
- Type scale (mobile → sm → md → lg → xl):
  - H1: 44/105/140/140/186px, lh 100%, ls −1.76 → −7.44px
  - H3 (section titles): 20→42/56/56/74px, lh 110%/100%
  - Subtitle: 20–26px, lh 120%
  - Body: 14px (xl 18px), lh 140%
- Grid gap 20px; rounded pill buttons (radius 35–46px).

## Sections (order top→bottom)
1. **Loader** (client-only): bg #cfc6bd, label "Passion and culture loading...", diamond SVG. Skip on static build.
2. **Header**: transparent over hero, logo_white.png links home; right side: Buy Klimt Wines pill (→ SAQ search URL), hamburger (3×sand dots) opening mobile menu (Heritage / Region / Contacts / En-Fr / Buy). Desktop nav: Heritage, Region, Contacts, En/Fr, Buy. Header hides on scroll-down (`data-site-header-scroll-hide`).
3. **Hero** (full viewport, brown text on video/image): eyebrow "Our Wines" carousel chip with bottle thumbnails; H1 "Where Art Meets Wine"; behind-text paragraph "The Esterházy family has shaped Austrian culture for centuries. KLIMT wines continue this legacy, inspired by Gustav Klimt's The Kiss."; copy "Explore the taste of KLIMT Wines - a collection crafted with passion and inspired by art."; scroll indicator. Background: video_intro.webm (poster video_intro_frame_*.webp).
4. **Wines** (#wine anchors ×3, full-height panels, sand/brown palette): each panel shows number 01/02/03 + name (Grüner Veltliner, White Blend, Red Blend), tasting line ("Citrus, yellow apple, ripe pear, paired with its typical hints of pepper" / "Fruity - refreshing - floral flavours - green apple - hint of elderflower and exotic." / "Dark ruby red - black cherries - ripe plums - dark chocolate - fruity and juicy style - smooth tannins."), title "2025 KLIMT Grüner Veltliner" etc., description paragraph, bottle image (gruner_veltliner/white_blend/red_blend .webp), "Buy Now" pill → saq.com/fr/15539682. Scroll-pinned reveal sequence (cover texture → bottle texture).
5. **Heritage** (#heritage): two stacked pinned titles "The culture shaped the spirit" then "Together, they shaped KLIMT", L_Ogo webp (EU programme badge, alt "WIR leben Land — Gemeinsame Agrarpolitik"), carousel slides (Rectangle_17880/17881/44 photos) with caption "Klimt Wine follows the quiet rhythm of the vineyard, from generous tables to open fields and golden evening light." Intro para about Esterházy/Klimt at top.
6. **Region** (#region): huge outline titles "Austria: Land" / "Burgenland:" / "The Wine Region", meta "47.1537 16.2688797" and "3 965 km²", description "Burgenland lies along Austria's warm eastern edge — a landscape shaped by sun, wind, and long-standing winemaking traditions. Here, wines with clear, expressive character take form: balanced, structured, and unmistakably Austrian.", stylized map stage (dots/borders/zoom layer) — reproduced as decorative pattern.
7. **Buy** (#buy): heading "Taste the Art of Wine", note "KLIMT wines are available for purchase in Quebec through our official partner.", big CTA button w/ arrow SVG → SAQ. "Where to Buy" grid: Québec, Canada → SAQ (Visit now → saq.com/fr/search?query=Klimt%20Esterhazy); Ontario, Canada → LCBO (Visit now → lcbo.com/en/search#q=klimt). Branch image cta_branch_v2.webp. International note + weingut@esterhazywein.at.
8. **Contacts/Footer** (#contacts): "KLIMT Wine by Esterházy Distributed in Québec by Divin Paradis", tel 1 450 463-1020, address "184 de Normandie, Boucherville Québec, Canada (J4B5S7)", email weingut@esterhazywein.at, logo_white, En/Fr link, © 2026 Esterhazy. All rights reserved., Website by Dops (https://dops.agency/), Privacy Policy (/en/privacy), AI MODIFIED badge (ai-modified.svg).

## Interactions observed
- Scroll-driven: header hide/show, wine panel pinned reveals, heritage pinned title swaps, region zoom labels.
- Click: mobile menu, wine selector chips (anchor to #wine-*), external buy links (new tab).
- Time: intro video autoplay muted loop; loader progress.

## Asset map (source URL → public/sites/klimtwine/)
All CMS uploads + /logo.png, /logo_white.png, /ai-modified.svg, /buy-section/cta_branch_v2.webp downloaded with original filenames (except video_intro_c5a431e24b.webm → video_intro.webm). Fonts → fonts/.

## Known gaps
No headless browser in sandbox → computed-style measurements come from the shipped production CSS; motion timings approximated from class data (560ms cubic-bezier(0.22,1,0.36,1)). Loader animation and per-letter map-label splits simplified.

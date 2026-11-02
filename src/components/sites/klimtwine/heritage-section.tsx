import Image from "next/image";
import { KLIMT_ASSET } from "./data";

const SLIDES = [
  {
    src: `${KLIMT_ASSET}/Rectangle_17880_copy_538dd50133.webp`,
    alt: "Vineyard table scene",
  },
  {
    src: `${KLIMT_ASSET}/Rectangle_17881_copy_27fdadcad6.webp`,
    alt: "Open vineyard fields",
  },
  {
    src: `${KLIMT_ASSET}/Rectangle_44_copy_1ec4e5172a.webp`,
    alt: "Golden evening light in the vineyard",
  },
];

export function HeritageSection() {
  return (
    <section
      id="heritage"
      data-culture-panel="true"
      className="relative flex min-h-dvh flex-col justify-center overflow-hidden bg-klimt-brown py-24 text-klimt-sand"
    >
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8">
        <p className="klimt-body mb-10 max-w-[640px] opacity-80">
          The Esterházy family has shaped Austrian culture for centuries. KLIMT
          wines continue this legacy, inspired by Gustav Klimt&apos;s The Kiss.
        </p>

        <h2 className="klimt-h2 m-0" data-culture-title="true">
          The culture shaped the spirit
        </h2>
        <h2
          className="klimt-h2 mt-3 text-klimt-lightyellow"
          data-culture-second-title="true"
        >
          Together, they shaped KLIMT
        </h2>

        {/* Carousel slides */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {SLIDES.map((slide) => (
            <figure key={slide.src} className="relative m-0 overflow-hidden">
              <Image
                src={slide.src}
                alt={slide.alt}
                width={960}
                height={540}
                loading="lazy"
                className="aspect-video w-full object-cover"
              />
            </figure>
          ))}
        </div>
        <p className="klimt-subtitle mt-10 max-w-[720px]">
          Klimt Wine follows the quiet rhythm of the vineyard, from generous
          tables to open fields and golden evening light.
        </p>

        {/* EU programme badge */}
        <Image
          src={`${KLIMT_ASSET}/L_Ogo_4fe314c481.webp`}
          alt="WIR leben Land — Gemeinsame Agrarpolitik"
          width={220}
          height={120}
          loading="lazy"
          className="mt-12 h-auto w-[180px] sm:w-[220px]"
        />
      </div>
    </section>
  );
}

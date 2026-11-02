import Image from "next/image";
import { SAQ_BUY_NOW_URL, WINES } from "./data";

export function WinesSection() {
  return (
    <section id="wines" aria-label="Our wines" className="relative">
      {WINES.map((wine, i) => (
        <article
          key={wine.id}
          id={wine.id}
          data-wine-panel="true"
          className={`relative flex min-h-dvh items-center overflow-hidden ${
            i === 2 ? "bg-klimt-red text-klimt-sand" : "bg-klimt-sand text-klimt-brown"
          }`}
        >
          {/* Cover texture background */}
          <Image
            src={wine.coverTexture}
            alt=""
            fill
            sizes="100vw"
            priority={i === 0}
            className="object-cover opacity-[0.14]"
          />

          <div className="relative z-10 mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-10 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:items-center">
            {/* Text column */}
            <div className="flex flex-col gap-6">
              <p className="klimt-body tracking-wide uppercase opacity-70">
                {wine.number} — {wine.name}
              </p>
              <h2 className="klimt-h2 m-0">{wine.title}</h2>
              <p className="klimt-subtitle m-0 max-w-[540px]">{wine.tasting}</p>
              <p className="klimt-body m-0 max-w-[480px] opacity-80">
                {wine.description}
              </p>
              <a
                href={SAQ_BUY_NOW_URL}
                target="_blank"
                rel="noreferrer"
                className={`klimt-body mt-2 inline-flex w-fit items-center justify-center gap-2 rounded-full px-8 py-4 transition-opacity hover:opacity-70 ${
                  i === 2
                    ? "bg-klimt-sand text-klimt-brown"
                    : "bg-klimt-brown text-klimt-sand"
                }`}
              >
                Buy Now
              </a>
            </div>

            {/* Bottle column */}
            <div className="relative mx-auto flex h-[420px] w-full max-w-[420px] items-center justify-center sm:h-[520px] lg:h-[620px]">
              <Image
                src={wine.bottleTexture}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-contain opacity-0"
                aria-hidden="true"
              />
              <Image
                src={wine.image}
                alt={wine.title}
                width={420}
                height={620}
                loading="lazy"
                className="h-full w-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

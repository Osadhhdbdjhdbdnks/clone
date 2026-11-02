import Image from "next/image";
import { KLIMT_ASSET, WINES } from "./data";

export function HeroSection() {
  return (
    <section
      data-hero-section="true"
      className="relative flex min-h-dvh flex-col justify-end overflow-hidden bg-klimt-brown"
    >
      {/* Background video with poster fallback */}
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-90"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={`${KLIMT_ASSET}/video_intro_frame_9449627751.webp`}
      >
        <source src={`${KLIMT_ASSET}/video_intro.webm`} type="video/webm" />
      </video>

      {/* Wine selector chip (eyebrow) */}
      <div className="relative z-10 mx-auto mb-6 w-full max-w-[1600px] px-5 sm:px-8">
        <a
          href="#wines"
          aria-label="Our Wines"
          className="inline-flex min-h-12 items-center gap-3 rounded-full bg-white px-4 py-1 text-klimt-brown no-underline transition-shadow hover:shadow-lg xl:min-h-16"
        >
          <span className="klimt-body whitespace-nowrap font-normal">
            Our Wines
          </span>
          <span className="flex -space-x-1">
            {WINES.map((w) => (
              <Image
                key={w.id}
                src={w.image}
                alt=""
                width={54}
                height={81}
                loading="lazy"
                className="h-12 w-auto object-cover xl:h-14"
              />
            ))}
          </span>
        </a>
      </div>

      {/* Headline block */}
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 pb-16 sm:px-8 md:pb-24">
        <h1
          data-hero-title="true"
          className="klimt-h1 m-0 text-klimt-sand"
        >
          Where Art
          <br />
          Meets Wine
        </h1>
        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p
            data-hero-behind-text="true"
            className="klimt-subtitle max-w-[540px] text-klimt-sand/90"
          >
            Explore the taste of KLIMT Wines - a collection crafted with passion
            and inspired by art.
          </p>
          <p className="klimt-body max-w-[420px] text-klimt-sand/70">
            The Esterházy family has shaped Austrian culture for centuries.
            KLIMT wines continue this legacy, inspired by Gustav Klimt&apos;s
            The Kiss.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        data-hero-scroll="true"
        className="pointer-events-none absolute bottom-5 left-1/2 z-10 -translate-x-1/2 text-klimt-sand"
        aria-hidden="true"
      >
        <svg width="20" height="34" viewBox="0 0 20 34" fill="none">
          <path
            d="M10 2v24M3 20l7 8 7-8"
            stroke="currentColor"
            strokeWidth="1.5"
            className="animate-bounce"
          />
        </svg>
      </div>
    </section>
  );
}

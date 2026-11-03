"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { COPY, KLIMT_ASSET, WINES, type Locale } from "./data";

/**
 * Recreates the interactive scroll-driven hero of klimtwine.com:
 *
 * 1. The intro video (video_intro.webm) is scrubbed frame-by-frame by the
 *    scrollbar — each scroll step shows a different frame ("scrubbing").
 * 2. As scrolling continues, the dark hero slides up and a bright second
 *    scene ("Behind the brand", sand background, brown text, bottle on the
 *    right) slides in; the headline crossfades to the wine list.
 */

// Fraction of the pinned range spent scrubbing the video before the slide-up.
const SCRUB_PORTION = 0.55;

export function HeroCarousel({ locale = "en" }: { locale?: Locale }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const posterRef = useRef<HTMLImageElement>(null);
  const sceneARef = useRef<HTMLDivElement>(null);
  const sceneBRef = useRef<HTMLDivElement>(null);
  const titleARef = useRef<HTMLDivElement>(null);
  const titleBRef = useRef<HTMLDivElement>(null);
  const readyRef = useRef(false);

  // Track when the video metadata is available so we can map scroll -> currentTime.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onMeta = () => {
      if (Number.isFinite(v.duration) && v.duration > 0) {
        readyRef.current = true;
      }
    };
    if (v.readyState >= 1) onMeta();
    v.addEventListener("loadedmetadata", onMeta);
    return () => v.removeEventListener("loadedmetadata", onMeta);
  }, []);

  // Scroll-driven scrubbing + two-scene transition.
  useEffect(() => {
    const root = rootRef.current;
    const video = videoRef.current;
    if (!root || !video) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = root.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = Math.max(rect.height - vh, 1);
      // progress: 0 when section top hits viewport top, 1 when its bottom does.
      const p = Math.min(Math.max(-rect.top / total, 0), 1);

      // Phase 1: scrub the video frames with the scrollbar.
      const scrubP = Math.min(p / SCRUB_PORTION, 1);
      if (readyRef.current) {
        const dur = video.duration;
        if (Number.isFinite(dur) && dur > 0) {
          const target = scrubP * (dur - 0.05);
          if (Math.abs(video.currentTime - target) > 0.01) {
            try {
              video.currentTime = target;
            } catch {
              /* metadata not ready yet */
            }
          }
        }
      }

      // Fade out the poster once real frames are painted.
      if (posterRef.current) {
        posterRef.current.style.opacity = readyRef.current ? "0" : "1";
      }

      // Phase 2: pinned two-scene vertical slide (dark hero out, light scene in).
      const slideP = Math.max((p - SCRUB_PORTION) / (1 - SCRUB_PORTION), 0);
      const eased = slideP < 0.5 ? 2 * slideP * slideP : 1 - (-2 * slideP + 2) ** 2 / 2;
      if (sceneARef.current) {
        sceneARef.current.style.transform = `translateY(${-eased * 100}%)`;
      }
      if (sceneBRef.current) {
        sceneBRef.current.style.transform = `translateY(${(1 - eased) * 100}%)`;
      }
      // Crossfade titles between scenes.
      if (titleARef.current) titleARef.current.style.opacity = `${1 - eased}`;
      if (titleBRef.current) titleBRef.current.style.opacity = `${eased}`;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="hero"
      ref={rootRef}
      data-hero-section="true"
      aria-label={locale === "fr" ? "Quand l'art rencontre le vin" : "Where Art Meets Wine"}
      className="relative h-[300dvh] overflow-visible bg-klimt-brown"
    >
      {/* Pinned viewport stage */}
      <div className="sticky top-0 z-8 h-dvh w-full overflow-hidden">
        {/* ---- Scene A: dark scrubbed-video hero ---- */}
        <div
          ref={sceneARef}
          data-carousel-intro="true"
          className="absolute inset-0 will-change-transform"
        >
          <video
            ref={videoRef}
            data-carousel-intro-video="true"
            data-carousel-intro-video-src={`${KLIMT_ASSET}/video_intro.webm`}
            className="absolute inset-0 z-0 block h-full w-full object-cover opacity-90"
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            poster={`${KLIMT_ASSET}/video_intro_frame_9449627751.webp`}
          >
            <source src={`${KLIMT_ASSET}/video_intro.webm`} type="video/webm" />
          </video>

          {/* Poster image kept until the first scrubbed frame is decoded */}
          <Image
            ref={posterRef as React.RefObject<HTMLImageElement>}
            src={`${KLIMT_ASSET}/video_intro_frame_9449627751.webp`}
            alt=""
            fill
            priority
            sizes="100vw"
            data-carousel-intro-image-marker="true"
            className="z-[1] object-cover transition-opacity duration-300"
          />

          {/* Bottom gradient wash matching the live site backdrop */}
          <div
            data-hero-backdrop="true"
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-transparent from-[44%] to-klimt-sand/70"
          />

          <div className="relative z-10 flex h-full flex-col justify-end">
            {/* Wine selector chip (eyebrow) */}
            <div className="mx-auto mb-6 w-full max-w-[1600px] px-5 sm:px-8">
              <a
                href="#wines"
                aria-label={COPY.ourWines[locale]}
                className="inline-flex min-h-12 items-center gap-3 rounded-full bg-white px-4 py-1 text-klimt-brown no-underline transition-shadow hover:shadow-lg xl:min-h-16"
              >
                <span className="klimt-body whitespace-nowrap font-normal">
                  {COPY.ourWines[locale]}
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
            <div
              ref={titleARef}
              className="mx-auto w-full max-w-[1600px] px-5 pb-16 transition-opacity duration-300 sm:px-8 md:pb-24"
            >
              <h1 data-hero-title="true" className="klimt-h1 m-0 text-klimt-sand">
                {COPY.heroTitle[locale][0]}
                <br />
                {COPY.heroTitle[locale][1]}
              </h1>
              <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <p
                  data-hero-behind-text="true"
                  className="klimt-subtitle max-w-[540px] text-klimt-sand/90"
                >
                  {COPY.heroSubtitle[locale]}
                </p>
                <p className="klimt-body hidden max-w-[420px] text-klimt-sand/70 sm:block">
                  {COPY.scroll[locale]}
                </p>
              </div>
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
        </div>

        {/* ---- Scene B: light "Behind the brand" panel ---- */}
        <div
          ref={sceneBRef}
          data-carousel-transition-panel="true"
          className="absolute inset-0 flex will-change-transform items-end bg-klimt-sand"
        >
          {/* Bottle artwork, right side (desktop) */}
          <div className="pointer-events-none absolute inset-y-0 right-[-4%] hidden w-[46%] lg:block">
            <Image
              src={`${KLIMT_ASSET}/Rectangle_44_copy_1ec4e5172a.webp`}
              alt=""
              fill
              sizes="46vw"
              className="object-contain"
            />
          </div>

          <div
            ref={titleBRef}
            className="relative z-10 mx-auto w-full max-w-[1600px] px-5 pb-20 pt-10 transition-opacity duration-300 sm:px-8"
          >
            <p className="klimt-metadata mb-4 uppercase tracking-[0.2em] text-klimt-brown/70">
              {COPY.behindTheBrand[locale]}
            </p>
            <p className="klimt-subtitle max-w-[560px] text-klimt-brown">
              {COPY.heroLead[locale]}
            </p>
            <div className="mt-10 flex gap-6 lg:hidden">
              {WINES.map((w) => (
                <Image
                  key={w.id}
                  src={w.image}
                  alt={w.name}
                  width={54}
                  height={81}
                  className="h-24 w-auto object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

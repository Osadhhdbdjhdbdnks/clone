import { COPY, type Locale } from "./data";

export function RegionSection({ locale = "en" }: { locale?: Locale }) {
  return (
    <section
      id="region"
      data-map-stage="true"
      className="relative flex min-h-dvh flex-col justify-center overflow-hidden bg-klimt-background py-24 text-klimt-brown"
    >
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8">
        <p className="klimt-body uppercase tracking-[0.2em] opacity-60">
          {COPY.regionEyebrow[locale]}
        </p>
        <h2 className="klimt-h1 m-0 leading-none" data-map-intro-title="true">
          {COPY.regionTitle1[locale]}
          <br />
          <span className="text-klimt-red">{COPY.regionTitle2[locale]}</span>
        </h2>

        {/* Meta row */}
        <div className="mt-10 flex flex-wrap gap-x-16 gap-y-4">
          <p className="klimt-body m-0" data-map-meta="true">
            47.1537&nbsp;&nbsp;16.2688797
          </p>
          <p className="klimt-body m-0">3 965 km²</p>
        </div>

        {/* Decorative map stage: dot grid + border ring, echoing the source map */}
        <div
          className="relative mx-auto mt-14 aspect-[16/9] w-full max-w-[900px]"
          data-map-wrap="true"
          aria-hidden="true"
        >
          <svg viewBox="0 0 900 506" className="h-full w-full">
            <defs>
              <pattern
                id="map-dots"
                width="22"
                height="22"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="3" cy="3" r="2" fill="#191714" opacity="0.35" />
              </pattern>
            </defs>
            <rect
              x="40"
              y="30"
              width="820"
              height="446"
              rx="223"
              fill="url(#map-dots)"
            />
            <rect
              x="40"
              y="30"
              width="820"
              height="446"
              rx="223"
              fill="none"
              stroke="#191714"
              strokeWidth="1.5"
              strokeDasharray="6 8"
              opacity="0.6"
            />
            {/* Burgenland strip highlight */}
            <path
              d="M700 120 C 740 200, 730 300, 680 400"
              stroke="#670000"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="700" cy="120" r="6" fill="#670000" />
            <circle cx="680" cy="400" r="6" fill="#670000" />
            <text
              x="720"
              y="265"
              fill="#670000"
              fontSize="20"
              fontFamily="var(--font-body)"
            >
              Burgenland
            </text>
          </svg>
        </div>

        <p className="klimt-subtitle mt-14 max-w-[560px]">
          {COPY.regionText[locale]}
        </p>
      </div>
    </section>
  );
}

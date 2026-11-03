import Image from "next/image";
import {
  CONTACT_EMAIL,
  KLIMT_ASSET,
  LCBO_VISIT_URL,
  SAQ_SEARCH_URL,
  SAQ_VISIT_URL,
  COPY,
  type Locale,
} from "./data";

const PARTNERS = [
  { regionKey: "qcRegion" as const, name: "SAQ", href: SAQ_VISIT_URL },
  { regionKey: "onRegion" as const, name: "LCBO", href: LCBO_VISIT_URL },
];

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0.666016 11.1289 L0.666016 4.72891 L11.3327 4.72891 M7.23012 0.46224 L11.3327 4.72891 L7.23012 8.99557"
        stroke="currentColor"
        strokeWidth="1.33333"
      />
    </svg>
  );
}

export function BuySection({ locale = "en" }: { locale?: Locale }) {
  return (
    <section
      id="buy"
      data-buy-section="true"
      className="relative overflow-hidden bg-klimt-sand py-24 text-klimt-brown md:py-32"
    >
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8">
        <h2 className="klimt-h1 m-0" data-hero-title="true">
          Taste the Art
          <br />of Wine
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start" style={{ columnGap: "20px" }}>
          <div className="flex flex-col items-start gap-8">
            <p className="klimt-subtitle m-0 max-w-[480px]">
              {COPY.buyText[locale]}
            </p>
            <a
              href={SAQ_SEARCH_URL}
              target="_blank"
              rel="noreferrer"
              data-buy-button-content="true"
              className="klimt-subtitle inline-flex items-center gap-3 rounded-full bg-klimt-brown px-8 py-4 text-klimt-sand transition-opacity hover:opacity-70 xl:gap-4 xl:px-11 xl:py-5"
            >
              {COPY.buyNav[locale]}
              <ArrowIcon className="rotate-[-45deg]" />
            </a>
            <Image
              src={`${KLIMT_ASSET}/cta_branch_v2.webp`}
              alt=""
              width={520}
              height={360}
              loading="lazy"
              data-buy-branch="true"
              className="mt-4 w-full max-w-[520px]"
            />
          </div>

          {/* Where to Buy */}
          <div data-where-to-buy-section="true">
            <h3 className="klimt-h2 m-0">{COPY.whereToBuy[locale]}</h3>
            <div className="mt-10 flex flex-col gap-10">
              {PARTNERS.map((p) => (
                <div key={p.name} className="flex flex-col gap-2">
                  <p className="m-0 font-normal text-[26px] leading-tight sm:text-[32px] xl:text-[42px] xl:tracking-[-0.84px]">
                    {COPY[p.regionKey][locale]}
                  </p>
                  <p className="klimt-subtitle m-0">{p.name}</p>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit now — ${p.name}`}
                    className="klimt-body inline-flex h-12 w-[217px] items-center justify-center gap-2 rounded-full border border-black/10 bg-transparent text-klimt-brown no-underline transition-colors hover:bg-klimt-sand xl:h-[62px] xl:w-[289px]"
                  >
                    {COPY.visitNow[locale]}
                    <ArrowIcon className="rotate-[-45deg]" />
                  </a>
                </div>
              ))}
              <p className="klimt-body m-0 max-w-[420px]">
                {COPY.intlContact[locale]}:{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="underline underline-offset-2"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

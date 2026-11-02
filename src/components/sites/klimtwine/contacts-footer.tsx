import Image from "next/image";
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  KLIMT_ASSET,
  LOCALE_PATH,
  OTHER_LOCALE,
  COPY,
  type Locale,
} from "./data";

export function ContactsFooter({ locale = "en" }: { locale?: Locale }) {
  return (
    <footer
      id="contacts"
      data-contact-section="true"
      className="bg-klimt-brown px-5 pb-10 pt-24 text-klimt-sand sm:px-8"
    >
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <Image
              src={`${KLIMT_ASSET}/logo_white.png`}
              alt="Esterhazy Austria"
              width={360}
              height={90}
              loading="lazy"
              className="h-10 w-auto"
            />
            <p className="klimt-subtitle m-0 max-w-[420px]">
              {COPY.footerTagline[locale]}
            </p>
          </div>
          <address className="flex flex-col items-start gap-4 not-italic">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="klimt-subtitle underline-offset-4 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
            <a
              href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
              className="klimt-body opacity-80 hover:opacity-100"
            >
              {CONTACT_PHONE}
            </a>
            <p className="klimt-body m-0 opacity-80">{CONTACT_ADDRESS}</p>
            <a
              href={`${LOCALE_PATH[OTHER_LOCALE[locale]] || "/"}`}
              className="klimt-body underline underline-offset-4"
            >
              {locale === "fr" ? "Fr/En" : "En/Fr"}
            </a>
          </address>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-klimt-sand/20 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Image
              src={`${KLIMT_ASSET}/ai-modified.svg`}
              alt="AI MODIFIED"
              width={92}
              height={24}
              loading="lazy"
              className="h-6 w-auto"
            />
            <a
              href={locale === "fr" ? "/fr/privacy" : "/privacy"}
              className="klimt-body opacity-70 hover:opacity-100"
            >
              {COPY.privacyLink[locale]}
            </a>
          </div>
          <p className="klimt-body m-0 opacity-70">
            © 2026 Esterhazy. All rights reserved.{" "}
            <a
              href="https://dops.agency/"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-100"
            >
              Website by Dops
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { SiteHeader } from "./site-header";
import { ContactsFooter } from "./contacts-footer";
import type { Locale } from "./data";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="klimt-h2 m-0">{title}</h2>
      <div className="klimt-body m-0 flex max-w-[820px] flex-col gap-4 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

const COPY: Record<
  Locale,
  {
    h1: string;
    imprint: string;
    imprintIntro: string;
    ecg: string;
    country: string;
    phone: string;
    email: string;
    website: string;
    regNo: string;
    court: string;
    vat: string;
    directors: string;
    directorsLabel: string;
    activity: string;
    activityLabel: string;
    authority: string;
    authorityLabel: string;
    privacy: string;
    privacyP1: string;
    privacyP2: string;
    privacyP3: string;
    cookies: string;
    cookiesP1: string;
    cookiesP2: string;
    cookiesP3: string;
    disclaimer: string;
    disclaimerP: string;
    copyright: string;
    copyrightP: string;
    responsible: string;
    responsibleP: string;
    credits: string;
    creditsP: string;
    back: string;
  }
> = {
  en: {
    h1: "Privacy Policy",
    imprint: "Imprint",
    imprintIntro:
      "This website is dedicated exclusively to the KLIMT wine range. Weingut Esterházy is the producer of the wines presented and the operator of this website.",
    ecg: "Information pursuant to Section 5 of the Austrian E-Commerce Act (ECG)",
    country: "Austria",
    phone: "Phone:",
    email: "E-mail:",
    website: "Website:",
    regNo: "Company Registration Number: FN 140080 a",
    court: "Commercial Court: Regional Court of Eisenstadt",
    vat: "VAT Number: ATU 68098603",
    directors: "Michael Gröschl, MBA · Wolfgang Hewarth",
    directorsLabel: "Managing Directors:",
    activity: "Wine production and wine trade",
    activityLabel: "Business Activity:",
    authority: "District Authority Eisenstadt-Umgebung",
    authorityLabel: "Supervisory Authority:",
    privacy: "Privacy Policy",
    privacyP1:
      "This website is intended solely to provide information about the products Klimt Grüner Veltliner, Klimt White Blend and Klimt Red Blend. No contact forms, newsletter registrations, customer accounts or e-commerce functions are provided.",
    privacyP2:
      "This website uses analytics tools, such as Google Analytics, to collect aggregated information about website traffic and user behavior. These tools help us understand how visitors find and use the website in order to improve its performance and user experience. Where required by applicable law, analytics cookies are only used with the user's consent.",
    privacyP3:
      "For technical reasons, the hosting provider may temporarily process server log data to ensure the security and operation of the website.",
    cookies: "Cookie Notice",
    cookiesP1:
      "This website uses cookies and similar technologies, including Google Analytics, to collect aggregated information about website traffic and visitor interactions. This information helps us understand how the website is used and improve its content and performance.",
    cookiesP2:
      "Where required by applicable law, analytics cookies are only placed after obtaining the user's consent. Technically necessary cookies may also be used to ensure the security and functionality of the website.",
    cookiesP3: "For further information, please refer to our Privacy Policy.",
    disclaimer: "Disclaimer",
    disclaimerP:
      "The information provided on this website is for general information purposes only. While every effort has been made to ensure accuracy, Esterházy Wein GmbH assumes no liability for the completeness, correctness or timeliness of the information presented. Links to websites not under our control are provided for the convenience of our visitors. We are not responsible for the accuracy or reliability of the content. We do not offer any guarantee and are not responsible for the information found through these links. We also do not endorse these sites or their content.",
    copyright: "Copyright",
    copyrightP:
      "© Esterházy Wein GmbH. All rights reserved. All texts, images, graphics and other content published on this website are protected by copyright and may not be reproduced, distributed or used without prior written permission.",
    responsible: "Responsible Drinking",
    responsibleP:
      "Please enjoy wine responsibly. The sale and consumption of alcoholic beverages are subject to the applicable legal regulations regarding minimum drinking age in the respective country.",
    credits: "Image Credits",
    creditsP:
      "Photography and visual material: Esterházy Wein GmbH. Additional credits, where applicable: Roman Seidl, and Martin Fülöp.",
    back: "← Back to home",
  },
  fr: {
    h1: "Politique de confidentialité",
    imprint: "Mentions légales",
    imprintIntro:
      "Ce site internet est exclusivement consacré à la gamme de vins KLIMT. Weingut Esterházy est le producteur des vins présentés ainsi que l'exploitant de ce site internet.",
    ecg: "Informations conformément à l'article 5 de la loi autrichienne sur le commerce électronique (ECG)",
    country: "Autriche",
    phone: "Téléphone :",
    email: "E-mail :",
    website: "Site internet :",
    regNo: "Numéro d'immatriculation de la société : FN 140080 a",
    court: "Tribunal du commerce : Tribunal régional d'Eisenstadt",
    vat: "Numéro de TVA : ATU 68098603",
    directors: "Michael Gröschl, MBA · Wolfgang Hewarth",
    directorsLabel: "Directeurs généraux :",
    activity: "Production et commerce de vin",
    activityLabel: "Activité commerciale :",
    authority: "Autorité administrative du district d'Eisenstadt-Umgebung",
    authorityLabel: "Autorité de surveillance :",
    privacy: "Politique de confidentialité",
    privacyP1:
      "Ce site internet est destiné uniquement à fournir des informations sur les produits Klimt Grüner Veltliner, Klimt White Blend et Klimt Red Blend. Aucun formulaire de contact, inscription à une newsletter, compte client ou fonctionnalité de commerce électronique n'est proposé.",
    privacyP2:
      "Ce site internet utilise des outils d'analyse, tels que Google Analytics, afin de recueillir des informations agrégées sur le trafic du site et le comportement des utilisateurs. Ces outils nous permettent de comprendre comment les visiteurs trouvent et utilisent le site afin d'en améliorer les performances et l'expérience utilisateur. Lorsque la législation applicable l'exige, les cookies d'analyse ne sont utilisés qu'avec le consentement de l'utilisateur.",
    privacyP3:
      "Pour des raisons techniques, le fournisseur d'hébergement peut traiter temporairement les données des journaux du serveur afin de garantir la sécurité et le bon fonctionnement du site internet.",
    cookies: "Avis relatif aux cookies",
    cookiesP1:
      "Ce site internet utilise des cookies et des technologies similaires, notamment Google Analytics, afin de recueillir des informations agrégées sur le trafic du site et les interactions des visiteurs. Ces informations nous permettent de mieux comprendre l'utilisation du site et d'en améliorer le contenu et les performances.",
    cookiesP2:
      "Lorsque la législation applicable l'exige, les cookies d'analyse ne sont déposés qu'après avoir obtenu le consentement de l'utilisateur. Des cookies techniquement nécessaires peuvent également être utilisés afin de garantir la sécurité et le bon fonctionnement du site internet.",
    cookiesP3:
      "Pour plus d'informations, veuillez consulter notre Politique de confidentialité.",
    disclaimer: "Clause de non-responsabilité",
    disclaimerP:
      "Les informations fournies sur ce site internet sont uniquement destinées à des fins d'information générale. Bien que tous les efforts aient été déployés pour garantir leur exactitude, Esterházy Wein GmbH décline toute responsabilité quant à l'exhaustivité, l'exactitude ou l'actualité des informations présentées. Les liens vers des sites internet qui ne sont pas sous notre contrôle sont fournis pour la commodité de nos visiteurs. Nous ne sommes pas responsables de l'exactitude ni de la fiabilité de leur contenu. Nous ne fournissons aucune garantie et déclinons toute responsabilité concernant les informations accessibles par l'intermédiaire de ces liens. Nous ne cautionnons pas non plus ces sites ni leur contenu.",
    copyright: "Droits d'auteur",
    copyrightP:
      "© Esterházy Wein GmbH. Tous droits réservés. Tous les textes, images, éléments graphiques et autres contenus publiés sur ce site internet sont protégés par le droit d'auteur et ne peuvent être reproduits, distribués ou utilisés sans autorisation écrite préalable.",
    responsible: "Consommation responsable",
    responsibleP:
      "Veuillez consommer le vin de manière responsable. La vente et la consommation de boissons alcoolisées sont soumises aux dispositions légales applicables concernant l'âge minimum légal pour la consommation d'alcool dans chaque pays.",
    credits: "Crédits photographiques",
    creditsP:
      "Photographies et supports visuels : Esterházy Wein GmbH. Crédits supplémentaires, le cas échéant : Roman Seidl et Martin Fülöp.",
    back: "← Retour à l'accueil",
  },
};

export function PrivacyContent({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  return (
    <>
      <SiteHeader locale={locale} />
      <main className="flex-1 bg-klimt-sand px-5 pb-24 pt-32 sm:px-8">
        <div className="mx-auto flex w-full max-w-[1000px] flex-col gap-16">
          <h1 className="klimt-h1 m-0">{t.h1}</h1>

          <Section title={t.imprint}>
            <p className="m-0">{t.imprintIntro}</p>
            <p className="m-0">{t.ecg}</p>
            <address className="not-italic">
              <p className="m-0">Esterházy Wein GmbH</p>
              <p className="m-0">Trausdorf 1</p>
              <p className="m-0">7061 Trausdorf an der Wulka</p>
              <p className="m-0">{t.country}</p>
              <p className="m-0">
                {t.phone} +43 2682 63348-0
              </p>
              <p className="m-0">
                {t.email}{" "}
                <a
                  href="mailto:weingut@esterhazywein.at"
                  className="underline underline-offset-4"
                >
                  weingut@esterhazywein.at
                </a>
              </p>
              <p className="m-0">
                {t.website}{" "}
                <a
                  href="https://www.esterhazywein.at"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4"
                >
                  www.esterhazywein.at
                </a>
              </p>
            </address>
            <ul className="m-0 list-none flex flex-col gap-1 p-0">
              <li>{t.regNo}</li>
              <li>{t.court}</li>
              <li>{t.vat}</li>
              <li>
                {t.directorsLabel} {t.directors}
              </li>
              <li>
                {t.activityLabel} {t.activity}
              </li>
              <li>
                {t.authorityLabel} {t.authority}
              </li>
            </ul>
          </Section>

          <Section title={t.privacy}>
            <p className="m-0">{t.privacyP1}</p>
            <p className="m-0">{t.privacyP2}</p>
            <p className="m-0">{t.privacyP3}</p>
          </Section>

          <Section title={t.cookies}>
            <p className="m-0">{t.cookiesP1}</p>
            <p className="m-0">{t.cookiesP2}</p>
            <p className="m-0">{t.cookiesP3}</p>
          </Section>

          <Section title={t.disclaimer}>
            <p className="m-0">{t.disclaimerP}</p>
          </Section>

          <Section title={t.copyright}>
            <p className="m-0">{t.copyrightP}</p>
          </Section>

          <Section title={t.responsible}>
            <p className="m-0">{t.responsibleP}</p>
          </Section>

          <Section title={t.credits}>
            <p className="m-0">{t.creditsP}</p>
          </Section>

          <div>
            <Link
              href={locale === "fr" ? "/fr" : "/"}
              className="klimt-subtitle inline-block underline underline-offset-4"
            >
              {t.back}
            </Link>
          </div>
        </div>
      </main>
      <ContactsFooter locale={locale} />
    </>
  );
}

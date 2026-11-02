import Link from "next/link";
import { SiteHeader } from "@/components/sites/klimtwine/site-header";
import { ContactsFooter } from "@/components/sites/klimtwine/contacts-footer";

export const metadata = {
  title: "Privacy Policy — Klimt Wine",
  description:
    "Imprint and privacy policy for the KLIMT wine website by Esterházy Wein GmbH.",
};

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

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-klimt-sand px-5 pb-24 pt-32 sm:px-8">
        <div className="mx-auto flex w-full max-w-[1000px] flex-col gap-16">
          <h1 className="klimt-h1 m-0">Privacy Policy</h1>

          <Section title="Imprint">
            <p className="m-0">
              This website is dedicated exclusively to the KLIMT wine range.
              Weingut Esterházy is the producer of the wines presented and the
              operator of this website.
            </p>
            <p className="m-0">
              Information pursuant to Section 5 of the Austrian E-Commerce Act
              (ECG)
            </p>
            <address className="not-italic">
              <p className="m-0">Esterházy Wein GmbH</p>
              <p className="m-0">Trausdorf 1</p>
              <p className="m-0">7061 Trausdorf an der Wulka</p>
              <p className="m-0">Austria</p>
              <p className="m-0">Phone: +43 2682 63348-0</p>
              <p className="m-0">
                E-mail:{" "}
                <a
                  href="mailto:weingut@esterhazywein.at"
                  className="underline underline-offset-4"
                >
                  weingut@esterhazywein.at
                </a>
              </p>
              <p className="m-0">
                Website:{" "}
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
              <li>Company Registration Number: FN 140080 a</li>
              <li>Commercial Court: Regional Court of Eisenstadt</li>
              <li>VAT Number: ATU 68098603</li>
              <li>Managing Directors: Michael Gröschl, MBA · Wolfgang Hewarth</li>
              <li>Business Activity: Wine production and wine trade</li>
              <li>Supervisory Authority: District Authority Eisenstadt-Umgebung</li>
            </ul>
          </Section>

          <Section title="Privacy Policy">
            <p className="m-0">
              This website is intended solely to provide information about the
              products Klimt Grüner Veltliner, Klimt White Blend and Klimt Red
              Blend. No contact forms, newsletter registrations, customer
              accounts or e-commerce functions are provided.
            </p>
            <p className="m-0">
              This website uses analytics tools, such as Google Analytics, to
              collect aggregated information about website traffic and user
              behavior. These tools help us understand how visitors find and use
              the website in order to improve its performance and user
              experience. Where required by applicable law, analytics cookies
              are only used with the user&apos;s consent.
            </p>
            <p className="m-0">
              For technical reasons, the hosting provider may temporarily
              process server log data to ensure the security and operation of
              the website.
            </p>
          </Section>

          <Section title="Cookie Notice">
            <p className="m-0">
              This website uses cookies and similar technologies, including
              Google Analytics, to collect aggregated information about website
              traffic and visitor interactions. This information helps us
              understand how the website is used and improve its content and
              performance.
            </p>
            <p className="m-0">
              Where required by applicable law, analytics cookies are only
              placed after obtaining the user&apos;s consent. Technically
              necessary cookies may also be used to ensure the security and
              functionality of the website.
            </p>
            <p className="m-0">
              For further information, please refer to our Privacy Policy.
            </p>
          </Section>

          <Section title="Disclaimer">
            <p className="m-0">
              The information provided on this website is for general
              information purposes only. While every effort has been made to
              ensure accuracy, Esterházy Wein GmbH assumes no liability for the
              completeness, correctness or timeliness of the information
              presented. Links to websites not under our control are provided
              for the convenience of our visitors. We are not responsible for
              the accuracy or reliability of the content. We do not offer any
              guarantee and are not responsible for the information found
              through these links. We also do not endorse these sites or their
              content.
            </p>
          </Section>

          <Section title="Copyright">
            <p className="m-0">
              © Esterházy Wein GmbH. All rights reserved. All texts, images,
              graphics and other content published on this website are protected
              by copyright and may not be reproduced, distributed or used
              without prior written permission.
            </p>
          </Section>

          <Section title="Responsible Drinking">
            <p className="m-0">
              Please enjoy wine responsibly. The sale and consumption of
              alcoholic beverages are subject to the applicable legal regulations
              regarding minimum drinking age in the respective country.
            </p>
          </Section>

          <Section title="Image Credits">
            <p className="m-0">
              Photography and visual material: Esterházy Wein GmbH. Additional
              credits, where applicable: Roman Seidl, and Martin Fülöp.
            </p>
          </Section>

          <div>
            <Link
              href="/"
              className="klimt-subtitle inline-block underline underline-offset-4"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </main>
      <ContactsFooter />
    </>
  );
}

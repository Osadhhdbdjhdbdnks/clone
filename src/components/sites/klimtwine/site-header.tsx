"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SAQ_SEARCH_URL, KLIMT_ASSET } from "./data";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = 0;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 120 && y > lastY);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-[420ms] ease-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 sm:px-8">
        <Link href="/" aria-label="Klimt Wine — home" className="relative z-10">
          <Image
            src={`${KLIMT_ASSET}/logo_white.png`}
            alt="Esterhazy Austria"
            width={360}
            height={90}
            priority
            className="h-9 w-auto sm:h-11"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="klimt-body text-klimt-sand transition-opacity hover:opacity-70"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/fr"
            className="klimt-body text-klimt-sand transition-opacity hover:opacity-70"
          >
            En/Fr
          </a>
          <a
            href={SAQ_SEARCH_URL}
            target="_blank"
            rel="noreferrer"
            className="klimt-body rounded-full border border-klimt-sand/30 bg-klimt-sand px-6 py-3 text-klimt-brown transition-opacity hover:opacity-70"
          >
            Buy Klimt Wines
          </a>
        </nav>

        {/* Mobile hamburger: 3x3 dot grid (matches source) */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="grid h-8 w-8 cursor-pointer grid-cols-2 grid-rows-2 place-items-center gap-1 rounded-full border-none bg-transparent focus-visible:ring-2 focus-visible:ring-klimt-sand lg:hidden"
        >
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="block h-1 w-1 rounded-full bg-klimt-sand" />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="absolute inset-0 top-0 z-40 flex min-h-dvh flex-col justify-between bg-klimt-background px-5 pb-10 pt-24 lg:hidden"
        >
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="klimt-h2 text-klimt-brown"
              >
                {l.label}
              </a>
            ))}
            <a href="/fr" className="klimt-h2 text-klimt-brown">
              En/Fr
            </a>
          </nav>
          <div className="flex flex-col gap-6">
            <a
              href={SAQ_SEARCH_URL}
              target="_blank"
              rel="noreferrer"
              className="klimt-subtitle self-start rounded-full bg-klimt-sand px-8 py-4 text-klimt-brown"
            >
              Buy Klimt Wines
            </a>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="self-end text-klimt-brown klimt-body"
            >
              Close ✕
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

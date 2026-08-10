"use client";

import { useEffect, useState } from "react";
import { LANGS, LANG_LABELS } from "@/lib/dictionary";
import { useLang } from "./LangProvider";

export function Header() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`}>
      <div className="wrap header-inner">
        <a className="brand" href="#top">
          <span className="brand-mark" aria-hidden="true">
            R
          </span>
          <span>
            Roshen
            <span className="brand-sub">Sigiriya Guide</span>
          </span>
        </a>

        <nav className="nav" aria-label={t.nav.tours}>
          <a href="#tours">{t.nav.tours}</a>
          <a href="#gallery">{t.nav.gallery}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#booking">{t.nav.how}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>

        <div className="langs" role="group" aria-label={t.langPicker}>
          {LANGS.map((code) => (
            <button
              key={code}
              type="button"
              lang={code}
              onClick={() => setLang(code)}
              aria-pressed={lang === code}
              title={LANG_LABELS[code].full}
            >
              {LANG_LABELS[code].short}
              <span className="sr-only"> — {LANG_LABELS[code].full}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

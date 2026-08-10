"use client";

import { CONTACT, PHOTOS } from "@/lib/media";
import { useLang } from "./LangProvider";
import { ArrowIcon, WhatsAppIcon } from "./icons";

export function Hero() {
  const { t } = useLang();
  const bg = PHOTOS.roshenBoulder;

  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={bg.src} width={bg.w} height={bg.h} alt="" fetchPriority="high" />
      </div>

      <div className="hero-inner">
        <span className="hero-eyebrow">{t.hero.eyebrow}</span>
        <h1>{t.hero.title}</h1>
        <p className="hero-sub">{t.hero.subtitle}</p>

        <div className="hero-cta">
          <a className="btn btn-wa" href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            {t.hero.primary}
          </a>
          <a className="btn btn-ghost" href="#tours">
            {t.hero.secondary}
            <ArrowIcon />
          </a>
        </div>

        <ul className="hero-badges">
          {t.hero.badges.map((badge) => (
            <li key={badge}>{badge}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

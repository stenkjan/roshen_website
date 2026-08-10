"use client";

import { PHOTOS } from "@/lib/media";
import { useLang } from "./LangProvider";

export function About() {
  const { t } = useLang();
  const portrait = PHOTOS.roshenGuestField;

  return (
    <section className="section" id="about">
      <div className="wrap about-grid">
        <div className="about-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={portrait.src}
            width={portrait.w}
            height={portrait.h}
            alt={t.gallery.captions["roshen-guest-field"]}
            loading="lazy"
          />
          <p className="stamp">{t.about.quote}</p>
        </div>

        <div className="about-text">
          <span className="kicker">{t.about.kicker}</span>
          <h2>{t.about.title}</h2>
          <div style={{ marginTop: 18 }}>
            {t.about.paragraphs.map((paragraph, i) => (
              <p className="lead" key={i} style={i > 0 ? { marginTop: 15 } : undefined}>
                {paragraph}
              </p>
            ))}
          </div>

          <ul className="facts">
            {t.about.facts.map((fact) => (
              <li key={fact.label}>
                <span className="k">{fact.label}</span>
                <span className="v">{fact.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

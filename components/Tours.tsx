"use client";

import { CONTACT, TOUR_PHOTOS } from "@/lib/media";
import { useLang } from "./LangProvider";
import { WhatsAppIcon } from "./icons";

export function Tours() {
  const { t } = useLang();

  return (
    <section className="section tours" id="tours">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">{t.tours.kicker}</span>
          <h2>{t.tours.title}</h2>
          <p className="lead">{t.tours.intro}</p>
        </div>

        <div className="cards">
          {t.tours.items.map((tour, i) => {
            const photo = TOUR_PHOTOS[i];
            return (
              <article className="card" key={tour.title}>
                <div className="card-media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.src}
                    width={photo.w}
                    height={photo.h}
                    alt={tour.title}
                    loading="lazy"
                  />
                  {tour.tag ? <span className="card-tag">{tour.tag}</span> : null}
                </div>
                <div className="card-body">
                  <h3>{tour.title}</h3>
                  <p>{tour.text}</p>
                  <p className="card-meta">{tour.meta}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="pricenote">
          <p>{t.tours.priceNote}</p>
          <a className="btn btn-wa" href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            {t.tours.cta}
          </a>
        </div>
      </div>
    </section>
  );
}

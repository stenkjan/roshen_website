"use client";

import { CONTACT } from "@/lib/media";
import { useLang } from "./LangProvider";
import { PhoneIcon, PinIcon, WhatsAppIcon } from "./icons";

export function Contact() {
  const { t } = useLang();

  return (
    <section className="section contact" id="contact">
      <div className="wrap contact-grid">
        <div>
          <span className="kicker">{t.contact.kicker}</span>
          <h2>{t.contact.title}</h2>
          <p className="lead">{t.contact.text}</p>

          <div className="contact-actions">
            <a className="btn btn-wa" href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              {t.contact.whatsapp}
            </a>
            <a className="btn btn-ghost" href={CONTACT.phoneHref}>
              <PhoneIcon />
              {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-row">
            <span className="k">{t.contact.guideLabel}</span>
            <span className="v">{CONTACT.name}</span>
          </div>

          <div className="contact-row">
            <span className="k">{t.contact.call}</span>
            <a className="v" href={CONTACT.phoneHref}>
              {CONTACT.phoneDisplay}
            </a>
          </div>

          <div className="contact-row">
            <span className="k">{t.contact.addressLabel}</span>
            <span className="v">{CONTACT.address}</span>
            <a className="maplink" href={CONTACT.maps} target="_blank" rel="noopener noreferrer">
              <PinIcon />
              {t.contact.mapLink}
            </a>
          </div>

          <div className="contact-row">
            <span className="k">{t.contact.languagesLabel}</span>
            <span className="v">{t.contact.languages}</span>
          </div>

          <div className="contact-row">
            <span className="k">{t.contact.responseLabel}</span>
            <span className="v">{t.contact.response}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useCallback, useEffect, useState } from "react";
import { GALLERY } from "@/lib/media";
import { useLang } from "./LangProvider";

export function Gallery() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(null);

  const caption = (slug: string) => t.gallery.captions[slug] ?? "";

  const step = useCallback((delta: number) => {
    setOpen((current) =>
      current === null ? null : (current + delta + GALLERY.length) % GALLERY.length,
    );
  }, []);

  useEffect(() => {
    if (open === null) return;
    document.body.classList.add("is-locked");

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.classList.remove("is-locked");
      window.removeEventListener("keydown", onKey);
    };
  }, [open, step]);

  const active = open === null ? null : GALLERY[open];

  return (
    <section className="section" id="gallery">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">{t.gallery.kicker}</span>
          <h2>{t.gallery.title}</h2>
        </div>
        <p className="hint">{t.gallery.hint}</p>

        <div className="gallery-grid">
          {GALLERY.map((photo, i) => (
            <figure
              key={photo.slug}
              tabIndex={0}
              role="button"
              aria-label={caption(photo.slug)}
              onClick={() => setOpen(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setOpen(i);
                }
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                width={photo.w}
                height={photo.h}
                alt={caption(photo.slug)}
                loading="lazy"
              />
              <figcaption>{caption(photo.slug)}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      {active ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={caption(active.slug)}
          onClick={() => setOpen(null)}
        >
          <div className="lightbox-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={active.src}
              width={active.w}
              height={active.h}
              alt={caption(active.slug)}
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <div className="lightbox-bar" onClick={(e) => e.stopPropagation()}>
            <button className="lb-btn" type="button" onClick={() => step(-1)} aria-label="←">
              ‹
            </button>
            <span>{caption(active.slug)}</span>
            <button className="lb-btn" type="button" onClick={() => step(1)} aria-label="→">
              ›
            </button>
          </div>

          <button
            className="lb-btn lb-close"
            type="button"
            onClick={() => setOpen(null)}
            aria-label={t.gallery.close}
          >
            ✕
          </button>
        </div>
      ) : null}
    </section>
  );
}

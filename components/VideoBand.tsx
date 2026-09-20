"use client";

import { useRef, useState } from "react";
import { CLIPS } from "@/lib/media";
import { useLang } from "./LangProvider";
import { SoundIcon } from "./icons";

export function VideoBand() {
  const { t } = useLang();
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [active, setActive] = useState(0);

  const clip = CLIPS[active];
  const label = (slug: string) => t.video.clips[slug] ?? "";

  const toggle = () => {
    const el = ref.current;
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
    // Autoplay started the clip silently; unmuting is a user gesture, so this is allowed.
    if (!el.muted) void el.play().catch(() => undefined);
  };

  const pick = (i: number) => {
    setActive(i);
    // The swapped-in element mounts muted, so the toggle has to say so again.
    setMuted(true);
  };

  return (
    <section className="videoband">
      <div className="wrap videoband-grid">
        <div>
          <span className="kicker">{t.video.kicker}</span>
          <h2>{t.video.title}</h2>
          <p>{t.video.text}</p>

          {CLIPS.length > 1 ? (
            <div className="clip-picker">
              {CLIPS.map((c, i) => (
                <button
                  key={c.slug}
                  type="button"
                  className={`clip-tab${i === active ? " is-active" : ""}`}
                  aria-pressed={i === active}
                  onClick={() => pick(i)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.poster.src}
                    width={c.poster.w}
                    height={c.poster.h}
                    alt=""
                    loading="lazy"
                  />
                  <span>{label(c.slug)}</span>
                </button>
              ))}
            </div>
          ) : null}
        </div>

        {/* The clips are portrait and landscape, so the shell takes its shape from
            the active one — and its width from the height it is allowed to use. */}
        <div
          className="video-shell"
          style={{
            aspectRatio: `${clip.w} / ${clip.h}`,
            width: `min(100%, calc(70vh * ${clip.w} / ${clip.h}))`,
          }}
        >
          {/* No poster on purpose: the browser paints the first frame, so the
              still never disagrees with what the clip actually shows. The key
              swaps the element out, so only the active clip is ever loaded. */}
          <video
            key={clip.slug}
            ref={ref}
            src={clip.src}
            width={clip.w}
            height={clip.h}
            aria-label={label(clip.slug)}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            controls={false}
          />
          <button type="button" className="sound-toggle" onClick={toggle}>
            <SoundIcon muted={muted} />
            {muted ? t.video.unmute : t.video.mute}
          </button>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef, useState } from "react";
import { VIDEO } from "@/lib/media";
import { useLang } from "./LangProvider";
import { SoundIcon } from "./icons";

export function VideoBand() {
  const { t } = useLang();
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggle = () => {
    const el = ref.current;
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
    // Autoplay started the clip silently; unmuting is a user gesture, so this is allowed.
    if (!el.muted) void el.play().catch(() => undefined);
  };

  return (
    <section className="videoband">
      <div className="wrap videoband-grid">
        <div>
          <span className="kicker">{t.video.kicker}</span>
          <h2>{t.video.title}</h2>
          <p>{t.video.text}</p>
        </div>

        <div className="video-shell">
          {/* No poster on purpose: the browser paints the first frame, so the
              still never disagrees with what the clip actually shows. */}
          <video
            ref={ref}
            src={VIDEO.src}
            width={VIDEO.w}
            height={VIDEO.h}
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

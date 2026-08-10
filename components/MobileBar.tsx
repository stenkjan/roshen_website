"use client";

import { useEffect, useState } from "react";
import { CONTACT } from "@/lib/media";
import { useLang } from "./LangProvider";
import { PhoneIcon, WhatsAppIcon } from "./icons";

/** Call/WhatsApp bar that slides in on phones once the hero is scrolled past. */
export function MobileBar() {
  const { t } = useLang();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Keep the fixed bar from covering the last lines of the page.
    document.body.style.paddingBottom = show ? "76px" : "";
    return () => {
      document.body.style.paddingBottom = "";
    };
  }, [show]);

  return (
    <div className={`mobilebar${show ? " show" : ""}`}>
      <a className="btn btn-wa" href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon />
        WhatsApp
      </a>
      <a className="btn btn-outline" href={CONTACT.phoneHref}>
        <PhoneIcon />
        {t.contact.call}
      </a>
    </div>
  );
}

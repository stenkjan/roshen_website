"use client";

import { CONTACT } from "@/lib/media";
import { useLang } from "./LangProvider";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <p>
          <strong>{CONTACT.name}</strong> · {CONTACT.address}
        </p>
        <p>{t.footer.tagline}</p>
        <p>
          © {new Date().getFullYear()} Roshen · {t.footer.built}
        </p>
      </div>
    </footer>
  );
}

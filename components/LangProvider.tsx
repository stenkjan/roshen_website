"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { DICT, LANGS, type Copy, type Lang } from "@/lib/dictionary";

const STORAGE_KEY = "roshen.lang";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Copy };

const LangContext = createContext<Ctx | null>(null);

function isLang(value: string | null): value is Lang {
  return !!value && (LANGS as readonly string[]).includes(value);
}

/** ?lang=de wins, then a previous choice, then the browser's preference. */
function detect(): Lang {
  if (typeof window === "undefined") return "en";

  const fromQuery = new URLSearchParams(window.location.search).get("lang");
  if (isLang(fromQuery)) return fromQuery;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLang(stored)) return stored;
  } catch {
    /* private mode — fall through to the browser language */
  }

  for (const candidate of navigator.languages ?? [navigator.language]) {
    const base = candidate.slice(0, 2).toLowerCase();
    if (isLang(base)) return base;
  }
  return "en";
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    setLangState(detect());
  }, []);

  useEffect(() => {
    document.documentElement.lang = DICT[lang].htmlLang;
    document.title = DICT[lang].meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", DICT[lang].meta.description);
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: DICT[lang] }}>{children}</LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LangProvider>");
  return ctx;
}

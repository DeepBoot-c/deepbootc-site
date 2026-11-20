"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translations, Lang } from "@/lib/translations";
import { COPY, Copy } from "@/lib/copy";

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (typeof translations)[Lang];
  c: Copy;
};

// Nederlands is de standaard: de meeste bezoekers zijn Nederlandse ondernemers.
const LanguageContext = createContext<LanguageContextType>({
  lang: "nl",
  setLang: () => {},
  t: translations.nl,
  c: COPY.nl,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("nl");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("lang") as Lang | null;
      if (stored === "nl" || stored === "en") setLangState(stored);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  function setLang(newLang: Lang) {
    setLangState(newLang);
    try { localStorage.setItem("lang", newLang); } catch {}
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang], c: COPY[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

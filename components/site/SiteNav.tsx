"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/context/LanguageContext";
import { CONTACT } from "@/lib/copy";

const LAYERS = [
  ["top", "oppervlakte"], ["above", "boven-water"], ["line", "waterlijn"], ["below", "onder-water"], ["how", "werkwijze"], ["anchor", "contact"],
] as const;
type LayerKey = (typeof LAYERS)[number][0];

// Navigatie = dieptemeter. Desktop: één zwevende chip rechtsboven (logo, diepte, bellen, de knop).
// Mobiel: een effen balk met logo links en bellen + de knop rechts.
export default function SiteNav({ depth = true }: { depth?: boolean }) {
  const { c, lang, setLang } = useLanguage();
  const [cur, setCur] = useState<LayerKey>("top");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    if (!depth) return () => window.removeEventListener("scroll", onScroll);
    const els = LAYERS.map(([k]) => document.querySelector<HTMLElement>(`[data-layer="${k}"]`)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver((entries) => {
      for (const en of entries) if (en.isIntersecting) setCur(en.target.getAttribute("data-layer") as LayerKey);
    }, { rootMargin: "-45% 0px -54% 0px" });
    els.forEach((e) => io.observe(e));
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, [depth]);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent ? e.key === "Escape" : !menuRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", close);
    return () => { document.removeEventListener("mousedown", close); document.removeEventListener("keydown", close); };
  }, [open]);

  const idx = LAYERS.findIndex(([k]) => k === cur);
  const dark = idx >= 3;

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}${dark && depth ? " is-deep" : ""}`}>
      <Link href="/" className="nav__brand" aria-label="DeepBoot.C, home">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-mark.svg" width="30" height="30" alt="" />
        <span>DeepBoot<b>.C</b></span>
      </Link>

      <div className="nav__depth" ref={menuRef}>
        <button type="button" className="nav__gauge" aria-expanded={open} aria-haspopup="true" onClick={() => setOpen((o) => !o)}>
          {depth && (
            <span className="gauge" aria-hidden="true">
              {LAYERS.map(([k], i) => <i key={k} className={i <= idx ? "on" : ""} />)}
            </span>
          )}
          <span className="nav__layer">{depth ? c.layers[cur] : c.nav.menu}</span>
          <svg className="nav__caret" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4l4 4 4-4" /></svg>
        </button>
        {open && (
          <div className="nav__menu" role="menu">
            {LAYERS.map(([k, id], i) => (
              <Link key={k} role="menuitem" href={depth ? `#${id}` : `/#${id}`} onClick={() => setOpen(false)} className={k === cur && depth ? "is-cur" : ""}>
                <span className="nav__tick" aria-hidden="true">{i === 2 ? "≈" : "—"}</span>{c.layers[k]}
              </Link>
            ))}
            <hr />
            <Link role="menuitem" href="/about" onClick={() => setOpen(false)}>{c.nav.about}</Link>
            <button role="menuitem" type="button" onClick={() => { setLang(lang === "nl" ? "en" : "nl"); setOpen(false); }}>{c.nav.lang}</button>
          </div>
        )}
      </div>

      <div className="nav__actions">
        <a className="nav__call" href={CONTACT.tel} aria-label={`${c.call} ${CONTACT.phoneIntl}`}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.8.7a2 2 0 0 1 1.8 2z" /></svg>
          <span className="nums">{CONTACT.phoneDisplay}</span>
        </a>
        <Link className="btn btn--accent btn--sm" href={depth ? "#contact" : "/contact"}>{c.cta}</Link>
      </div>
    </header>
  );
}

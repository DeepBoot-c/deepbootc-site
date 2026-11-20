"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/context/LanguageContext";
import { CONTACT } from "@/lib/copy";

// Vaste balk, logo links. Transparant boven de hero, effen zodra je scrolt (er schuift nooit iets zichtbaar onder het logo door).
// Mobiel: logo links, bellen + de knop rechts, menu onder een knop.
export default function SiteNav({ home = true }: { home?: boolean }) {
  const { c, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const base = home ? "" : "/";

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 10);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", k);
    return () => document.removeEventListener("keydown", k);
  }, [open]);

  const links = [
    [`${base}#websites`, c.nav.web], [`${base}#ai`, c.nav.ai], [`${base}#werkwijze`, c.nav.how], ["/about", c.nav.about],
  ];

  return (
    <header className={`nav${scrolled || !home || open ? " is-solid" : ""}`}>
      <div className="nav__in">
        <Link href="/" className="nav__brand" aria-label="DeepBoot.C, home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/badge-v2.png" width="26" height="30" alt="" />
          <span>DeepBoot<b>.C</b></span>
        </Link>
        <nav className="nav__links" aria-label="Hoofdmenu">
          {links.map(([h, l]) => <Link key={h} href={h}>{l}</Link>)}
        </nav>
        <div className="nav__right">
          <button type="button" className="nav__lang" onClick={() => setLang(lang === "nl" ? "en" : "nl")} aria-label={c.nav.lang}>{c.nav.langShort}</button>
          <a className="nav__call" href={CONTACT.tel} aria-label={`${c.call} ${CONTACT.phoneIntl}`}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.8.7a2 2 0 0 1 1.8 2z" /></svg>
            <span className="nums">{CONTACT.phoneDisplay}</span>
          </a>
          <Link className="btn btn--chrome btn--sm" href={`${base}#contact`}>{c.cta}</Link>
          <button type="button" className="nav__burger" aria-expanded={open} aria-controls="nav-menu" aria-label={open ? c.nav.close : c.nav.menu} onClick={() => setOpen((o) => !o)}>
            <span /><span />
          </button>
        </div>
      </div>
      {open && (
        <div id="nav-menu" className="nav__sheet">
          {links.map(([h, l]) => <Link key={h} href={h} onClick={() => setOpen(false)}>{l}</Link>)}
          <Link href={`${base}#contact`} onClick={() => setOpen(false)}>{c.nav.contact}</Link>
          <button type="button" onClick={() => { setLang(lang === "nl" ? "en" : "nl"); setOpen(false); }}>{c.nav.lang}</button>
        </div>
      )}
    </header>
  );
}

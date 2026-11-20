"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/context/LanguageContext";
import { CONTACT } from "@/lib/copy";

// De close: het anker ligt op de bodem, met de plaat "Plan een gesprek" en de directe lijnen.
export default function Anchor({ standalone = false }: { standalone?: boolean }) {
  const { c, lang, setLang } = useLanguage();
  const A = c.anchor;
  const [f, setF] = useState({ name: "", contact: "", when: A.whenOpts[3], msg: "" });
  const [err, setErr] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!f.name.trim() || !f.contact.trim()) { setErr(A.err); return; }
    setErr("");
    const body = A.mailBody({ name: f.name.trim(), contact: f.contact.trim(), when: f.when, msg: f.msg.trim() });
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(A.mailSubject)}&body=${encodeURIComponent(body)}`;
  }

  const year = new Date().getFullYear();
  return (
    <section id="contact" className={`anchor g-floor${standalone ? " anchor--page" : ""}`} data-sc-act="flow" data-layer="anchor" aria-labelledby="anchor-title">
      <div className="anchor__rope" aria-hidden="true" />
      <div className="sc-wrap anchor__grid">
        <div className="anchor__intro" data-sc-in>
          <svg className="anchor__icon" viewBox="0 0 120 150" aria-hidden="true">
            <defs>
              <linearGradient id="anc" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="120" y2="0">
                <stop offset="0" stopColor="#5D6C7E" /><stop offset="0.5" stopColor="#C8D1DA" /><stop offset="1" stopColor="#56657A" />
              </linearGradient>
            </defs>
            <g fill="none" stroke="url(#anc)" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="60" cy="18" r="11" />
              <path d="M60 29 V128" />
              <path d="M34 52 H86" />
              <path d="M14 96 C 18 122, 40 134, 60 134 C 80 134, 102 122, 106 96" />
              <path d="M14 96 L 6 108 M14 96 L 28 102 M106 96 L114 108 M106 96 L92 102" />
            </g>
          </svg>
          <h2 id="anchor-title" className="h-lg">{A.title}</h2>
          <p className="lede">{A.lede}</p>
          <ul className="anchor__direct" aria-label={A.direct}>
            <li><a href={CONTACT.tel}><span className="anchor__k">{c.call}</span><span className="nums">{CONTACT.phoneIntl}</span></a></li>
            <li><a href={`${CONTACT.whatsapp}?text=${encodeURIComponent(A.waText)}`} target="_blank" rel="noopener"><span className="anchor__k">{A.wa}</span><span className="nums">{CONTACT.phoneDisplay}</span></a></li>
            <li><a href={`mailto:${CONTACT.email}`}><span className="anchor__k">{A.mail}</span><span>{CONTACT.email}</span></a></li>
          </ul>
        </div>

        <form className="plate" onSubmit={submit} action={`mailto:${CONTACT.email}`} method="post" encType="text/plain" noValidate data-sc-in>
          <h3 className="plate__title">{A.formTitle}</h3>
          <label>{A.nameL}<input name="naam" autoComplete="name" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} /></label>
          <label>{A.contactL}<input name="contact" autoComplete="tel" value={f.contact} onChange={(e) => setF({ ...f, contact: e.target.value })} /></label>
          <label>{A.whenL}
            <select name="voorkeur" value={f.when} onChange={(e) => setF({ ...f, when: e.target.value })}>
              {A.whenOpts.map((o) => <option key={o}>{o}</option>)}
            </select>
          </label>
          <label>{A.msgL}<textarea name="bericht" rows={3} value={f.msg} onChange={(e) => setF({ ...f, msg: e.target.value })} /></label>
          <button type="submit" className="btn btn--accent btn--wide">{c.cta}</button>
          <p className="plate__note" role="status">{err || A.note}</p>
        </form>
      </div>

      <footer className="sc-wrap foot">
        <div className="foot__brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-mark.svg" width="28" height="28" alt="" />
          <span>DeepBoot<b>.C</b></span>
          <span className="foot__tag">{c.foot.tag}</span>
        </div>
        <nav className="foot__links" aria-label="Footer">
          {standalone && <Link href="/">{c.nav.home}</Link>}
          <Link href="/about">{c.nav.about}</Link>
          <Link href="/voorwaarden">{c.nav.terms}</Link>
          <button type="button" className="foot__lang" onClick={() => setLang(lang === "nl" ? "en" : "nl")}>{c.nav.lang}</button>
        </nav>
        <p className="foot__small">© {year} DeepBoot.C · {c.foot.place} · {c.foot.rights}</p>
      </footer>
    </section>
  );
}

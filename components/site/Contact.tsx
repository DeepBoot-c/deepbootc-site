"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/context/LanguageContext";
import { CONTACT } from "@/lib/copy";

// De close: kennismaken. Formulier (opent mail met het bericht klaar) en de directe lijnen. Footer zit erin.
export default function Contact({ standalone = false }: { standalone?: boolean }) {
  const { c, lang, setLang } = useLanguage();
  const A = c.contact;
  const [f, setF] = useState({ name: "", contact: "", when: A.whenOpts[3], msg: "" });
  const [err, setErr] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!f.name.trim() || !f.contact.trim()) { setErr(A.err); return; }
    setErr("");
    const body = A.mailBody({ name: f.name.trim(), contact: f.contact.trim(), when: f.when, msg: f.msg.trim() });
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(A.mailSubject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contact" className={`contact${standalone ? " contact--page" : ""}`} data-sc-act="flow" aria-labelledby="contact-title">
      <div className="contact__glow" aria-hidden="true" />
      <div className="sc-wrap contact__grid">
        <div className="contact__intro" data-sc-in>
          <h2 id="contact-title" className="h-lg">{A.title}</h2>
          <p className="lede">{A.lede}</p>
          <ul className="contact__direct" aria-label={A.direct}>
            <li><a href={CONTACT.tel}><span className="contact__k">{c.call}</span><span className="nums">{CONTACT.phoneIntl}</span></a></li>
            <li><a href={`${CONTACT.whatsapp}?text=${encodeURIComponent(A.waText)}`} target="_blank" rel="noopener"><span className="contact__k">{A.wa}</span><span className="nums">{CONTACT.phoneDisplay}</span></a></li>
            <li><a href={`mailto:${CONTACT.email}`}><span className="contact__k">{A.mail}</span><span>{CONTACT.email}</span></a></li>
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
          <button type="submit" className="btn btn--chrome btn--wide">{c.cta}</button>
          <p className="plate__note" role="status">{err || A.note}</p>
        </form>
      </div>

      <footer className="sc-wrap foot">
        <div className="foot__brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/badge-v2.png" width="24" height="28" alt="" />
          <span>DeepBoot<b>.C</b></span>
          <span className="foot__tag">{c.foot.tag}</span>
        </div>
        <nav className="foot__links" aria-label="Footer">
          {standalone && <Link href="/">{c.nav.home}</Link>}
          <Link href="/about">{c.nav.about}</Link>
          <Link href="/voorwaarden">{c.nav.terms}</Link>
          <button type="button" className="foot__lang" onClick={() => setLang(lang === "nl" ? "en" : "nl")}>{c.nav.lang}</button>
        </nav>
        <p className="foot__small">© {new Date().getFullYear()} DeepBoot.C · {c.foot.place} · {c.foot.rights}</p>
      </footer>
    </section>
  );
}

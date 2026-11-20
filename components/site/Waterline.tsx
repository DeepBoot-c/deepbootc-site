"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "@/lib/context/LanguageContext";

/*
  Signature move "De waterlijn".
  Boven de lijn: een werkende voorbeeldsite (verzonnen pension). Onder de lijn: de machinekamer,
  die met de echte invoer van de bezoeker rekent (voorbeeldbezetting en voorbeeldprijzen).
  De lijn sleep je met muis of vinger, of met de pijltjestoetsen; scroll stuurt hier niets.
*/

const ROOMS = [
  { name: "Duinkamer", nameEn: "Dune room", price: 95, booked: [3, 4, 5, 10, 11, 17, 18, 19, 24, 25, 26, 31, 32] },
  { name: "Zeekamer", nameEn: "Sea room", price: 115, booked: [1, 2, 3, 4, 8, 9, 15, 16, 17, 18, 22, 23, 29, 30] },
];
const TAX = 2.95; // per persoon per nacht (voorbeeld)

const dayMs = 864e5;
const startOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const iso = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const fromIso = (s: string) => { const [y, m, dd] = s.split("-").map(Number); return new Date(y, (m || 1) - 1, dd || 1); };

type Req = { name: string; arrive: string; nights: number; guests: number };
type Result = {
  req: Req; at: string; room: string; from: Date; to: Date; alt: boolean; none: boolean;
  nightsTxt: string; guestsTxt: string; priceLine: string; taxLine: string; total: number;
};

function process(req: Req, lang: "nl" | "en", today: Date): Result {
  const start = fromIso(req.arrive);
  const offset = Math.round((startOfDay(start).getTime() - today.getTime()) / dayMs);
  const freeAt = (room: (typeof ROOMS)[number], off: number) => {
    for (let i = 0; i < req.nights; i++) if (room.booked.includes(((off + i) % 35 + 35) % 35)) return false;
    return true;
  };
  let pick = ROOMS.find((r) => freeAt(r, offset));
  let off = offset, alt = false, none = false;
  if (!pick) {
    alt = true;
    outer: for (let k = 1; k <= 14; k++) for (const r of ROOMS) if (freeAt(r, offset + k)) { pick = r; off = offset + k; break outer; }
  }
  if (!pick) { none = true; pick = ROOMS[0]; }
  const from = new Date(today.getTime() + off * dayMs);
  const to = new Date(from.getTime() + req.nights * dayMs);
  const nf = new Intl.NumberFormat(lang === "nl" ? "nl-NL" : "en-GB", { style: "currency", currency: "EUR" });
  const roomName = lang === "nl" ? pick.name : pick.nameEn;
  const stay = pick.price * req.nights;
  const tax = TAX * req.guests * req.nights;
  const now = new Date();
  return {
    req, at: `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`,
    room: roomName, from, to, alt, none,
    nightsTxt: "", guestsTxt: "",
    priceLine: `${req.nights} × ${nf.format(pick.price)} = ${nf.format(stay)}`,
    taxLine: `${req.guests} × ${req.nights} × ${nf.format(TAX)} = ${nf.format(tax)}`,
    total: stay + tax,
  };
}

export default function Waterline() {
  const { c, lang } = useLanguage();
  const L = c.line, S = L.site, E = L.engine;
  const today = useMemo(() => startOfDay(new Date()), []);
  const dfmt = useMemo(() => new Intl.DateTimeFormat(lang === "nl" ? "nl-NL" : "en-GB", { weekday: "short", day: "numeric", month: "long" }), [lang]);
  const nf = useMemo(() => new Intl.NumberFormat(lang === "nl" ? "nl-NL" : "en-GB", { style: "currency", currency: "EUR" }), [lang]);

  // Alles wat van de datum afhangt wordt pas in de browser berekend (anders verschilt het van de server-HTML).
  const [form, setForm] = useState<Req>({ name: "Anne de Vries", arrive: "", nights: 2, guests: 2 });
  const [err, setErr] = useState("");
  const [sent, setSent] = useState(false);
  const [res, setRes] = useState<Result | null>(null);
  const [ledger, setLedger] = useState<Result[]>([]);
  const [step, setStep] = useState(5);
  const [pos, setPos] = useState(0.58); // 0 = alles onder water zichtbaar, 1 = alles boven water
  const [dragging, setDragging] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const timers = useRef<number[]>([]);

  // eerste keer: voorbeeldaanvraag alvast verwerkt, zodat de machinekamer nooit leeg is
  useEffect(() => {
    const req: Req = { name: "Anne de Vries", arrive: iso(new Date(today.getTime() + 13 * dayMs)), nights: 2, guests: 2 };
    setForm(req);
    const r = process(req, "nl", today);
    setRes(r); setLedger([r]);
    if (matchMedia("(max-width: 860px)").matches) setPos(0.76);
  }, [today]);
  // taalwissel: resultaat opnieuw berekenen met dezelfde invoer
  useEffect(() => { setRes((r) => (r ? process(r.req, lang, today) : r)); setLedger((l) => l.map((r) => process(r.req, lang, today))); }, [lang, today]);

  const clamp = (v: number) => Math.min(0.96, Math.max(0.04, v));
  const fromPointer = useCallback((clientY: number) => {
    const r = stageRef.current!.getBoundingClientRect();
    setPos(clamp((clientY - r.top) / r.height));
  }, []);

  useEffect(() => {
    if (!dragging) return;
    const move = (e: PointerEvent) => { e.preventDefault(); fromPointer(e.clientY); };
    const up = () => setDragging(false);
    window.addEventListener("pointermove", move, { passive: false });
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
    return () => { window.removeEventListener("pointermove", move); window.removeEventListener("pointerup", up); window.removeEventListener("pointercancel", up); };
  }, [dragging, fromPointer]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  function onKey(e: React.KeyboardEvent) {
    const k = e.key;
    if (k === "ArrowUp" || k === "ArrowLeft") { e.preventDefault(); setPos((p) => clamp(p - 0.06)); }
    if (k === "ArrowDown" || k === "ArrowRight") { e.preventDefault(); setPos((p) => clamp(p + 0.06)); }
    if (k === "Home") { e.preventDefault(); setPos(0.04); }
    if (k === "End") { e.preventDefault(); setPos(0.96); }
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim()) { setErr(S.errName); return; }
    if (!form.arrive || fromIso(form.arrive).getTime() < today.getTime()) { setErr(S.errDate); return; }
    setErr("");
    const r = process({ ...form, name: form.name.trim().slice(0, 40) }, lang, today);
    setRes(r);
    setLedger((l) => [r, ...l].slice(0, 3));
    setSent(true);
    timers.current.forEach(clearTimeout);
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setStep(5); } else {
      setStep(0);
      for (let i = 1; i <= 5; i++) timers.current.push(window.setTimeout(() => setStep(i), 380 * i));
    }
    // laat zien wat er onder gebeurt
    window.setTimeout(() => setPos((p) => Math.min(p, 0.24)), reduce ? 0 : 160);
  }

  const mail = !res ? "…" : E.mail({
    name: res.req.name, room: res.room, from: dfmt.format(res.from), to: dfmt.format(res.to),
    nights: E.night(res.req.nights), total: nf.format(res.total), alt: res.alt, none: res.none,
  });
  const steps = !res ? [E.s1, E.s2, E.s3, E.s4, E.s5].map((t) => ({ t, d: "…" })) : [
    { t: E.s1, d: `${res.at} · ${res.req.name} · ${dfmt.format(fromIso(res.req.arrive))} · ${E.night(res.req.nights)} · ${E.guests(res.req.guests)}` },
    { t: E.s2, d: res.none ? E.none : res.alt ? E.alt(res.room, dfmt.format(res.from)) : E.free(res.room) },
    { t: E.s3, d: res.none ? "–" : `${res.priceLine} · ${E.tax} ${res.taxLine} · ${nf.format(res.total)}` },
    { t: E.s4, d: E.waiting },
    { t: E.s5, d: `${res.req.name} · ${nf.format(res.none ? 0 : res.total)} · ${E.concept}` },
  ];
  const pct = (pos * 100).toFixed(2);

  return (
    <section id="waterlijn" className="line g-line" data-sc-act="flow" data-layer="line" aria-labelledby="line-title">
      <div className="sc-wrap line__head" data-sc-in>
        <h2 id="line-title" className="h-lg">{L.title}</h2>
        <p className="lede">{L.lede}</p>
      </div>

      <div className="sc-wrap">
        <div className="line__controls" role="group" aria-label={L.handle}>
          <button type="button" className={`chip-btn${pos > 0.7 ? " is-on" : ""}`} onClick={() => setPos(0.92)}>{L.above}</button>
          <button type="button" className={`chip-btn${pos < 0.3 ? " is-on" : ""}`} onClick={() => setPos(0.1)}>{L.below}</button>
          <span className="line__sample">{L.sample}</span>
        </div>

        <div ref={stageRef} className={`line__stage${dragging ? " is-dragging" : ""}`} style={{ ["--wl" as string]: `${pct}%` }}>
          {/* ONDER WATER: machinekamer */}
          <div className="engine" aria-live="polite">
            <div className="engine__head">
              <span className="engine__title">{E.title}</span>
              <span className={`engine__state${step < 5 ? " is-busy" : ""}`}>{step < 5 ? "…" : "✓"}</span>
            </div>
            <div className="engine__grid">
              <ol className="engine__steps">
                {steps.map((s, i) => (
                  <li key={i} className={i < step ? "is-done" : i === step ? "is-now" : ""}>
                    <span className="engine__dot" aria-hidden="true" />
                    <span className="engine__t">{s.t}</span>
                    <span className="engine__d">{i < step || step >= 5 ? s.d : "…"}</span>
                  </li>
                ))}
              </ol>
              <div className={`engine__mail${step >= 4 ? " is-ready" : ""}`}>
                <div className="engine__mailhead"><span>{E.subject}</span><span className="engine__wait">{E.waiting}</span></div>
                <pre className="engine__mailbody">{step >= 4 ? mail : "…"}</pre>
              </div>
              <table className="engine__ledger">
                <thead><tr>{E.ledger.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
                <tbody>
                  {ledger.map((r, i) => (
                    <tr key={i} className={i === 0 && step < 5 ? "is-pending" : ""}>
                      <td className="nums">{dfmt.format(r.from)}</td><td>{r.req.name}</td><td className="nums">{r.req.nights}</td>
                      <td className="nums">{nf.format(r.none ? 0 : r.total)}</td><td>{E.concept}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* BOVEN WATER: voorbeeldsite, afgesneden op de waterlijn */}
          <div className="demo" aria-label={`${S.name} · ${L.sample}`}>
            <div className="demo__bar">
              <span className="demo__brand">{S.name}<small>{S.place}</small></span>
              <nav aria-hidden="true">{S.nav.map((n) => <span key={n}>{n}</span>)}</nav>
            </div>
            <div className="demo__body">
              <div className="demo__hero" aria-hidden="false">
                <div className="demo__dunes" aria-hidden="true"><i /><i /><i /></div>
                <p className="demo__h">{S.h}</p>
                <p className="demo__p">{S.p}</p>
              </div>
              <form className="demo__form" onSubmit={submit} noValidate>
                <p className="demo__formt">{S.form}</p>
                <label>{S.nameL}<input value={form.name} maxLength={40} autoComplete="off" onChange={(e) => setForm({ ...form, name: e.target.value })} /></label>
                <div className="demo__row">
                  <label>{S.arriveL}<input type="date" value={form.arrive} min={iso(today)} onChange={(e) => setForm({ ...form, arrive: e.target.value })} /></label>
                  <label>{S.nightsL}<select value={form.nights} onChange={(e) => setForm({ ...form, nights: +e.target.value })}>{[1, 2, 3, 4, 5, 6, 7].map((n) => <option key={n} value={n}>{n}</option>)}</select></label>
                  <label>{S.guestsL}<select value={form.guests} onChange={(e) => setForm({ ...form, guests: +e.target.value })}>{[1, 2, 3, 4].map((n) => <option key={n} value={n}>{n}</option>)}</select></label>
                </div>
                <button type="submit" className="demo__send">{S.send}</button>
                <p className="demo__msg" role="status">{err || (sent ? S.sent : "")}</p>
              </form>
            </div>
          </div>

          {/* de waterlijn zelf */}
          <div
            className="wl"
            role="slider"
            tabIndex={0}
            aria-label={L.handle}
            aria-orientation="vertical"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(pos * 100)}
            aria-valuetext={pos > 0.7 ? L.above : pos < 0.3 ? L.below : `${Math.round(pos * 100)}%`}
            onKeyDown={onKey}
            onPointerDown={(e) => { e.preventDefault(); setDragging(true); fromPointer(e.clientY); }}
          >
            <svg className="wl__wave" viewBox="0 0 240 16" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 8 Q 15 0 30 8 T 60 8 T 90 8 T 120 8 T 150 8 T 180 8 T 210 8 T 240 8" />
            </svg>
            <span className="wl__grip" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7 9l5-5 5 5M7 15l5 5 5-5" /></svg></span>
          </div>
        </div>
      </div>
    </section>
  );
}

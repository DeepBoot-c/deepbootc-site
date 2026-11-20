"use client";

import { useId, useState } from "react";
import { useLanguage } from "@/lib/context/LanguageContext";
import { WORKWEEKS } from "@/lib/copy";

/*
  Signature move: de tijdmeter. Drie schuiven, één chromen zeshoek (de logovorm) die zich vult.
  Alles wordt berekend uit de eigen invoer van de bezoeker; er staan geen verzonnen cijfers.
*/
const HEX = "100,6 192,59 192,165 100,218 8,165 8,59";
const PERIM = 6 * 106.1; // zijde ~106 in dit viewBox

type SliderProps = { id: string; label: string; value: number; set: (n: number) => void; min: number; max: number; step: number; unit: (n: number) => string };
// Buiten het component gedefinieerd, anders wordt de schuif bij elke wijziging opnieuw aangemaakt en verlies je hem tijdens het slepen.
function Slider({ id, label, value, set, min, max, step, unit }: SliderProps) {
  return (
    <div className="meter__row">
      <div className="meter__lab"><label htmlFor={id}>{label}</label><output htmlFor={id} className="nums">{unit(value)}</output></div>
      <input id={id} type="range" min={min} max={max} step={step} value={value}
        style={{ ["--f" as string]: `${((value - min) / (max - min)) * 100}%` }}
        onChange={(e) => set(+e.target.value)} />
    </div>
  );
}

export default function TimeMeter() {
  const { c, lang } = useLanguage();
  const M = c.meter;
  const id = useId();
  const [mails, setMails] = useState(20);
  const [mins, setMins] = useState(4);
  const [admin, setAdmin] = useState(3);

  const weekH = (mails * mins * 5) / 60 + admin;
  const yearH = Math.round(weekH * WORKWEEKS);
  const days = Math.round(yearH / 8);
  const fill = Math.min(1, yearH / 1000); // schaal: 1000 uur = vol
  const nf = new Intl.NumberFormat(lang === "nl" ? "nl-NL" : "en-GB");
  const nf1 = new Intl.NumberFormat(lang === "nl" ? "nl-NL" : "en-GB", { maximumFractionDigits: 1 });

  return (
    <div className="meter">
      <div className="meter__controls">
        <h3 className="meter__title">{M.title}</h3>
        <p className="meter__lede">{M.lede}</p>
        <Slider id={`${id}-m`} label={M.mails} value={mails} set={setMails} min={0} max={80} step={1} unit={M.unitMail} />
        <Slider id={`${id}-t`} label={M.perMail} value={mins} set={setMins} min={1} max={15} step={1} unit={M.unitMin} />
        <Slider id={`${id}-a`} label={M.admin} value={admin} set={setAdmin} min={0} max={20} step={0.5} unit={M.unitHour} />
      </div>
      <div className="meter__dial" aria-live="polite">
        <svg viewBox="0 0 200 224" aria-hidden="true">
          <defs>
            <linearGradient id="meter-chrome" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#F4F7FA" /><stop offset="0.45" stopColor="#9AA6B2" /><stop offset="0.7" stopColor="#E3E8ED" /><stop offset="1" stopColor="#6E7A87" />
            </linearGradient>
          </defs>
          <polygon points={HEX} className="meter__track" />
          <polygon points={HEX} className="meter__fill" stroke="url(#meter-chrome)" style={{ strokeDasharray: PERIM, strokeDashoffset: PERIM * (1 - fill) }} />
        </svg>
        <div className="meter__read">
          <span className="meter__big nums">{nf.format(yearH)}</span>
          <span className="meter__unit">{M.perYear}</span>
          <span className="meter__week nums">{nf1.format(weekH)} {M.unitHour(0).replace(/^0\s*/, "")} {M.perWeek}</span>
        </div>
      </div>
      <p className="meter__days">{M.days(days)}</p>
      <p className="meter__note">{M.note(WORKWEEKS)}</p>
    </div>
  );
}

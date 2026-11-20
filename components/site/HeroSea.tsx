"use client";

import { useEffect, useRef } from "react";
import Boat, { BOAT_W, WATERLINE } from "./Boat";
import { useLanguage } from "@/lib/context/LanguageContext";
import { CONTACT } from "@/lib/copy";

/*
  Hero: één camera boven een getekende draadmodel-zee (de golven uit het logo).
  Lagen van achter naar voren:
    lucht + nevel  ->  achterzee (canvas, rijen achter de boot)  ->  boot (SVG, kiel onder water)
    ->  voorzee (canvas, doorschijnend water + rijen vóór de boot)  ->  tekst
  Scrollen (gepinde stage, eigen voortgang) laat de camera zakken en zijwaarts schuiven:
  de voorste golven komen omhoog, de boot blijft op het water liggen (gedeeld contactpunt).
*/

type Dims = { W: number; H: number; dpr: number; mobile: boolean };

const ZS = (() => {
  // Rijen van dichtbij (1) naar ver (46), exponentieel verdeeld.
  const out: number[] = [];
  for (let i = 0; i < 34; i++) out.push(1.0 * Math.pow(46 / 1.0, i / 33));
  return out;
})();

function wave(x: number, z: number, t: number) {
  return (
    0.07 * Math.sin(0.9 * x + 0.55 * z + t * 0.9) +
    0.045 * Math.sin(1.8 * x - 1.05 * z + t * 1.25) +
    0.022 * Math.sin(3.1 * x + 2.2 * z - t * 1.7)
  );
}

export default function HeroSea() {
  const { c } = useLanguage();
  const secRef = useRef<HTMLElement>(null);
  const backRef = useRef<HTMLCanvasElement>(null);
  const frontRef = useRef<HTMLCanvasElement>(null);
  const boatRef = useRef<HTMLDivElement>(null);
  const skyRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const beatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sec = secRef.current!, back = backRef.current!, front = frontRef.current!;
    const bctx = back.getContext("2d")!, fctx = front.getContext("2d")!;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let d: Dims = { W: 0, H: 0, dpr: 1, mobile: false };
    let raf = 0, visible = true, t0 = performance.now();

    function size() {
      const r = back.parentElement!.getBoundingClientRect();
      d = { W: r.width, H: r.height, dpr: Math.min(window.devicePixelRatio || 1, 1.5), mobile: r.width < 760 };
      for (const cv of [back, front]) {
        cv.width = Math.round(d.W * d.dpr); cv.height = Math.round(d.H * d.dpr);
        cv.style.width = d.W + "px"; cv.style.height = d.H + "px";
      }
    }

    function progress() {
      if (reduce) return 0;
      const r = sec.getBoundingClientRect();
      const travel = Math.max(1, r.height - window.innerHeight);
      return Math.min(1, Math.max(0, -r.top / travel));
    }

    function frame(now: number) {
      if (!d.W || !d.H) { size(); if (!reduce) raf = requestAnimationFrame(frame); return; }
      const t = reduce ? 0 : (now - t0) / 1000;
      const p = progress();
      const e = p * p * (3 - 2 * p); // smoothstep
      const { W, H, dpr, mobile } = d;
      const horizon = H * (mobile ? 0.55 : 0.5);
      const f = H * 0.9;
      const camH = 1 - 0.42 * e;            // camera zakt richting water
      const camX = 0.55 * e;                // en schuift opzij
      const zb = mobile ? 5.0 : 5.6;        // diepte van de boot
      const xb = ((mobile ? 0.64 : 0.7) * W - W / 2) * zb / f;
      const proj = (x: number, y: number, z: number) => [W / 2 + (x - camX) * f / z, horizon + (camH - y) * f / z];

      // --- achterzee: vulling + rijen achter de boot ---
      bctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      bctx.clearRect(0, 0, W, H);
      const g = bctx.createLinearGradient(0, horizon, 0, H);
      g.addColorStop(0, "#A9BBCB"); g.addColorStop(0.5, "#7590A9"); g.addColorStop(1, "#3D5670");
      bctx.fillStyle = g; bctx.fillRect(0, horizon - 2, W, H - horizon + 2);
      const drawRows = (ctx: CanvasRenderingContext2D, zs: number[], strong: number) => {
        for (const z of zs) {
          const span = (W / 2 / f) * z * 1.25 + 1;
          const steps = 48;
          ctx.beginPath();
          for (let i = 0; i <= steps; i++) {
            const x = camX - span + (2 * span * i) / steps;
            const [sx, sy] = proj(x, wave(x, z, t), z);
            if (i === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
          }
          const a = Math.max(0.05, Math.min(strong, 1.25 / z));
          ctx.strokeStyle = `rgba(11,26,46,${a.toFixed(3)})`;
          ctx.lineWidth = Math.max(0.6, 2.2 / Math.sqrt(z));
          ctx.stroke();
        }
      };
      // dwarslijnen (kolommen) geven het draadmodel
      const drawCols = (ctx: CanvasRenderingContext2D, zNear: number, zFar: number, alpha: number) => {
        const cols = mobile ? 22 : 34;
        for (let k = -cols; k <= cols; k++) {
          const x0 = camX + k * 0.55;
          ctx.beginPath();
          let first = true;
          for (let z = zNear; z <= zFar; z *= 1.12) {
            const [sx, sy] = proj(x0, wave(x0, z, t), z);
            if (sx < -50 || sx > W + 50) { first = true; continue; }
            if (first) { ctx.moveTo(sx, sy); first = false; } else ctx.lineTo(sx, sy);
          }
          ctx.strokeStyle = `rgba(11,26,46,${alpha})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      };
      drawCols(bctx, zb, 46, 0.14);
      drawRows(bctx, ZS.filter((z) => z >= zb), 0.4);

      // --- boot op het water ---
      const yb = wave(xb, zb, t);
      const slope = (wave(xb + 0.15, zb, t) - wave(xb - 0.15, zb, t)) / 0.3;
      const [bx, by] = proj(xb, yb, zb);
      const bw = mobile ? Math.min(W * 0.4, 190) : Math.min(W * 0.2, 320);
      const s = bw / BOAT_W;
      if (boatRef.current) {
        boatRef.current.style.transform =
          `translate3d(${(bx - bw / 2).toFixed(1)}px, ${(by - WATERLINE * s).toFixed(1)}px, 0) rotate(${(-slope * 6).toFixed(2)}deg)`;
        boatRef.current.style.width = bw + "px";
      }

      // --- voorzee: doorschijnend water vanaf de waterlijn van de boot, plus voorste rijen ---
      fctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      fctx.clearRect(0, 0, W, H);
      const spanB = (W / 2 / f) * zb * 1.25 + 1;
      fctx.beginPath();
      for (let i = 0; i <= 64; i++) {
        const x = camX - spanB + (2 * spanB * i) / 64;
        const [sx, sy] = proj(x, wave(x, zb, t), zb);
        if (i === 0) fctx.moveTo(sx, sy); else fctx.lineTo(sx, sy);
      }
      fctx.lineTo(W + 60, H + 10); fctx.lineTo(-60, H + 10); fctx.closePath();
      const fg = fctx.createLinearGradient(0, by - 10, 0, H);
      fg.addColorStop(0, "rgba(44,70,98,0.42)"); fg.addColorStop(0.45, "rgba(22,42,66,0.66)"); fg.addColorStop(1, "rgba(8,20,36,0.9)");
      fctx.fillStyle = fg; fctx.fill();
      drawCols(fctx, 1.0, zb, 0.2);
      drawRows(fctx, ZS.filter((z) => z < zb), 0.55);

      // --- lucht, tekst en tweede regel ---
      if (skyRef.current) skyRef.current.style.transform = `translate3d(0, ${(-e * 24).toFixed(1)}px, 0)`;
      if (copyRef.current) {
        copyRef.current.style.transform = `translate3d(0, ${(-e * 46).toFixed(1)}px, 0)`;
        copyRef.current.style.opacity = String(1 - Math.max(0, e - 0.6) * 0.35);
      }
      if (beatRef.current) {
        const b = reduce ? 1 : Math.min(1, Math.max(0, (p - 0.28) / 0.3));
        beatRef.current.style.opacity = String(b);
        beatRef.current.style.transform = `translate3d(0, ${((1 - b) * 18).toFixed(1)}px, 0)`;
      }
      if (!reduce && visible) raf = requestAnimationFrame(frame);
    }

    size();
    const ro = new ResizeObserver(() => { size(); if (reduce && d.H) frame(performance.now()); });
    ro.observe(back.parentElement!);
    const io = new IntersectionObserver(([en]) => {
      const was = visible; visible = en.isIntersecting;
      if (visible && !was && !reduce) raf = requestAnimationFrame(frame);
    });
    io.observe(sec);
    const onVis = () => { if (document.hidden) cancelAnimationFrame(raf); else if (visible && !reduce) raf = requestAnimationFrame(frame); };
    document.addEventListener("visibilitychange", onVis);
    raf = requestAnimationFrame(frame);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); document.removeEventListener("visibilitychange", onVis); };
  }, []);

  return (
    <section ref={secRef} id="oppervlakte" className="hero g-sky" data-sc-act="pin" data-sc-span="1.6" data-layer="top" aria-labelledby="hero-title">
      <div data-sc-stage className="hero__stage">
        <div ref={skyRef} className="hero__sky" aria-hidden="true" />
        <canvas ref={backRef} className="hero__sea" aria-hidden="true" />
        <div ref={boatRef} className="hero__boat" aria-hidden="true"><Boat /></div>
        <canvas ref={frontRef} className="hero__sea hero__sea--front" aria-hidden="true" />

        <div ref={copyRef} className="hero__copy">
          <h1 id="hero-title" className="hero__title">{c.hero.h1a}</h1>
          <p className="hero__sub">{c.hero.sub}</p>
          <div className="hero__actions">
            <a className="btn btn--accent" href="#contact">{c.cta}</a>
            <a className="hero__call" href={CONTACT.tel}>{c.hero.orCall} <span className="nums">{CONTACT.phoneDisplay}</span></a>
          </div>
        </div>

        <div ref={beatRef} className="hero__beat">
          <p className="hero__beat-label">{c.hero.belowLabel}</p>
          <p className="hero__beat-line">{c.hero.h1b}</p>
          <p className="hero__beat-sub">{c.hero.below}</p>
        </div>
      </div>
    </section>
  );
}

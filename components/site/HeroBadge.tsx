"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/lib/context/LanguageContext";
import { CONTACT } from "@/lib/copy";

/*
  Hero: het chromen logo als object in een donkere ruimte.
  Lagen: zeshoek-raster (ver) -> lichtbron (midden) -> badge (onderwerp, kantelt) -> chromen ring (voor) -> vloer met reflectie.
  Scrollen (gepinde stage): de badge draait een kwartslag bij, er glijdt een lichtstreep over het metaal
  en de twee diensten verschijnen eronder. De muis kantelt de badge licht mee (alleen fijne aanwijzers).
*/
export default function HeroBadge() {
  const { c } = useLanguage();
  const sec = useRef<HTMLElement>(null);
  const scene = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const s = sec.current!, el = scene.current!.parentElement!;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
    let raf = 0, mx = 0, my = 0, tx = 0, ty = 0, alive = true, visible = true;

    const onMove = (e: PointerEvent) => { mx = (e.clientX / innerWidth - 0.5) * 2; my = (e.clientY / innerHeight - 0.5) * 2; };
    if (fine && !reduce) window.addEventListener("pointermove", onMove, { passive: true });

    function tick() {
      if (!alive) return;
      const r = s.getBoundingClientRect();
      const travel = Math.max(1, r.height - innerHeight);
      const p = reduce ? 0 : Math.min(1, Math.max(0, -r.top / travel));
      tx += (mx - tx) * 0.08; ty += (my - ty) * 0.08;
      el.style.setProperty("--p", p.toFixed(4));
      el.style.setProperty("--mx", tx.toFixed(4));
      el.style.setProperty("--my", ty.toFixed(4));
      if (visible) raf = requestAnimationFrame(tick);
    }
    const io = new IntersectionObserver(([e]) => { const was = visible; visible = e.isIntersecting; if (visible && !was) raf = requestAnimationFrame(tick); });
    io.observe(s);
    raf = requestAnimationFrame(tick);
    return () => { alive = false; cancelAnimationFrame(raf); io.disconnect(); window.removeEventListener("pointermove", onMove); };
  }, []);

  return (
    <section ref={sec} id="top" className="hero" data-sc-act="pin" data-sc-span="1.5" aria-labelledby="hero-title">
      <div data-sc-stage className="hero__stage">
        <div ref={scene} className="hero__scene" aria-hidden="true">
          <div className="hero__grid" />
          <div className="hero__light" />
          <div className="hero__floor" />
          <div className="hero__obj">
            <div className="hero__badge">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/badge-v2.png" width="600" height="686" alt="" />
              <span className="hero__sheen" />
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="hero__reflect" src="/badge-v2.png" width="600" height="686" alt="" />
          </div>
          <svg className="hero__ring" viewBox="0 0 200 230"><polygon points="100,4 196,59 196,171 100,226 4,171 4,59" /></svg>
        </div>

        <div className="hero__copy">
          <h1 id="hero-title" className="hero__title">{c.hero.h1}</h1>
          <p className="hero__sub">{c.hero.sub}</p>
          <div className="hero__actions">
            <a className="btn btn--chrome" href="#contact">{c.cta}</a>
            <a className="hero__call" href={CONTACT.tel}>{c.hero.orCall} <span className="nums">{CONTACT.phoneDisplay}</span></a>
          </div>
        </div>

        <ul className="hero__tags" aria-label={c.hero.tags.join(", ")}>
          {c.hero.tags.map((t) => <li key={t}>{t}</li>)}
        </ul>
      </div>
    </section>
  );
}

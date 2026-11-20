"use client";

import { useRef } from "react";
import SiteNav from "@/components/site/SiteNav";
import HeroSea from "@/components/site/HeroSea";
import Waterline from "@/components/site/Waterline";
import Anchor from "@/components/site/Anchor";
import { useLanguage } from "@/lib/context/LanguageContext";
import { useScrollCraft } from "@/lib/useScrollCraft";
import { CONTACT } from "@/lib/copy";

// Grammar "Diepgang": de pagina is een peiling, van oppervlakte tot bodem. Elke laag een vaste ondergrond.
export default function Home() {
  const { c } = useLanguage();
  const root = useRef<HTMLElement>(null);
  useScrollCraft(root);

  return (
    <>
      <SiteNav />
      <main ref={root} id="top">
        <HeroSea />

        {/* BOVEN WATER: websites */}
        <section id="boven-water" className="above g-above" data-sc-act="flow" data-layer="above" aria-labelledby="above-title">
          <div className="sc-wrap above__grid">
            <div className="above__intro sc-stack" data-sc-in>
              <h2 id="above-title" className="h-lg">{c.above.title}</h2>
              <p className="lede">{c.above.lede}</p>
              <p className="above__promise">{c.above.promise}</p>
            </div>
            <ol className="ledger" data-sc-in data-sc-stagger="70">
              {c.above.items.map(([h, p], i) => (
                <li key={i}>
                  <span className="ledger__n" aria-hidden="true" />
                  <h3 className="ledger__h">{h}</h3>
                  <p className="ledger__p">{p}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* bewuste stilte voor de piek */}
        <div className="hush g-hush" aria-hidden="false">
          <svg className="hush__wave" viewBox="0 0 1200 24" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 12 Q 50 0 100 12 T 200 12 T 300 12 T 400 12 T 500 12 T 600 12 T 700 12 T 800 12 T 900 12 T 1000 12 T 1100 12 T 1200 12" />
          </svg>
          <p className="hush__line" data-sc-in>{c.hush}</p>
        </div>

        <Waterline />

        {/* ONDER WATER: automatisering */}
        <section id="onder-water" className="below g-below" data-sc-act="flow" data-layer="below" aria-labelledby="below-title">
          <div className="below__keel" data-sc-parallax="-1.2" aria-hidden="true" />
          <div className="sc-wrap below__grid">
            <div className="below__intro sc-stack" data-sc-in>
              <h2 id="below-title" className="h-lg">{c.below.title}</h2>
              <p className="lede">{c.below.lede}</p>
            </div>
            <ul className="gauges">
              {c.below.items.map((it, i) => (
                <li key={i} className={`instr instr--${it.st}`}>
                  <div className="instr__in" data-sc-reveal="right" data-sc-reveal-at={`${(0.08 + i * 0.07).toFixed(2)} ${(0.3 + i * 0.07).toFixed(2)}`}>
                    <span className="instr__mark" aria-hidden="true" />
                    <div className="instr__body">
                      <div className="instr__top">
                        <h3 className="instr__name">{it.name}</h3>
                        <span className="instr__st">{c.below.status[it.st as "live" | "dev" | "custom"]}</span>
                      </div>
                      <p className="instr__what">{it.what}</p>
                      {"href" in it && it.href === "law" && (
                        <a className="instr__link" href={CONTACT.law} target="_blank" rel="noopener">{c.below.open} <span aria-hidden="true">↗</span></a>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* WERKWIJZE */}
        <section id="werkwijze" className="how g-how" data-sc-act="flow" data-layer="how" aria-labelledby="how-title">
          <div className="sc-wrap">
            <h2 id="how-title" className="h-md" data-sc-in>{c.how.title}</h2>
            <ol className="steps" data-sc-in data-sc-stagger="80">
              {c.how.steps.map(([h, p], i) => (
                <li key={i}>
                  <span className="steps__n nums">{i + 1}</span>
                  <h3 className="steps__h">{h}</h3>
                  <p className="steps__p">{p}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <Anchor />
      </main>
    </>
  );
}

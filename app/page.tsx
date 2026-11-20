"use client";

import { useRef } from "react";
import SiteNav from "@/components/site/SiteNav";
import HeroBadge from "@/components/site/HeroBadge";
import TimeMeter from "@/components/site/TimeMeter";
import Contact from "@/components/site/Contact";
import { useLanguage } from "@/lib/context/LanguageContext";
import { useScrollCraft } from "@/lib/useScrollCraft";
import { CONTACT } from "@/lib/copy";

export default function Home() {
  const { c } = useLanguage();
  const root = useRef<HTMLElement>(null);
  useScrollCraft(root);
  const P = c.pillars;

  return (
    <>
      <SiteNav />
      <main ref={root}>
        <HeroBadge />

        {/* Twee poten, naast elkaar */}
        <section className="pillars" data-sc-act="flow" aria-label={`${P.web.title}, ${P.ai.title}`}>
          <div className="sc-wrap pillars__grid" data-sc-in data-sc-stagger="90">
            {[["websites", P.web], ["ai", P.ai]].map(([id, p]) => {
              const x = p as typeof P.web;
              return (
                <a key={id as string} href={`#${id}`} className="pillar">
                  <span className="pillar__edge" aria-hidden="true" />
                  <h2 className="pillar__title">{x.title}</h2>
                  <p className="pillar__text">{x.text}</p>
                  <ul className="pillar__pts">{x.points.map((t) => <li key={t}>{t}</li>)}</ul>
                  <span className="pillar__link">{x.link} <span aria-hidden="true">→</span></span>
                </a>
              );
            })}
          </div>
        </section>

        {/* Websites */}
        <section id="websites" className="web" data-sc-act="flow" aria-labelledby="web-title">
          <div className="sc-wrap web__grid">
            <div className="web__intro sc-stack" data-sc-in>
              <h2 id="web-title" className="h-lg">{c.web.title}</h2>
              <p className="lede">{c.web.lede}</p>
              <p className="web__promise">{c.web.promise}</p>
            </div>
            <ol className="ledger" data-sc-in data-sc-stagger="70">
              {c.web.items.map(([h, p], i) => (
                <li key={i}>
                  <span className="ledger__n" aria-hidden="true" />
                  <h3 className="ledger__h">{h}</h3>
                  <p className="ledger__p">{p}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* AI */}
        <section id="ai" className="ai" data-sc-act="flow" aria-labelledby="ai-title">
          <div className="sc-wrap">
            <div className="ai__head sc-stack" data-sc-in>
              <h2 id="ai-title" className="h-lg">{c.ai.title}</h2>
              <p className="lede">{c.ai.lede}</p>
            </div>
            <ul className="tools">
              {c.ai.items.map((it, i) => (
                <li key={i} className={`tool tool--${it.st}`}>
                  <div className="tool__in" data-sc-reveal="up" data-sc-reveal-at={`${(0.06 + i * 0.05).toFixed(2)} ${(0.26 + i * 0.05).toFixed(2)}`}>
                    <div className="tool__top">
                      <h3 className="tool__name">{it.name}</h3>
                      <span className="tool__st"><i aria-hidden="true" />{c.ai.status[it.st as "live" | "dev" | "custom"]}</span>
                    </div>
                    <p className="tool__what">{it.what}</p>
                    {"href" in it && it.href === "law" && (
                      <a className="tool__link" href={CONTACT.law} target="_blank" rel="noopener">{c.ai.open} <span aria-hidden="true">↗</span></a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <TimeMeter />
          </div>
        </section>

        {/* Werkwijze */}
        <section id="werkwijze" className="how" data-sc-act="flow" aria-labelledby="how-title">
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

        <Contact />
      </main>
    </>
  );
}

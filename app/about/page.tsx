"use client";

import { useRef } from "react";
import SiteNav from "@/components/site/SiteNav";
import Anchor from "@/components/site/Anchor";
import { useLanguage } from "@/lib/context/LanguageContext";
import { useScrollCraft } from "@/lib/useScrollCraft";

export default function AboutPage() {
  const { c } = useLanguage();
  const root = useRef<HTMLElement>(null);
  useScrollCraft(root);
  return (
    <>
      <SiteNav depth={false} />
      <main ref={root}>
        <section className="page g-above" data-sc-act="flow">
          <div className="sc-wrap">
            <div className="page__head" data-sc-in>
              <h1 className="h-lg">{c.about.title}</h1>
              <p className="lede">{c.about.lede}</p>
            </div>
            <div className="page__cols" data-sc-in data-sc-stagger="80">
              {c.about.blocks.map(([h, p]) => (
                <div key={h}><h2>{h}</h2><p>{p}</p></div>
              ))}
            </div>
          </div>
        </section>
        <Anchor standalone />
      </main>
    </>
  );
}

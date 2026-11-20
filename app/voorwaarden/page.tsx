"use client";

import { useRef } from "react";
import SiteNav from "@/components/site/SiteNav";
import Anchor from "@/components/site/Anchor";
import { useLanguage } from "@/lib/context/LanguageContext";
import { useScrollCraft } from "@/lib/useScrollCraft";

export default function TermsPage() {
  const { t } = useLanguage();
  const root = useRef<HTMLElement>(null);
  useScrollCraft(root);
  return (
    <>
      <SiteNav depth={false} />
      <main ref={root}>
        <section className="page g-above" data-sc-act="flow">
          <div className="sc-wrap">
            <div className="page__head">
              <h1 className="h-lg">{t.terms.title}</h1>
              <p className="lede">{t.terms.subtitle}</p>
            </div>
            <div className="terms">
              {t.terms.sections.map((s) => (
                <div key={s.heading}><h2>{s.heading}</h2><p>{s.body}</p></div>
              ))}
            </div>
          </div>
        </section>
        <Anchor standalone />
      </main>
    </>
  );
}

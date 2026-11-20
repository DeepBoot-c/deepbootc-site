"use client";

import { useRef } from "react";
import SiteNav from "@/components/site/SiteNav";
import Contact from "@/components/site/Contact";
import { useScrollCraft } from "@/lib/useScrollCraft";

export default function ContactPage() {
  const root = useRef<HTMLElement>(null);
  useScrollCraft(root);
  return (
    <>
      <SiteNav home={false} />
      <main ref={root}>
        <Contact standalone />
      </main>
    </>
  );
}

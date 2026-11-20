"use client";

import { useRef } from "react";
import SiteNav from "@/components/site/SiteNav";
import Anchor from "@/components/site/Anchor";
import { useScrollCraft } from "@/lib/useScrollCraft";

export default function ContactPage() {
  const root = useRef<HTMLElement>(null);
  useScrollCraft(root);
  return (
    <>
      <SiteNav depth={false} />
      <main ref={root}>
        <Anchor standalone />
      </main>
    </>
  );
}

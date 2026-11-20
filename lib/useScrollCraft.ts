"use client";

import { useEffect, type RefObject } from "react";

type SCInstance = { destroy?: () => void };
type SCGlobal = { mount: (root: Element, opts?: object) => SCInstance; reduce: boolean };

// Laadt de scroll-craft-engine (ongewijzigd, lib/scrollcraft/scrollcraft.js) alleen in de browser
// en mount hem op de gegeven root. Bij navigeren weg wordt hij netjes afgebroken.
export function useScrollCraft(ref: RefObject<HTMLElement | null>, deps: unknown[] = []) {
  useEffect(() => {
    let inst: SCInstance | null = null;
    let cancelled = false;
    (async () => {
      const w = window as unknown as { ScrollCraft?: SCGlobal };
      if (!w.ScrollCraft) await import("./scrollcraft/scrollcraft.js");
      if (cancelled || !ref.current || !w.ScrollCraft) return;
      inst = w.ScrollCraft.mount(ref.current);
    })();
    return () => {
      cancelled = true;
      inst?.destroy?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

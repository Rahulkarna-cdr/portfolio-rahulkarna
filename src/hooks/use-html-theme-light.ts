"use client";

import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  const el = document.documentElement;
  const obs = new MutationObserver(onChange);
  obs.observe(el, { attributes: true, attributeFilter: ["class"] });
  return () => obs.disconnect();
}

/**
 * Matches Tailwind `darkMode: "class"`: light when <html> does not have `.dark`.
 * Uses `useSyncExternalStore` so theme reads stay in sync with direct class changes.
 */
function getIsDarkFromDom(): boolean {
  return document.documentElement.classList.contains("dark");
}

export function useHtmlThemeLight(): boolean {
  const isDark = useSyncExternalStore(
    subscribe,
    getIsDarkFromDom,
    /** SSR: no `.dark` on <html> in the RSC payload — default surfaces to light */
    () => false,
  );
  return !isDark;
}

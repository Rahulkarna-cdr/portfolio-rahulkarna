"use client";

import Lenis from "lenis";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type ThemeMode = "light" | "dark";

type ThemeContextValue = {
  resolvedTheme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

/** scroll-margin-top on sections is `scroll-mt-24` (6rem) — match for programmatic scroll */
const SECTION_SCROLL_OFFSET = -96;

type LenisScrollContextValue = {
  scrollToSection: (sectionId: string) => void;
};

const LenisScrollContext = createContext<LenisScrollContextValue | null>(null);

function getSystemTheme(): ThemeMode {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: ThemeMode) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.style.colorScheme = theme;
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [resolvedTheme, setResolvedTheme] = useState<ThemeMode>("dark");
  const lenisRef = useRef<Lenis | null>(null);

  const setTheme = useCallback((theme: ThemeMode) => {
    setResolvedTheme(theme);
    applyTheme(theme);
    window.localStorage.setItem("theme", theme);
  }, []);

  useEffect(() => {
    // Always start from top on hard reload/initial load.
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    const stored = window.localStorage.getItem("theme");
    const initialTheme = stored === "light" || stored === "dark" ? stored : getSystemTheme();
    setResolvedTheme(initialTheme);
    applyTheme(initialTheme);

    if (!stored) {
      const media = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => {
        const systemTheme = getSystemTheme();
        setResolvedTheme(systemTheme);
        applyTheme(systemTheme);
      };
      media.addEventListener("change", handleChange);
      return () => media.removeEventListener("change", handleChange);
    }
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (sectionId === "top") {
      if (lenisRef.current && !reduced) {
        lenisRef.current.scrollTo(0);
      } else {
        window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
      }
      return;
    }

    const el = document.getElementById(sectionId);
    if (!el) return;

    if (lenisRef.current && !reduced) {
      lenisRef.current.scrollTo(el, { offset: SECTION_SCROLL_OFFSET });
    } else {
      const top = el.getBoundingClientRect().top + window.scrollY + SECTION_SCROLL_OFFSET;
      window.scrollTo({ top, behavior: reduced ? "auto" : "smooth" });
    }
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      lenisRef.current = null;
      return;
    }

    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.15,
    });

    lenisRef.current = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };

    rafId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(rafId);
      lenisRef.current = null;
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash || hash === "#") return;

    const id = decodeURIComponent(hash.slice(1));
    if (!id) return;

    const run = () => {
      scrollToSection(id);
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    };

    const t = window.setTimeout(run, 50);
    return () => window.clearTimeout(t);
  }, [scrollToSection]);

  const value = useMemo(
    () => ({
      resolvedTheme,
      setTheme,
    }),
    [resolvedTheme, setTheme]
  );

  const scrollValue = useMemo(() => ({ scrollToSection }), [scrollToSection]);

  return (
    <ThemeContext.Provider value={value}>
      <LenisScrollContext.Provider value={scrollValue}>{children}</LenisScrollContext.Provider>
    </ThemeContext.Provider>
  );
}

export function useAppTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useAppTheme must be used within <Providers>");
  }
  return ctx;
}

export function useLenisScroll() {
  const ctx = useContext(LenisScrollContext);
  if (!ctx) {
    throw new Error("useLenisScroll must be used within <Providers>");
  }
  return ctx;
}

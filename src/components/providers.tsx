"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type ThemeMode = "light" | "dark";

type ThemeContextValue = {
  resolvedTheme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

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

  const value = useMemo(
    () => ({
      resolvedTheme,
      setTheme,
    }),
    [resolvedTheme, setTheme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
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

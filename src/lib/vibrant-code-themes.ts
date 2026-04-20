import type { PrismTheme } from "prism-react-renderer";

/** High-contrast, saturated syntax colors (dark UI) */
export const vibrantDark: PrismTheme = {
  plain: {
    color: "#e8f1ff",
    backgroundColor: "#0c1020",
  },
  styles: [
    {
      types: ["prolog"],
      style: { color: "#818cf8" },
    },
    {
      types: ["comment"],
      style: { color: "#5ee9b5", fontStyle: "italic", opacity: 0.92 },
    },
    {
      types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
      style: { color: "#22d3ee", fontWeight: "600" },
    },
    {
      types: ["number", "inserted"],
      style: { color: "#4ade80", fontWeight: "500" },
    },
    {
      types: ["constant"],
      style: { color: "#c4b5fd" },
    },
    {
      types: ["attr-name", "variable", "property"],
      style: { color: "#7dd3fc" },
    },
    {
      types: ["deleted", "string", "attr-value", "template-punctuation"],
      style: { color: "#fcd34d" },
    },
    {
      types: ["selector"],
      style: { color: "#fbbf24" },
    },
    {
      types: ["tag"],
      style: { color: "#34d399" },
    },
    {
      types: ["tag"],
      languages: ["markup"],
      style: { color: "#38bdf8" },
    },
    {
      types: ["punctuation", "operator"],
      style: { color: "#c7d2fe" },
    },
    {
      types: ["punctuation"],
      languages: ["markup"],
      style: { color: "#a5b4fc" },
    },
    {
      types: ["function"],
      style: { color: "#f472b6" },
    },
    {
      types: ["class-name"],
      style: { color: "#a78bfa" },
    },
    {
      types: ["char"],
      style: { color: "#fb7185" },
    },
  ],
};

/** Vivid readable colors on light background */
export const vibrantLight: PrismTheme = {
  plain: {
    color: "#0f172a",
    backgroundColor: "#ffffff",
  },
  styles: [
    {
      types: ["prolog"],
      style: { color: "#4f46e5" },
    },
    {
      types: ["comment"],
      style: { color: "#059669", fontStyle: "italic" },
    },
    {
      types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
      style: { color: "#0284c7", fontWeight: "600" },
    },
    {
      types: ["number", "inserted"],
      style: { color: "#16a34a", fontWeight: "600" },
    },
    {
      types: ["constant"],
      style: { color: "#7c3aed" },
    },
    {
      types: ["attr-name", "variable", "property"],
      style: { color: "#0369a1", fontWeight: "600" },
    },
    {
      types: ["deleted", "string", "attr-value", "template-punctuation"],
      style: { color: "#ea580c", fontWeight: "500" },
    },
    {
      types: ["selector"],
      style: { color: "#ca8a04" },
    },
    {
      types: ["tag"],
      style: { color: "#15803d" },
    },
    {
      types: ["tag"],
      languages: ["markup"],
      style: { color: "#2563eb" },
    },
    {
      types: ["punctuation", "operator"],
      style: { color: "#4338ca" },
    },
    {
      types: ["punctuation"],
      languages: ["markup"],
      style: { color: "#6366f1" },
    },
    {
      types: ["function"],
      style: { color: "#db2777" },
    },
    {
      types: ["class-name"],
      style: { color: "#7c3aed" },
    },
    {
      types: ["char"],
      style: { color: "#dc2626" },
    },
  ],
};

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "var(--surface)",
          muted: "var(--surface-muted)",
        },
        ink: {
          DEFAULT: "var(--ink)",
          muted: "var(--ink-muted)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          soft: "var(--accent-soft)",
          glow: "var(--accent-glow)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px -12px var(--accent-glow)",
        card: "0 25px 50px -12px rgb(0 0 0 / 0.35)",
        "card-light": "0 25px 50px -12px rgb(15 23 42 / 0.12)",
      },
      backgroundImage: {
        "grid-dark":
          "linear-gradient(to right, rgb(30 58 138 / 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgb(30 58 138 / 0.08) 1px, transparent 1px)",
        "grid-light":
          "linear-gradient(to right, rgb(37 99 235 / 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgb(37 99 235 / 0.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;

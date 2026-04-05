import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: "rgb(var(--color-canvas) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        "surface-strong": "rgb(var(--color-surface-strong) / <alpha-value>)",
        text: "rgb(var(--color-text) / <alpha-value>)",
        "text-soft": "rgb(var(--color-text-soft) / <alpha-value>)",
        "text-muted": "rgb(var(--color-text-muted) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        violet: "rgb(var(--color-violet) / <alpha-value>)"
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "sans-serif"],
        body: ["var(--font-body)", "ui-sans-serif", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgb(var(--color-accent) / 0.3), 0 22px 80px -30px rgb(var(--color-accent) / 0.45)",
        card: "0 22px 70px -35px rgb(0 0 0 / 0.75)"
      }
    }
  },
  plugins: []
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#080808",
        surface: "#111111",
        card: "#171717",
        ivory: "#F5F3EF",
        muted: "#929292",
        gold: {
          DEFAULT: "#D4AF72",
          light: "#E5C896",
          dim: "rgba(212, 175, 114, 0.14)",
        },
        hairline: "#292929",
        cellix: {
          red: "#FF304F",
          redDim: "rgba(255, 48, 79, 0.14)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        editorial: "-0.025em",
         architectural: "0.16em",
      },
      backgroundImage: {
        "subtle-grid":
          "linear-gradient(to right, rgba(41, 41, 41, 0.32) 1px, transparent 1px), linear-gradient(to bottom, rgba(41, 41, 41, 0.32) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;

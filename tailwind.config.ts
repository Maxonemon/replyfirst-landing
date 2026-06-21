import type { Config } from "tailwindcss";

/**
 * ReplyFirst brand tokens only — the default Tailwind palette is
 * intentionally removed so off-brand colors can't slip in.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      ink: "#0F0E0C",
      orange: "#E85C2B",
      gold: "#C9A84C",
      paper: "#F5F0E8",
      muted: "#7A7060",
    },
    fontFamily: {
      bebas: ["var(--font-bebas)", "sans-serif"],
      grotesk: ["var(--font-grotesk)", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};

export default config;

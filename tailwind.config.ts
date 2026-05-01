import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        black: {
          DEFAULT: "#0A0A0A",
          dark: "#1A1A1A",
        },
        gray: {
          medium: "#2D2D2D",
          light: "#E5E5E5",
          muted: "#64748B",
          cool: "#94A3B8",
        },
        white: {
          DEFAULT: "#FFFFFF",
          off: "#FAFAFA",
        },
      },
    },
  },
  plugins: [],
};

export default config;

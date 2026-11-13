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
          dark: "#000000",
        },
        gray: {
          medium: "#2A2A2A",
          light: "#E6E6E6",
          muted: "#5C5C5C",
          cool: "#8A8A8A",
        },
        white: {
          DEFAULT: "#FFFFFF",
          off: "#FFFFFF",
        },
        accent: "#E11D2E",
      },
    },
  },
  plugins: [],
};

export default config;

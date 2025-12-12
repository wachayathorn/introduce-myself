import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
        code: ["Cascadia Code", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;

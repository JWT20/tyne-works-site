import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f3efe6",
        ink: "#0b1d2a",
        navy: {
          800: "#0b1d2a",
        },
        accent: "#2f6fed",
        muted: "#5b6473",
        rule: "#d9d3c5",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        label: "0.14em",
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};

export default config;

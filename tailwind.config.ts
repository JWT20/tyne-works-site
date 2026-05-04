import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b1530",
        brand: {
          50: "#eef6f1",
          100: "#d7e8dd",
          200: "#abcdbc",
          500: "#357a55",
          600: "#276443",
          700: "#1f5137",
          800: "#173f2b",
          900: "#0f2b1d",
        },
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      maxWidth: {
        prose: "68ch",
      },
      borderRadius: {
        "2xl": "0.75rem",
      },
    },
  },
  plugins: [],
};

export default config;

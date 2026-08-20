import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1736",
          light: "#132049",
          dark: "#070F26",
        },
        royal: {
          DEFAULT: "#2563EB",
          light: "#3B82F6",
          dark: "#1D4ED8",
        },
        offwhite: "#F8FAFC",
        graylight: "#F1F5F9",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 24px rgba(11, 23, 54, 0.08)",
        cardHover: "0 12px 32px rgba(11, 23, 54, 0.14)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(37,99,235,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;

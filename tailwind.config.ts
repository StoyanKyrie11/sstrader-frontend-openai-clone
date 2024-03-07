import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        logoColor: "hsl(var(--logo-color))",
        borderWhite: "hsl(var(--border-white-color))",
        lightGray: "hsl(var(--text-gray-color))",
      },
      screens: {
        xxs: "280px",
        xs: "320px",
        xsm: "540px",
        mdUp: "900px",
        xl: "1200px",
        l: "1160px",
        "2xl": "1400px",
        "3xl": "1500px",
      },
      spacing: {
        size3Xl: "5rem",
        size2Xl: "3rem",
        sizeXl: "2rem",
        sizeLg: "1.5rem",
        sizeMd: "1rem",
        sizeSm: "0.75rem",
        sizeXsm: "0.5rem",
        size2Xsm: "0.25rem",
      },
      fontFamily: {
        sourceSansProFont: "var(--font-sourceSansPro)",
      },
      fontSize: {
        "heading-1": "2.25rem",
        "heading-2": "2.625rem",
        "heading-3": "3rem",
        "heading-4": "3.438rem",
        "4xl": "3rem",
        "5xl": "4rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography")({
      className: "blog",
    }),
  ],
} satisfies Config;

export default config;

import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      maxWidth: {
        "8xl": "1400px",
      },
      colors: {
        background: "hsl(var(--background))",
        "list-item": "hsl(var(--list-item))",
        title: "hsl(var(--title))",
        paragraphy: "hsl(var(--paragraphy))",
        highlight: "hsl(var(--highlight))",
        "blue-sky": "hsl(var(--blue-sky))",
        date: "hsl(var(--date))",
        stronger: "hsl(var(--stronger))",
        border: "hsl(var(--border))",
      },
      fontSize: {
        default: "12.775px",
        sd: "14px",
        sl: "15px",
        "4xl": "2.25rem",
        "3xl": "1.875rem",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

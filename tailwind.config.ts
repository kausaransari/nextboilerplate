import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px"
        }
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primarycolor: "var(--primarycolor)",
        headingcolor: "var(--headingcolor)",
        textcolor: "var(--textcolor)"
      }
    }
  },
  plugins: [require("tailwindcss"), require("autoprefixer")]
} satisfies Config;

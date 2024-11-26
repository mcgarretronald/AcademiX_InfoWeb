import type { Config } from "tailwindcss";
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#072631",
        buttonbg:"#1879BE",
      },
      fontFamily: {
        jua: ["var(--font-jua)", "sans-serif"],
        mako: ["var(--font-mako)", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./data/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        love: {
          red: "#e5094f",
          pink: "#ff4d88",
          dark: "#08030a",
          soft: "#ff8fab"
        }
      },
      boxShadow: {
        glow: "0 0 35px rgba(229,9,79,0.45)"
      }
    }
  },
  plugins: []
};
export default config;

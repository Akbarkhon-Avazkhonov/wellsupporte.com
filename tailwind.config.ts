import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-outfit)", "sans-serif"],
      },
      colors: {
        orchid: "#D4A5FF",
        peach: "#FF9E7D",
        teal: "#2EECC7",
        cloud: "#F4F7FF",
        deep: "#1a1a2e",
      },
    },
  },
  plugins: [],
}

export default config

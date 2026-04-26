import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd",
          400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8",
          800: "#1e40af", 900: "#1e3a8a",
        },
        navy: "#0f172a",
        offwhite: "#f7f9fc",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        dm: ["var(--font-dm)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease both",
        pulse: "pulse 2s ease infinite",
        floatA: "floatA 8s ease-in-out infinite",
        floatB: "floatB 10s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: { "from": { opacity: "0", transform: "translateY(24px)" }, "to": { opacity: "1", transform: "translateY(0)" } },
        pulse: { "0%,100%": { opacity: "1", transform: "scale(1)" }, "50%": { opacity: "0.6", transform: "scale(1.3)" } },
        floatA: { "0%,100%": { transform: "translate(0,0)" }, "50%": { transform: "translate(-20px,20px)" } },
        floatB: { "0%,100%": { transform: "translate(0,0)" }, "50%": { transform: "translate(15px,-15px)" } },
      },
    },
  },
  plugins: [],
};
export default config;
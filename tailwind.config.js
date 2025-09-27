import { defineConfig } from "tailwindcss";
import animate from "tailwindcss-animate";

export default defineConfig({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Main brand colors
        brandcolor: {
          DEFAULT: "#0096c8",
          foreground: "#ffffff", // text color when bg-primary
        },
        primary: {
          DEFAULT: "#0ea5e9",
          foreground: "#ffffff", // text color when bg-primary
        },
        secondary: {
          DEFAULT: "#F5F7FF",
          foreground: "#101727", // dark text on light bg
        },
        destructive: {
          DEFAULT: "#ef4444", // Tailwind red-500
          foreground: "#ffffff",
        },
        blackish: "#101727",
        foreground: "#101727", // fallback text color
        background: "#ffffff", // fallback background
        ring: "#0ea5e9", // for focus rings
      },
    },
  },
  plugins: [animate],
});

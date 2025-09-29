import { defineConfig } from "tailwindcss";
import animate from "tailwindcss-animate";

export default defineConfig({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandcolor: {
          DEFAULT: "#0096c8",
          foreground: "#ffffff",
        },
        primary: {
          DEFAULT: "#0ea5e9",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#F5F7FF",
          foreground: "#101727",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
        blackish: "#101727",
        foreground: "#101727",
        background: "#ffffff",
        ring: "#0ea5e9",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          lg: "2rem",
          xl: "3rem",
        },
        screens: {
          sm: "100%",    // full width on small
          md: "640px",   // controlled from here
          lg: "1024px",
          xl: "1280px",
          "2xl": "1440px",
        },
      },
    },
  },
  plugins: [animate],
});


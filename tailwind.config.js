import { defineConfig } from "tailwindcss";
import animate from "tailwindcss-animate";

export default defineConfig({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extends: {
      color: {
        blackish: "#101727",
      },
    },
  },
  plugins: [animate],
});

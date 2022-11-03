/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(16, minmax(0, 1fr))",

        // Complex site-specific column configuration
        blogposts: "30% 1fr",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#A4DFDD",
          "primary-content": "#27272A",
          secondary: "#F1E7DD",
          "secondary-content": "#3b2e23",
          neutral: "#ffffff",
          "neutral-content": "#0f172a",
          "base-100": "#ffffff",
          "base-200": "#F8FAFC",
          "base-300": "#e5e5e5",
          "base-content": "#334155",
        },
      },
      "dark",
    ],
  },
};

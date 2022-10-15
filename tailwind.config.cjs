/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
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
          "neutral-content": "#515158",
          "base-100": "#ffffff",
          "base-200": "#f2f2f2",
          "base-300": "#e5e6e6",
          "base-content": "#27272A",
        },
      },
      "dark",
    ],
  },
};

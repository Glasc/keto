import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sanity from "astro-sanity";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: "https://keto-six.vercel.app",
  integrations: [
    react(),
    tailwind(),
    sanity({
      projectId: "45fs2a0y",
      dataset: "production",
      apiVersion: "2021-03-25",
      useCdn: import.meta.env.useCdn || false,
    }),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    robotsTxt(),

  ],
});

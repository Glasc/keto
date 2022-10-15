import { defineConfig } from "astro/config";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import image from "@astrojs/image";
import sanity from "astro-sanity";

// https://astro.build/config

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    image(),
    tailwind(),
    sanity({
      projectId: "45fs2a0y",
      dataset: "production",
      apiVersion: "2021-03-25",
      useCdn: true,
    }),
  ],
});

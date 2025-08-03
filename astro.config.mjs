// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

export const DEFAULT_LOCALE = "en";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["en", "ko"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});

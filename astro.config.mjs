// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from "./src/constants";

// https://astro.build/config
export default defineConfig({
  site: "https://toolbox.tinyrack.net",
  output: "static",

  i18n: {
    locales: Object.values(SUPPORTED_LANGUAGES).map((lang) => lang.CODE),
    defaultLocale: DEFAULT_LANGUAGE.CODE,
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },

  integrations: [
    react(),
    sitemap({
      i18n: {
        locales: Object.values(SUPPORTED_LANGUAGES).reduce((acc, language) => {
          acc[language.CODE] = language.LOCALE;
          return acc;
        }, {}),
        defaultLocale: DEFAULT_LANGUAGE.CODE,
        prefixDefaultLocale: true,
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});

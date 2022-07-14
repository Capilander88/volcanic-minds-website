import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["normalize.css/normalize.css", "basscss/css/basscss.min.css"],
  app: {
    head: {
      htmlAttrs: {
        lang: "it",
      },
      meta: [
        {
          name: "viewport",
          content:
            "height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0",
        },
      ],
    },
  },
});

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
// eslint-disable-next-line no-restricted-syntax
export default defineConfig({
  site: "https://bojanstipic.com",
  integrations: [tailwind(), sitemap(), mdx(), icon()],
  markdown: {
    shikiConfig: {
      themes: {
        light: "catppuccin-latte",
        dark: "catppuccin-mocha",
      },
      wrap: true,
    },
  },
});

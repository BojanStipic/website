import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
// eslint-disable-next-line no-restricted-syntax
export default defineConfig({
  site: "https://bojanstipic.com",
  integrations: [sitemap(), mdx(), icon()],
  vite: { plugins: [tailwindcss()] },
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

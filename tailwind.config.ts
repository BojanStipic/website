import catppuccinTheme from "@catppuccin/tailwindcss";
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import type { PluginCreator } from "tailwindcss/types/config";

// eslint-disable-next-line no-restricted-syntax
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {},
    },
  },
  plugins: [
    catppuccinTheme({ defaultFlavour: "mocha", prefix: "ctp" }) as {
      handler: PluginCreator;
      config: Partial<Config>;
    },
  ],
} satisfies Config;

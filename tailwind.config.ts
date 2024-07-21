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
      colors: {
        primary: "rgba(var(--ctp-mauve), <alpha-value>)",
        text: "rgba(var(--ctp-text), <alpha-value>)",
        subtext1: "rgba(var(--ctp-subtext1), <alpha-value>)",
        subtext0: "rgba(var(--ctp-subtext0), <alpha-value>)",
        overlay2: "rgba(var(--ctp-overlay2), <alpha-value>)",
        overlay1: "rgba(var(--ctp-overlay1), <alpha-value>)",
        overlay0: "rgba(var(--ctp-overlay0), <alpha-value>)",
        surface2: "rgba(var(--ctp-surface2), <alpha-value>)",
        surface1: "rgba(var(--ctp-surface1), <alpha-value>)",
        surface0: "rgba(var(--ctp-surface0), <alpha-value>)",
        base: "rgba(var(--ctp-base), <alpha-value>)",
        mantle: "rgba(var(--ctp-mantle), <alpha-value>)",
        crust: "rgba(var(--ctp-crust), <alpha-value>)",
      },
    },
  },
  plugins: [
    catppuccinTheme({ prefix: "ctp" }) as {
      handler: PluginCreator;
      config: Partial<Config>;
    },
  ],
} satisfies Config;

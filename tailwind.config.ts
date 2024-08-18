import catppuccinTheme from "@catppuccin/tailwindcss";
import typography from "@tailwindcss/typography";
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
        mono: ["Iosevka", ...defaultTheme.fontFamily.mono],
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
      typography: ({ theme }: { theme: (path: string) => string }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.ctp-text.DEFAULT"),
            "--tw-prose-headings": theme(`colors.ctp-text.DEFAULT`),
            "--tw-prose-lead": theme("colors.ctp-text.DEFAULT"),
            "--tw-prose-bold": theme(`colors.ctp-text.DEFAULT`),
            "--tw-prose-links": theme(`colors.ctp-mauve.DEFAULT`),
            "--tw-prose-counters": theme(`colors.ctp-mauve.DEFAULT`),
            "--tw-prose-bullets": theme(`colors.ctp-mauve.DEFAULT`),
            "--tw-prose-hr": theme(`colors.ctp-mauve.DEFAULT`),
            "--tw-prose-quotes": theme(`colors.ctp-text.DEFAULT`),
            "--tw-prose-quote-borders": theme(`colors.ctp-mauve.DEFAULT`),
            "--tw-prose-captions": theme(`colors.ctp-mauve.DEFAULT`),
            "--tw-prose-code": theme(`colors.ctp-mauve.DEFAULT`),
            "--tw-prose-pre-code": theme(`colors.ctp-mauve.DEFAULT`),
            "--tw-prose-pre-bg": theme(`colors.base.DEFAULT`),
            "--tw-prose-th-borders": theme(`colors.ctp-mauve.DEFAULT`),
            "--tw-prose-td-borders": theme(`colors.ctp-mauve.DEFAULT`),
          },
        },
      }),
    },
  },
  plugins: [
    catppuccinTheme({ prefix: "ctp" }) as {
      handler: PluginCreator;
      config: Partial<Config>;
    },
    typography(),
  ],
} satisfies Config;

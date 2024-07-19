/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type { &
 * import("prettier").Config &
 * import("@ianvs/prettier-plugin-sort-imports").PluginConfig &
 * import('prettier-plugin-tailwindcss').PluginOptions
 * }
 */
// eslint-disable-next-line no-restricted-syntax
export default {
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-astro",
    "prettier-plugin-tailwindcss",
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  importOrder: [
    "<BUILTIN_MODULES>",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/",
    "",
    "^\\.\\./",
    "",
    "^\\./",
  ],
  importOrderTypeScriptVersion: "5.5.3",
};

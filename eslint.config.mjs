import javascript from "@eslint/js";
import prettier from "eslint-config-prettier";
import astro from "eslint-plugin-astro";
import globals from "globals";
import typescript from "typescript-eslint";

// eslint-disable-next-line no-restricted-syntax
export default typescript.config(
  {
    ignores: [
      "dist/",
      "coverage/",
      "eslint.config.mjs",
      ".astro/",
      "src/env.d.ts",
    ],
  },

  javascript.configs.recommended,
  ...typescript.configs.strictTypeChecked,
  ...astro.configs.recommended,
  ...astro.configs["jsx-a11y-recommended"],
  prettier,

  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        project: ["tsconfig.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "no-console": "error",
      "no-restricted-syntax": [
        "error",
        {
          selector: "TSEnumDeclaration",
          message: "Don't declare enums. Use tagged unions instead.",
        },
        {
          selector: "ExportDefaultDeclaration",
          message: "Don't use default exports. Use named exports instead.",
        },
      ],
      "@typescript-eslint/array-type": ["error", { default: "generic" }],
      "@typescript-eslint/consistent-type-assertions": "error",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/prefer-for-of": "error",
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "@typescript-eslint/no-unsafe-return": "off",
    },
  },
);

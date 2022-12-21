import {
  extendTheme,
  theme as defaultTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { mermaidStyles } from "./mermaidStyles";

import "@fontsource/alfa-slab-one";
import "@fontsource/fira-sans/100.css";
import "@fontsource/fira-sans/100-italic.css";
import "@fontsource/fira-sans/200.css";
import "@fontsource/fira-sans/200-italic.css";
import "@fontsource/fira-sans/300.css";
import "@fontsource/fira-sans/300-italic.css";
import "@fontsource/fira-sans/400.css";
import "@fontsource/fira-sans/400-italic.css";
import "@fontsource/fira-sans/500.css";
import "@fontsource/fira-sans/500-italic.css";
import "@fontsource/fira-sans/600.css";
import "@fontsource/fira-sans/600-italic.css";
import "@fontsource/fira-sans/700.css";
import "@fontsource/fira-sans/700-italic.css";
import "@fontsource/fira-sans/800.css";
import "@fontsource/fira-sans/800-italic.css";
import "@fontsource/fira-sans/900.css";
import "@fontsource/fira-sans/900-italic.css";
import "@fontsource/source-code-pro/200.css";
import "@fontsource/source-code-pro/200-italic.css";
import "@fontsource/source-code-pro/300.css";
import "@fontsource/source-code-pro/300-italic.css";
import "@fontsource/source-code-pro/400.css";
import "@fontsource/source-code-pro/400-italic.css";
import "@fontsource/source-code-pro/500.css";
import "@fontsource/source-code-pro/500-italic.css";
import "@fontsource/source-code-pro/600.css";
import "@fontsource/source-code-pro/600-italic.css";
import "@fontsource/source-code-pro/700.css";
import "@fontsource/source-code-pro/700-italic.css";
import "@fontsource/source-code-pro/900.css";
import "@fontsource/source-code-pro/900-italic.css";

const theme = extendTheme(
  {
    config: {
      initialColorMode: "system",
    },
    colors: {
      brand: defaultTheme.colors.red,
    },
    fonts: {
      logo: `"Alfa Slab One", serif`,
      heading: `"Fira Sans", sans-serif`,
      body: `"Fira Sans", sans-serif`,
      mono: `"Source Code Pro", monospace`,
    },
    shadows: {
      outline: "none",
    },
    components: {
      Input: {
        defaultProps: {
          focusBorderColor: "brand.200",
        },
      },
    },
    styles: {
      global: (props: StyleFunctionProps) => ({
        html: {
          scrollBehavior: "smooth",
        },
        body: {
          bg: mode("gray.50", "gray.800")(props),
        },
        ...mermaidStyles(props),
      }),
    },
  },
  withDefaultColorScheme({ colorScheme: "brand" })
);

export default theme;

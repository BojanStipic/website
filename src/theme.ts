import {
  extendTheme,
  theme as defaultTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";

const theme = extendTheme(
  {
    config: {
      initialColorMode: "dark",
    },
    colors: {
      brand: defaultTheme.colors.red,
    },
    fonts: {
      heading: `"Roboto", sans-serif`,
      body: `"Roboto", sans-serif`,
      mono: `monospace`,
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
  },
  withDefaultColorScheme({ colorScheme: "brand" })
);

export default theme;

import { theme as chakraTheme } from "@chakra-ui/core";

const fonts = { ...chakraTheme.fonts, mono: `'Menlo', monospace` };

const breakpoints = ["30em", "48em", "62em", "80em"];

const theme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    brand: {
      dark_blue: "#22306d",
      blue: "#1e5480",
      dark_teal: "#11a0a7",
      teal: "#09d8c4",
    },
    grey_stroke: "#f1f1f1",
    grey_fill: "#fafafa",
    off_white_bg: "#f8fcfe",
    bg_gradient_dark: "#0a2540",
    bg_gradient_light: "#214c6f",
  },
  fonts,
  breakpoints,
  icons: {
    ...chakraTheme.icons,
  },
};

export default theme;

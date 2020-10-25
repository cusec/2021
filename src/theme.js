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
    black: "#0f0e1C",
    off_black: "#2e3440",
    grey_stroke: "#f1f1f1",
    grey_fill: "#fafafa",
    off_white_bg: "#f8fcfe",
  },
  fonts,
  breakpoints,
  icons: {
    ...chakraTheme.icons,
  },
};

export default theme;

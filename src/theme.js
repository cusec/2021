import { theme as chakraTheme } from "@chakra-ui/core";

const fonts = { ...chakraTheme.fonts, mono: `'Menlo', monospace` };

const breakpoints = ["30em", "48em", "62em", "80em"];

const theme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    brand: {
      dark_blue: "#22306D",
      blue: "#1E5480",
      dark_teal: "#11A0A7",
      teal: "#09D8C4",
    },
    black: "#0F0E1C",
    off_black: "#2E3440",
    grey_stroke: "#F1F1F1",
    grey_fill: "#FAFAFA",
    off_white_bg: "#F8FCFE",
  },
  fonts,
  breakpoints,
  icons: {
    ...chakraTheme.icons,
  },
};

export default theme;

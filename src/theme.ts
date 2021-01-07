import { theme as chakraTheme, extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = { ...chakraTheme.fonts, mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
});

const theme = extendTheme({
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    brand: {
      100: "#09d8c4",
      200: "#11a0a7",
      300: "#1e5480",
      400: "#22306d",
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
});

export default theme;

import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { AppProps } from "next/app";

import theme from "../src/theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;

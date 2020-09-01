import { useEffect } from "react";

import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { AppProps } from "next/app";
import Router from "next/router";

import useStore from "../src/store";
import theme from "../src/theme";

function App({ Component, pageProps }: AppProps) {
  const analytics: firebase.analytics.Analytics = useStore(
    (state) => state.analytics
  );
  const initAnalytics: () => Promise<void> = useStore(
    (state) => state.initAnalytics
  );

  useEffect(() => {
    initAnalytics();
  }, []);

  if (analytics) {
    Router.events.on("routeChangeComplete", (url) =>
      analytics.logEvent(`routeChangeComplete: ${url}`)
    );
    Router.events.on("hashChangeComplete", (url) =>
      analytics.logEvent(`hashChangeComplete: ${url}`)
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;

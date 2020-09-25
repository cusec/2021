import { useEffect, ReactElement } from "react";

import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { AppProps } from "next/app";
import Router from "next/router";
import Head from "next/head";

import useStore from "../src/store";
import theme from "../src/theme";

function App({ Component, pageProps }: AppProps): ReactElement {
  const analytics = useStore((state) => state.analytics);
  const initAnalytics = useStore((state) => state.initAnalytics);

  useEffect(() => {
    initAnalytics();
  }, [initAnalytics]);

  if (analytics) {
    Router.events.on("routeChangeComplete", (url) =>
      analytics.logEvent(`routeChangeComplete: ${url}`)
    );
    Router.events.on("hashChangeComplete", (url) =>
      analytics.logEvent(`hashChangeComplete: ${url}`)
    );
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;

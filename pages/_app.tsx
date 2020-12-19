import { useEffect, ReactElement } from "react";

import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";

import useStore from "@/src/store";
import theme from "@/src/theme";

function App({ Component, pageProps }: AppProps): ReactElement {
  const router = useRouter();
  const analytics = useStore((state) => state.analytics);
  const initAnalytics = useStore((state) => state.initAnalytics);
  const setNavOverlayOpen = useStore((state) => state.setNavOverlayOpen);

  useEffect(() => {
    const routeChangeComplete = (url: string) => {
      if (url.indexOf("#") === -1) {
        window.scrollTo(0, 0);
      }

      setNavOverlayOpen(false);

      analytics?.logEvent(`routeChangeComplete: ${url}`);
    };

    const hashChangeComplete = (url: string) => {
      analytics?.logEvent(`hashChangeComplete: ${url}`);
    };

    initAnalytics();

    router.events.on("routeChangeComplete", routeChangeComplete);
    router.events.on("hashChangeComplete", hashChangeComplete);

    return () => {
      router.events.off("routeChangeComplete", routeChangeComplete);
      router.events.off("hashChangeComplete", hashChangeComplete);
    };
  }, [analytics, initAnalytics, setNavOverlayOpen, router.events]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;

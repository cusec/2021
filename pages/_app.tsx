import Router from "next/router";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { AppProps } from "next/app";

import theme from "../src/theme";

import * as firebase from "firebase/app";
import "firebase/analytics";
import React from "react";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

if (typeof window !== "undefined" && !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);

  if (firebaseConfig.measurementId) {
    firebase.analytics.isSupported().then((isSupported) => {
      if (isSupported) {
        const analytics = firebase.analytics();

        Router.events.on("routeChangeComplete", (url) =>
          analytics.logEvent(`routeChangeComplete: ${url}`)
        );
        Router.events.on("hashChangeComplete", (url) =>
          analytics.logEvent(`hashChangeComplete: ${url}`)
        );
      }
    });
  }
}

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;

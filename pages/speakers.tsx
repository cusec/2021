import { ReactElement } from "react";
import Head from "next/head";
import TopArea from "@/components/sections/TopArea";
import { WidthWrapper } from "@/components/core/Layout";

export default function Speakers(): ReactElement {
  return (
    <>
      <Head>
        <title>Speakers - CUSEC 2021</title>
        <meta
          name="description"
          content="Mark your calendars, Canada's favourite conference is back virtually this winter! Join us January 9-10, 2021 for a weekend of amazing speakers, workshops, and more!"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <TopArea />
        <WidthWrapper paddingTop="48px"></WidthWrapper>
      </main>

      <style jsx global>{`
        @font-face {
          font-family: "Metropolis";
          font-weight: bold;
          font-style: normal;
          src: url("fonts/Metropolis-Bold.woff2") format("woff2"),
            url("fonts/Metropolis-Bold.woff") format("woff"),
            url("fonts/Metropolis-Bold.otf") format("otf"),
            url("fonts/Metropolis-Bold.ttf") format("truetype");
        }

        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}

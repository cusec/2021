import { ReactElement } from "react";
import Head from "next/head";

export default function RegisterHackaComm(): ReactElement {
  return (
    <>
      <Head>
        <title>HackaComm: CUSEC 2021 × RBC</title>
        <meta
          name="description"
          content="Register for HackaComm: Hacking climate change through community efforts from December 4, 2020 - January 10, 2021"
        />
      </Head>

      <iframe
        id="typeform-full"
        width="100%"
        height="100%"
        frameBorder="0"
        allow="camera; microphone; autoplay; encrypted-media;"
        src="https://eli030.typeform.com/to/yZyNwg6c?typeform-embed=embed-fullpage"
      ></iframe>

      <script
        type="text/javascript"
        src="https://embed.typeform.com/embed.js"
      ></script>

      <style jsx>{`
        html {
          margin: 0;
          height: 100%;
          overflow: hidden;
        }

        iframe {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
          border: 0;
        }
      `}</style>
    </>
  );
}

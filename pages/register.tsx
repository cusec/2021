import { ReactElement } from "react";
import Head from "next/head";

export default function Register(): ReactElement {
  return (
    <>
      <Head>
        <title>CUSEC 2021 Registration</title>
        <meta
          name="description"
          content="Register for Canada's favourite conference! Join us January 9-10, 2021 for a weekend of amazing speakers, workshops, and more!"
        />
      </Head>

      <iframe
        id="typeform-full"
        width="100%"
        height="100%"
        frameBorder="0"
        allow="camera; microphone; autoplay; encrypted-media;"
        src="https://eli030.typeform.com/to/FFoe9hQ9"
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

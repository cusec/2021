import { ReactElement } from "react";
import Head from "next/head";
import TopArea from "@/components/sections/TopArea";
import { WidthWrapper } from "@/components/core/Layout";
import { BodyPrimary, HeadlinePrimary } from "@/components/core/Text";
import SpeakerCard from "@/components/SpeakerCard";
import { Box, Flex } from "@chakra-ui/react";
import Footer from "@/components/sections/Footer";
import { speakerData } from "@/src/data";

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
        <Box paddingTop="48px" marginBottom="4rem">
          <Box
            textAlign="center"
            paddingTop={["1in", "1.5in", "1.5in", "1.5in", "2in"]}
            paddingBottom={["0.5in", "0.75in", "0.75in", "0.75in", "1in"]}
            backgroundImage="url(/images/headline-shapes-background.svg)"
            backgroundPosition="center 50%"
            backgroundSize={["600px", "700px", "700px", "800px", "1000px"]}
            backgroundRepeat="no-repeat"
            overflow="visible"
          >
            <WidthWrapper>
              <HeadlinePrimary>Our speakers</HeadlinePrimary>
              <BodyPrimary>
                Get to know our fabulous group of speakers.
              </BodyPrimary>
            </WidthWrapper>
          </Box>
          <WidthWrapper>
            <Flex justify="center" flexWrap="wrap">
              {speakerData.map((speaker, index) => (
                <SpeakerCard key={`${index}-${speaker.name}`} {...speaker} />
              ))}
            </Flex>
          </WidthWrapper>
        </Box>
        <Footer />
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

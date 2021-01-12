import { ReactElement } from "react";
import Head from "next/head";
import TopArea from "@/components/sections/TopArea";
import { WidthWrapper } from "@/components/core/Layout";
import { BodyPrimary, HeadlinePrimary } from "@/components/core/Text";
import { Box } from "@chakra-ui/react";
import Footer from "@/components/sections/Footer";
import Masonry from "react-masonry-css";
import { teamData } from "@/src/data";
import TeamMemberCard from "@/components/TeamMemberCard";

export default function Team(): ReactElement {
  return (
    <>
      <Head>
        <title>Team - CUSEC 2021</title>
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
              <HeadlinePrimary>Meet Our Team</HeadlinePrimary>
              <BodyPrimary>
                The wonderful team that made CUSEC 2021 possible
              </BodyPrimary>
            </WidthWrapper>
          </Box>
          <WidthWrapper>
            <Masonry
              breakpointCols={{
                default: 4,
                768: 1,
                1150: 2,
                1440: 3,
              }}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {teamData.map((teamMember, index) => (
                <TeamMemberCard
                  key={`${index}-${teamMember.name}`}
                  {...teamMember}
                />
              ))}
            </Masonry>
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

        .my-masonry-grid {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          width: auto;
        }

        .my-masonry-grid_column {
          padding-left: 15px;
          padding-right: 15px;
          background-clip: padding-box;
        }

        .my-masonry-grid_column > div {
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 30px;
        }
      `}</style>
    </>
  );
}

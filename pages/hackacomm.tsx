import { ReactElement, useEffect, useState } from "react";
import Head from "next/head";
import { Flex, Image } from "@chakra-ui/core";
import Socials from "@/components/Socials";
import useScreenWidth from "@/components/hooks/useScreenWidth";
import useStore from "@/src/store";
import {
  Body,
  BodyPrimary,
  Headline,
  HeadlinePrimary,
} from "@/components/core/Text";
import { WidthWrapper } from "@/components/core/Layout";
import TopBar from "@/components/TopBar";
import styled from "@emotion/styled";

const minHeights = [550, 650, 700, 800];

const Title = styled(Body)`
  font-weight: 900;
  line-height: 1;
  margin-bottom: 4px;
`;

export default function HackaComm(): ReactElement {
  const [heightProp, setHeightProp] = useState(
    minHeights.map((minHeight) => `max(100vh, ${minHeight}px)`)
  );
  const actualWidth = useScreenWidth();
  const [currentWidth, setCurrentWidth] = useState(0);
  const setNavOverlayOpen = useStore((state) => state.setNavOverlayOpen);

  useEffect(() => {
    const updateHeight = () => {
      setCurrentWidth(actualWidth);
      setHeightProp(
        minHeights.map(
          (minHeight) => `${Math.max(window.innerHeight, minHeight)}px`
        )
      );
    };

    if (currentWidth === 0 || currentWidth !== actualWidth) {
      updateHeight();
      setNavOverlayOpen(false);
    }
  }, [actualWidth, currentWidth, setNavOverlayOpen]);

  return (
    <div>
      <Head>
        <title>CUSEC 2021 - HackaComm</title>
      </Head>
      <Flex height={heightProp} width="100%" backgroundColor="off_white_bg">
        <TopBar />
        <WidthWrapper>
          <>
            <Flex
              justifyContent={"center"}
              alignItems="center"
              marginBottom={"0.5in"}
            >
              <Image
                src="/images/rbc-world-giving-banner.png"
                maxWidth="750px"
                userSelect="none"
                marginTop="0.5in"
              />
            </Flex>
            <Flex
              justifyContent={["center", "center", "center", "space-between"]}
              alignItems="center"
              width="100%"
              marginBottom={["0.5in", "0.5in"]}
            >
              <Flex
                flexDirection="column"
                textAlign={["center", "center", "center", "left"]}
              >
                <Flex
                  direction={["column", "column", "row"]}
                  marginBottom="16px"
                  marginTop={["16px", "16px", "16px", 0]}
                >
                  <Title fontSize={["4xl", "5xl"]}>CUSEC 2021</Title>
                  <Title
                    fontSize={["4xl", "5xl"]}
                    marginTop={["-4px", "-4px", "-2px"]}
                  >
                    &nbsp;×&nbsp;
                  </Title>
                  <Title fontSize={["4xl", "5xl"]}>RBC</Title>
                </Flex>
                <Headline fontSize={["xl", "2xl"]} marginBottom="12px">
                  Hack with us! ~ December 4th until January 8th ~
                </Headline>
                <Headline fontSize={["l", "xl"]} marginBottom="12px">
                  Top three teams to present during CUESEC
                </Headline>
              </Flex>
            </Flex>
            {/* Theme */}
            <HeadlinePrimary>Challenge</HeadlinePrimary>
            <BodyPrimary>
              As a community, we all need to adapt to face the challenge that is
              climate change. We often rely on others to guide us to live
              greener and to help out our community, but what if we could make a
              difference ourselves? What if we can make smarter choices that are
              also the easiest ones? What if we could improve the lives of
              people around us in need while doing this?
            </BodyPrimary>
            <BodyPrimary>
              Our hackathon aims to sprout ideas that engage individuals like
              you. To engage anyone to contribute in any way they can to
              positively impact climate change, directly or indirectly, through
              helping communities in need.
            </BodyPrimary>
            <BodyPrimary>
              Create something engaging that encourages repeat use and instills
              good habits in people that benefit their communities. We welcome
              radical, crazy ideas. Be creative!
            </BodyPrimary>
            {/* How to participate */}
            <HeadlinePrimary style={{ marginTop: "1rem" }}>
              How to participate
            </HeadlinePrimary>
            <BodyPrimary>
              Sign up individually or with a team! Team sizes can be between
              three and five people.
            </BodyPrimary>
            {/* Timeline */}
            <HeadlinePrimary style={{ marginTop: "1rem" }}>
              Timeline
            </HeadlinePrimary>
            <Headline>Beginning December 4th</Headline>
            <Body>
              <ul style={{ paddingLeft: "30px" }}>
                <li>Register</li>
                <ul style={{ paddingLeft: "60px" }}>
                  <li>Sign up individually or in a team of 3-5</li>
                  <li>Registration Link: Coming soon!</li>
                  <li>Connect with your team on Discord</li>
                  <li>Start brainstorming ideas/hacking!</li>
                </ul>
                <li>Join our Discord server</li>
                <ul style={{ paddingLeft: "60px" }}>
                  <li>Discord will be used for this hackathon</li>
                  <li>Link: Coming soon!</li>
                  <li>Ask questions here between December 04 and January 10</li>
                  <li>
                    RBC employees and CUESEC volunteers will answer your
                    questions
                  </li>
                </ul>
              </ul>
            </Body>
            <Headline>January 4th</Headline>
            <Body>
              <ul style={{ paddingLeft: "30px" }}>
                <li>Meet the mentors day</li>
                <ul style={{ paddingLeft: "60px" }}>
                  <li>
                    Talk to RBC Developers get help with your product and code
                  </li>
                </ul>
              </ul>
            </Body>
            <Headline>January 5th</Headline>
            <Body>
              <ul style={{ paddingLeft: "30px" }}>
                <li>Submission Day</li>
                <ul style={{ paddingLeft: "60px" }}>
                  <li>Submit your team name and team members</li>
                  <li>Share GitHub repo with organizers</li>
                  <li>Pitch schedule will be released</li>
                </ul>
              </ul>
            </Body>
            <Headline>January 8th</Headline>
            <Body>
              <ul style={{ paddingLeft: "30px" }}>
                <li>Preliminaries: Pitch Day (All Day)</li>
                <ul style={{ paddingLeft: "60px" }}>
                  <li>Pitch to the Judging panel</li>
                  <li>
                    Top three teams will be chosen to present during the
                    conference
                  </li>
                </ul>
              </ul>
            </Body>
            <Headline>January 9th/10th</Headline>
            <Body>
              <ul style={{ paddingLeft: "30px" }}>
                <li>Final presentations</li>
                <ul style={{ paddingLeft: "60px" }}>
                  <li>Top three teams pitch to the whole conference</li>
                  <li>Winners will be announced!</li>
                </ul>
              </ul>
            </Body>
            {/* Judging Criteria */}
            <HeadlinePrimary style={{ marginTop: "1rem" }}>
              Judging Criteria
            </HeadlinePrimary>
            <Headline style={{ marginTop: "0.5rem" }}>Vision: 25/100</Headline>
            <Body>
              <ul style={{ paddingLeft: "30px" }}>
                <li>Is your idea feasible in today’s world?</li>
                <li>What kind of impact could this have?</li>
              </ul>
            </Body>
            <Headline style={{ marginTop: "0.5rem" }}>
              UI/UX Design: 25/100
            </Headline>
            <Body>
              <ul style={{ paddingLeft: "30px" }}>
                <li>How well designed is your solution?</li>
                <li>Has design thinking been applied?</li>
              </ul>
            </Body>
            <Headline style={{ marginTop: "0.5rem" }}>
              Technology: 25/100
            </Headline>
            <Body>
              <ul style={{ paddingLeft: "30px" }}>
                <li>What technologies does your solution leverage?</li>
                <li>What data are you consuming?</li>
                <li>How are you using tech to solve your problem?</li>
              </ul>
            </Body>
            <Headline style={{ marginTop: "0.5rem" }}>
              Presentation: 25/100
            </Headline>
            <Body>
              <ul style={{ paddingLeft: "30px" }}>
                <li>How well do you convey your idea?</li>
                <li>Is the problem you’re trying to solve clearly defined?</li>
              </ul>
            </Body>
            {/* Prizes */}
            <HeadlinePrimary style={{ marginTop: "1rem" }}>
              Prizes
            </HeadlinePrimary>
            <Body>
              <ol style={{ paddingLeft: "30px" }}>
                <li>
                  First place: Kobo Formas loaded up with some of our favourite
                  books!
                </li>
                <li>Runner up prizes: TBD</li>
              </ol>
            </Body>
            <Flex
              justifyContent="center"
              alignItems="center"
              display={["flex", "flex", "flex", "none"]}
            >
              <Socials margin="16px" />
            </Flex>
          </>
        </WidthWrapper>
      </Flex>

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
    </div>
  );
}

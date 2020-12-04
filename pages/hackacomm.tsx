import { ReactElement } from "react";
import Head from "next/head";
import Link from "next/link";
import { Flex, Image, Text } from "@chakra-ui/core";
import Socials from "@/components/Socials";
import {
  Body,
  BodyPrimary,
  Headline,
  HeadlinePrimary,
  LinkPrimary,
} from "@/components/core/Text";
import { ButtonPrimary } from "@/components/core/Button";
import { WidthWrapper } from "@/components/core/Layout";
import TopBar from "@/components/TopBar";
import styled from "@emotion/styled";

const Title = styled(Body)`
  font-weight: 900;
  line-height: 1;
  margin-bottom: 4px;
`;

const registrationLink = "/register-hackacomm";

export default function HackaComm(): ReactElement {
  return (
    <div>
      <Head>
        <title>HackaComm: CUSEC 2021 × RBC</title>
        <meta
          name="description"
          content="Hacking climate change through community efforts. Registration from December 4, 2020 - January 5, 2021."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Flex width="100%" backgroundColor="off_white_bg">
        <TopBar />
        <WidthWrapper>
          <>
            <Flex
              justifyContent={"center"}
              alignItems="center"
              marginBottom={"0.5in"}
            >
              <Image
                src="/images/cusec-rbc-hackacomm.png"
                width="100%"
                maxWidth="750px"
                userSelect="none"
                marginTop="0.5in"
              />
            </Flex>

            <Flex
              flexDirection="column"
              textAlign={["center", "center", "center", "left"]}
              alignItems="center"
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
                HackaComm: Hacking climate change through community efforts
              </Headline>
              <Flex justify={["center", "center", "center", "left"]}>
                <BodyPrimary>December 4, 2020 - January 10, 2021</BodyPrimary>
                <Text marginX="10px" height="24px">
                  {"\u2022"}
                </Text>
                <BodyPrimary>Virtual Hackathon</BodyPrimary>
              </Flex>
            </Flex>

            <Flex justifyContent="center" alignItems="center" display={"flex"}>
              <Link href={registrationLink}>
                <ButtonPrimary>Register</ButtonPrimary>
              </Link>
              {/* <Link href={discordLink}>
                <Button padding="0" marginLeft="1rem" backgroundColor="none">
                  <Image
                    src="/images/discord-logo.svg"
                    width="150.84px"
                    userSelect="none"
                  />
                </Button>
              </Link> */}
            </Flex>
            {/* Theme */}
            <HeadlinePrimary marginTop="0.5in">Challenge</HeadlinePrimary>
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
            <Headline marginTop="0.5rem">Ideas to get you started</Headline>
            <ul style={{ paddingLeft: "40px" }}>
              <li>
                I want to identify the places in my neighbourhood where there is
                a lot of trash (photos of littered places, heat maps,
                initiatives, tasks, etc.) so that I can go there and take action
                on my daily walk.
              </li>
              <li>
                I want to get in touch with individuals and families in need so
                that I can cook for someone extra each day.
              </li>
            </ul>
            {/* How to participate */}
            <HeadlinePrimary marginTop="1rem">
              How to participate
            </HeadlinePrimary>
            <BodyPrimary>
              If you&apos;re interested in participating in the hackathon,
              that&apos;s awesome! You&apos;ll have the chance to meet new
              people, learn some new skills, and maybe even win some prizes.
              Check out the timeline below for an overview of what we&apos;ve
              got planned.
            </BodyPrimary>
            {/* Timeline */}
            <HeadlinePrimary marginTop="1rem">Timeline</HeadlinePrimary>
            <Headline marginTop="0.5rem">Beginning December 4th</Headline>
            <ul style={{ paddingLeft: "35px" }}>
              <li>
                <LinkPrimary href={registrationLink}>Register</LinkPrimary>
              </li>
              <ul style={{ paddingLeft: "40px" }}>
                <li>Sign up individually or in a team of 3-5</li>
                <li>Connect with your team on Discord</li>
                <li>Start brainstorming ideas/hacking!</li>
              </ul>
              <li>Join our Discord server</li>
              <ul style={{ paddingLeft: "40px" }}>
                <li>Send us your Discord ID during registration</li>
                <li>Communicate with your teammates and other hackers</li>
                <li>Ask RBC and CUSEC volunteers all your questions!</li>
              </ul>
            </ul>
            <Headline marginTop="0.5rem">January 4th</Headline>
            <ul style={{ paddingLeft: "35px" }}>
              <li>Meet the mentors day</li>
              <ul style={{ paddingLeft: "40px" }}>
                <li>
                  Talk to RBC developers get help with your product and code
                </li>
              </ul>
            </ul>
            <Headline marginTop="0.5rem">January 5th</Headline>
            <ul style={{ paddingLeft: "35px" }}>
              <li>Submit your teams</li>
              <ul style={{ paddingLeft: "40px" }}>
                <li>Submit your team name and team members</li>
                <li>Share GitHub repo with organizers</li>
                <li>Pitch schedule will be released</li>
              </ul>
            </ul>
            <Headline marginTop="0.5rem">January 8th</Headline>
            <ul style={{ paddingLeft: "35px" }}>
              <li>Preliminaries: Pitch Day (All Day)</li>
              <ul style={{ paddingLeft: "40px" }}>
                <li>Pitch to the Judging panel</li>
                <li>
                  Top three teams will be chosen to present during the
                  conference
                </li>
              </ul>
            </ul>

            <Headline marginTop="0.5rem">January 10th</Headline>

            <ul style={{ paddingLeft: "35px" }}>
              <li>Final presentations</li>
              <ul style={{ paddingLeft: "40px" }}>
                <li>Top three teams pitch to the whole conference</li>
                <li>Winners will be announced!</li>
              </ul>
            </ul>

            {/* Judging Criteria */}
            <HeadlinePrimary marginTop="1rem">Judging Criteria</HeadlinePrimary>
            <Headline marginTop="0.5rem">Vision: 25/100</Headline>

            <ul style={{ paddingLeft: "35px" }}>
              <li>Is your idea feasible in today’s world?</li>
              <li>What kind of impact could this have?</li>
            </ul>

            <Headline marginTop="0.5rem">UI/UX Design: 25/100</Headline>

            <ul style={{ paddingLeft: "35px" }}>
              <li>How well designed is your solution?</li>
              <li>Has design thinking been applied?</li>
            </ul>

            <Headline marginTop="0.5rem">Technology: 25/100</Headline>

            <ul style={{ paddingLeft: "35px" }}>
              <li>What technologies does your solution leverage?</li>
              <li>What data are you consuming?</li>
              <li>How are you using tech to solve your problem?</li>
            </ul>

            <Headline marginTop="0.5rem">Presentation: 25/100</Headline>

            <ul style={{ paddingLeft: "35px" }}>
              <li>How well do you convey your idea?</li>
              <li>Is the problem you’re trying to solve clearly defined?</li>
            </ul>

            {/* Prizes */}
            <HeadlinePrimary marginTop="1rem">Prizes</HeadlinePrimary>
            <ol style={{ paddingLeft: "35px" }}>
              <li>
                First place: Kobo Formas loaded up with some of our favourite
                books!
              </li>
              <li>Runner up prizes: TBD*</li>
            </ol>
            <Body fontSize="12px" marginTop="0.5in">
              *Subject to change
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

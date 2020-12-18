import { ReactElement } from "react";
import Head from "next/head";
import Link from "next/link";
import { Flex, Image, List, ListItem, Text } from "@chakra-ui/core";
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

const StyledList = styled(List)`
  font-family: "Inter";
`;

const Level1List = styled(StyledList)`
  list-style-type: disc;
  padding-left: 20px;
`;

const Level2List = styled(StyledList)`
  list-style-type: circle;
  padding-left: 40px;
`;

const registrationLink = "/register-hackacomm";

export default function HackaComm(): ReactElement {
  return (
    <div>
      <Head>
        <title>HackaComm: CUSEC 2021 × RBC</title>
        <meta
          name="description"
          content="Hacking climate change through community efforts. Registration from December 4, 2020 to January 5, 2021."
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
              <Flex
                direction={["column", "column", "row"]}
                justify={["center", "center", "center", "left"]}
              >
                <BodyPrimary>December 4, 2020 - January 10, 2021</BodyPrimary>
                <Text
                  marginX="10px"
                  height="24px"
                  display={["none", "none", "block"]}
                >
                  {"\u2022"}
                </Text>
                <BodyPrimary>Virtual Hackathon</BodyPrimary>
              </Flex>
              <BodyPrimary>
                Also register for{" "}
                <Link href="/">
                  <LinkPrimary>CUSEC</LinkPrimary>
                </Link>{" "}
                to participate
              </BodyPrimary>
            </Flex>

            <Flex justifyContent="center" alignItems="center" display={"flex"}>
              <Link href={registrationLink}>
                <ButtonPrimary>Register</ButtonPrimary>
              </Link>
            </Flex>
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
            <Level1List>
              <ListItem>
                I want to identify the places in my neighbourhood where there is
                a lot of trash (photos of littered places, heat maps,
                initiatives, tasks, etc.) so that I can go there and take action
                on my daily walk.
              </ListItem>
              <ListItem>
                I want to get in touch with individuals and families in need so
                that I can cook for someone extra each day.
              </ListItem>
            </Level1List>
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
            <BodyPrimary>
              Please note you will also need to register for{" "}
              <Link href="/">
                <LinkPrimary>CUSEC</LinkPrimary>
              </Link>{" "}
              to participate.
            </BodyPrimary>
            {/* Timeline */}
            <HeadlinePrimary marginTop="1rem">Timeline</HeadlinePrimary>
            <Headline marginTop="0.5rem">Beginning December 4th</Headline>
            <Level1List>
              <ListItem>
                <LinkPrimary href={registrationLink}>Register</LinkPrimary>
              </ListItem>
              <Level2List>
                <ListItem>Sign up individually or in a team of 3-5</ListItem>
                <ListItem>Connect with your team on Discord</ListItem>
                <ListItem>Start brainstorming ideas/hacking!</ListItem>
              </Level2List>
              <ListItem>Join our Discord server</ListItem>
              <Level2List>
                <ListItem>Send us your Discord ID during registration</ListItem>
                <ListItem>
                  Communicate with your teammates and other hackers
                </ListItem>
                <ListItem>
                  Ask RBC and CUSEC volunteers all your questions!
                </ListItem>
              </Level2List>
            </Level1List>
            <Headline marginTop="0.5rem">January 4th</Headline>
            <Level1List>
              <ListItem>Meet the mentors day</ListItem>
              <Level2List>
                <ListItem>
                  Talk to RBC developers get help with your product and code
                </ListItem>
              </Level2List>
            </Level1List>
            <Headline marginTop="0.5rem">January 5th</Headline>
            <Level1List>
              <ListItem>Submit your teams</ListItem>
              <Level2List>
                <ListItem>Submit your team name and team members</ListItem>
                <ListItem>Share GitHub repo with organizers</ListItem>
                <ListItem>Pitch schedule will be released</ListItem>
              </Level2List>
            </Level1List>
            <Headline marginTop="0.5rem">January 8th</Headline>
            <Level1List>
              <ListItem>Preliminaries: Pitch Day (All Day)</ListItem>
              <Level2List>
                <ListItem>Pitch to the Judging panel</ListItem>
                <ListItem>
                  Top three teams will be chosen to present during the
                  conference
                </ListItem>
              </Level2List>
            </Level1List>

            <Headline marginTop="0.5rem">January 10th</Headline>

            <Level1List>
              <ListItem>Final presentations</ListItem>
              <Level2List>
                <ListItem>
                  Top three teams pitch to the whole conference
                </ListItem>
                <ListItem>Winners will be announced!</ListItem>
              </Level2List>
            </Level1List>

            {/* Judging Criteria */}
            <HeadlinePrimary marginTop="1rem">Judging Criteria</HeadlinePrimary>
            <Headline marginTop="0.5rem">Vision: 25/100</Headline>

            <Level1List>
              <ListItem>Is your idea feasible in today’s world?</ListItem>
              <ListItem>What kind of impact could this have?</ListItem>
            </Level1List>

            <Headline marginTop="0.5rem">UI/UX Design: 25/100</Headline>

            <Level1List>
              <ListItem>How well designed is your solution?</ListItem>
              <ListItem>Has design thinking been applied?</ListItem>
            </Level1List>

            <Headline marginTop="0.5rem">Technology: 25/100</Headline>

            <Level1List>
              <ListItem>
                What technologies does your solution leverage?
              </ListItem>
              <ListItem>What data are you consuming?</ListItem>
              <ListItem>How are you using tech to solve your problem?</ListItem>
            </Level1List>

            <Headline marginTop="0.5rem">Presentation: 25/100</Headline>

            <Level1List>
              <ListItem>How well do you convey your idea?</ListItem>
              <ListItem>
                Is the problem you’re trying to solve clearly defined?
              </ListItem>
            </Level1List>

            {/* Prizes */}
            <HeadlinePrimary marginTop="1rem">Prizes</HeadlinePrimary>
            <Level1List as="ol" styleType="decimal !important">
              <ListItem>
                First place: Kobo Formas loaded up with some of our favourite
                books!
              </ListItem>
              <ListItem>Runner up prizes: TBD*</ListItem>
            </Level1List>
            <Body fontSize="12px" marginTop="0.5in">
              *Subject to change
            </Body>
            <Flex justifyContent="center" alignItems="center">
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

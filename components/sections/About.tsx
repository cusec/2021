import styled from "@emotion/styled";
import { Box, Divider, Flex, Skeleton } from "@chakra-ui/core";
import React, { Fragment } from "react";
import InspiringKeynotes from "../svgs/inspiring-keynotes.svg";
import MeetRecruiters from "../svgs/meet-recruiters.svg";
import AttendWorkshops from "../svgs/attend-workshops.svg";
import BuildYourNetwork from "../svgs/build-your-network.svg";
import { LocationHashEnum } from "@/src/enums";
import theme from "@/src/theme";
import { GreyBackground, WidthWrapper } from "@/components/core/Layout";
import { Headline, HeadlinePrimary, BodyPrimary } from "@/components/core/Text";

const TextTagLine = styled(Headline)`
  color: ${theme.colors.brand.blue};
`;

const taglinesData = [
  { title: "Connect", subtitle: "with like-minded peers" },
  { title: "Learn", subtitle: "from world-renowned experts" },
  { title: "Discover", subtitle: "career opportunities" },
];

const experienceCUSECData = [
  {
    header: "Inspiring Keynotes",
    description:
      "We take great pride in hosting unique and knowledgeable speakers that come from many backgrounds in the software industry.",
    Icon: InspiringKeynotes,
  },
  {
    header: "Meet Recruiters",
    description:
      "Get exclusive opportunities to network with recruiters from the top companies that redefine tech everyday at our career fair.",
    Icon: MeetRecruiters,
  },
  {
    header: "Attend Workshops",
    description:
      "Broaden your skill sets with new technological tools and gain insight on the hottest topics and challenges facing today’s tech industry.",
    Icon: AttendWorkshops,
  },
  {
    header: "Build Your Network",
    description:
      "Meet like-minded peers, and fellow students from across North America. Make lifelong friendships.",
    Icon: BuildYourNetwork,
  },
];

export default function About(): React.ReactElement {
  return (
    <div id={LocationHashEnum.About}>
      <WidthWrapper>
        <Flex
          align="center"
          paddingTop={["1in", "1in", "1.5in", "1.5in"]}
          paddingBottom={["0.5in", "0.5in", "1in", "1in"]}
        >
          <Flex
            display={["none", "none", "none", "flex"]}
            direction="column"
            textAlign={["center", "center", "center", "left"]}
          >
            <Box marginRight="50px">
              <Skeleton height="300px" width="300px" />
            </Box>
          </Flex>
          <Flex direction="column">
            <HeadlinePrimary>
              Annual Software Engineering Conference
            </HeadlinePrimary>
            <BodyPrimary>
              Join over 500 students from across Canada for three days of
              knowledge sharing, mentoring, career opportunities and community
              with people who are enthusiastic about the future of tech. CUSEC
              is an annual software engineering conference organized for
              students by students. It was founded in 2002 by a small team of
              tech enthusiasts on a mission to educate and expose students to a
              diverse range of areas in software engineering and computer
              science. The conference enables attendees to discover
              knowledgeable speakers, connect with sponsoring companies, and
              make lifelong friends, all in a safe and comfortable space.
            </BodyPrimary>
          </Flex>
        </Flex>
      </WidthWrapper>
      <GreyBackground>
        <Flex
          direction={["column", "column", "column", "row"]}
          justify={["center", "center", "center", "space-evenly"]}
          paddingY={["0.25in", "0.25in", "0.5in", "0.5in"]}
          maxWidth="1920px"
          margin="0 auto"
        >
          {taglinesData.map((item, index) => (
            <Fragment key={item.title}>
              {index !== 0 && <Divider orientation="vertical" />}
              <Flex flexDirection="column" alignItems="center">
                <TextTagLine fontSize={["4xl", "5xl"]}>
                  {item.title}
                </TextTagLine>
                <BodyPrimary
                  textAlign="center"
                  marginBottom={["30px", "30px", "20px", 0]}
                >
                  {item.subtitle}
                </BodyPrimary>
              </Flex>
            </Fragment>
          ))}
        </Flex>
      </GreyBackground>
      <WidthWrapper>
        <Flex direction="column" paddingY={["0.5in", "0.5in", "1in", "1in"]}>
          <Flex justifyContent="center" marginBottom="32px">
            <HeadlinePrimary>Ways to experience CUSEC</HeadlinePrimary>
          </Flex>
          <Flex
            align={["center", "center", "center", "stretch"]}
            direction={["column", "column", "column", "row"]}
            wrap="wrap"
            justify="center"
          >
            {experienceCUSECData.map(({ header, description, Icon }) => (
              <Box
                key={header}
                borderWidth="1px"
                boxShadow="md"
                marginX={[0, 0, 0, "1rem"]}
                marginBottom={["1rem", "1.5rem", "2rem"]}
                width="600px"
                maxWidth="100%"
                rounded="lg"
              >
                <Flex
                  align="center"
                  alignContent="center"
                  minHeight={[0, 0, "140px"]}
                  justify="center"
                >
                  <Box display={["none", "none", "flex"]} marginLeft="1rem">
                    <Icon height="80px" />
                  </Box>
                  <Flex direction="column" height="100%" padding="1rem">
                    <Flex
                      justify="space-between"
                      align="center"
                      marginBottom="4px"
                    >
                      <Headline fontSize="16px">{header}</Headline>
                      <Box display={["block", "block", "none"]}>
                        <Icon width="32px" height="32px" />
                      </Box>
                    </Flex>
                    <BodyPrimary>{description}</BodyPrimary>
                  </Flex>
                </Flex>
              </Box>
            ))}
          </Flex>
        </Flex>
      </WidthWrapper>
    </div>
  );
}

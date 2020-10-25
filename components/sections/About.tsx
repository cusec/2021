import styled from "@emotion/styled";
import { Box, Divider, Flex, Skeleton, Text } from "@chakra-ui/core";
import React, { Fragment } from "react";
import InspiringKeynotes from "../svgs/inspiring-keynotes.svg";
import MeetRecruiters from "../svgs/meet-recruiters.svg";
import AttendWorkshops from "../svgs/attend-workshops.svg";
import BuildYourNetwork from "../svgs/build-your-network.svg";
import { GreyBackground } from "@/components/StyledCore";
import { LocationHashEnum } from "@/src/enums";
import theme from "@/src/theme";

const FlexAbout = styled(Flex)`
  width: 100%;
`;

const FlexTagLines = styled(Flex)`
  width: 100%;
`;

const TextStyled = styled(Text)`
  font-family: "Inter", sans-serif;
`;

const TextStyledBold = styled(TextStyled)`
  font-weight: 700;
  font-family: "Metropolis", sans-serif;
`;

const TextTagLine = styled(TextStyled)`
  font-weight: 900;
  font-family: "Metropolis", sans-serif;
  color: ${theme.colors.brand.blue};
`;

const FlexExperience = styled(Flex)`
  width: 100%;
`;

const MarginAroundText = styled.div`
  margin: 1rem;
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
    icon: <InspiringKeynotes height="90px" />,
  },
  {
    header: "Meet Recruiters",
    description:
      "Get exclusive opportunities to network with recruiters from the top companies that redefine tech everyday at our career fair.",
    icon: <MeetRecruiters height="90px" />,
  },
  {
    header: "Attend Workshops",
    description:
      "Broaden your skill sets with new technological tools and gain insight on the hottest topics and challenges facing today’s tech industry.",
    icon: <AttendWorkshops height="90px" />,
  },
  {
    header: "Build Your Network",
    description:
      "Meet like-minded peers, and fellow students from across North America. Make lifelong friendships.",
    icon: <BuildYourNetwork height="90px" />,
  },
];

export default function About(): React.ReactElement {
  return (
    <div id={LocationHashEnum.About}>
      <Flex direction="column" height="100%" justify="center" width="100%">
        <FlexAbout
          align="center"
          justify={["center", "center", "center", "space-between"]}
          marginTop={["10vh", "10vh", "15vh", "15vh"]}
          paddingBottom={["0.5in", "0.5in", "1in", "1in"]}
          paddingX={["16px", "16px", "10vw", "10vw"]}
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
            <TextStyledBold
              fontSize={["xl", "3xl"]}
              paddingBottom={["10px", "10px", "15px", "20px"]}
            >
              Annual Software Engineering Conference
            </TextStyledBold>
            <TextStyled>
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
            </TextStyled>
          </Flex>
        </FlexAbout>
        <GreyBackground>
          <FlexTagLines
            direction={["column", "column", "column", "row"]}
            justify={["center", "center", "center", "space-evenly"]}
            paddingY={["0.25in", "0.25in", "0.5in", "0.5in"]}
          >
            {taglinesData.map((item, index) => {
              return (
                <Fragment key={item.title}>
                  {index !== 0 && <Divider orientation="vertical" />}
                  <Flex flexDirection="column" alignItems="center">
                    <TextTagLine fontSize={["4xl", "5xl"]}>
                      {item.title}
                    </TextTagLine>
                    <TextStyled
                      textAlign="center"
                      margin={[
                        "0px 0px 30px 0px",
                        "0px 0px 30px 0px",
                        "0px 0px 20px 0px",
                        "0px 0px 0px 0px",
                      ]}
                    >
                      {item.subtitle}
                    </TextStyled>
                  </Flex>
                </Fragment>
              );
            })}
          </FlexTagLines>
        </GreyBackground>
        <FlexExperience
          direction="column"
          paddingY={["0.5in", "0.5in", "1in", "1in"]}
          paddingX={["16px", "16px", "7vw", "7vw"]}
        >
          <Flex justifyContent="center" marginBottom="5vh">
            <TextStyledBold fontSize={["xl", "3xl"]}>
              Ways to experience CUSEC
            </TextStyledBold>
          </Flex>
          <Flex
            align={["center", "center", "center", "stretch"]}
            direction={["column", "column", "column", "row"]}
            wrap="wrap"
            justify="center"
          >
            {experienceCUSECData.map((item) => {
              return (
                <Box
                  borderWidth="1px"
                  boxShadow="md"
                  key={item.header}
                  margin="1vw"
                  maxWidth="98%"
                  rounded="lg"
                  width={["45rem", "45rem", "30rem", "45rem"]}
                >
                  <Flex
                    align="center"
                    alignContent="center"
                    minHeight="140px"
                    justify="center"
                  >
                    <Flex
                      align="center"
                      alignContent="center"
                      justify="center"
                      marginLeft="1rem"
                    >
                      {item.icon}
                    </Flex>
                    <Flex direction="column" height="100%">
                      <MarginAroundText>
                        <TextStyledBold>{item.header}</TextStyledBold>
                        <TextStyled>{item.description}</TextStyled>
                      </MarginAroundText>
                    </Flex>
                  </Flex>
                </Box>
              );
            })}
          </Flex>
        </FlexExperience>
      </Flex>
    </div>
  );
}

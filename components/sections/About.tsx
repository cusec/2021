import styled from "@emotion/styled";
import { Box, Divider, Flex, Skeleton, Text } from "@chakra-ui/core";
import React, { Fragment } from "react";

const FlexAbout = styled(Flex)`
  align-items: center;
  width: 100%;
`;

const FlexTagLines = styled(Flex)`
  width: 100%;
  border-top: 1px solid #f1f1f1;
  background-color: #fafafa;
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
  color: #1e5480;
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
  },
  {
    header: "Meet Recruiters",
    description:
      "Get exclusive opportunities to network with recruiters from the top companies that redefine tech everyday at our career fair.",
  },
  {
    header: "Attend Workshops",
    description:
      "Broaden your skill sets with new technological tools and gain insight on the hottest topics and challenges facing today’s tech industry.",
  },
  {
    header: "Build Your Network",
    description:
      "Meet like-minded peers, and fellow students from across North America. Make lifelong friendships.",
  },
];

export default function About(): React.ReactElement {
  return (
    <Flex
      flexDirection="column"
      height="100%"
      justifyContent="center"
      width="100%"
    >
      <FlexAbout
        justifyContent={["center", "center", "center", "space-between"]}
        marginTop={["10vh", "10vh", "15vh", "15vh"]}
        paddingBottom={["0.5in", "0.5in", "1in", "1in"]}
        paddingX={["16px", "16px", "10vw", "10vw"]}
      >
        <Flex
          display={["none", "none", "none", "flex"]}
          flexDirection="column"
          textAlign={["center", "center", "center", "left"]}
        >
          <Box marginRight="50px">
            <Skeleton height="300px" width="300px" />
          </Box>
        </Flex>
        <Flex flexDirection="column">
          <TextStyledBold
            fontSize={["xl", "3xl"]}
            paddingBottom={["10px", "10px", "15px", "20px"]}
          >
            Annual Software Engineering Conference
          </TextStyledBold>
          <TextStyled>
            Join over 500 students from across Canada for three days of
            knowledge sharing, mentoring, career opportunities and community
            with people who are enthusiastic about the future of tech. CUSEC is
            an annual software engineering conference organized for students by
            students. It was founded in 2002 by a small team of tech enthusiasts
            on a mission to educate and expose students to a diverse range of
            areas in software engineering and computer science. The conference
            enables attendees to discover knowledgeable speakers, connect with
            sponsoring companies, and make lifelong friends, all in a safe and
            comfortable space.
          </TextStyled>
        </Flex>
      </FlexAbout>
      <FlexTagLines
        flexDirection={["column", "column", "column", "row"]}
        justifyContent={["center", "center", "center", "space-evenly"]}
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
      <FlexExperience
        flexDirection="column"
        paddingY={["0.5in", "0.5in", "1in", "1in"]}
        paddingX={["16px", "16px", "10vw", "10vw"]}
      >
        <Flex justifyContent="center" marginBottom="5vh">
          <TextStyledBold fontSize={["xl", "3xl"]}>
            Ways to experience CUSEC
          </TextStyledBold>
        </Flex>
        <Flex
          alignItems={["center", "center", "center", "stretch"]}
          flexDirection={["column", "column", "column", "row"]}
          flexWrap="wrap"
          justifyContent="center"
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
                width="30rem"
              >
                <Flex height="100%">
                  <Flex
                    alignContent="center"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Skeleton height="100px" marginLeft="1rem" width="100px" />
                  </Flex>
                  <Flex flexDirection="column">
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
  );
}

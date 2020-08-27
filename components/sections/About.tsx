import styled from "@emotion/styled";
import { Box, Flex, Skeleton, Text } from "@chakra-ui/core";
import React from "react";

const BaseFlex = styled(Flex)`
  width: 100%;
  background-repeat: no-repeat;
  background-attachment: local;
  background-size: 100vw auto;
  background-position: center bottom;
`;

const FlexAbout = styled(Flex)`
  align-items: center;
  width: 100%;
`;

const FlexTagLines = styled(Flex)`
  width: 100%;
`;

const TextStyled = styled(Text)`
  font-family: "Inter", sans-serif;
  margin-bottom: 8px;
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

const MarginAroundBox = styled.div`
  margin: 1rem;
`;

const taglinesData = [
  { title: "Connect", subtitle: "with link-minded peers" },
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
    <>
      <BaseFlex>
        <Flex
          flexDirection="column"
          justifyContent="center"
          width="100%"
          height="100%"
          paddingX={["16px", "16px", "10vw", "10vw"]}
          marginTop="15vh"
        >
          <FlexAbout
            justifyContent={["center", "center", "center", "space-between"]}
            paddingBottom={["1in", "1in", "2in", "2in"]}
          >
            <Flex
              flexDirection="column"
              textAlign={["center", "center", "center", "left"]}
              display={["none", "none", "none", "flex"]}
            >
              <Box marginRight="50px">
                <Skeleton height="300px" width="300px" />
              </Box>
            </Flex>
            <Flex flexDirection="column">
              <TextStyledBold fontSize="xl">
                Annual Software Engineering Conference
              </TextStyledBold>
              <TextStyled>
                Join over 500 students from across Canada for three days of
                knowledge sharing, mentoring, career opportunities and community
                with people who are enthusiastic about the future of tech. CUSEC
                is an annual software engineering conference organized for
                students by students. It was founded in 2002 by a small team of
                tech enthusiasts on a mission to educate and expose students to
                a diverse range of areas in software engineering and computer
                science. The conference enables attendees to discover
                knowledgeable speakers, connect with sponsoring companies, and
                make lifelong friends, all in a safe and comfortable space.
              </TextStyled>
            </Flex>
          </FlexAbout>
          <FlexTagLines
            flexDirection={["column", "column", "column", "row"]}
            paddingBottom={["1in", "1in", "2in", "2in"]}
            justifyContent={["center", "center", "center", "space-evenly"]}
          >
            {taglinesData.map((item) => {
              return (
                <Flex
                  flexDirection="column"
                  alignItems="center"
                  key={item.title}
                >
                  <TextTagLine fontSize={["xl", "5xl"]}>
                    {item.title}
                  </TextTagLine>
                  <TextStyled>{item.subtitle}</TextStyled>
                </Flex>
              );
            })}
          </FlexTagLines>
          <FlexExperience flexDirection="column">
            <Flex justifyContent="center" marginBottom="5vh">
              <TextStyledBold fontSize={["xl", "3xl"]}>
                Ways to experience CUSEC
              </TextStyledBold>
            </Flex>
            <Flex
              flexWrap="wrap"
              justifyContent="center"
              alignItems={["center", "center", "center", "stretch"]}
              flexDirection={["column", "column", "column", "row"]}
            >
              {experienceCUSECData.map((item) => {
                return (
                  <Box
                    borderWidth="1px"
                    rounded="lg"
                    width="30rem"
                    margin="1vw"
                    boxShadow="md"
                    maxWidth="100%"
                    key={item.header}
                  >
                    <Flex>
                      <Flex justifyContent="center" alignItems="center">
                        <Skeleton
                          height="100px"
                          width="100px"
                          marginLeft="1rem"
                        />
                      </Flex>
                      <Flex flexDirection="column">
                        <MarginAroundBox>
                          <TextStyledBold>{item.header}</TextStyledBold>
                          <TextStyled>{item.description}</TextStyled>
                        </MarginAroundBox>
                      </Flex>
                    </Flex>
                  </Box>
                );
              })}
            </Flex>
          </FlexExperience>
        </Flex>
      </BaseFlex>
    </>
  );
}

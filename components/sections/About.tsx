import styled from "@emotion/styled";
import { Box, Flex, Skeleton, Text } from "@chakra-ui/core";
import React from "react";

const BaseFlex = styled(Flex)`
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

export default function About(): React.ReactElement {
  return (
    <>
      <BaseFlex width="100%">
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
              <Box>
                <Skeleton height="300px" width="300px" />
              </Box>
            </Flex>
            <Flex flexDirection="column" marginLeft="50px">
              <TextStyledBold>
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
            paddingBottom={["1in", "1in", "2in", "2in"]}
            justifyContent={["center", "center", "center", "space-evenly"]}
          >
            <Flex flexDirection="column" alignItems="center">
              <TextTagLine fontSize={["xl", "5xl"]}>Connect</TextTagLine>
              <TextStyled>with link-minded peers</TextStyled>
            </Flex>
            <Flex flexDirection="column" alignItems="center">
              <TextTagLine fontSize={["xl", "5xl"]}>Learn</TextTagLine>
              <TextStyled>from world-renowned experts</TextStyled>
            </Flex>
            <Flex flexDirection="column" alignItems="center">
              <TextTagLine fontSize={["xl", "5xl"]}>Discover</TextTagLine>
              <TextStyled>career opportunities</TextStyled>
            </Flex>
          </FlexTagLines>
        </Flex>
      </BaseFlex>
    </>
  );
}

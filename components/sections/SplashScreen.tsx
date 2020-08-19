import React from "react";
import { Flex, Image, Link, Text } from "@chakra-ui/core";
import styled from "@emotion/styled";
import Socials from "@/components/Socials";

const FlexFullView = styled(Flex)`
  background-image: url("cityscape.svg");
  background-repeat: no-repeat;
  background-attachment: local;
`;

const TextStyled = styled(Text)`
  font-family: "Inter", sans-serif;
  margin-bottom: 8px;
`;

const TextStyledExtraBold = styled(TextStyled)`
  font-weight: 900;
`;

const TextStyledBold = styled(TextStyled)`
  font-weight: 700;
  font-family: "Metropolis", sans-serif;
`;

const LinkStyled = styled(Link)`
  font-family: "Inter", sans-serif;
  font-weight: 600;
`;

export default function SplashScreen(): React.ReactElement {
  return (
    <>
      <FlexFullView
        height={[
          "max(100vh, 600px)",
          "max(100vh, 600px)",
          "max(100vh, 700px)",
          "max(100vh, 800px)",
        ]}
        width="100%"
        backgroundSize="100vw auto"
        backgroundPosition={["center bottom"]}
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          width="100%"
          height="100%"
          paddingX={["16px", "16px", "10vw", "10vw"]}
        >
          <Flex justifyContent="center">
            <Image
              src="logo.svg"
              alt="CUSEC logo"
              size="100px"
              marginBottom="8px"
              display={["block", "block", "block", "none"]}
            />
          </Flex>
          <Flex
            justifyContent={["center", "center", "center", "space-between"]}
            alignItems="center"
            width="100%"
            paddingBottom={["1in", "1in", "2in", "2in"]}
          >
            <Flex
              flexDirection="column"
              textAlign={["center", "center", "center", "left"]}
            >
              <TextStyledExtraBold fontSize={["4xl", "5xl"]}>
                CUSEC 2021
              </TextStyledExtraBold>
              <TextStyledBold fontSize={["xl", "2xl"]}>
                Canadian University Software Engineering Conference
              </TextStyledBold>
              <Flex justify={["center", "center", "center", "left"]}>
                <TextStyled>January 9 - 10, 2021</TextStyled>
                <Text margin="0 10px">{"\u2022"}</Text>
                <TextStyled>Virtual Experience</TextStyled>
              </Flex>
              <Flex
                alignItems="center"
                marginTop="8px"
                justify={["center", "center", "center", "left"]}
              >
                <LinkStyled
                  color="brand.dark_teal"
                  href="mailto:sponsor@cusec.net"
                >
                  Interested in sponsoring?
                </LinkStyled>
              </Flex>
              <Flex
                justifyContent="center"
                alignItems="center"
                display={["flex", "flex", "flex", "none"]}
              >
                <Socials margin="16px" />
              </Flex>
            </Flex>
            <Image
              src="logo.svg"
              alt="CUSEC logo"
              width="min(250px, 15vw)"
              marginLeft="50px"
              display={["none", "none", "none", "block"]}
            />
          </Flex>
        </Flex>
      </FlexFullView>
    </>
  );
}

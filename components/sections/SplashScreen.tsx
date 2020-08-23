import React, { useEffect, useState } from "react";
import { Flex, Link, Text } from "@chakra-ui/core";
import styled from "@emotion/styled";
import Socials from "@/components/Socials";
import Logo from "../svgs/logo.svg";

const FlexFullView = styled(Flex)`
  background-image: url("images/cityscape.svg");
  background-repeat: no-repeat;
  background-attachment: local;
  background-size: 100vw auto;
  background-position: center bottom;
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
  const [windowHeight, setWindowHeight] = useState(0);

  const updateHeight = () => {
    setWindowHeight(innerHeight);
  };

  useEffect(() => {
    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <>
      <FlexFullView
        height={[
          `${Math.max(500, windowHeight)}px`,
          `${Math.max(600, windowHeight)}px`,
          `${Math.max(700, windowHeight)}px`,
          `${Math.max(800, windowHeight)}px`,
        ]}
        width="100%"
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          width="100%"
          height="100%"
          paddingX={["16px", "16px", "10vw", "10vw"]}
        >
          <Flex
            justifyContent="center"
            marginBottom="8px"
            display={["flex", "flex", "flex", "none"]}
          >
            <Logo
              style={{
                height: "100px",
                width: "auto",
              }}
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
            <Flex marginLeft="50px" display={["none", "none", "none", "flex"]}>
              <Logo style={{ width: "min(250px, 15vw)", height: "auto" }} />
            </Flex>
          </Flex>
        </Flex>
      </FlexFullView>
    </>
  );
}

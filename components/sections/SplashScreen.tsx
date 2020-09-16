import React, { useEffect, useState } from "react";
import { Flex, Text } from "@chakra-ui/core";
import styled from "@emotion/styled";
import Socials from "@/components/Socials";
import Logo from "../svgs/logo.svg";
import {
  LinkStyled,
  TextStyled,
  TextStyledBold,
  TextStyledExtraBold,
} from "@/components/StyledCore";
import EmailListingInput from "@/components/EmailListingInput";

const minHeights = [550, 650, 700, 800];

const FlexFullView = styled(Flex)`
  background-image: url("images/cityscape.svg");
  background-repeat: no-repeat;
  background-attachment: local;
  background-size: 100vw auto;
  background-position: center bottom;
`;

function useScreenOrientation() {
  const [orientation, setOrientation] = useState<
    "landscape" | "portrait" | undefined
  >(undefined);

  useEffect(() => {
    const handleOrientationChange = () => {
      setOrientation(
        window.innerWidth > window.innerHeight ? "landscape" : "portrait"
      );
    };

    handleOrientationChange();
    window.addEventListener("resize", handleOrientationChange);

    return () => {
      window.removeEventListener("resize", handleOrientationChange);
    };
  }, []);

  return orientation;
}

export default function SplashScreen(): React.ReactElement {
  const [heightProp, setHeightProp] = useState(
    minHeights.map((minHeight) => `max(100vh, ${minHeight}px)`)
  );
  const currentOrientation = useScreenOrientation();
  const [screenOrientation, setScreenOrientation] = useState<
    "landscape" | "portrait" | undefined
  >(undefined);

  useEffect(() => {
    const updateHeight = () => {
      setScreenOrientation(currentOrientation);
      setHeightProp(
        minHeights.map(
          (minHeight) => `${Math.max(window.innerHeight, minHeight)}px`
        )
      );
    };

    if (
      screenOrientation === undefined ||
      screenOrientation !== currentOrientation
    ) {
      updateHeight();
    }
  }, [currentOrientation, screenOrientation]);

  return (
    <>
      <FlexFullView
        height={heightProp}
        width="100%"
        backgroundColor="off_white_bg"
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
              <TextStyledExtraBold fontSize={["4xl", "5xl"]} marginBottom="4px">
                CUSEC 2021
              </TextStyledExtraBold>
              <TextStyledBold fontSize={["xl", "2xl"]} marginBottom="12px">
                Canadian University Software Engineering Conference
              </TextStyledBold>
              <Flex
                justify={["center", "center", "center", "left"]}
                alignItems="center"
                marginBottom="16px"
              >
                <TextStyled>January 9 - 10, 2021</TextStyled>
                <Text marginX="10px" height="24px">
                  {"\u2022"}
                </Text>
                <TextStyled>Virtual Experience</TextStyled>
              </Flex>
              <Flex
                alignItems="center"
                marginTop="8px"
                flexDirection={["column", "column", "column", "row"]}
                justify={["center", "center", "center", "left"]}
              >
                <EmailListingInput />
                <LinkStyled
                  color="brand.blue"
                  href="mailto:sponsor@cusec.net"
                  _hover={{
                    color: "brand.dark_teal",
                    textDecoration: "underline",
                  }}
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

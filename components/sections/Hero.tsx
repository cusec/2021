import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Flex, Text } from "@chakra-ui/core";
import styled from "@emotion/styled";
import Socials from "@/components/Socials";
import Logo from "../svgs/logo.svg";
import useScreenWidth from "../hooks/useScreenWidth";
import useStore from "@/src/store";
import {
  Body,
  BodyPrimary,
  Headline,
  LinkPrimary,
} from "@/components/core/Text";
import { ButtonPrimary } from "@/components/core/Button";
import { WidthWrapper } from "@/components/core/Layout";

const minHeights = [550, 650, 700, 800];

const FlexFullView = styled(Flex)`
  background-image: url("images/cityscape.svg");
  background-repeat: no-repeat;
  background-attachment: local;
  background-size: 100vw auto;
  background-position: center bottom;
`;

export default function Hero(): React.ReactElement {
  const [heightProp, setHeightProp] = useState(
    minHeights.map((minHeight) => `max(100vh, ${minHeight}px)`)
  );
  const actualWidth = useScreenWidth();
  const [currentWidth, setCurrentWidth] = useState(0);
  const setNavOverlayOpen = useStore((state) => state.setNavOverlayOpen);

  useEffect(() => {
    const updateHeight = () => {
      setCurrentWidth(actualWidth);
      setHeightProp(
        minHeights.map(
          (minHeight) => `${Math.max(window.innerHeight, minHeight)}px`
        )
      );
    };

    if (currentWidth === 0 || currentWidth !== actualWidth) {
      updateHeight();
      setNavOverlayOpen(false);
    }
  }, [actualWidth, currentWidth, setNavOverlayOpen]);

  return (
    <FlexFullView
      height={heightProp}
      width="100%"
      backgroundColor="off_white_bg"
    >
      <WidthWrapper>
        <Flex
          flexDirection="column"
          justifyContent="center"
          width="100%"
          height="100%"
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
              <Body
                fontSize={["4xl", "5xl"]}
                fontWeight={900}
                marginBottom="4px"
              >
                CUSEC 2021
              </Body>
              <Headline fontSize={["xl", "2xl"]} marginBottom="12px">
                Canadian University Software Engineering Conference
              </Headline>
              <Flex justify={["center", "center", "center", "left"]}>
                <BodyPrimary>January 9 - 10, 2021</BodyPrimary>
                <Text marginX="10px" height="24px">
                  {"\u2022"}
                </Text>
                <BodyPrimary>Virtual Experience</BodyPrimary>
              </Flex>
              <Flex
                alignItems="center"
                marginTop="8px"
                flexDirection={["column", "column", "column", "row"]}
                justify={["center", "center", "center", "left"]}
              >
                <Link href="/register">
                  <ButtonPrimary
                    marginRight={[0, 0, 0, "2rem"]}
                    marginBottom={["1rem", "1rem", "1rem", 0]}
                  >
                    Register
                  </ButtonPrimary>
                </Link>
                <LinkPrimary href="mailto:sponsor@cusec.net">
                  Interested in sponsoring?
                </LinkPrimary>
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
      </WidthWrapper>
    </FlexFullView>
  );
}

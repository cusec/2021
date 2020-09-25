import { Box, Flex } from "@chakra-ui/core";
import Socials from "@/components/Socials";
import Logo from "./svgs/logo.svg";
import React, { useRef, useState } from "react";
import { NavBarLink } from "./StyledCore";
import styled from "@emotion/styled";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import HamburgerMenu from "@/components/HamburgerMenu";

const VerticalBar = styled.div`
  display: inline-block;
  border-left: 1px solid #ccc;
  margin: 0 10px;
  height: 35px;
`;

export default function TopBar(): React.ReactElement {
  const [hideBackground, setHideBackground] = useState(true);
  const [hideOnScroll, setHideOnScroll] = useState(false);

  const componentRef = useRef();

  const getComponentHeight = () => {
    const element = componentRef.current as HTMLElement | undefined;

    return element ? element.getBoundingClientRect().height : 0;
  };

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isAtTop = currPos.y === 0;
      const isHide = currPos.y < prevPos.y;

      if (isAtTop !== hideBackground) {
        setHideBackground(isAtTop);
      }

      if (isHide !== hideOnScroll) {
        setHideOnScroll(isHide);
      }
    },
    [hideOnScroll]
  );

  return (
    <>
      <Flex
        ref={componentRef}
        align="center"
        justify="space-between"
        paddingX={["0.2in", "0.2in", "10vw", "10vw"]}
        paddingY="8px"
        position="fixed"
        top="0"
        width="100%"
        transform={`translateY(${hideOnScroll ? -getComponentHeight() : 0}px)`}
        background={hideBackground ? undefined : "white"}
        boxShadow={
          hideBackground || hideOnScroll
            ? undefined
            : "0 0 8px rgba(0, 0, 0, 0.2)"
        }
        transition="transform 0.2s, background 1s, box-shadow 0.5s"
        zIndex={10000000}
      >
        <Flex align="center">
          <Logo
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ height: "32px", width: "auto", cursor: "pointer" }}
          />
        </Flex>
        <Box display={["block", "block", "block", "none"]}>
          <HamburgerMenu />
        </Box>
        <Flex align="center" display={["none", "none", "none", "flex"]}>
          <Flex direction="row">
            <NavBarLink>About</NavBarLink>
            <NavBarLink>Sponsors</NavBarLink>
            <NavBarLink marginRight="24px">FAQ</NavBarLink>
          </Flex>
          <Flex>
            <VerticalBar />
          </Flex>
          <Socials marginLeft="32px" />
        </Flex>
      </Flex>
    </>
  );
}

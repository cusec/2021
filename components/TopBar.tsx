import { Box, Flex } from "@chakra-ui/core";
import Socials from "@/components/Socials";
import Logo from "./svgs/logo.svg";
import React, { useRef, useState } from "react";
import { NavBarLink } from "./StyledCore";
import styled from "@emotion/styled";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import HamburgerMenu from "react-hamburger-menu";
import useStore from "@/src/store";
import { LocationHashEnum } from "@/src/enums";
import { useRouter } from "next/router";
import { goToAnchor, goToTop } from "react-scrollable-anchor";

const VerticalBar = styled.div`
  display: inline-block;
  border-left: 1px solid #ccc;
  margin: 0 10px;
  height: 24px;
`;

export default function TopBar(): React.ReactElement {
  const [hideBackground, setHideBackground] = useState(true);
  const [hideOnScroll, setHideOnScroll] = useState(false);
  const isNavOverlayOpen = useStore((state) => state.isNavOverlayOpen);
  const setNavOverlayOpen = useStore((state) => state.setNavOverlayOpen);
  const router = useRouter();

  const componentRef = useRef();

  const getComponentHeight = () => {
    const element = componentRef.current as HTMLElement | undefined;
    return element ? element.getBoundingClientRect().height : 0;
  };

  const handleCusecIconClick = () => {
    goToTop();
    setNavOverlayOpen(false);
    router.replace("/");
  };

  const handleNavItemClick = (href: LocationHashEnum) => () => {
    goToAnchor(href);
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
        transform={`translateY(${
          hideOnScroll && !isNavOverlayOpen ? -getComponentHeight() : 0
        }px)`}
        background={hideBackground || isNavOverlayOpen ? undefined : "white"}
        boxShadow={
          hideBackground || hideOnScroll || isNavOverlayOpen
            ? undefined
            : "0 0 8px rgba(0, 0, 0, 0.2)"
        }
        transition="transform 0.2s, background 0.5s, box-shadow 0.5s"
        zIndex={100}
      >
        <Flex align="center">
          <Logo
            onClick={handleCusecIconClick}
            style={{ height: "32px", width: "auto", cursor: "pointer" }}
          />
        </Flex>
        <Box display={["block", "block", "block", "none"]} cursor="pointer">
          <HamburgerMenu
            isOpen={isNavOverlayOpen}
            menuClicked={() => setNavOverlayOpen(!isNavOverlayOpen)}
            height={17}
            width={28}
            strokeWidth={3}
            rotate={180}
          />
        </Box>
        <Flex align="center" display={["none", "none", "none", "flex"]}>
          <Flex direction="row">
            <NavBarLink onClick={handleNavItemClick(LocationHashEnum.About)}>
              About
            </NavBarLink>
            <NavBarLink onClick={handleNavItemClick(LocationHashEnum.Sponsors)}>
              Sponsors
            </NavBarLink>
            <NavBarLink onClick={handleNavItemClick(LocationHashEnum.FAQ)}>
              FAQ
            </NavBarLink>
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

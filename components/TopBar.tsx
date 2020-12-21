import { Box, Flex, Link as ChakraLink } from "@chakra-ui/react";
import Socials from "@/components/Socials";
import Logo from "./svgs/logo.svg";
import React, { useEffect, useRef, useState } from "react";
import { Body } from "@/components/core/Text";
import styled from "@emotion/styled";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import HamburgerMenu from "react-hamburger-menu";
import useStore from "@/src/store";
import { locations } from "@/src/constants";
import AnchorLink from "react-anchor-link-smooth-scroll";
import NavOverlay from "@/components/NavOverlay";
import theme from "@/src/theme";
import { WidthWrapper } from "@/components/core/Layout";
import { useRouter } from "next/router";
import Link from "next/link";

const VerticalBar = styled.div`
  display: inline-block;
  border-left: 1px solid #ccc;
  margin: 0 10px;
  height: 24px;
`;

export const NavBarLink = styled(Body)`
  position: relative;

  &:after {
    background: ${theme.colors.brand.teal};
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    opacity: 0;
    transform: translateY(3px);
    transition: opacity 0.2s ease, transform 0.2s ease;
    z-index: -1;
  }

  &:hover::after {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default function TopBar(): React.ReactElement {
  const [hideBackground, setHideBackground] = useState(true);
  const [hideOnScroll, setHideOnScroll] = useState(false);
  const isNavOverlayOpen = useStore((state) => state.isNavOverlayOpen);
  const setNavOverlayOpen = useStore((state) => state.setNavOverlayOpen);

  const componentRef = useRef();
  const router = useRouter();

  const getComponentHeight = () => {
    const element = componentRef.current as HTMLElement | undefined;
    return element ? element.getBoundingClientRect().height : 0;
  };

  const handleCusecIconClick = () => {
    if (router.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }

    setNavOverlayOpen(false);
  };

  useEffect(() => {
    setHideBackground(document.body.getBoundingClientRect().top === 0);
  }, []);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isAtTop = currPos.y === 0;
      const isHide = currPos.y < prevPos.y;

      if (isAtTop || isAtTop !== hideBackground) {
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
      <NavOverlay getTopBarHeight={getComponentHeight} />
      <Box
        // @ts-ignore
        ref={componentRef}
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
        <WidthWrapper>
          <Flex align="center" justify="space-between" paddingY="8px">
            <Flex align="center">
              <ChakraLink onClick={handleCusecIconClick}>
                <Logo style={{ height: "32px", width: "auto" }} />
              </ChakraLink>
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
                {router.pathname === "/"
                  ? locations.map((location) => (
                      <AnchorLink
                        key={location.href}
                        offset={getComponentHeight}
                        href={`${location.href}`}
                        style={{ marginRight: "32px", outline: "none" }}
                      >
                        <NavBarLink>{location.label}</NavBarLink>
                      </AnchorLink>
                    ))
                  : locations.map((location) => (
                      <Link key={location.href} href={`/${location.href}`}>
                        <ChakraLink
                          marginRight="32px"
                          textDecoration="none !important"
                        >
                          <NavBarLink>{location.label}</NavBarLink>
                        </ChakraLink>
                      </Link>
                    ))}
              </Flex>
              <Flex>
                <VerticalBar />
              </Flex>
              <Flex direction="row">
                <Link href="/hackacomm">
                  <ChakraLink marginX="32px" textDecoration="none !important">
                    <NavBarLink>HackaComm</NavBarLink>
                  </ChakraLink>
                </Link>
              </Flex>
              <Flex>
                <VerticalBar />
              </Flex>
              <Socials marginLeft="32px" />
            </Flex>
          </Flex>
        </WidthWrapper>
      </Box>
    </>
  );
}

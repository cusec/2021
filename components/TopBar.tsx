import { chakra, Flex, Link } from "@chakra-ui/react";
import Socials from "@/components/Socials";
import React, { useEffect, useRef, useState } from "react";
import { Body } from "@/components/core/Text";
import styled from "@emotion/styled";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { locations } from "@/src/constants";
import AnchorLink from "react-anchor-link-smooth-scroll";
import theme from "@/src/theme";
import { WidthWrapper } from "@/components/core/Layout";
import { useRouter } from "next/router";
import NextLink from "next/link";
import ScheduleModal from "@/components/ScheduleModal";
import TopBarWrapper from "@/components/TopBarWrapper";
import TopBarLogo from "@/components/TopBarLogo";

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

const MyAnchorLink = chakra(AnchorLink, {
  baseStyle: {
    marginRight: "32px",
    outline: "none",
    _focus: {
      boxShadow: "0 0 0 3px rgba(66,153,225,0.6)",
    },
  },
});

export default function TopBar(): React.ReactElement {
  const [hideBackground, setHideBackground] = useState(true);
  const [hideOnScroll, setHideOnScroll] = useState(false);

  const componentRef = useRef();
  const router = useRouter();

  const getComponentHeight = () => {
    const element = componentRef.current as HTMLElement | undefined;
    return element ? element.getBoundingClientRect().height : 0;
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
      <TopBarWrapper>
        <WidthWrapper>
          <Flex align="center" justify="space-between" paddingY="8px">
            <TopBarLogo />
            <Flex
              align="center"
              display={["none", "none", "none", "none", "flex"]}
            >
              <Flex direction="row">
                {router.pathname === "/"
                  ? locations.map((location) => (
                      <MyAnchorLink
                        key={location.href}
                        offset={getComponentHeight}
                        href={`${location.href}`}
                      >
                        <NavBarLink>{location.label}</NavBarLink>
                      </MyAnchorLink>
                    ))
                  : locations.map((location) => (
                      <NextLink
                        key={location.href}
                        href={`/${location.href}`}
                        passHref
                      >
                        <Link
                          marginRight="32px"
                          _hover={{ textDecoration: "none" }}
                        >
                          <NavBarLink>{location.label}</NavBarLink>
                        </Link>
                      </NextLink>
                    ))}
              </Flex>
              <VerticalBar />
              <ScheduleModal />
              <NextLink href="/speakers" passHref>
                <Link marginX="16px" _hover={{ textDecoration: "none" }}>
                  <NavBarLink>Speakers</NavBarLink>
                </Link>
              </NextLink>
              <NextLink href="/hackacomm" passHref>
                <Link
                  marginLeft="16px"
                  marginRight="32px"
                  _hover={{ textDecoration: "none" }}
                >
                  <NavBarLink>HackaComm</NavBarLink>
                </Link>
              </NextLink>
              <VerticalBar />
              <Socials marginLeft="32px" />
            </Flex>
          </Flex>
        </WidthWrapper>
      </TopBarWrapper>
    </>
  );
}

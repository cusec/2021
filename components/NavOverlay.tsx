import { ReactElement, Fragment } from "react";
import Link from "next/link";
import useStore from "@/src/store";
import styled from "@emotion/styled";
import { Flex, Box, Divider, Link as ChakraLink } from "@chakra-ui/react";
import ColoredSocialIcons from "@/components/ColoredSocialIcons";
import { locations } from "@/src/constants";
import { Headline } from "@/components/core/Text";
import AnchorLink from "react-anchor-link-smooth-scroll";
import theme from "@/src/theme";
import { useRouter } from "next/router";

export const GradientNavItemLink = styled(Headline)`
  font-size: 24px;
  margin: 16px 0;
  display: inline-block;
  background: linear-gradient(
    135deg,
    ${theme.colors.brand.teal},
    ${theme.colors.brand.dark_blue}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default function NavOverlay(props: {
  getTopBarHeight: () => number;
}): ReactElement {
  const isNavOverlayOpen = useStore((state) => state.isNavOverlayOpen);
  const setNavOverlayOpen = useStore((state) => state.setNavOverlayOpen);
  const router = useRouter();

  const handleNavItemClick = () => {
    setNavOverlayOpen(false);
  };

  return (
    <Flex
      opacity={isNavOverlayOpen ? 1 : 0}
      visibility={isNavOverlayOpen ? "visible" : "hidden"}
      transition="opacity 0.4s, visibility 0.4s"
      position="fixed"
      width="100%"
      height="100vh"
      zIndex={10}
      direction="column"
      align="center"
      justify="center"
      background="white"
    >
      <Box>
        {router.pathname === "/"
          ? locations.map((location) => (
              <Fragment key={location.href}>
                <AnchorLink
                  offset={props.getTopBarHeight}
                  href={location.href}
                  onClick={handleNavItemClick}
                >
                  <GradientNavItemLink>{location.label}</GradientNavItemLink>
                </AnchorLink>
                <br />
              </Fragment>
            ))
          : locations.map((location) => (
              <Fragment key={location.href}>
                <Link href={`/${location.href}`}>
                  <ChakraLink>
                    <GradientNavItemLink>{location.label}</GradientNavItemLink>
                  </ChakraLink>
                </Link>
                <br />
              </Fragment>
            ))}
        <Divider />
        <Box>
          <Link href="/hackacomm">
            <ChakraLink>
              <GradientNavItemLink>HackaComm</GradientNavItemLink>
            </ChakraLink>
          </Link>
          <br />
        </Box>
        <Divider marginBottom="28px" />
        <Flex>
          <ColoredSocialIcons />
        </Flex>
      </Box>
    </Flex>
  );
}

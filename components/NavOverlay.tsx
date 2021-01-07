import { ReactElement } from "react";
import NextLink from "next/link";
import useStore from "@/src/store";
import styled from "@emotion/styled";
import { chakra, Flex, Box, Divider, Link } from "@chakra-ui/react";
import ColoredSocialIcons from "@/components/ColoredSocialIcons";
import { locations } from "@/src/constants";
import { Headline } from "@/components/core/Text";
import AnchorLink from "react-anchor-link-smooth-scroll";
import theme from "@/src/theme";
import { useRouter } from "next/router";
import ScheduleModal from "@/components/ScheduleModal";

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

const MyAnchorLink = chakra(AnchorLink, {
  baseStyle: {
    outline: "none",
    _focus: {
      boxShadow: "0 0 0 3px rgba(66,153,225,0.6)",
    },
  },
});

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
              <Box key={location.href}>
                <MyAnchorLink
                  offset={props.getTopBarHeight}
                  href={location.href}
                  onClick={handleNavItemClick}
                >
                  <GradientNavItemLink>{location.label}</GradientNavItemLink>
                </MyAnchorLink>
              </Box>
            ))
          : locations.map((location) => (
              <Box key={location.href}>
                <NextLink href={`/${location.href}`} passHref>
                  <Link>
                    <GradientNavItemLink>{location.label}</GradientNavItemLink>
                  </Link>
                </NextLink>
              </Box>
            ))}
        <Divider />
        <Box>
          <ScheduleModal mobile={true} />
        </Box>
        <Box>
          <NextLink href="/speakers" passHref>
            <Link>
              <GradientNavItemLink>Speakers</GradientNavItemLink>
            </Link>
          </NextLink>
        </Box>
        <Box>
          <NextLink href="/hackacomm" passHref>
            <Link>
              <GradientNavItemLink>HackaComm</GradientNavItemLink>
            </Link>
          </NextLink>
        </Box>
        <Divider marginBottom="28px" />
        <Flex>
          <ColoredSocialIcons />
        </Flex>
      </Box>
    </Flex>
  );
}

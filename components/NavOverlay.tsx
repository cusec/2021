import { ReactElement, Fragment } from "react";
import useStore from "@/src/store";
import styled from "@emotion/styled";
import { Flex, Box } from "@chakra-ui/core";
import ColoredSocialIcons from "@/components/ColoredSocialIcons";
import { locations } from "@/src/constants";
import { Headline } from "@/components/core/Text";
import AnchorLink from "react-anchor-link-smooth-scroll";
import theme from "@/src/theme";

export const GradientNavItemLink = styled(Headline)`
  margin-bottom: 5vh;
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
        {locations.map((location) => (
          <Fragment key={location.href}>
            <AnchorLink
              offset={props.getTopBarHeight}
              href={location.href}
              onClick={handleNavItemClick}
            >
              <GradientNavItemLink fontSize="3xl">
                {location.label}
              </GradientNavItemLink>
            </AnchorLink>
            <br />
          </Fragment>
        ))}
        <Flex>
          <ColoredSocialIcons />
        </Flex>
      </Box>
    </Flex>
  );
}

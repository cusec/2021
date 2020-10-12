import { ReactElement, Fragment } from "react";
import useStore from "@/src/store";
import { Flex, Box } from "@chakra-ui/core";
import ColoredSocialIcons from "@/components/ColoredSocialIcons";
import { locations } from "@/src/constants";
import { GradientNavItemLink } from "@/components/StyledCore";
import AnchorLink from "react-anchor-link-smooth-scroll";

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
      height="100%"
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

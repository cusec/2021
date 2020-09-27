import { ReactElement } from "react";
import useStore from "@/src/store";
import { Flex, Box } from "@chakra-ui/core";
import ColoredSocialIcons from "@/components/ColoredSocialIcons";
import { LocationHashEnum } from "@/src/enums";
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
        <AnchorLink
          offset={props.getTopBarHeight}
          href={`#${LocationHashEnum.About}`}
          onClick={handleNavItemClick}
        >
          <GradientNavItemLink fontSize="3xl">About</GradientNavItemLink>
        </AnchorLink>
        <br />
        <AnchorLink
          offset={props.getTopBarHeight}
          href={`#${LocationHashEnum.Sponsors}`}
          onClick={handleNavItemClick}
        >
          <GradientNavItemLink fontSize="3xl">Sponsors</GradientNavItemLink>
        </AnchorLink>
        <br />
        <AnchorLink
          offset={props.getTopBarHeight}
          href={`#${LocationHashEnum.FAQ}`}
          onClick={handleNavItemClick}
        >
          <GradientNavItemLink fontSize="3xl">FAQ</GradientNavItemLink>
        </AnchorLink>
        <br />
        <Flex>
          <ColoredSocialIcons />
        </Flex>
      </Box>
    </Flex>
  );
}

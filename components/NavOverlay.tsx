import { ReactElement } from "react";
import useStore from "../src/store";
import { Flex, Box } from "@chakra-ui/core";
import ColoredSocialIcons from "@/components/ColoredSocialIcons";
import { LocationHashEnum } from "../src/enums";
import { GradientNavItemLink } from "@/components/StyledCore";

export default function NavOverlay(): ReactElement {
  const isNavOverlayOpen = useStore((state) => state.isNavOverlayOpen);
  const setNavOverlayOpen = useStore((state) => state.setNavOverlayOpen);

  const handleNavItemClick = () => {
    setNavOverlayOpen(false);
  };

  return (
    <Flex
      display={["flex", "flex", "flex", "none"]}
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
        <GradientNavItemLink
          fontSize="3xl"
          onClick={handleNavItemClick}
          href={`#${LocationHashEnum.About}`}
        >
          About
        </GradientNavItemLink>
        <br />
        <GradientNavItemLink
          fontSize="3xl"
          onClick={handleNavItemClick}
          href={`#${LocationHashEnum.Sponsors}`}
        >
          Sponsors
        </GradientNavItemLink>
        <br />
        <GradientNavItemLink
          fontSize="3xl"
          onClick={handleNavItemClick}
          href={`#${LocationHashEnum.FAQ}`}
        >
          FAQ
        </GradientNavItemLink>
        <br />
        <Flex>
          <ColoredSocialIcons />
        </Flex>
      </Box>
    </Flex>
  );
}

import { ReactElement } from "react";
import useStore from "../src/store";
import { Flex, Box, Text } from "@chakra-ui/core";
import styled from "@emotion/styled";
import ColoredSocialIcons from "@/components/ColoredSocialIcons";

const StyledNavItemText = styled(Text)`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-family: "Metropolis", sans-serif;
  margin-bottom: 5vh;
  display: inline-block;
  background: linear-gradient(135deg, #09d8c4, #22306d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default function NavOverlay(): ReactElement {
  const isNavOverlayOpen = useStore((state) => state.isNavOverlayOpen);

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
        <StyledNavItemText fontSize="3xl">About</StyledNavItemText>
        <br />
        <StyledNavItemText fontSize="3xl">Sponsors</StyledNavItemText>
        <br />
        <StyledNavItemText fontSize="3xl">FAQ</StyledNavItemText>
        <br />
        <Flex>
          <ColoredSocialIcons />
        </Flex>
      </Box>
    </Flex>
  );
}

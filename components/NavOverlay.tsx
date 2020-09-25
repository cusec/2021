import { ReactElement, useEffect, useState } from "react";
import useStore from "../src/store";
import { Flex, Stack } from "@chakra-ui/core";
import { TextStyledBold } from "@/components/StyledCore";
import useScreenWidth from "@/components/hooks/useScreenWidth";

export default function NavOverlay(): ReactElement {
  const isNavOverlayOpen = useStore((state) => state.isNavOverlayOpen);
  const setNavOverlayOpen = useStore((state) => state.setNavOverlayOpen);
  const actualWidth = useScreenWidth();
  const [isMobile, setMobile] = useState(true);

  useEffect(() => {
    const currentMobile = actualWidth <= 992;

    if (currentMobile !== isMobile) {
      setMobile(currentMobile);
      setNavOverlayOpen(false);
    }
  }, [actualWidth, isMobile, setNavOverlayOpen]);

  if (!isNavOverlayOpen) {
    return <></>;
  }

  return (
    <Flex
      display={["flex", "flex", "flex", "none"]}
      position="fixed"
      width="100%"
      height="100%"
      zIndex={10}
      direction="column"
      align="center"
      justify="center"
      background="white"
    >
      <Stack>
        <TextStyledBold fontSize={["xl", "3xl"]}>About</TextStyledBold>
        <TextStyledBold fontSize={["xl", "3xl"]}>Sponsors</TextStyledBold>
        <TextStyledBold fontSize={["xl", "3xl"]}>FAQ</TextStyledBold>
      </Stack>
    </Flex>
  );
}

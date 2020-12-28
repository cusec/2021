import { WidthWrapper } from "@/components/core/Layout";
import { Box, Flex } from "@chakra-ui/react";
import HamburgerMenu from "react-hamburger-menu";
import useStore from "@/src/store";
import { ReactElement, useRef } from "react";
import NavOverlay from "@/components/NavOverlay";
import TopBarWrapper from "@/components/TopBarWrapper";
import TopBarLogo from "@/components/TopBarLogo";

export default function MobileMenu(): ReactElement {
  const isNavOverlayOpen = useStore((state) => state.isNavOverlayOpen);
  const setNavOverlayOpen = useStore((state) => state.setNavOverlayOpen);
  const componentRef = useRef();

  const getComponentHeight = () => {
    const element = componentRef.current as HTMLElement | undefined;
    return element ? element.getBoundingClientRect().height : 0;
  };

  return (
    <>
      <NavOverlay getTopBarHeight={getComponentHeight} />
      <TopBarWrapper>
        <WidthWrapper>
          <Flex align="center" justify="space-between" paddingY="8px">
            <TopBarLogo />
            <Box
              display={["block", "block", "block", "block", "none"]}
              cursor="pointer"
            >
              <HamburgerMenu
                isOpen={isNavOverlayOpen}
                menuClicked={() => setNavOverlayOpen(!isNavOverlayOpen)}
                height={17}
                width={28}
                strokeWidth={3}
                rotate={180}
              />
            </Box>
          </Flex>
        </WidthWrapper>
      </TopBarWrapper>
    </>
  );
}

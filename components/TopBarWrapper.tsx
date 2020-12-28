import { ReactElement, ReactNode, useEffect, useRef, useState } from "react";
import { Box } from "@chakra-ui/react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import useStore from "@/src/store";

export default function TopBarWrapper({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const [hideBackground, setHideBackground] = useState(true);
  const [hideOnScroll, setHideOnScroll] = useState(false);
  const isNavOverlayOpen = useStore((state) => state.isNavOverlayOpen);

  const componentRef = useRef();

  const getComponentHeight = () => {
    const element = componentRef.current as HTMLElement | undefined;
    return element ? element.getBoundingClientRect().height : 0;
  };

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

  useEffect(() => {
    setHideBackground(document.body.getBoundingClientRect().top === 0);
  }, []);

  return (
    <>
      <Box
        // @ts-ignore
        ref={componentRef}
        position="fixed"
        top="0"
        width="100%"
        transform={`translateY(${
          hideOnScroll && !isNavOverlayOpen ? -getComponentHeight() : 0
        }px)`}
        background={hideBackground || isNavOverlayOpen ? undefined : "white"}
        boxShadow={
          hideBackground || hideOnScroll || isNavOverlayOpen
            ? undefined
            : "0 0 8px rgba(0, 0, 0, 0.2)"
        }
        transition="transform 0.2s, background 0.5s, box-shadow 0.5s"
        zIndex={100}
      >
        {children}
      </Box>
    </>
  );
}

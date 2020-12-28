import Logo from "./svgs/logo.svg";
import { Flex, Link as ChakraLink } from "@chakra-ui/react";
import useStore from "@/src/store";
import { ReactElement } from "react";
import { useRouter } from "next/router";

export default function TopBarLogo(): ReactElement {
  const router = useRouter();
  const setNavOverlayOpen = useStore((state) => state.setNavOverlayOpen);

  const handleCusecIconClick = () => {
    if (router.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }

    setNavOverlayOpen(false);
  };

  return (
    <Flex align="center">
      <ChakraLink onClick={handleCusecIconClick}>
        <Logo style={{ height: "32px", width: "auto" }} />
      </ChakraLink>
    </Flex>
  );
}

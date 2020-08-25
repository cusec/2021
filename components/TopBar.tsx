import { Flex } from "@chakra-ui/core";
import Socials from "@/components/Socials";
import Logo from "./svgs/logo.svg";

export default function TopBar() {
  return (
    <>
      <Flex
        visibility={["hidden", "hidden", "hidden", "visible"]}
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        paddingX={["0.2in", "0.2in", "10vw", "10vw"]}
        paddingY="8px"
        // TODO: change position to "fixed" when navigation is added (and also add box shadow, top bar hiding, hamburger menu, etc.)
        position="absolute"
        top="0"
      >
        <Flex alignItems="center">
          <Logo style={{ height: "32px", width: "auto" }} />
        </Flex>
        <Flex alignItems="center">
          <Socials marginLeft="32px" />
        </Flex>
      </Flex>
    </>
  );
}

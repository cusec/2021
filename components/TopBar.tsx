import { Flex, Image } from "@chakra-ui/core";
import Socials from "@/components/Socials";

export default function TopBar() {
  return (
    <>
      <Flex
        display={["none", "none", "none", "flex"]}
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        paddingX={["0.2in", "0.2in", "10vw", "10vw"]}
        paddingY="8px"
        background="white"
        // TODO: change position to "fixed" when navigation is added (and also add box shadow, top bar hiding, hamburger menu, etc.)
        position="absolute"
        top="0"
      >
        <Flex alignItems="center">
          <Image height="32px" src="logo.svg" alt="CUSEC logo" />
        </Flex>
        <Flex alignItems="center">
          <Socials marginLeft="32px" />
        </Flex>
      </Flex>
    </>
  );
}

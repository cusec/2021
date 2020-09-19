import { Flex } from "@chakra-ui/core";
import Socials from "@/components/Socials";
import Logo from "./svgs/logo.svg";
import React from "react";
import { NavBarLink } from "./StyledCore";
import styled from "@emotion/styled";

const VerticalBar = styled.div`
  display: inline-block;
  border-left: 1px solid #ccc;
  margin: 0 10px;
  height: 35px;
`;

export default function TopBar(): React.ReactElement {
  return (
    <>
      <Flex
        align="center"
        justify="space-between"
        paddingX={["0.2in", "0.2in", "10vw", "10vw"]}
        paddingY="8px"
        position="fixed"
        top="0"
        visibility={["hidden", "hidden", "hidden", "visible"]}
        width="100%"
      >
        <Flex align="center">
          <Logo style={{ height: "32px", width: "auto" }} />
        </Flex>
        <Flex align="center">
          <Flex direction="row">
            <NavBarLink>About</NavBarLink>
            <NavBarLink>Sponsors</NavBarLink>
            <NavBarLink marginRight="24px">FAQ</NavBarLink>
          </Flex>
          <Flex>
            <VerticalBar />
          </Flex>
          <Socials marginLeft="32px" />
        </Flex>
      </Flex>
    </>
  );
}

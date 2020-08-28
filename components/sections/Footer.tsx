import styled from "@emotion/styled";
import Logo from "../svgs/logo.svg";
import { Flex, Text } from "@chakra-ui/core";
import React from "react";

const BaseContainer = styled.div`
  background-color: #fafafa;
  height: 4rem;
  width: 100%;
  display: flex;
`;

const FooterText = styled(Text)`
  font-family: "Inter", sans-serif;
  margin: 5px 8px;
  color: #616161;
`;

export default function Footer(): React.ReactElement {
  return (
    <>
      <BaseContainer>
        <Flex
          flexDirection={["column", "column", "row", "row"]}
          justifyContent={[
            "flex-start",
            "flex-start",
            "space-between",
            "space-between",
          ]}
        >
          <Flex alignItems="center" justifyContent="center">
            <FooterText fontSize={["xs", "xs", "xs", "sm"]}>
              Contact CUSEC
            </FooterText>
            <FooterText fontSize={["xs", "xs", "xs", "sm"]}>
              Open Source
            </FooterText>
            <FooterText fontSize={["xs", "xs", "xs", "sm"]}>
              Icons from flaticons.com
            </FooterText>
          </Flex>
          <Flex alignItems="center" justifyContent="center">
            <Logo style={{ height: "24px", width: "auto" }} />
          </Flex>
          <Flex alignItems="center" justifyContent="center">
            <FooterText fontSize={["xs", "xs", "xs", "sm"]}>
              &copy; CUSEC 2021
            </FooterText>
            <FooterText fontSize={["xs", "xs", "xs", "sm"]}>
              Code of Conduct
            </FooterText>
            <FooterText fontSize={["xs", "xs", "xs", "sm"]}>
              Privacy Policy
            </FooterText>
          </Flex>
        </Flex>
      </BaseContainer>
    </>
  );
}

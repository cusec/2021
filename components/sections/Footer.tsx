import styled from "@emotion/styled";
import Logo from "../svgs/logo.svg";
import { Flex, Link, Text } from "@chakra-ui/core";
import React from "react";

const BaseContainer = styled.div`
  background-color: #fafafa;
  height: 4rem;
  width: 100%;
  display: flex;
  border-top: 1px solid #f1f1f1;
`;

const FooterText = styled(Text)`
  color: #616161;
  font-family: "Inter", sans-serif;
  margin: 5px 8px;
  padding-bottom: 1px;
  position: relative;
`;

const FooterLink = styled(Link)`
  color: #616161;
  font-family: "Inter", sans-serif;
  margin: 5px 8px;
  padding-bottom: 1px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    height: 2px;
    width: 100%;
    left: 0;
    bottom: 0;
    opacity: 0;
    transform: translateY(3px);
    background: #11a0a7;
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  &:hover::after {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default function Footer(): React.ReactElement {
  return (
    <>
      <BaseContainer>
        <Flex
          width="100%"
          flexDirection={["column", "column", "row", "row"]}
          justifyContent={[
            "flex-start",
            "flex-start",
            "space-between",
            "space-between",
          ]}
        >
          <Flex
            alignItems="center"
            justifyContent="center"
            marginLeft={["0", "0", "2vw", "5vw"]}
          >
            <FooterLink
              _focus={{}}
              _hover={{}}
              fontSize={["xs", "xs", "xs", "sm"]}
              href="mailto:info@cusec.net"
            >
              Contact CUSEC
            </FooterLink>
            <FooterLink
              _focus={{}}
              _hover={{}}
              fontSize={["xs", "xs", "xs", "sm"]}
              href="https://github.com/cusec/2021"
              rel="noopener noreferrer"
              target="_blank"
            >
              Open Source
            </FooterLink>
            <FooterLink
              _focus={{}}
              _hover={{}}
              fontSize={["xs", "xs", "xs", "sm"]}
              href="https://www.flaticon.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Icons from flaticon.com*
            </FooterLink>
          </Flex>
          <Flex alignItems="center" justifyContent="center">
            <Logo style={{ height: "24px", width: "auto" }} />
          </Flex>
          <Flex
            alignItems="center"
            justifyContent="center"
            marginRight={["0", "0", "2vw", "5vw"]}
          >
            <FooterText fontSize={["xs", "xs", "xs", "sm"]}>
              &copy; CUSEC 2021
            </FooterText>
            <FooterLink
              _focus={{}}
              _hover={{}}
              fontSize={["xs", "xs", "xs", "sm"]}
              rel="noopener noreferrer"
              target="_blank"
            >
              Code of Conduct
            </FooterLink>
            <FooterLink
              _focus={{}}
              _hover={{}}
              fontSize={["xs", "xs", "xs", "sm"]}
              rel="noopener noreferrer"
              target="_blank"
            >
              Privacy Policy
            </FooterLink>
          </Flex>
        </Flex>
      </BaseContainer>
    </>
  );
}

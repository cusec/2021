import styled from "@emotion/styled";
import Logo from "../svgs/logo.svg";
import { Flex, Text } from "@chakra-ui/core";
import React from "react";
import { FooterLink } from "../StyledCore";
import FooterModal from "@/components/FooterModal";
import { codeOfConductText, privacyPolicyText } from "../../src/data";

const BaseContainer = styled.div`
  background-color: #fafafa;
  border-top: 1px solid #f1f1f1;
  display: flex;
  height: 100%;
  width: 100%;
`;

const FooterText = styled(Text)`
  color: #616161;
  font-family: "Inter", sans-serif;
  margin: 5px 8px;
  padding-bottom: 1px;
  position: relative;
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
            paddingBottom={["0", "0", "0.15in", "0.15in"]}
            paddingTop="0.15in"
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
          <Flex alignItems="center" justifyContent="center" paddingY="0.1in">
            <Logo style={{ height: "24px", width: "auto" }} />
          </Flex>
          <Flex
            alignItems="center"
            justifyContent="center"
            marginRight={["0", "0", "2vw", "5vw"]}
            paddingBottom="0.15in"
            paddingTop={["0", "0", "0.15in", "0.15in"]}
          >
            <FooterText fontSize={["xs", "xs", "xs", "sm"]}>
              &copy; CUSEC 2021
            </FooterText>
            <FooterModal
              linkBody="Code of Conduct"
              modalBody={codeOfConductText}
            />
            <FooterModal
              linkBody="Privacy Policy"
              modalBody={privacyPolicyText}
            />
          </Flex>
        </Flex>
      </BaseContainer>
    </>
  );
}

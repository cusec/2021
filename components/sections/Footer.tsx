import styled from "@emotion/styled";
import Logo from "../svgs/logo.svg";
import React, { ReactElement } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { GreyBackground } from "@/components/core/Layout";
import { FooterLink } from "@/components/core/Text";
import FooterModal from "@/components/FooterModal";
import {
  attributionsText,
  codeOfConductText,
  privacyPolicyText,
  termsOfService,
} from "@/src/data";
import { WidthWrapper } from "@/components/core/Layout";

const FooterText = styled(Text)`
  color: #616161;
  font-family: "Inter", sans-serif;
  margin: 5px 8px;
  padding-bottom: 1px;
  position: relative;
`;

export default function Footer(): ReactElement {
  return (
    <>
      <GreyBackground>
        <WidthWrapper>
          <Flex
            width="100%"
            flexDirection={["column", "column", "column", "row"]}
            justifyContent={[
              "flex-start",
              "flex-start",
              "space-between",
              "space-between",
            ]}
          >
            <Flex
              alignItems="baseline"
              justifyContent="center"
              paddingBottom={["0", "0", "0.15in", "0.15in"]}
              paddingTop="0.15in"
            >
              <FooterText fontSize={["xs", "xs", "xs", "sm"]}>
                &copy; CUSEC 2021
              </FooterText>
              <FooterLink
                _focus={{}}
                _hover={{}}
                fontSize={["xs", "xs", "xs", "sm"]}
                href="https://github.com/cusec/2021"
                isExternal
              >
                Open Source
              </FooterLink>
              <FooterModal
                linkBody="Attributions"
                modalBody={attributionsText}
              />
            </Flex>
            <Flex alignItems="center" justifyContent="center" paddingY="0.1in">
              <Logo style={{ height: "24px", width: "auto" }} />
            </Flex>
            <Flex
              alignItems="baseline"
              justifyContent="center"
              paddingBottom="0.15in"
              paddingTop={["0", "0", "0.15in", "0.15in"]}
            >
              <FooterModal
                linkBody="Code of Conduct"
                modalBody={codeOfConductText}
              />
              <FooterModal
                linkBody="Privacy Policy"
                modalBody={privacyPolicyText}
              />
              <FooterModal linkBody="Terms of Use" modalBody={termsOfService} />
            </Flex>
          </Flex>
        </WidthWrapper>
      </GreyBackground>
    </>
  );
}

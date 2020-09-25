import { Flex } from "@chakra-ui/core";
import React, { ReactElement } from "react";
import EmailListingInput from "@/components/EmailListingInput";
import SocialShareSVG from "../svgs/undraw-social-share.svg";
import {
  GreyBackground,
  TextStyled,
  TextStyledBold,
} from "@/components/StyledCore";
import ColoredSocialIcons from "@/components/ColoredSocialIcons";

export default function Contact(): ReactElement {
  return (
    <>
      <GreyBackground>
        <Flex direction="row" align="center" justify="space-between">
          <Flex
            direction="column"
            paddingBottom="0.3in"
            paddingLeft={["5vw", "5vw", "10vw", "10vw"]}
            paddingRight={["5vw", "5vw", "0", "0"]}
            paddingTop={["0.5in", "0.5in", "0.75in", "0.75in"]}
          >
            <TextStyledBold fontSize={["xl", "3xl"]}>
              Can&apos;t get enough of CUSEC?
            </TextStyledBold>
            <TextStyled paddingBottom={["0.15in", "0.15in", "0.3in", "0.3in"]}>
              Follow us on our socials. Get updates by signing up for our email
              listing.
            </TextStyled>
            <Flex
              align="center"
              direction="row"
              justify={["center", "flex-start", "flex-start", "flex-start"]}
            >
              <ColoredSocialIcons />
            </Flex>
            <Flex
              justify={["center", "flex-start", "flex-start", "flex-start"]}
              paddingTop={["0.3in", "0.3in", "0.35in", "0.35in"]}
            >
              <EmailListingInput />
            </Flex>
          </Flex>
          <Flex
            paddingY="0.5in"
            paddingRight={["0", "0", "0", "10vw"]}
            display={["none", "none", "none", "flex"]}
          >
            <SocialShareSVG />
          </Flex>
        </Flex>
      </GreyBackground>
    </>
  );
}

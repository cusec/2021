import { Flex } from "@chakra-ui/core";
import React, { ReactElement } from "react";
import EmailListingInput from "@/components/EmailListingInput";
import IGIcon from "../svgs/instagram-coloured-icon.svg";
import EmailIcon from "../svgs/envelope-coloured-icon.svg";
import FBIcon from "../svgs/facebook-coloured-icon.svg";
import TwitterIcon from "../svgs/twitter-coloured-icon.svg";
import SocialShareSVG from "../svgs/undraw-social-share.svg";
import { TextStyled, TextStyledBold } from "@/components/StyledCore";
import SocialLink from "../SocialLink";

export default function Contact(): ReactElement {
  return (
    <>
      <Flex direction="row" align="center">
        <Flex
          direction="column"
          paddingBottom="0.3in"
          paddingTop={["0.5in", "0.5in", "0.75in", "0.75in"]}
          paddingX={["5vw", "5vw", "10vw", "10vw"]}
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
            <Flex paddingRight={["0.15in", "0.15in", "0.2in", "0.25in"]}>
              <SocialLink
                eventType="facebook"
                href="https://www.facebook.com/cusecofficial/"
              >
                <FBIcon />
              </SocialLink>
            </Flex>
            <Flex paddingX={["0.15in", "0.15in", "0.2in", "0.25in"]}>
              <SocialLink eventType="twitter" href="https://twitter.com/cusec">
                <TwitterIcon />
              </SocialLink>
            </Flex>
            <Flex paddingX={["0.15in", "0.15in", "0.2in", "0.25in"]}>
              <SocialLink
                eventType="instagram"
                href="https://www.instagram.com/cusecofficial/"
              >
                <IGIcon />
              </SocialLink>
            </Flex>
            <Flex paddingLeft={["0.15in", "0.15in", "0.2in", "0.25in"]}>
              <SocialLink eventType="email" href="mailto:info@cusec.net">
                <EmailIcon />
              </SocialLink>
            </Flex>
          </Flex>
          <Flex
            justify={["center", "flex-start", "flex-start", "flex-start"]}
            paddingTop={["0.3in", "0.3in", "0.35in", "0.35in"]}
          >
            <EmailListingInput />
          </Flex>
        </Flex>
        <Flex paddingY="0.5in" display={["none", "none", "none", "flex"]}>
          <SocialShareSVG />
        </Flex>
      </Flex>
    </>
  );
}

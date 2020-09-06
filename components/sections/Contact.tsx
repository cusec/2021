import { Flex, Text } from "@chakra-ui/core";
import React, { ReactElement } from "react";
import EmailListingInput from "@/components/EmailListingInput";
import IGIcon from "../svgs/instagram-coloured-icon.svg";
import EmailIcon from "../svgs/envelope-coloured-icon.svg";
import FBIcon from "../svgs/facebook-coloured-icon.svg";
import TwitterIcon from "../svgs/twitter-coloured-icon.svg";
import SocialShareSVG from "../svgs/undraw-social-share.svg";

export default function Contact(): ReactElement {
  return (
    <>
      <Flex direction="row">
        <Flex
          direction="column"
          paddingBottom={["0.2in", "0.2in", "0.3in", "0.3in"]}
          paddingTop={["0.25in", "0.25in", "0.75in", "0.75in"]}
          paddingX={["5vw", "5vw", "10vw", "10vw"]}
        >
          <Text fontSize={["xl", "3xl"]}>Can&apos;t get enough of CUSEC?</Text>
          <Text>
            Follow us on our socials. Get updates by signing up for our email
            listing.
          </Text>
          <Flex direction="row">
            <FBIcon />
            <TwitterIcon />
            <IGIcon />
            <EmailIcon />
          </Flex>
          <EmailListingInput />
        </Flex>
        <Flex>
          <SocialShareSVG />
        </Flex>
      </Flex>
    </>
  );
}

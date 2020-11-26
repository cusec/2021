import { Box, Flex } from "@chakra-ui/core";
import React, { ReactElement } from "react";
import EmailListingInput from "@/components/EmailListingInput";
import SocialShareSVG from "../svgs/undraw-social-share.svg";
import ColoredSocialIcons from "@/components/ColoredSocialIcons";
import { WidthWrapper } from "@/components/core/Layout";
import { BodyPrimary, HeadlinePrimary } from "@/components/core/Text";
import { FirestoreCollectionEnum } from "@/src/enums";

export default function Contact(): ReactElement {
  return (
    <WidthWrapper>
      <Flex
        direction="row"
        align="center"
        justify="space-between"
        paddingY="0.75in"
      >
        <Flex direction="column">
          <HeadlinePrimary>Can&apos;t get enough of CUSEC?</HeadlinePrimary>
          <BodyPrimary paddingBottom="0.15in">
            Follow us on our socials. Get updates by signing up for our email
            listing.
          </BodyPrimary>
          <Flex
            align="center"
            direction="row"
            justify={["center", "start", "start", "start"]}
          >
            <ColoredSocialIcons />
          </Flex>
          <Flex
            justify={["center", "start", "start", "start"]}
            marginTop={["0.3in", "0.3in", "0.35in", "0.35in"]}
            marginBottom="24px"
          >
            <EmailListingInput
              collection={FirestoreCollectionEnum.GeneralEmails}
              placeholder="Stay connected by email"
              width="3in"
            />
          </Flex>
        </Flex>
        <Box display={["none", "none", "none", "flex"]} width="420px">
          <SocialShareSVG width="100%" height="100%" />
        </Box>
      </Flex>
    </WidthWrapper>
  );
}

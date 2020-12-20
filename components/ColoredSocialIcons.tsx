import { ReactElement } from "react";
import IGIcon from "./svgs/instagram-coloured-icon.svg";
import EmailIcon from "./svgs/envelope-coloured-icon.svg";
import FBIcon from "./svgs/facebook-coloured-icon.svg";
import TwitterIcon from "./svgs/twitter-coloured-icon.svg";
import SocialLink from "./SocialLink";
import { Flex } from "@chakra-ui/react";

export default function ColoredSocialIcons(): ReactElement {
  return (
    <>
      <Flex paddingRight={["0.15in", "0.15in", "0.2in", "0.25in"]}>
        <SocialLink
          eventtype="facebook"
          href="https://www.facebook.com/cusecofficial/"
        >
          <FBIcon />
        </SocialLink>
      </Flex>
      <Flex paddingX={["0.15in", "0.15in", "0.2in", "0.25in"]}>
        <SocialLink eventtype="twitter" href="https://twitter.com/cusec">
          <TwitterIcon />
        </SocialLink>
      </Flex>
      <Flex paddingX={["0.15in", "0.15in", "0.2in", "0.25in"]}>
        <SocialLink
          eventtype="instagram"
          href="https://www.instagram.com/cusecofficial/"
        >
          <IGIcon />
        </SocialLink>
      </Flex>
      <Flex paddingLeft={["0.15in", "0.15in", "0.2in", "0.25in"]}>
        <SocialLink eventtype="email" href="mailto:info@cusec.net">
          <EmailIcon />
        </SocialLink>
      </Flex>
    </>
  );
}

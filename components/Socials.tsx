import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import React, { ReactElement } from "react";
import SocialLink from "@/components/SocialLink";
import styled from "@emotion/styled";

const StyledIcon = styled(FontAwesomeIcon)`
  width: 20px !important;
  height: auto;
`;

interface PropTypes {
  [prop: string]: string;
}

export default function Socials(props: PropTypes): ReactElement {
  return (
    <>
      <SocialLink
        {...props}
        eventtype="facebook"
        href="https://www.facebook.com/cusecofficial/"
      >
        <StyledIcon icon={faFacebookSquare} />
      </SocialLink>
      <SocialLink
        {...props}
        eventtype="twitter"
        href="https://twitter.com/cusec"
      >
        <StyledIcon icon={faTwitterSquare} />
      </SocialLink>
      <SocialLink
        {...props}
        eventtype="instagram"
        href="https://www.instagram.com/cusecofficial/"
      >
        <StyledIcon icon={faInstagram} />
      </SocialLink>
    </>
  );
}

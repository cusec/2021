import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import React, { ReactElement } from "react";
import SocialLink from "@/components/SocialLink";

const StyledIcon = styled(FontAwesomeIcon)`
  width: 20px;
`;

interface PropTypes {
  [prop: string]: string;
}

export default function Socials(props: PropTypes): ReactElement {
  return (
    <>
      <SocialLink
        {...props}
        eventType="facebook"
        href="https://www.facebook.com/cusecofficial/"
      >
        <StyledIcon icon={faFacebookSquare} />
      </SocialLink>
      <SocialLink
        {...props}
        eventType="twitter"
        href="https://twitter.com/cusec"
      >
        <StyledIcon icon={faTwitterSquare} />
      </SocialLink>
      <SocialLink
        {...props}
        eventType="instagram"
        href="https://www.instagram.com/cusecofficial/"
      >
        <StyledIcon icon={faInstagram} />
      </SocialLink>
    </>
  );
}

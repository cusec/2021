import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import React, { ReactElement } from "react";
import SocialLink from "@/components/SocialLink";

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
        <FontAwesomeIcon width="20px" icon={faFacebookSquare} />
      </SocialLink>
      <SocialLink
        {...props}
        eventType="twitter"
        href="https://twitter.com/cusec"
      >
        <FontAwesomeIcon width="20px" icon={faTwitterSquare} />
      </SocialLink>
      <SocialLink
        {...props}
        eventType="instagram"
        href="https://www.instagram.com/cusecofficial/"
      >
        <FontAwesomeIcon width="20px" icon={faInstagram} />
      </SocialLink>
    </>
  );
}

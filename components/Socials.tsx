import styled from "@emotion/styled";
import { Link } from "@chakra-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

import * as firebase from "firebase/app";
import "firebase/analytics";

const StyledIcon = styled(FontAwesomeIcon)`
  width: 16px;
`;

interface PropTypes {
  [prop: string]: string;
}

export default function Socials(props: PropTypes) {
  let analytics: firebase.analytics.Analytics;

  firebase.analytics
    .isSupported()
    .then((isSupported) => {
      if (isSupported) {
        analytics = firebase.analytics();
      }
    })
    .catch(() => {});

  const clickSocial = (type: string) => {
    if (analytics) {
      analytics.logEvent(`click_social: ${type}`);
    }
  };

  return (
    <>
      <Link
        {...props}
        href="https://www.facebook.com/cusecofficial/"
        target="_blank"
        onClick={() => {
          clickSocial("facebook");
        }}
      >
        <StyledIcon icon={faFacebookSquare} />
      </Link>
      <Link
        {...props}
        href="https://twitter.com/cusec"
        target="_blank"
        onClick={() => {
          clickSocial("twitter");
        }}
      >
        <StyledIcon icon={faTwitterSquare} />
      </Link>
      <Link
        {...props}
        href="https://www.instagram.com/cusecofficial/"
        target="_blank"
        onClick={() => {
          clickSocial("instagram");
        }}
      >
        <StyledIcon icon={faInstagram} />
      </Link>
    </>
  );
}

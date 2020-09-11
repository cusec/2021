import { ReactElement } from "react";
import { Link } from "@chakra-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import useStore from "../src/store";

interface PropTypes {
  [prop: string]: string;
}

export default function Socials(props: PropTypes): ReactElement {
  const analytics: firebase.analytics.Analytics = useStore(
    (state) => state.analytics
  );

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
        rel="noopener noreferrer"
        onClick={() => {
          clickSocial("facebook");
        }}
      >
        <FontAwesomeIcon width="20px" icon={faFacebookSquare} />
      </Link>
      <Link
        {...props}
        href="https://twitter.com/cusec"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          clickSocial("twitter");
        }}
      >
        <FontAwesomeIcon width="20px" icon={faTwitterSquare} />
      </Link>
      <Link
        {...props}
        href="https://www.instagram.com/cusecofficial/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          clickSocial("instagram");
        }}
      >
        <FontAwesomeIcon width="20px" icon={faInstagram} />
      </Link>
    </>
  );
}

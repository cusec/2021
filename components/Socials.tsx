import styled from "@emotion/styled";
import { Link } from "@chakra-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import useStore from "../src/store";

const StyledIcon = styled(FontAwesomeIcon)`
  width: 20px;
`;

interface PropTypes {
  [prop: string]: string;
}

export default function Socials(props: PropTypes) {
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
        <StyledIcon icon={faFacebookSquare} />
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
        <StyledIcon icon={faTwitterSquare} />
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
        <StyledIcon icon={faInstagram} />
      </Link>
    </>
  );
}

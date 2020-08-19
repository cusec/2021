import styled from "@emotion/styled";
import { Link } from "@chakra-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

const StyledIcon = styled(FontAwesomeIcon)`
  width: 16px;
`;

interface PropTypes {
  [prop: string]: string;
}

export default function Socials(props: PropTypes) {
  return (
    <>
      <Link {...props} href="https://www.facebook.com/cusecofficial/">
        <StyledIcon icon={faFacebookSquare} />
      </Link>
      <Link {...props} href="https://twitter.com/cusec">
        <StyledIcon icon={faTwitterSquare} />
      </Link>
      <Link {...props} href="https://www.instagram.com/cusecofficial/">
        <StyledIcon icon={faInstagram} />
      </Link>
    </>
  );
}

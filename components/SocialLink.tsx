import React, { ReactElement } from "react";
import { Link } from "@chakra-ui/core";
import useStore from "../src/store";

interface PropTypes {
  [prop: string]: any;
}

export default function SocialLink(props: PropTypes): ReactElement {
  const analytics: firebase.analytics.Analytics = useStore(
    (state) => state.analytics
  );

  const clickSocial = (type: string | Element) => {
    if (analytics) {
      analytics.logEvent(`click_social: ${type}`);
    }
  };

  return (
    <>
      <Link
        {...props}
        _focus={{}}
        rel="noopener noreferrer"
        target="_blank"
        onClick={() => {
          clickSocial(props.eventType);
        }}
      >
        {props.children}
      </Link>
    </>
  );
}

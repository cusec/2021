import React, { ReactElement } from "react";
import { Link } from "@chakra-ui/react";
import useStore from "@/src/store";

interface PropTypes {
  [prop: string]: any;
}

export default function SocialLink(props: PropTypes): ReactElement {
  const analytics = useStore((state) => state.analytics);

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
        isExternal
        onClick={() => {
          clickSocial(props.eventtype);
        }}
      >
        {props.children}
      </Link>
    </>
  );
}

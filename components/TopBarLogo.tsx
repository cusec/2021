import Logo from "./svgs/logo.svg";
import { IconButton } from "@chakra-ui/react";
import useStore from "@/src/store";
import { ReactElement } from "react";
import { useRouter } from "next/router";

export default function TopBarLogo(): ReactElement {
  const router = useRouter();
  const setNavOverlayOpen = useStore((state) => state.setNavOverlayOpen);

  const handleCusecIconClick = () => {
    if (router.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }

    setNavOverlayOpen(false);
  };

  return (
    <IconButton
      aria-label="Home"
      background="none !important"
      size="auto"
      onClick={handleCusecIconClick}
      icon={<Logo style={{ height: "32px", width: "auto" }} />}
    />
  );
}

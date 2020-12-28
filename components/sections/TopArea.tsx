import useViewport from "@/components/hooks/useViewport";
import { ReactElement } from "react";
import TopBar from "@/components/TopBar";
import MobileMenu from "@/components/MobileMenu";

export default function TopArea(): ReactElement {
  const { width } = useViewport();

  return <>{width !== 0 && width > 1280 ? <TopBar /> : <MobileMenu />} </>;
}

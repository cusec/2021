import { ReactElement, useState } from "react";
import Hamburger from "hamburger-react";

export default function HamburgerMenu(): ReactElement {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Hamburger toggled={isOpen} toggle={setOpen} />
    </>
  );
}

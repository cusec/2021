import { useEffect, useState } from "react";

export default function useScreenWidth(): number {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleWidthChange = () => {
      setWidth(window.innerWidth);
    };
    handleWidthChange();
    window.addEventListener("resize", handleWidthChange);

    return () => {
      window.removeEventListener("resize", handleWidthChange);
    };
  }, []);

  return width;
}

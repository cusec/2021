import { ReactElement } from "react";
import { PseudoBox } from "@chakra-ui/core";
import theme from "@/src/theme";

export default function RegisterButton(): ReactElement {
  return (
    <PseudoBox
      as="button"
      height="42px"
      transition="all 0.2s"
      paddingX="42px"
      rounded="9999px"
      fontFamily="Metropolis, sans-serif"
      fontSize="16px"
      fontWeight="bold"
      bg="brand.blue"
      color="white"
      _hover={{ background: theme.colors.brand.dark_teal }}
    >
      Register
    </PseudoBox>
  );
}

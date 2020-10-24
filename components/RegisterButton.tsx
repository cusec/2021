import { ReactElement } from "react";
import { Button } from "@chakra-ui/core";
import theme from "@/src/theme";

export default function RegisterButton(): ReactElement {
  return (
    <Button
      height="42px"
      paddingX="42px"
      rounded="9999px"
      fontFamily="Metropolis, sans-serif"
      fontSize="16px"
      fontWeight="bold"
      bg="brand.blue"
      color="white"
      _hover={{ background: theme.colors.brand.dark_teal }}
      _active={{}}
    >
      Register
    </Button>
  );
}

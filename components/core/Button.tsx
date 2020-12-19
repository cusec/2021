import styled from "@emotion/styled";
import { Button as ChakraButton } from "@chakra-ui/react";
import theme from "@/src/theme";

export const Button = styled(ChakraButton)`
  color: white;
`;

export const ButtonPrimary = styled(Button)`
  font-family: "Metropolis", sans-serif;
  font-weight: bold;
  font-size: 18px;
  height: 45px;
  padding: 0 40px;
  border-radius: 90px;
  background: ${theme.colors.brand.blue};

  &:hover {
    background: ${theme.colors.brand.dark_teal};
  }
`;

export const ButtonPrimaryVariant = styled(ButtonPrimary)`
  background: ${theme.colors.brand.dark_teal};

  &:hover {
    background: ${theme.colors.brand.teal};
  }
`;

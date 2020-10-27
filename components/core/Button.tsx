import styled from "@emotion/styled";
import { Button as ChakraButton } from "@chakra-ui/core";
import theme from "@/src/theme";

export const Button = styled(ChakraButton)`
  color: white;
`;

export const ButtonPrimary = styled(Button)`
  font-family: "Metropolis", sans-serif;
  font-weight: bold;
  font-size: 16px;
  height: 40px;
  padding: 0px 40px;
  border-radius: 20px;
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

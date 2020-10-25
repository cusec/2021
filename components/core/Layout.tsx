import styled from "@emotion/styled";
import { Box } from "@chakra-ui/core";
import theme from "@/src/theme";

export const Wrapper = styled(Box)`
  max-width: 1640px;
`;

export const GreyBackground = styled(Box)`
  border-top: 1px solid ${theme.colors.grey_stroke};
  border-bottom: 1px solid ${theme.colors.grey_stroke};
  background-color: ${theme.colors.grey_fill};
`;

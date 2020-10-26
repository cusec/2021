import styled from "@emotion/styled";
import { Box } from "@chakra-ui/core";
import theme from "@/src/theme";

export const WidthWrapper = styled(Box)`
  max-width: 1640px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.25in;
  padding-right: 0.25in;

  @media only screen and (min-width: ${theme.breakpoints[0]}) {
    padding: 0 0.5in;
  }

  @media only screen and (min-width: ${theme.breakpoints[1]}) {
    padding: 0 0.75in;
  }

  @media only screen and (min-width: ${theme.breakpoints[2]}) {
    padding: 0 1.25in;
  }
`;

export const GreyBackground = styled(Box)`
  border-top: 1px solid ${theme.colors.grey_stroke};
  border-bottom: 1px solid ${theme.colors.grey_stroke};
  background-color: ${theme.colors.grey_fill};
`;

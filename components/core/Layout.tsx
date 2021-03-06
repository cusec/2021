import styled from "@emotion/styled";
import { Box } from "@chakra-ui/react";
import theme from "@/src/theme";

export const WidthWrapper = styled(Box)`
  width: 100%;
  max-width: 1640px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.25in;
  padding-right: 0.25in;

  @media only screen and (min-width: ${theme.breakpoints[1]}) {
    padding-left: 0.5in;
    padding-right: 0.5in;
  }

  @media only screen and (min-width: ${theme.breakpoints[2]}) {
    padding-left: 0.75in;
    padding-right: 0.75in;
  }

  @media only screen and (min-width: ${theme.breakpoints[3]}) {
    padding-left: 1.25in;
    padding-right: 1.25in;
  }
`;

export const GreyBackground = styled(Box)`
  border-top: 1px solid ${theme.colors.grey_stroke};
  border-bottom: 1px solid ${theme.colors.grey_stroke};
  background-color: ${theme.colors.grey_fill};
`;

import styled from "@emotion/styled";
import { Link as ChakraLink, Text } from "@chakra-ui/core";
import theme from "@/src/theme";

export const Headline = styled(Text)`
  font-family: "Metropolis", sans-serif;
  font-weight: bold;
`;

export const HeadlinePrimary = styled(Headline)`
  font-size: 24px;
  margin-bottom: 12px;

  @media only screen and (min-width: ${theme.breakpoints[1]}) {
    font-size: 36px;
  }
`;

export const Body = styled(Text)`
  font-family: "Inter", sans-serif;
`;

export const BodyPrimary = styled(Body)`
  font-size: 16px;
  margin-bottom: 1rem;
`;

export const Link = styled(ChakraLink)`
  font-family: "Inter", sans-serif;
`;

export const LinkPrimary = styled(Link)`
  font-weight: bold;
  font-size: 16px;
  color: ${theme.colors.brand.blue};

  &:hover {
    color: ${theme.colors.brand.dark_teal};
  }
`;

export const LinkPrimaryVariant = styled(Link)`
  font-weight: bold;
  font-size: 16px;
  color: white;
`;

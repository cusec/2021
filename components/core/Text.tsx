import styled from "@emotion/styled";
import { Link as ChakraLink, Text } from "@chakra-ui/react";
import theme from "@/src/theme";
import Linkify from "react-linkify";
import { ReactElement } from "react";

interface LinkifyProps {
  children: ReactElement;
}

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

export const LinkSecondary = styled(Link)`
  font-weight: bold;
  font-size: 16px;
  color: ${theme.colors.brand.teal};

  &:hover {
    color: ${theme.colors.brand.blue};
  }
`;

export const LinkPrimaryVariant = styled(Link)`
  font-weight: bold;
  font-size: 16px;
  color: white;
`;

export const FooterLink = styled(Link)`
  color: #616161;
  margin: 5px 8px;
  padding-bottom: 1px;
  position: relative;

  &:after {
    background: ${theme.colors.brand.teal};
    bottom: 0;
    content: "";
    height: 4px;
    left: 0;
    opacity: 0;
    position: absolute;
    transform: translateY(3px);
    transition: opacity 0.2s ease, transform 0.2s ease;
    width: 100%;
  }

  &:hover::after {
    opacity: 1;
    transform: translateY(0);
  }
`;

export function LinkifyText({ children }: LinkifyProps): ReactElement {
  return (
    <Linkify
      componentDecorator={(decoratedHref, decoratedText, key) => (
        <Link
          isExternal
          href={decoratedHref}
          key={key}
          color={theme.colors.brand.blue}
          _hover={{ color: theme.colors.brand.dark_teal }}
        >
          {decoratedText}
        </Link>
      )}
    >
      {children}
    </Linkify>
  );
}

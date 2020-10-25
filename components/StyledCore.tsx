import styled from "@emotion/styled";
import { Text, Link } from "@chakra-ui/core";
import theme from "@/src/theme";

export const TextStyled = styled(Text)`
  font-family: "Inter", sans-serif;
  margin-bottom: 8px;
`;

export const TextStyledBold = styled(TextStyled)`
  font-weight: 700;
  font-family: "Metropolis", sans-serif;
`;

export const TextStyledExtraBold = styled(TextStyled)`
  font-weight: 900;
`;

export const LinkStyled = styled(Link)`
  font-family: "Inter", sans-serif;
  font-weight: 600;
`;

export const NavBarLink = styled(Text)`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  margin-right: 32px;
  position: relative;

  &:after {
    background: ${theme.colors.brand.teal};
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 4px;
    opacity: 0;
    transform: translateY(3px);
    transition: opacity 0.2s ease, transform 0.2s ease;
    z-index: -1;
  }

  &:hover::after {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const GreyBackground = styled.div`
  border-top: 1px solid ${theme.colors.grey_stroke};
  border-bottom: 1px solid ${theme.colors.grey_stroke};
  background-color: ${theme.colors.grey_fill};
`;

export const FooterLink = styled(Link)`
  color: #616161;
  font-family: "Inter", sans-serif;
  margin: 5px 8px;
  padding-bottom: 1px;
  position: relative;

  &:after {
    background: ${theme.colors.brand.dark_teal};
    bottom: 0;
    content: "";
    height: 2px;
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

export const GradientNavItemLink = styled(Text)`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-family: "Metropolis", sans-serif;
  margin-bottom: 5vh;
  display: inline-block;
  background: linear-gradient(
    135deg,
    ${theme.colors.brand.teal},
    ${theme.colors.brand.dark_blue}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

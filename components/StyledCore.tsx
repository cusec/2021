import styled from "@emotion/styled";
import { Link } from "@chakra-ui/core";
import theme from "@/src/theme";

export const FooterLink = styled(Link)`
  color: #616161;
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

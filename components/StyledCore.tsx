import styled from "@emotion/styled";
import { Text, Link } from "@chakra-ui/core";

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

export const GreyBackground = styled.div`
  border-top: 1px solid #f1f1f1;
  background-color: #fafafa;
`;

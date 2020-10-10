import { ReactElement } from "react";
import { Box, Divider, Flex, Text } from "@chakra-ui/core";
import styled from "@emotion/styled";
import CheckMark from "./svgs/check-mark-coloured.svg";

const CardTitle = styled(Text)`
  font-family: Metropolis;
  font-size: 28px;
`;

const CardPrice = styled(Text)`
  font-family: Metropolis;
  font-size: 36px;
`;

const CardDescription = styled(Text)`
  font-family: Metropolis;
  font-size: 16px;
  color: grey;
`;

const CardBenefit = styled(Text)`
  font-family: Inter;
  font-size: 16px;
`;

export default function PricingCard(props: {
  title: string;
  price: string;
  description: string;
  benefits: string[];
}): ReactElement {
  const { title, price, description, benefits } = props;

  return (
    <>
      <Box
        width="4.5in"
        padding="40px 28px"
        background="white"
        borderRadius="8px"
      >
        <CardTitle textAlign="center">{title}</CardTitle>
        <CardPrice>{price}</CardPrice>
        <CardDescription>{description}</CardDescription>
        <Divider />
        {benefits.map((benefit, index) => (
          <Flex key={`${index}${benefit}`} align="center" marginBottom="24px">
            <Box>
              <CheckMark width="20px" height="20px" />
            </Box>
            <CardBenefit marginLeft="20px">{benefit}</CardBenefit>
          </Flex>
        ))}
      </Box>
    </>
  );
}

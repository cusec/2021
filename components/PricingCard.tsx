import { ReactElement } from "react";
import { Box, Divider, Flex, Stack, Text } from "@chakra-ui/core";
import styled from "@emotion/styled";
import CheckMark from "./svgs/check-mark-coloured.svg";

const CardTitle = styled(Text)`
  font-family: Metropolis, sans-serif;
  font-size: 28px;
`;

const CardPrice = styled(Text)`
  font-family: Metropolis, sans-serif;
  font-size: 36px;
`;

const CardDescription = styled(Text)`
  font-family: Metropolis, sans-serif;
  font-size: 16px;
  color: grey;
`;

const CardBenefit = styled(Text)`
  font-family: Inter, sans-serif;
  font-size: 14px;
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
        width="4in"
        padding="56px 32px"
        background="white"
        borderRadius="8px"
      >
        <Stack spacing="20px">
          <CardTitle textAlign="center">{title}</CardTitle>
          <CardPrice>{price}</CardPrice>
          <CardDescription>{description}</CardDescription>
        </Stack>
        <Divider marginY="32px" />
        <Stack spacing="24px">
          {benefits.map((benefit, index) => (
            <Flex key={`${index}${benefit}`} align="center">
              <Box>
                <CheckMark width="16px" height="16px" />
              </Box>
              <CardBenefit marginLeft="20px">{benefit}</CardBenefit>
            </Flex>
          ))}
        </Stack>
      </Box>
    </>
  );
}

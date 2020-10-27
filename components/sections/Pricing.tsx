import { ReactElement } from "react";
import { Box, Flex, Grid, Text } from "@chakra-ui/core";
import styled from "@emotion/styled";
import PricingBanner from "../svgs/pricing-banner.svg";
import PricingCard from "@/components/PricingCard";
import theme from "@/src/theme";
import { LocationHashEnum } from "@/src/enums";
import RegisterButton from "@/components/RegisterButton";

type PricingInfo = {
  title: string;
  price: string;
  description: string;
  benefits: string[];
};

const freeTierInfo: PricingInfo = {
  title: "Free",
  price: "$0",
  description: "Get a complete experience.",
  benefits: [
    "Access to our virtual conference platform Hopin.to",
    "All talks from speakers",
    "Networking in our virtual career fair with the sponsors",
    "Social events",
    "Workshops hosted by our sponsors",
    "And more to come!",
  ],
};

const vipTierInfo: PricingInfo = {
  title: "VIP",
  price: "$25",
  description: "Get an exclusive experience.",
  benefits: [
    "All free tier benefits",
    "CUSEC 2021 merch",
    "Exclusive and priority networking",
    "Access to a private VIP communication platform with the sponsors and speakers",
    "VIP Q&A events at the end of each night with speakers and sponsors",
    "And more to come!",
  ],
};

const monoGridArea = "I_LOVE_CUSEC";

const translation = [0, 0, 0, "-80px"].map(
  (translationY) => `translateY(${translationY})`
);
const cardMarginBottom = ["16px", "16px", "16px", 0];

const Headline = styled(Text)`
  font-family: "Metropolis", sans-serif;
  font-weight: 700;
  color: white;
  margin: 0;
`;

const StyledPricingBanner = styled(PricingBanner)`
  grid-area: ${monoGridArea};
  height: 125px;

  @media only screen and (min-width: ${theme.breakpoints[0]}) {
    height: 200px;
  }

  @media only screen and (min-width: ${theme.breakpoints[1]}) {
    height: 250px;
  }

  @media only screen and (min-width: ${theme.breakpoints[2]}) {
    height: 350px;
  }
`;

export default function Pricing(): ReactElement {
  return (
    <Box id={LocationHashEnum.Pricing}>
      <Grid
        justifyItems="center"
        alignItems="center"
        gridTemplateColumns="1fr"
        gridTemplateRows="1fr"
        gridTemplateAreas={`"${monoGridArea}"`}
      >
        <StyledPricingBanner width="100%" preserveAspectRatio="none" />
        <Headline fontSize={["xl", "3xl"]} gridArea={monoGridArea}>
          Pricing Tiers
        </Headline>
      </Grid>
      <Flex
        paddingX={["5vw", "5vw", 0]}
        direction={["column", "column", "column", "row"]}
        transform={translation}
        marginTop={["32px", "32px", "32px", 0]}
        marginBottom={["0.4in", "0.4in", "0.4in", 0]}
        align="center"
        justify="center"
      >
        <Box
          marginBottom={cardMarginBottom}
          padding="4px"
          boxShadow="md"
          border={`1px solid ${theme.colors.grey_stroke}`}
          borderRadius="8px"
          background="white"
        >
          <PricingCard {...freeTierInfo} />
        </Box>
        <Box width="8%" />
        <Box
          marginBottom={cardMarginBottom}
          padding="4px"
          boxShadow="md"
          borderRadius="12px"
          background={`linear-gradient(to bottom right, ${theme.colors.brand.teal}, ${theme.colors.brand.dark_blue})`}
        >
          <PricingCard {...vipTierInfo} />
        </Box>
      </Flex>
      <Flex
        transform={translation}
        marginBottom={["0.8in", "0.8in", "0.8in", 0]}
        marginTop={[0, 0, 0, "0.8in"]}
        justify="center"
      >
        <RegisterButton />
      </Flex>
    </Box>
  );
}

import { ReactElement } from "react";
import { Box, Flex, Grid } from "@chakra-ui/react";
import styled from "@emotion/styled";
import PricingBanner from "../svgs/pricing-banner.svg";
import PricingCard from "@/components/PricingCard";
import theme from "@/src/theme";
import { LocationHashEnum } from "@/src/enums";
import { WidthWrapper } from "@/components/core/Layout";
import { HeadlinePrimary } from "@/components/core/Text";

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
    "Access to our virtual conference platform Hopin",
    "Talks from our leading industry speakers",
    "Networking in our virtual career fair with the sponsors",
    "Workshops hosted by our sponsors",
    "Social events",
    "And more to come!",
  ],
};

const vipTierInfo: PricingInfo = {
  title: "VIP",
  price: "$25",
  description: "Get an exclusive experience.",
  benefits: [
    "All Free tier benefits",
    "Exclusive CUSEC 2021 swag",
    "Priority networking",
    "Access to a private VIP communication platform with sponsors and speakers",
    "VIP Q&A sessions with speakers and sponsors",
    "And more to come!",
  ],
};

const monoGridArea = "I_LOVE_CUSEC";

const translation = [0, 0, 0, "-80px"].map(
  (translationY) => `translateY(${translationY})`
);
const cardMarginBottom = ["16px", "16px", "16px", 0];

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
        <HeadlinePrimary
          gridArea={monoGridArea}
          color="white"
          margin="0px !important"
        >
          Ticket Pricing
        </HeadlinePrimary>
      </Grid>
      <WidthWrapper
        marginTop={["32px", "32px", "32px", 0]}
        marginBottom={["0.8in", "0.8in", "0.8in", "1in"]}
      >
        <Flex
          direction={["column", "column", "column", "row"]}
          transform={translation}
          justify="center"
          align={["center", "center", "center", "start"]}
        >
          <Box
            marginBottom={cardMarginBottom}
            padding="4px"
            boxShadow="md"
            border={`1px solid ${theme.colors.grey_stroke}`}
            borderRadius="12px"
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
      </WidthWrapper>
    </Box>
  );
}

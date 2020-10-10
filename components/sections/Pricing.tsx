import { ReactElement } from "react";
import { Box, Flex, Grid } from "@chakra-ui/core";
import styled from "@emotion/styled";
import PricingBanner from "../svgs/pricing-banner.svg";
import { TextStyledBold } from "@/components/StyledCore";
import PricingCard from "@/components/PricingCard";
import theme from "@/src/theme";
import { LocationHashEnum } from "@/src/enums";

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

const CardContainer = styled(Box)`
  margin: 0 0.4in 0.4in 0.4in;
`;

export default function Pricing(): ReactElement {
  return (
    <Box id={LocationHashEnum.Pricing}>
      <Grid
        justifyItems="center"
        alignItems="center"
        gridTemplateColumns="1fr"
        gridTemplateRows="1fr"
        gridTemplateAreas={`"I_LOVE_CUSEC"`}
      >
        <PricingBanner
          style={{ gridArea: "I_LOVE_CUSEC" }}
          width="100%"
          height="100%"
        />
        <TextStyledBold
          fontSize={["xl", "3xl"]}
          gridArea="I_LOVE_CUSEC"
          color="white"
        >
          Pricing Tiers
        </TextStyledBold>
      </Grid>
      <Flex
        paddingX={["5vw", "5vw", "10vw", "10vw"]}
        wrap="wrap"
        align={["center", "center", "start"]}
        justify="center"
      >
        <CardContainer>
          <Box
            padding="4px"
            boxShadow="md"
            border={`1px solid ${theme.colors.grey_stroke}`}
            borderRadius="8px"
            background="white"
          >
            <PricingCard {...freeTierInfo} />
          </Box>
        </CardContainer>
        <CardContainer>
          <Box
            padding="4px"
            boxShadow="md"
            borderRadius="12px"
            background="linear-gradient(to bottom right, #09D8C4, #22306D)"
          >
            <PricingCard {...vipTierInfo} />
          </Box>
        </CardContainer>
      </Flex>
    </Box>
  );
}

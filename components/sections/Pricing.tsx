import { ReactElement } from "react";
import { Box, Grid } from "@chakra-ui/core";
import PricingBanner from "../svgs/pricing-banner.svg";
import { TextStyledBold } from "@/components/StyledCore";

export default function Pricing(): ReactElement {
  return (
    <>
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
      <Box paddingX={["5vw", "5vw", "10vw", "10vw"]}></Box>
    </>
  );
}

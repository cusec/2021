import { ReactElement } from "react";
import styled from "@emotion/styled";
import { Flex, Grid, Image } from "@chakra-ui/core";
import { LocationHashEnum } from "@/src/enums";
import { WidthWrapper } from "@/components/core/Layout";
import { BodyPrimary, HeadlinePrimary } from "@/components/core/Text";

const imgPath = "/images";

const SponsorImage = styled(Image)`
  user-select: none;
  margin-top: 32px;
  margin-bottom: 32px;
`;

const wideGrid = [
  `. rbc rbc rbc rbc .`,
  `. kinaxis kinaxis morgan morgan .`,
  `. genetec genetec unity unity .`,
  `amazon amazon ssense ssense nokia nokia`,
  `. fellow fellow balsamiq balsamiq .`,
  `. voiceflow one-pass one-pass egghead .`,
]
  .map((row) => `"${row}"`)
  .join(" ");

const thinGrid = [
  `rbc rbc rbc`,
  `kinaxis kinaxis kinaxis`,
  `morgan morgan morgan`,
  `genetec genetec genetec`,
  `unity unity unity`,
  `amazon . ssense`,
  `. nokia .`,
  `fellow . balsamiq`,
  `voiceflow . one-pass`,
  `. egghead .`,
]
  .map((row) => `"${row}"`)
  .join(" ");

const wideSchoolGrid = [`calgary carleton toronto uottawa waterloo`]
  .map((row) => `"${row}"`)
  .join(" ");

const thinSchoolGrid = [
  `calgary . carleton`,
  `toronto . uottawa`,
  `. waterloo.`,
]
  .map((row) => `"${row}"`)
  .join(" ");

export default function Sponsors(): ReactElement {
  return (
    <div id={LocationHashEnum.Sponsors}>
      <WidthWrapper>
        <Flex
          direction="column"
          paddingTop={["1in", "1in", "1in", "1.25in"]}
          paddingBottom={["0.2in", "0.2in", "0.3in", "0.3in"]}
          align="center"
          textAlign="center"
        >
          <HeadlinePrimary>Sponsor Showcase</HeadlinePrimary>
          <BodyPrimary>
            Meet the sponsors who are making CUSEC 2021 a reality.
          </BodyPrimary>
          <Grid
            width="100%"
            gridTemplateColumns={[
              "repeat(3, 1fr)",
              "repeat(3, 1fr)",
              "repeat(6, 1fr)",
            ]}
            gridTemplateAreas={[thinGrid, thinGrid, wideGrid]}
            justifyItems="center"
            alignItems="center"
          >
            <SponsorImage
              src={`${imgPath}/Royal_Bank_of_Canada-Logo.wine.svg`}
              gridArea="rbc"
              width={["30%", "30%", "25%"]}
            />
            <SponsorImage
              src={`${imgPath}/Kinaxis-Logo.svg`}
              gridArea="kinaxis"
              width={["50%", "50%", "80%"]}
            />
            <SponsorImage
              src={`${imgPath}/Morgan_Stanley-Logo.svg`}
              gridArea="morgan"
              width={["50%", "50%", "80%"]}
            />
            <SponsorImage
              src={`${imgPath}/genetec.svg`}
              gridArea="genetec"
              width={["50%", "50%", "80%"]}
            />
            <SponsorImage
              src={`${imgPath}/unity.svg`}
              gridArea="unity"
              width={["50%", "50%", "80%"]}
            />
            <SponsorImage
              src={`${imgPath}/Amazon_logo.svg`}
              gridArea="amazon"
              width={["80%", "80%", "45%"]}
              minWidth="100px"
            />
            <SponsorImage
              src={`${imgPath}/Ssense_logo.svg`}
              gridArea="ssense"
              width={["80%", "80%", "45%"]}
              minWidth="100px"
            />
            <SponsorImage
              src={`${imgPath}/nokia.svg`}
              gridArea="nokia"
              width={["80%", "80%", "45%"]}
              minWidth="100px"
            />
            <SponsorImage
              src={`${imgPath}/fellow-wordmark.svg`}
              gridArea="fellow"
              width={["80%", "60%", "30%"]}
              minWidth="90px"
            />
            <SponsorImage
              src={`${imgPath}/balsamiq-logo-noborder-screen.svg`}
              gridArea="balsamiq"
              width={["80%", "60%", "30%"]}
              minWidth="90px"
            />
            <SponsorImage
              src={`${imgPath}/voiceflow-Logo.png`}
              gridArea="voiceflow"
              width={["60%", "60%", "50%"]}
              minWidth="72px"
            />
            <SponsorImage
              src={`${imgPath}/1password-logo.svg`}
              gridArea="one-pass"
              width={["60%", "60%", "25%"]}
              minWidth="72px"
            />
            <SponsorImage
              src={`${imgPath}/egghead-Logo.svg`}
              gridArea="egghead"
              width={["60%", "60%", "50%"]}
              minWidth="72px"
            />
          </Grid>
          <Grid
            width="100%"
            gridTemplateColumns={[
              "repeat(3, 1fr)",
              "repeat(3, 1fr)",
              "repeat(5, 1fr)",
            ]}
            gridTemplateAreas={[thinSchoolGrid, thinSchoolGrid, wideSchoolGrid]}
            justifyItems="center"
            alignItems="center"
          >
            <SponsorImage
              src={`${imgPath}/universities/calgary.svg`}
              gridArea="calgary"
              width={["60%", "60%", "25%"]}
              minWidth="72px"
            />
            <SponsorImage
              src={`${imgPath}/universities/carleton.svg`}
              gridArea="carleton"
              width={["60%", "60%", "25%"]}
              minWidth="72px"
            />
            <SponsorImage
              src={`${imgPath}/universities/toronto.svg`}
              gridArea="toronto"
              width={["60%", "60%", "25%"]}
              minWidth="72px"
            />
            <SponsorImage
              src={`${imgPath}/universities/uottawa.svg`}
              gridArea="uottawa"
              width={["60%", "60%", "25%"]}
              minWidth="72px"
            />
            <SponsorImage
              src={`${imgPath}/universities/waterloo.svg`}
              gridArea="waterloo"
              width={["60%", "60%", "25%"]}
              minWidth="72px"
            />
          </Grid>
        </Flex>
      </WidthWrapper>
    </div>
  );
}

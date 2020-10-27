import { ReactElement } from "react";
import { Box, Button, Flex, Link } from "@chakra-ui/core";
import theme from "@/src/theme";
import { TextStyled, TextStyledBold } from "@/components/StyledCore";
import BuildingBlocksSVG from "../svgs/undraw-building-blocks.svg";

export default function SponsorAnExperience(): ReactElement {
  return (
    <>
      <Box background="linear-gradient(to bottom right, #0A2540, #214C6F)">
        <Flex
          direction={["column", "column", "column", "row"]}
          paddingX={["5vw", "5vw", "10vw", "10vw"]}
          paddingY="0.5in"
          justify="space-between"
          align={["start", "start", "start", "center"]}
        >
          <Box color="white" width="100%">
            <TextStyledBold fontSize={["xl", "3xl"]}>
              Sponsor an experience
            </TextStyledBold>
            <TextStyled marginTop="0.2in">
              We are able to offer a conference like CUSEC thanks to our amazing
              sponsors.
            </TextStyled>
            <TextStyled>
              Interested in sponsoring? Please email us at{" "}
              <Link href="mailto:sponsor@cusec.net" fontWeight="bold">
                sponsor@cusec.net
              </Link>
              .
            </TextStyled>
            <Flex justify={["center", "center", "center", "start"]}>
              <Button
                marginTop="0.2in"
                height="42px"
                paddingX="42px"
                rounded="9999px"
                fontFamily="Metropolis, sans-serif"
                fontSize="16px"
                fontWeight="bold"
                bg="brand.dark_teal"
                color="white"
                _hover={{ background: theme.colors.brand.teal }}
              >
                Become a sponsor
              </Button>
            </Flex>
          </Box>
          <Flex width={["100%", "100%", "100%", "40%"]} justify="center">
            <Box
              width={["2.5in", "2.5in", "3in", "3in"]}
              marginLeft={[0, 0, 0, "24px"]}
              marginTop={["0.5in", "0.5in", "0.5in", 0]}
            >
              <BuildingBlocksSVG width="100%" height="100%" />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

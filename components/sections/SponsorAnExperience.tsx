import { ReactElement } from "react";
import { Box, Flex, Link } from "@chakra-ui/react";
import BuildingBlocksSVG from "../svgs/undraw-building-blocks.svg";
import { ButtonPrimaryVariant } from "@/components/core/Button";
import { WidthWrapper } from "@/components/core/Layout";
import {
  BodyPrimary,
  HeadlinePrimary,
  LinkPrimaryVariant,
} from "@/components/core/Text";
import theme from "@/src/theme";

export default function SponsorAnExperience(): ReactElement {
  return (
    <Box
      background={`linear-gradient(to bottom right, ${theme.colors.bg_gradient_dark}, ${theme.colors.bg_gradient_light})`}
    >
      <WidthWrapper>
        <Flex
          direction={["column", "column", "column", "row"]}
          paddingY="0.75in"
          justify="space-between"
          align={["start", "start", "start", "center"]}
        >
          <Box color="white" width={["100%", "100%", "100%", "60%"]}>
            <HeadlinePrimary>Sponsor an experience</HeadlinePrimary>
            <BodyPrimary>
              We are able to offer a conference like CUSEC thanks to our amazing
              sponsors.
            </BodyPrimary>
            <BodyPrimary>
              Interested in sponsoring? Please email us at{" "}
              <LinkPrimaryVariant href="mailto:sponsor@cusec.net">
                sponsor@cusec.net
              </LinkPrimaryVariant>
              .
            </BodyPrimary>
            <Flex justify={["center", "center", "center", "start"]}>
              <Link
                href="mailto:sponsor@cusec.net"
                marginTop="0.2in"
                borderRadius="9999px"
                _hover={{ textDecoration: "none" }}
              >
                <ButtonPrimaryVariant>Become a sponsor</ButtonPrimaryVariant>
              </Link>
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
      </WidthWrapper>
    </Box>
  );
}

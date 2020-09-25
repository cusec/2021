import {
  GreyBackground,
  TextStyled,
  TextStyledBold,
} from "@/components/StyledCore";
import { Flex } from "@chakra-ui/core";
import { ReactElement } from "react";
import { LocationHashEnum } from "../../src/enums";

export default function Sponsors(): ReactElement {
  return (
    <div id={LocationHashEnum.Sponsors}>
      <GreyBackground>
        <Flex
          direction="column"
          paddingBottom={["0.2in", "0.2in", "0.3in", "0.3in"]}
          paddingTop={["0.25in", "0.25in", "0.75in", "0.75in"]}
          paddingX={["5vw", "5vw", "10vw", "10vw"]}
          align="center"
        >
          <TextStyledBold fontSize={["xl", "3xl"]}>
            Sponsor an experience
          </TextStyledBold>
          <TextStyled>
            We are able to offer a conference like CUSEC thanks to our amazing
            sponsors.
          </TextStyled>
        </Flex>
      </GreyBackground>
    </div>
  );
}

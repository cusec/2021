import { Flex } from "@chakra-ui/core";
import { ReactElement } from "react";
import { LocationHashEnum } from "@/src/enums";
import { WidthWrapper } from "@/components/core/Layout";
import { BodyPrimary, HeadlinePrimary } from "@/components/core/Text";

export default function Sponsors(): ReactElement {
  return (
    <div id={LocationHashEnum.Sponsors}>
      <WidthWrapper height="1000px">
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
        </Flex>
      </WidthWrapper>
    </div>
  );
}

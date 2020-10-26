import { Flex } from "@chakra-ui/core";
import { ReactElement } from "react";
import { LocationHashEnum } from "@/src/enums";
import { WidthWrapper } from "@/components/core/Layout";
import { BodyPrimary, HeadlinePrimary } from "@/components/core/Text";

export default function Sponsors(): ReactElement {
  return (
    <div id={LocationHashEnum.Sponsors}>
      <WidthWrapper>
        <Flex
          direction="column"
          paddingBottom={["0.2in", "0.2in", "0.3in", "0.3in"]}
          paddingTop={["0.25in", "0.25in", "0.75in", "0.75in"]}
          align="center"
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

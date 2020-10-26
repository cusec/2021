import React, {
  Dispatch,
  FormEvent,
  ReactElement,
  SetStateAction,
  useState,
} from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
} from "@chakra-ui/core";
import { FAQData as data } from "@/src/data";
import { LocationHashEnum } from "@/src/enums";
import { GreyBackground, WidthWrapper } from "@/components/core/Layout";
import {
  BodyPrimary,
  HeadlinePrimary,
  LinkPrimary,
} from "@/components/core/Text";

interface AccordionBoxParams {
  props: { question: string; answer: string };
  index: number;
  opened: number | null;
  setOpened: Dispatch<SetStateAction<number | null>>;
}

function AccordionBox({
  props,
  index,
  opened,
  setOpened,
}: AccordionBoxParams): ReactElement {
  const shouldBeOpened = opened !== null && opened === index;

  const handleChange = (event: boolean | FormEvent<any>) => {
    setOpened(event ? index : null);
  };

  return (
    <Box
      background="white"
      borderWidth="1px"
      display="flex"
      marginBottom="8px"
      rounded="8px"
      borderColor={shouldBeOpened ? "brand.teal" : "#e2e8f0"}
      shadow={shouldBeOpened ? "md" : "none"}
    >
      <AccordionItem
        border="0"
        width="100%"
        onChange={handleChange}
        isOpen={shouldBeOpened}
      >
        <AccordionHeader
          _focus={{}}
          padding="12px 20px"
          borderRadius={shouldBeOpened ? "8px 8px 0px 0px" : "8px"}
        >
          <Box
            flex="1"
            textAlign="left"
            marginRight="20px"
            fontWeight={shouldBeOpened ? "bold" : "normal"}
          >
            {props.question}
          </Box>
          <AccordionIcon />
        </AccordionHeader>
        <AccordionPanel padding="8px 20px 20px 20px">
          {props.answer}
        </AccordionPanel>
      </AccordionItem>
    </Box>
  );
}

export default function FAQ(): ReactElement {
  const [opened, setOpened] = useState<number | null>(null);

  return (
    <GreyBackground id={LocationHashEnum.FAQ}>
      <WidthWrapper>
        <Flex
          direction="column"
          paddingY={["0.75in", "0.75in", "0.75in", "1in"]}
        >
          <HeadlinePrimary>Frequently Asked Questions</HeadlinePrimary>
          <BodyPrimary>
            Can&apos;t find an answer? Send us your question at{" "}
            <LinkPrimary href="mailto:info@cusec.net">
              info@cusec.com
            </LinkPrimary>{" "}
            and we&apos;ll get back to you.
          </BodyPrimary>
          <Box marginTop="0.25in">
            <Flex direction={["column", "column", "column", "row"]}>
              <Accordion
                width={["100%", "100%", "100%", "50%"]}
                marginRight={["0", "0", "0", "16px"]}
              >
                {data
                  .map((faqItem, index) => (
                    <AccordionBox
                      props={faqItem}
                      key={`${index}${faqItem.question}`}
                      index={index}
                      opened={opened}
                      setOpened={setOpened}
                    />
                  ))
                  .filter((_, index) => index % 2 === 0)}
              </Accordion>
              <Accordion
                width={["100%", "100%", "100%", "50%"]}
                marginLeft={["0", "0", "0", "16px"]}
              >
                {data
                  .map((faqItem, index) => (
                    <AccordionBox
                      props={faqItem}
                      key={`${index}${faqItem.question}`}
                      index={index}
                      opened={opened}
                      setOpened={setOpened}
                    />
                  ))
                  .filter((_, index) => index % 2 !== 0)}
              </Accordion>
            </Flex>
          </Box>
        </Flex>
      </WidthWrapper>
    </GreyBackground>
  );
}

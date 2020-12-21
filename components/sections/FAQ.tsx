import React, { Fragment, ReactElement, useState } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  ExpandedIndex,
  Flex,
} from "@chakra-ui/react";
import { FAQData as data } from "@/src/data";
import { LocationHashEnum } from "@/src/enums";
import { GreyBackground, WidthWrapper } from "@/components/core/Layout";
import {
  BodyPrimary,
  Headline,
  HeadlinePrimary,
  LinkifyText,
  LinkPrimary,
} from "@/components/core/Text";

interface AccordionBoxParams {
  item: { question: string; answer: string[] };
  opened: boolean | null;
}

function AccordionBox({ item, opened }: AccordionBoxParams): ReactElement {
  return (
    <Box
      background="white"
      borderWidth="1px"
      display="flex"
      marginBottom="8px"
      rounded="8px"
      borderColor={opened ? "brand.teal" : "#e2e8f0"}
      shadow={opened ? "md" : "none"}
    >
      <AccordionItem border="0" width="100%">
        <AccordionButton
          _focus={{}}
          padding="12px 20px"
          borderRadius={opened ? "8px 8px 0px 0px" : "8px"}
        >
          <Box
            flex="1"
            textAlign="left"
            marginRight="20px"
            fontWeight={opened ? "bold" : "normal"}
          >
            {item.question}
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel padding="8px 20px 0px 20px">
          {item.answer.map((paragraph) => (
            <Fragment key={paragraph}>
              <LinkifyText>
                {paragraph.trim().indexOf(" ") === -1 ? (
                  <Headline marginBottom="8px">{paragraph}</Headline>
                ) : (
                  <BodyPrimary>{paragraph}</BodyPrimary>
                )}
              </LinkifyText>
            </Fragment>
          ))}
        </AccordionPanel>
      </AccordionItem>
    </Box>
  );
}

export default function FAQ(): ReactElement {
  const [opened, setOpened] = useState<string | null>(null);

  const handleChange = (expandedIndex: ExpandedIndex, side: string) => {
    setOpened(`${expandedIndex}-${side}`);
  };

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
                allowToggle
                width={["100%", "100%", "100%", "50%"]}
                marginRight={["0", "0", "0", "16px"]}
                onChange={(e) => handleChange(e, "left")}
                index={
                  opened?.includes("left")
                    ? parseInt(opened.slice(0, -5))
                    : undefined
                }
              >
                {data
                  .map((faqItem, index) => (
                    <AccordionBox
                      item={faqItem}
                      key={`${index}${faqItem.question}`}
                      opened={`${index / 2}-left` === opened}
                    />
                  ))
                  .filter((_, index) => index % 2 === 0)}
              </Accordion>
              <Accordion
                allowToggle
                width={["100%", "100%", "100%", "50%"]}
                marginLeft={["0", "0", "0", "16px"]}
                onChange={(e) => handleChange(e, "right")}
                index={
                  opened?.includes("right")
                    ? parseInt(opened.slice(0, -6))
                    : undefined
                }
              >
                {data
                  .map((faqItem, index) => (
                    <AccordionBox
                      item={faqItem}
                      key={`${index}${faqItem.question}`}
                      opened={`${Math.floor(index / 2)}-right` === opened}
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

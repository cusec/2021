import styled from "@emotion/styled";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
} from "@chakra-ui/core";
import {
  LinkStyled,
  TextStyled,
  TextStyledBold,
} from "@/components/StyledCore";
import { FAQData as data } from "../../src/data";

const Background = styled.div`
  border-top: 1px solid #f1f1f1;
  background-color: #fafafa;
`;

export default function FAQ(): React.ReactElement {
  return (
    <>
      <Background>
        <Flex direction="column" paddingX={["16px", "16px", "10vw", "10vw"]}>
          <TextStyledBold fontSize={["xl", "3xl"]}>
            Frequently Asked Questions
          </TextStyledBold>
          <TextStyled>
            Can’t find an answer? Send us your question at
            <LinkStyled color="brand.blue" href="mailto:sponsor@cusec.net">
              {` info@cusec.com `}
            </LinkStyled>
            and we’ll get back to you.
          </TextStyled>
        </Flex>
        <Flex>
          <Accordion>
            {data.map((item) => {
              return (
                <>
                  <AccordionItem>
                    <AccordionHeader>
                      <Box flex="1" textAlign="left">
                        {item.question}
                      </Box>
                      <AccordionIcon />
                    </AccordionHeader>
                    <AccordionPanel pb={4}>{item.answer}</AccordionPanel>
                  </AccordionItem>
                </>
              );
            })}
          </Accordion>
        </Flex>
      </Background>
    </>
  );
}

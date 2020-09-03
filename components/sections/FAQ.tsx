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
        <Flex
          direction="column"
          paddingBottom={["0.2in", "0.2in", "0.3in", "0.3in"]}
          paddingTop={["0.25in", "0.25in", "0.75in", "0.75in"]}
          paddingX={["16px", "16px", "10vw", "10vw"]}
        >
          <TextStyledBold fontSize={["xl", "3xl"]}>
            Frequently Asked Questions
          </TextStyledBold>
          <TextStyled>
            Can’t find an answer? Send us your question at
            <LinkStyled color="brand.blue" href="mailto:info@cusec.net">
              {` info@cusec.com `}
            </LinkStyled>
            and we’ll get back to you.
          </TextStyled>
        </Flex>
        <Flex paddingBottom={["0.25in", "0.25in", "0.75in", "0.75in"]}>
          <Accordion>
            <Flex
              alignContent="flex-start"
              alignItems="flex-start"
              flexWrap="wrap"
              justify="center"
            >
              {data.map((item) => {
                return (
                  <Box
                    borderWidth="1px"
                    display="flex"
                    key={item.question}
                    margin="1vw"
                    maxWidth="100%"
                    rounded="lg"
                    width="30rem"
                  >
                    <AccordionItem border="0" width="100%">
                      <AccordionHeader>
                        <Box flex="1" textAlign="left">
                          {item.question}
                        </Box>
                        <AccordionIcon />
                      </AccordionHeader>
                      <AccordionPanel paddingBottom={4}>
                        {item.answer}
                      </AccordionPanel>
                    </AccordionItem>
                  </Box>
                );
              })}
            </Flex>
          </Accordion>
        </Flex>
      </Background>
    </>
  );
}

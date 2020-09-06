import styled from "@emotion/styled";
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

interface AccordionBoxParams {
  props: { question: string; answer: string };
  index: number;
  opened: string | null;
  setOpened: Dispatch<SetStateAction<string | null>>;
}

interface IExpanded {
  isExpanded: boolean;
}

function AccordionBox({
  props,
  index,
  opened,
  setOpened,
}: AccordionBoxParams): ReactElement {
  const [expanded, setExpanded] = useState<boolean>(false);

  const shouldBeOpened = () => {
    if (opened === null) {
      return false;
    } else return opened === props.question;
  };

  const handleChange = (event: boolean | FormEvent<any>) => {
    if (event) {
      setOpened(props.question);
    } else {
      setOpened(null);
    }
  };

  return (
    <Box
      borderWidth="1px"
      display="flex"
      margin={index === 0 || index === 1 ? "0 1vw 1vw 1vw" : "1vw"}
      maxWidth="95vw"
      rounded="lg"
      width="30rem"
      borderColor={expanded ? "#09d8c4" : "#e2e8f0"}
      shadow={expanded ? "md" : "none"}
    >
      <AccordionItem
        border="0"
        width="100%"
        onChange={handleChange}
        isOpen={shouldBeOpened()}
      >
        {({ isExpanded }: IExpanded) => (
          <>
            {setExpanded(isExpanded)}
            <AccordionHeader _focus={{}}>
              <Box
                flex="1"
                textAlign="left"
                fontWeight={isExpanded ? "bold" : "normal"}
              >
                {props.question}
              </Box>
              <AccordionIcon />
            </AccordionHeader>
            <AccordionPanel paddingBottom={4}>{props.answer}</AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Box>
  );
}

export default function FAQ(): ReactElement {
  const [opened, setOpened] = useState<string | null>(null);

  return (
    <>
      <Background>
        <Flex
          direction="column"
          paddingBottom={["0.2in", "0.2in", "0.3in", "0.3in"]}
          paddingTop={["0.25in", "0.25in", "0.75in", "0.75in"]}
          paddingX={["5vw", "5vw", "10vw", "10vw"]}
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
        <Flex
          direction="row"
          justify="center"
          paddingBottom={["0.25in", "0.25in", "0.75in", "0.75in"]}
          wrap="wrap"
        >
          <Flex direction={["column", "column", "column", "row"]}>
            <Accordion>
              {data.map((item, index) => {
                if (index % 2 === 0) {
                  return (
                    <AccordionBox
                      props={item}
                      key={item.question}
                      index={index}
                      opened={opened}
                      setOpened={setOpened}
                    />
                  );
                }
              })}
            </Accordion>
            <Accordion>
              {data.map((item, index) => {
                if (index % 2 !== 0) {
                  return (
                    <AccordionBox
                      props={item}
                      key={item.question}
                      index={index}
                      opened={opened}
                      setOpened={setOpened}
                    />
                  );
                }
              })}
            </Accordion>
          </Flex>
        </Flex>
      </Background>
    </>
  );
}

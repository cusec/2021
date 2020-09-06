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

const AccordionHeaderStyled = styled(AccordionHeader)`
   {
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
  }
  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f1f1f1;
    border-radius: 8px;
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  &:hover:before,
  &:focus:before,
  &:active:before {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
    transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
  }
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
      rounded="8px"
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
            <AccordionHeaderStyled _focus={{}} _hover={{}}>
              <Box
                flex="1"
                textAlign="left"
                fontWeight={isExpanded ? "bold" : "normal"}
              >
                {props.question}
              </Box>
              <AccordionIcon />
            </AccordionHeaderStyled>
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

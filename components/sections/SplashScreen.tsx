import React from "react";
import { Flex, Link, Text } from "@chakra-ui/core";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

const TextStyled = styled(Text)`
  font-family: "Inter", sans-serif;
  margin-bottom: 1vh;
`;

const TextStyledExtraBold = styled(TextStyled)`
  font-weight: 900;
`;

const TextStyledBold = styled(TextStyled)`
  font-weight: 800;
`;

const LinkStyled = styled(Link)`
  font-family: "Inter", sans-serif;
  margin-bottom: 1vh;
  font-weight: 600;
`;

const FlexMiddleRow = styled(Flex)`
  margin-left: 15vw;
  margin-right: 15vw;
`;

const IconStyled = styled(FontAwesomeIcon)`
  margin-left: 1vw;
  margin-right: 1vw;
`;

export default function SplashScreen(): React.ReactElement {
  return (
    <Flex height="100vh" width="100vw">
      <Flex flexDirection="column" justifyContent="center">
        <FlexMiddleRow justifyContent="space-between" flexDirection="row">
          <Flex flexDirection="column">
            <TextStyledExtraBold fontSize="5xl">CUSEC 2021</TextStyledExtraBold>
            <TextStyledBold>
              Canadian University Software Engineering Conference
            </TextStyledBold>
            <TextStyled>
              January 15 - 17, 2021 {"\u2022"} Virtual Experience
            </TextStyled>
            <LinkStyled color="teal.500" href="http://localhost:3000">
              Interested in Sponsoring?
            </LinkStyled>
            <Flex flexDirection="row" justifyContent="flex-start">
              <IconStyled icon={faFacebookSquare} />
              <IconStyled icon={faTwitterSquare} />
              <IconStyled icon={faInstagram} />
            </Flex>
          </Flex>
          <Flex>
            <TextStyled>Logo</TextStyled>
          </Flex>
        </FlexMiddleRow>
      </Flex>
    </Flex>
  );
}

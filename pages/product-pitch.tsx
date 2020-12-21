import { ReactElement, useEffect, useState } from "react";
import Head from "next/head";
import { Flex, Image } from "@chakra-ui/react";
import Socials from "@/components/Socials";
import useScreenWidth from "@/components/hooks/useScreenWidth";
import useStore from "@/src/store";
import { Body, BodyPrimary, Headline } from "@/components/core/Text";
import { WidthWrapper } from "@/components/core/Layout";
import TopBar from "@/components/TopBar";
import EmailListingInput from "@/components/EmailListingInput";
import { FirestoreCollectionEnum } from "@/src/enums";
import styled from "@emotion/styled";

const minHeights = [550, 650, 700, 800];

const Title = styled(Body)`
  font-weight: 900;
  line-height: 1;
  margin-bottom: 4px;
`;

export default function ProductPitch(): ReactElement {
  const [heightProp, setHeightProp] = useState(
    minHeights.map((minHeight) => `max(100vh, ${minHeight}px)`)
  );
  const actualWidth = useScreenWidth();
  const [currentWidth, setCurrentWidth] = useState(0);
  const setNavOverlayOpen = useStore((state) => state.setNavOverlayOpen);

  useEffect(() => {
    const updateHeight = () => {
      setCurrentWidth(actualWidth);
      setHeightProp(
        minHeights.map(
          (minHeight) => `${Math.max(window.innerHeight, minHeight)}px`
        )
      );
    };

    if (currentWidth === 0 || currentWidth !== actualWidth) {
      updateHeight();
      setNavOverlayOpen(false);
    }
  }, [actualWidth, currentWidth, setNavOverlayOpen]);

  return (
    <div>
      <Head>
        <title>CUSEC 2021 - Product Pitch</title>
        <meta
          name="description"
          content="Mark your calendars, Canada's favourite conference is back virtually this winter! Join us January 9-10, 2021 for a weekend of amazing speakers, workshops, and more!"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Flex height={heightProp} width="100%" backgroundColor="off_white_bg">
        <TopBar />
        <WidthWrapper>
          <Flex
            flexDirection="column"
            justifyContent="center"
            width="100%"
            height="100%"
          >
            <Flex
              justifyContent="center"
              marginBottom="8px"
              display={["flex", "flex", "flex", "none"]}
            >
              <Image
                src="/images/Royal_Bank_of_Canada-Logo.wine.svg"
                height="100px"
                width="auto"
                userSelect="none"
                marginTop="0.5in"
              />
            </Flex>
            <Flex
              justifyContent={["center", "center", "center", "space-between"]}
              alignItems="center"
              width="100%"
              marginBottom={["0.5in", "0.5in", "1in", "1in"]}
            >
              <Flex
                flexDirection="column"
                textAlign={["center", "center", "center", "left"]}
              >
                <Flex
                  direction={["column", "column", "row"]}
                  marginBottom="16px"
                  marginTop={["16px", "16px", "16px", 0]}
                >
                  <Title fontSize={["4xl", "5xl"]}>CUSEC 2021</Title>
                  <Title
                    fontSize={["4xl", "5xl"]}
                    marginTop={["-4px", "-4px", "-2px"]}
                  >
                    &nbsp;×&nbsp;
                  </Title>
                  <Title fontSize={["4xl", "5xl"]}>RBC</Title>
                </Flex>
                <Headline fontSize={["xl", "2xl"]} marginBottom="12px">
                  Product Pitch Competition
                </Headline>
                <Flex justify={["center", "center", "center", "left"]}>
                  <BodyPrimary>
                    Product theme reveal coming on December 4, 2020.
                  </BodyPrimary>
                </Flex>
                <Flex
                  alignItems="center"
                  marginTop="8px"
                  flexDirection={["column", "column", "column", "row"]}
                  justify={["center", "center", "center", "left"]}
                >
                  <EmailListingInput
                    collection={FirestoreCollectionEnum.ProductPitchEmails}
                    placeholder="Get updates by email"
                    width="2.5in"
                  />
                </Flex>
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  display={["flex", "flex", "flex", "none"]}
                >
                  <Socials margin="16px" />
                </Flex>
              </Flex>
              <Flex
                marginLeft="50px"
                display={["none", "none", "none", "flex"]}
              >
                <Image
                  src="/images/Royal_Bank_of_Canada-Logo.wine.svg"
                  width="min(250px, 15vw)"
                  height="auto"
                  userSelect="none"
                />
              </Flex>
            </Flex>
          </Flex>
        </WidthWrapper>
      </Flex>

      <style jsx global>{`
        @font-face {
          font-family: "Metropolis";
          font-weight: bold;
          font-style: normal;
          src: url("fonts/Metropolis-Bold.woff2") format("woff2"),
            url("fonts/Metropolis-Bold.woff") format("woff"),
            url("fonts/Metropolis-Bold.otf") format("otf"),
            url("fonts/Metropolis-Bold.ttf") format("truetype");
        }

        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

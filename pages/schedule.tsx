import { ReactElement } from "react";
import theme from "@/src/theme";
import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { WidthWrapper } from "@/components/core/Layout";
import { HeadlinePrimary } from "@/components/core/Text";

export default function Schedule(): ReactElement {
  return (
    <>
      <Box
        background={`linear-gradient(to bottom right, ${theme.colors.bg_gradient_dark}, ${theme.colors.bg_gradient_light})`}
        height="100vh"
      >
        <WidthWrapper paddingY="5rem">
          <Box
            background="white"
            borderRadius="12px"
            boxShadow="md"
            maxHeight="80vh"
            maxWidth="80vw"
            minHeight="50vh"
            minWidth="50vw"
            paddingY="3rem"
          >
            <Flex
              justifyContent="center"
              textAlign="center"
              marginBottom="32px"
            >
              <HeadlinePrimary>CUSEC 2021 Schedule</HeadlinePrimary>
            </Flex>
            <Tabs size="lg" variant="enclosed" isFitted>
              <TabList>
                <Tab _focus={{}}>Saturday, January 9th 2021</Tab>
                <Tab _focus={{}}>Sunday, January 10th 2021</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Text>Saturday, January 9th 2021</Text>
                </TabPanel>
                <TabPanel>
                  <Text>Sunday, January 10th 2021</Text>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </WidthWrapper>
      </Box>
    </>
  );
}

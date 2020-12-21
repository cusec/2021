import { ReactElement } from "react";
import {
  Box,
  Flex,
  Tab,
  Table,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";
import { WidthWrapper } from "@/components/core/Layout";
import { HeadlinePrimary } from "@/components/core/Text";
import { scheduleSaturday, scheduleSunday } from "@/src/data";
import TopBar from "@/components/TopBar";

export default function Schedule(): ReactElement {
  return (
    <>
      <Box
        // background={`linear-gradient(to bottom right, ${theme.colors.bg_gradient_dark}, ${theme.colors.bg_gradient_light})`}
        height="100vh"
      >
        <TopBar />
        <WidthWrapper paddingY="10rem">
          <Box
            background="white"
            borderRadius="12px"
            boxShadow="md"
            maxHeight="80vh"
            maxWidth="80vw"
            minHeight="50vh"
            minWidth="50vw"
            paddingY="3rem"
            borderWidth="10px"
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
                  <Table variant="striped" colorScheme="gray" size="lg">
                    <Tbody>
                      {scheduleSaturday.map((event) => (
                        <Tr key={event.title}>
                          <Td>
                            {event.startTime.hour}:{" "}
                            {event.startTime.minute === 0
                              ? "00"
                              : event.startTime.minute}{" "}
                            - {event.endTime.hour}:
                            {event.endTime.minute === 0
                              ? "00"
                              : event.endTime.minute}
                          </Td>
                          <Td>{event.title}</Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TabPanel>
                <TabPanel>
                  <Table variant="striped" colorScheme="gray" size="lg">
                    <Tbody>
                      {scheduleSunday.map((event) => (
                        <Tr key={event.title}>
                          <Td>
                            {event.startTime.hour.toString().length === 1
                              ? "0" + event.startTime.hour
                              : event.startTime.hour}
                            :{" "}
                            {event.startTime.minute === 0
                              ? "00"
                              : event.startTime.minute}{" "}
                            - {event.endTime.hour}:
                            {event.endTime.minute === 0
                              ? "00"
                              : event.endTime.minute}
                          </Td>
                          <Td>{event.title}</Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </WidthWrapper>
      </Box>
    </>
  );
}

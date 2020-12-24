import { ReactElement, useEffect } from "react";
import {
  Link as ChakraLink,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure,
} from "@chakra-ui/react";
import { HeadlinePrimary } from "@/components/core/Text";
import { scheduleSaturday, scheduleSunday } from "@/src/data";
import { NavBarLink } from "@/components/TopBar";
import { useRouter } from "next/router";
import ScheduleTable from "./ScheduleTable";

export default function ScheduleModal(): ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#schedule") {
      onOpen();
    }
  }, [onOpen]);

  const handleOnClose = () => {
    onClose();
    router.replace(router.pathname);
  };

  const handleOnOpen = () => {
    const lastCharInPath = router.pathname.charAt(router.pathname.length - 1);
    const currentPath: string =
      lastCharInPath === "/" ? router.pathname : `${router.pathname}/`;
    onOpen();
    router.replace(`${currentPath}#schedule`);
  };

  return (
    <>
      <ChakraLink marginX="32px" textDecoration="none !important">
        <NavBarLink onClick={handleOnOpen}>Schedule</NavBarLink>
      </ChakraLink>
      <Modal
        motionPreset="slideInBottom"
        isOpen={isOpen}
        onClose={handleOnClose}
        size="5xl"
      >
        <ModalOverlay />
        <ModalContent rounded="lg">
          <ModalHeader paddingTop={6}>
            <HeadlinePrimary margin="0px !important" align="center">
              Schedule
            </HeadlinePrimary>
          </ModalHeader>
          <ModalCloseButton _focus={{}} />
          <ModalBody paddingBottom={6}>
            <Tabs size="lg" variant="enclosed" isFitted colorScheme="teal">
              <TabList>
                <Tab _focus={{}}>Saturday, January 9th 2021</Tab>
                <Tab _focus={{}}>Sunday, January 10th 2021</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <ScheduleTable schedule={scheduleSaturday} />
                </TabPanel>
                <TabPanel>
                  <ScheduleTable schedule={scheduleSunday} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

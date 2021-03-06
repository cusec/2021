import { ReactElement, useEffect } from "react";
import {
  Button,
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
import { GradientNavItemLink } from "@/components/NavOverlay";
import useStore from "@/src/store";

ScheduleModal.defaultProps = {
  mobile: false,
};

interface IScheduleModal {
  mobile: boolean;
}

export default function ScheduleModal({
  mobile,
}: IScheduleModal): ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const setNavOverlayOpen = useStore((state) => state.setNavOverlayOpen);

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
    setNavOverlayOpen(false);
  };

  return (
    <>
      {mobile ? (
        <Button
          variant="link"
          color="inherit"
          background="inherit"
          fontSize="inherit"
          borderRadius="inherit"
          _hover={{ textDecoration: "inherit" }}
          marginY="16px"
          onClick={handleOnOpen}
        >
          <GradientNavItemLink margin="0px !important" lineHeight={1.5}>
            Schedule
          </GradientNavItemLink>
        </Button>
      ) : (
        <Button
          variant="link"
          color="inherit"
          fontWeight="inherit"
          borderRadius="inherit"
          _hover={{ textDecoration: "inherit" }}
          marginLeft="32px"
          marginRight="16px"
          onClick={handleOnOpen}
        >
          <NavBarLink lineHeight={1.5}>Schedule</NavBarLink>
        </Button>
      )}
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
          <ModalCloseButton />
          <ModalBody paddingBottom={6}>
            <Tabs size="lg" variant="enclosed" isFitted colorScheme="teal">
              <TabList>
                <Tab>Saturday, January 9th 2021</Tab>
                <Tab>Sunday, January 10th 2021</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <ScheduleTable schedule={scheduleSaturday} mobile={mobile} />
                </TabPanel>
                <TabPanel>
                  <ScheduleTable schedule={scheduleSunday} mobile={mobile} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

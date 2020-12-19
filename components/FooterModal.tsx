import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { Fragment, ReactElement, useEffect } from "react";
import {
  BodyPrimary,
  FooterLink,
  Headline,
  HeadlinePrimary,
  LinkifyText,
} from "@/components/core/Text";
import { useRouter } from "next/router";

interface FooterModalProps {
  linkBody: string;
  modalBody: {
    paragraph: string[];
    title: string;
  }[];
}

export default function FooterModal({
  linkBody,
  modalBody,
}: FooterModalProps): ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;
    const thisModalHash = linkBody.replace(/\s/g, "").toLowerCase();
    if (hash === `#${thisModalHash}`) {
      onOpen();
    }
  }, [linkBody, onOpen]);

  const handleOnClose = () => {
    onClose();
    router.replace(router.pathname);
  };

  const handleOnOpen = () => {
    const lastCharInPath = router.pathname.charAt(router.pathname.length - 1);
    const currentPath: string =
      lastCharInPath === "/" ? router.pathname : `${router.pathname}/`;
    onOpen();
    router.replace(
      `${currentPath}#${linkBody.replace(/\s/g, "").toLowerCase()}`
    );
  };

  return (
    <>
      <FooterLink
        _focus={{}}
        _hover={{}}
        fontSize={["xs", "xs", "xs", "sm"]}
        onClick={handleOnOpen}
        isExternal
      >
        {linkBody}
      </FooterLink>
      <Modal
        motionPreset="slideInBottom"
        isOpen={isOpen}
        onClose={handleOnClose}
        size="xl" // TODO
      >
        <ModalOverlay />
        <ModalContent rounded="lg">
          <ModalHeader paddingTop={6}>
            <HeadlinePrimary margin="0px !important">
              {linkBody}
            </HeadlinePrimary>
          </ModalHeader>
          <ModalCloseButton _focus={{}} />
          <ModalBody paddingBottom={6}>
            {modalBody.map((item) => (
              <Fragment key={item.title}>
                <Headline marginBottom="8px">{item.title}</Headline>
                {item.paragraph.map((paragraph) => (
                  <Fragment key={paragraph}>
                    <LinkifyText>
                      {paragraph.charAt(0) === "•" ? (
                        <BodyPrimary paddingLeft={4}>{paragraph}</BodyPrimary>
                      ) : (
                        <BodyPrimary>{paragraph}</BodyPrimary>
                      )}
                    </LinkifyText>
                  </Fragment>
                ))}
              </Fragment>
            ))}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/core";
import React, { ReactElement, useEffect } from "react";
import { FooterLink } from "@/components/StyledCore";
import { useRouter } from "next/router";

interface FooterModalProps {
  linkBody: string;
  modalBody: string;
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
        rel="noopener noreferrer"
        target="_blank"
        onClick={handleOnOpen}
      >
        {linkBody}
      </FooterLink>
      <Modal isOpen={isOpen} onClose={handleOnClose} isCentered size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{linkBody}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{modalBody}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

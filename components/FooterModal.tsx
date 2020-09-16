import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/core";
import React, { Fragment, ReactElement, useEffect } from "react";
import {
  FooterLink,
  TextStyled,
  TextStyledBold,
} from "@/components/StyledCore";
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
        rel="noopener noreferrer"
        target="_blank"
      >
        {linkBody}
      </FooterLink>
      <Modal
        isOpen={isOpen}
        onClose={handleOnClose}
        preserveScrollBarGap
        scrollBehavior="inside"
        size={["95vw", "95vw", "80vw", "60vw"]}
      >
        <ModalOverlay />
        <ModalContent rounded="lg">
          <ModalHeader paddingTop={6}>
            <TextStyledBold fontSize="2xl">{linkBody}</TextStyledBold>
          </ModalHeader>
          <ModalCloseButton _focus={{}} />
          <ModalBody paddingBottom={6}>
            {modalBody.map((item) => (
              <Fragment key={item.title}>
                <TextStyledBold>{item.title}</TextStyledBold>
                {item.paragraph.map((paragraph) => (
                  <Fragment key={paragraph}>
                    <TextStyled>{paragraph}</TextStyled>
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
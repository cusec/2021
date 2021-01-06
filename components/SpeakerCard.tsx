import { ReactElement } from "react";
import {
  chakra,
  useDisclosure,
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { MotionBox } from "@/components/core/Motion";
import { Body, BodyPrimary } from "@/components/core/Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import ReactMarkdown from "react-markdown";
import styled from "@emotion/styled";

export interface ISpeaker {
  name: string;
  title: string;
  photo: string;
  logo?: string;
  bio: string;
  talk: {
    title: string;
    description: string;
  };
  socials?: ISpeakerSocials;
}

interface ISpeakerSocials {
  twitter?: string;
  linkedin?: string;
  website?: string;
  github?: string;
}

const logoSize = 14;

const MyIcon = chakra(FontAwesomeIcon, {
  baseStyle: {
    width: "18px",
  },
});

const MySocialLink = chakra(Link, {
  baseStyle: {
    color: "gray.400",
    _hover: {
      color: "gray.800",
    },
  },
});

const SpeakerTitle = chakra(Body, {
  baseStyle: {
    fontSize: "18px",
    color: "#696969",
  },
});

const SpeakerName = chakra(Body, {
  baseStyle: {
    fontSize: "26px",
    fontWeight: "bold",
  },
});

const SpeakerSocials = ({
  socials,
}: {
  socials: ISpeakerSocials | undefined;
}) =>
  socials ? (
    <HStack spacing="1.5rem">
      {socials.twitter && (
        <MySocialLink href={socials.twitter} isExternal>
          <MyIcon icon={faTwitter} />
        </MySocialLink>
      )}
      {socials.linkedin && (
        <MySocialLink href={socials.linkedin} isExternal>
          <MyIcon icon={faLinkedinIn} />
        </MySocialLink>
      )}
      {socials.website && (
        <MySocialLink href={socials.website} isExternal>
          <MyIcon icon={faGlobe} />
        </MySocialLink>
      )}
      {socials.github && (
        <MySocialLink href={socials.github} isExternal>
          <MyIcon icon={faGithub} />
        </MySocialLink>
      )}
    </HStack>
  ) : (
    <></>
  );

const Markdown = styled(ReactMarkdown)`
  ul {
    margin-left: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export default function SpeakerCard(props: ISpeaker): ReactElement {
  const { name, title, photo, logo, bio, talk, socials } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <MotionBox
        marginX={[0, "1rem"]}
        marginY="1rem"
        borderRadius="4px"
        overflow="hidden"
        border="1px solid #d8dee9"
        maxWidth="300px"
        width="100%"
        height="100%"
        shadow="md"
        userSelect="none"
        whileHover={{ translateY: -4 }}
        transition={{ duration: 0.2 }}
      >
        <Box
          width="100%"
          height="300px"
          position="relative"
          backgroundColor="gray.50"
          cursor="pointer"
          onClick={onOpen}
        >
          <Image
            src={photo}
            fallback={<Box />}
            width="100%"
            height="100%"
            objectFit="cover"
          />
          {logo && (
            <Center
              width={logoSize}
              height={logoSize}
              position="absolute"
              bottom={-logoSize / 2}
              right={logoSize / 2}
              backgroundColor="white"
              borderRadius="100%"
              shadow="md"
              overflow="hidden"
            >
              <Image src={logo} width="60%" height="auto" />
            </Center>
          )}
        </Box>
        <Box backgroundColor="white" paddingBottom="24px">
          <Box
            onClick={onOpen}
            cursor="pointer"
            paddingX="20px"
            paddingTop="24px"
          >
            <SpeakerName>{name}</SpeakerName>
            <SpeakerTitle marginBottom="1rem">{title}</SpeakerTitle>
            <BodyPrimary
              fontStyle="italic"
              display="-webkit-box"
              style={{ WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}
              overflow="hidden"
              textOverflow="ellipsis"
            >
              {talk.title}
            </BodyPrimary>
            <BodyPrimary
              display="-webkit-box"
              style={{ WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}
              overflow="hidden"
              textOverflow="ellipsis"
            >
              {bio}
            </BodyPrimary>
            <Button
              fontFamily="Inter, sans-serif"
              variant="link"
              marginBottom="8px"
            >
              More
            </Button>
          </Box>
          <Box marginTop="1rem" marginX="20px">
            <SpeakerSocials socials={socials} />
          </Box>
        </Box>
      </MotionBox>

      <Modal
        onClose={onClose}
        isOpen={isOpen}
        scrollBehavior="outside"
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <SpeakerName>{name}</SpeakerName>
            <SpeakerTitle>{title}</SpeakerTitle>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <BodyPrimary>Join us in {name}&apos;s talk on:</BodyPrimary>
            <BodyPrimary fontWeight="bold" fontStyle="italic">
              {talk.title}
            </BodyPrimary>
            <BodyPrimary>
              <Markdown children={talk.description} allowDangerousHtml />
            </BodyPrimary>
            <BodyPrimary fontWeight="bold">About {name}</BodyPrimary>
            <Body>
              <Markdown children={bio} allowDangerousHtml />
            </Body>
          </ModalBody>
          <ModalFooter>
            <Flex justify="center" width="100%" marginBottom="1rem">
              <SpeakerSocials socials={socials} />
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
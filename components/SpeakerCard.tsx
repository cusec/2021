import { MotionBox } from "@/components/core/Motion";
import {
  BodyPrimary,
  CardName,
  CardTitle,
  MyIcon,
  MySocialLink,
} from "@/components/core/Text";
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { ReactElement } from "react";
import ReactMarkdown from "react-markdown";

export interface ISpeaker {
  name: string;
  title: string;
  school?: string;
  photo: string;
  logo?: string;
  bio?: string;
  talk?: {
    title?: string;
    description?: string;
  };
  socials?: ISpeakerSocials;
}

interface ISpeakerSocials {
  twitter?: string;
  linkedin?: string;
  website?: string;
  github?: string;
  instagram?: string;
  facebook?: string;
}

const logoSize = 14;

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
      {socials.instagram && (
        <MySocialLink href={socials.instagram} isExternal>
          <MyIcon icon={faInstagram} />
        </MySocialLink>
      )}
      {socials.facebook && (
        <MySocialLink href={socials.facebook} isExternal>
          <MyIcon icon={faFacebook} />
        </MySocialLink>
      )}
    </HStack>
  ) : (
    <></>
  );

const Markdown = styled(ReactMarkdown)`
  * {
    font-family: "Inter", sans-serif;
    font-size: 16px;
  }

  ul,
  ol {
    margin-left: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export default function SpeakerCard(props: ISpeaker): ReactElement {
  const { name, title, photo, logo, bio, talk, socials, school } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <MotionBox
        marginX={[0, "1rem"]}
        marginY="1rem"
        borderRadius="4px"
        overflow="hidden"
        border="1px solid #d8dee9"
        maxWidth={["100%", "300px"]}
        width="100%"
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
            <CardName>{name}</CardName>
            <CardTitle marginBottom="1rem">{title}</CardTitle>
            {school && <BodyPrimary fontStyle="italic">{school}</BodyPrimary>}
            {talk?.title && (
              <BodyPrimary fontStyle="italic">{talk.title}</BodyPrimary>
            )}
            {bio && (
              <BodyPrimary
                display="-webkit-box"
                style={{ WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}
                overflow="hidden"
                textOverflow="ellipsis"
              >
                {bio}
              </BodyPrimary>
            )}
            {(bio || talk) && (
              <Button
                fontFamily="Inter, sans-serif"
                variant="link"
                marginBottom="8px"
              >
                More
              </Button>
            )}
          </Box>
          {socials && (
            <Box marginTop="1rem" marginX="20px">
              <SpeakerSocials socials={socials} />
            </Box>
          )}
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
            <CardName>{name}</CardName>
            <CardTitle>{title}</CardTitle>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {talk && (
              <>
                {(talk.title || talk.description) && (
                  <BodyPrimary>Join us in {name}&apos;s talk on:</BodyPrimary>
                )}
                {talk.title && (
                  <BodyPrimary fontWeight="bold" fontStyle="italic">
                    {talk.title}
                  </BodyPrimary>
                )}
                {talk.description && (
                  <Box marginBottom="1rem">
                    <Markdown children={talk.description} allowDangerousHtml />
                  </Box>
                )}
              </>
            )}
            {bio && (
              <>
                <BodyPrimary fontWeight="bold">About {name}</BodyPrimary>
                <Markdown children={bio} allowDangerousHtml />
              </>
            )}
          </ModalBody>
          <ModalFooter>
            {socials && (
              <Flex justify="center" width="100%" marginBottom="1rem">
                <SpeakerSocials socials={socials} />
              </Flex>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

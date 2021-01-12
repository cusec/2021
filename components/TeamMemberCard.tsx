import {
  BodyPrimary,
  CardName,
  CardTitle,
  MyIcon,
  MySocialLink,
} from "@/components/core/Text";
import { Box, HStack, Image } from "@chakra-ui/react";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { ReactElement } from "react";
import { MotionBox } from "@/components/core/Motion";

export interface ITeamMember {
  name: string;
  title: string;
  photo: string;
  school: string;
  socials?: ITeamMemberSocials;
}

interface ITeamMemberSocials {
  instagram?: string;
  linkedin?: string;
  website?: string;
  github?: string;
  facebook?: string;
}

const TeamMemberSocials = ({
  socials,
}: {
  socials: ITeamMemberSocials | undefined;
}) =>
  socials ? (
    <HStack spacing="1.5rem">
      {socials.instagram && (
        <MySocialLink href={socials.instagram} isExternal>
          <MyIcon icon={faInstagram} />
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
      {socials.facebook && (
        <MySocialLink href={socials.facebook} isExternal>
          <MyIcon icon={faFacebook} />
        </MySocialLink>
      )}
    </HStack>
  ) : (
    <></>
  );

export default function TeamMemberCard(props: ITeamMember): ReactElement {
  const { name, title, photo, school, socials } = props;
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
        >
          <Image
            src={photo}
            fallback={<Box />}
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </Box>
        <Box backgroundColor="white" paddingBottom="24px">
          <Box cursor="pointer" paddingX="20px" paddingTop="24px">
            <CardName>{name}</CardName>
            <CardTitle marginBottom="1rem">{title}</CardTitle>
            <BodyPrimary fontStyle="italic">{school}</BodyPrimary>
          </Box>
          <Box marginTop="1rem" marginX="20px">
            <TeamMemberSocials socials={socials} />
          </Box>
        </Box>
      </MotionBox>
    </>
  );
}

import styled from "@emotion/styled";
import { Box, Divider, Flex, Grid } from "@chakra-ui/react";
import React, { Fragment } from "react";
import MapleLeafs from "../svgs/maple-leafs.svg";
import InspiringKeynotes from "../svgs/inspiring-keynotes.svg";
import MeetRecruiters from "../svgs/meet-recruiters.svg";
import AttendWorkshops from "../svgs/attend-workshops.svg";
import BuildYourNetwork from "../svgs/build-your-network.svg";
import { LocationHashEnum } from "@/src/enums";
import theme from "@/src/theme";
import { GreyBackground, WidthWrapper } from "@/components/core/Layout";
import { Headline, HeadlinePrimary, BodyPrimary } from "@/components/core/Text";

const TextTagLine = styled(Headline)`
  color: ${theme.colors.brand.blue};
`;

const taglinesData = [
  { title: "Connect", subtitle: "with like-minded peers" },
  { title: "Learn", subtitle: "from world-renowned experts" },
  { title: "Discover", subtitle: "career opportunities" },
];

const experienceCUSECData = [
  {
    header: "Inspiring Keynotes",
    description:
      "We take great pride in hosting unique and knowledgeable speakers that come from many backgrounds in the software industry.",
    Icon: InspiringKeynotes,
  },
  {
    header: "Meet Recruiters",
    description:
      "Get exclusive opportunities to network with recruiters from the top companies that redefine tech everyday at our career fair.",
    Icon: MeetRecruiters,
  },
  {
    header: "Attend Workshops",
    description:
      "Broaden your skill sets with new technological tools and gain insight on the hottest topics and challenges facing today’s tech industry.",
    Icon: AttendWorkshops,
  },
  {
    header: "Build Your Network",
    description:
      "Meet like-minded peers, and fellow students from across North America. Make lifelong friendships.",
    Icon: BuildYourNetwork,
  },
];

const gridBox = `"0 1" "2 3"`;
const gridColumn = `"0" "1" "2" "3"`;

export default function About(): React.ReactElement {
  return (
    <div id={LocationHashEnum.About}>
      <WidthWrapper>
        <Flex
          align="center"
          paddingTop={["1in", "1in", "1.5in", "1.5in"]}
          paddingBottom={["1in", "1in", "1.5in", "2in"]}
        >
          <Flex direction="column" width={["100%", "100%", "100%", "65%"]}>
            <HeadlinePrimary>
              Annual Software Engineering Conference
            </HeadlinePrimary>
            <BodyPrimary>
              Join thousands of students from across Canada for a weekend full
              of interactive knowledge sharing, mentoring, career opportunities
              and more as we explore the endless possibilities of the future of
              tech.
            </BodyPrimary>
            <BodyPrimary>
              CUSEC is an annual software engineering conference organized for
              students by students. It was founded in 2002 by a small team of
              tech enthusiasts on a mission to educate and expose students to a
              diverse range of areas in software engineering and computer
              science. The conference enables attendees to discover
              knowledgeable speakers, connect with sponsoring companies, and
              make lifelong friends, all in a safe and comfortable space.
            </BodyPrimary>
          </Flex>
          <Box
            display={["none", "none", "none", "block"]}
            width="25%"
            marginLeft="10%"
          >
            <MapleLeafs width="100%" height="100%" />
          </Box>
        </Flex>
      </WidthWrapper>
      <GreyBackground>
        <Flex
          direction={["column", "column", "column", "row"]}
          justify={["center", "center", "center", "space-evenly"]}
          paddingY={["0.25in", "0.25in", "0.5in", "0.5in"]}
          maxWidth="1920px"
          margin="0 auto"
        >
          {taglinesData.map((item, index) => (
            <Fragment key={item.title}>
              {index !== 0 && <Divider orientation="vertical" />}
              <Flex
                flexDirection="column"
                alignItems="center"
                marginY={["8px", "8px", "8px", 0]}
              >
                <TextTagLine fontSize={["4xl", "5xl"]}>
                  {item.title}
                </TextTagLine>
                <BodyPrimary
                  textAlign="center"
                  marginBottom={["30px", "30px", "20px", 0]}
                >
                  {item.subtitle}
                </BodyPrimary>
              </Flex>
            </Fragment>
          ))}
        </Flex>
      </GreyBackground>
      <WidthWrapper>
        <Flex direction="column" paddingY={["1in", "1in", "1.5in"]}>
          <Flex justifyContent="center" textAlign="center" marginBottom="32px">
            <HeadlinePrimary>Ways to experience CUSEC</HeadlinePrimary>
          </Flex>
          <Grid
            width="100%"
            gridTemplateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
            ]}
            gridTemplateAreas={[
              gridColumn,
              gridColumn,
              gridColumn,
              gridColumn,
              gridBox,
            ]}
            alignItems="center"
          >
            {experienceCUSECData.map(({ header, description, Icon }, index) => (
              <Box
                key={header}
                gridArea={index}
                justifySelf={[
                  "center",
                  "center",
                  "center",
                  "center",
                  index % 2 === 0 ? "flex-end" : "flex-start",
                ]}
                borderWidth="1px"
                boxShadow="md"
                marginRight={[0, 0, 0, 0, index % 2 === 0 ? "1rem" : 0]}
                marginLeft={[0, 0, 0, 0, index % 2 === 1 ? "1rem" : 0]}
                marginBottom={["1rem", "1.5rem", "2rem"]}
                maxWidth="700px"
                rounded="lg"
              >
                <Flex
                  align="center"
                  alignContent="center"
                  minHeight={[0, 0, "140px"]}
                  justify="center"
                >
                  <Box
                    display={["none", "none", "flex"]}
                    marginLeft="1.5rem"
                    marginRight="8px"
                  >
                    <Icon height="72px" width="72px" />
                  </Box>
                  <Flex direction="column" height="100%" padding="1rem">
                    <Flex
                      justify="space-between"
                      align="center"
                      marginBottom="4px"
                    >
                      <Headline fontSize="16px">{header}</Headline>
                      <Box display={["block", "block", "none"]}>
                        <Icon width="32px" height="32px" />
                      </Box>
                    </Flex>
                    <BodyPrimary marginBottom="0 !important">
                      {description}
                    </BodyPrimary>
                  </Flex>
                </Flex>
              </Box>
            ))}
          </Grid>
        </Flex>
      </WidthWrapper>
    </div>
  );
}

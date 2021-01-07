import {
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Tr,
  Flex,
} from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import styled from "@emotion/styled";
import theme from "@/src/theme";
import { cusecEvent } from "@/src/data";
import { ReactElement, useEffect, useState } from "react";

interface IScheduleTable {
  schedule: cusecEvent[];
  mobile: boolean;
}

interface IEvent {
  title: string;
  description?: string;
  start: Date;
  end: Date;
}

const Markdown = styled(ReactMarkdown)`
  font-size: 12px;
  margin-top: 2px;

  a {
    color: ${theme.colors.brand.blue};
  }

  a:hover {
    color: ${theme.colors.brand.dark_teal};
    text-decoration: underline;
  }
`;

export default function ScheduleTable({
  schedule,
  mobile,
}: IScheduleTable): ReactElement {
  const [localSchedule, setLocalSchedule] = useState<IEvent[]>([]);

  useEffect(() => {
    const scheduleList: IEvent[] = [];

    schedule.forEach((thisEvent) => {
      const start = new Date(
        Date.UTC(
          2021,
          1,
          9,
          thisEvent.startTime.hour + 5,
          thisEvent.startTime.minute
        )
      );
      const end = new Date(
        Date.UTC(
          2021,
          1,
          9,
          thisEvent.endTime.hour + 5,
          thisEvent.endTime.minute
        )
      );

      scheduleList.push({
        title: thisEvent.title,
        description: thisEvent.description,
        start,
        end,
      });
    });

    setLocalSchedule(scheduleList);
  }, [schedule, setLocalSchedule]);

  return (
    <>
      <Table variant="striped" colorScheme="gray" size="lg">
        <TableCaption>
          Times are displayed in{" "}
          {Intl.DateTimeFormat().resolvedOptions().timeZone}
        </TableCaption>
        <Tbody>
          {localSchedule.map((event) => (
            <Tr key={event.title}>
              <Td>
                <Flex flexDirection="column">
                  <Text isTruncated align="center">
                    {event.start.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </Text>
                  {mobile && <Text align="center">-</Text>}
                  <Text isTruncated align="center">
                    {event.end.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </Text>
                </Flex>
              </Td>
              <Td>
                <Text fontWeight="bold">{event.title}</Text>
                {event.description && <Markdown>{event.description}</Markdown>}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
}

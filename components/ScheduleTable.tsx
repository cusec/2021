import { Table, TableCaption, Tbody, Td, Tr } from "@chakra-ui/react";

import { cusecEvent } from "@/src/data";
import { ReactElement } from "react";

interface ISchedule {
  schedule: cusecEvent[];
}

export default function ScheduleTable({ schedule }: ISchedule): ReactElement {
  return (
    <>
      <Table variant="striped" colorScheme="gray" size="lg">
        <TableCaption>Times are displayed in America/Toronto</TableCaption>
        <Tbody>
          {schedule.map((event) => (
            <Tr key={event.title}>
              <Td>
                {event.startTime.hour}:
                {event.startTime.minute === 0 ? "00" : event.startTime.minute} -{" "}
                {event.endTime.hour}:
                {event.endTime.minute === 0 ? "00" : event.endTime.minute}
              </Td>
              <Td>{event.title}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
}

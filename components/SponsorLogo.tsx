import { Flex } from "@chakra-ui/core";
import React, { ReactElement } from "react";

export enum Categories {
  Partner,
  Gold,
  Silver,
  Bronze,
}

interface SponsorLogoProps {
  logo: ReactElement;
  category: Categories;
}

export default function SponsorLogo({
  logo,
  category,
}: SponsorLogoProps): ReactElement {
  return (
    <>
      <Flex>{logo}</Flex>
    </>
  );
}

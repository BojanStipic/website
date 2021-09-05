import React, { VFC } from "react";
import { Flex } from "@chakra-ui/react";

import { Card } from "./";

export const Footer: VFC = () => {
  return (
    <Card as="footer" variant="outline" p="4">
      <Flex fontSize="sm" fontWeight="light">
        Copyright © 2020 Bojan Stipic
      </Flex>
    </Card>
  );
};

import React, { FC } from "react";
import { Flex } from "@chakra-ui/react";

import { Card } from "./";

export const Footer: FC = () => {
  return (
    <Card as="footer" variant="outline" p={4}>
      <Flex fontSize="sm" fontWeight="light">
        Copyright © 2022 Bojan Stipic
      </Flex>
    </Card>
  );
};

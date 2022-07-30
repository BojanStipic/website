import React, { FC } from "react";
import { Heading } from "@chakra-ui/react";

import { Card } from "./";

export const SkillCard: FC = () => (
  <Card p={8} borderRadius="xl">
    <Heading size="sm">Backend Engineering</Heading>
    Java / Spring / PostgreSQL / Cassandra / Kafka / Node.js / Express
    <Heading size="sm">Frontend Engineering</Heading>
    JavaScript / TypeScript / React.js / HTML / CSS
    <Heading size="sm">Systems Programming</Heading>
    Rust / C++ / C / x86 Assembly
    <Heading size="sm">Other</Heading>
    GNU/Linux / Bash / Git / Docker / Flex & Bison
    <Heading size="sm">Dev Environment</Heading>
    Vim and CLI utilities
  </Card>
);

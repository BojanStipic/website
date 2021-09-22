import React, { ReactNode, VFC } from "react";
import { Heading, Stack, StackProps } from "@chakra-ui/react";

import { useAccentColor } from "../hooks";

export type SectionProps = StackProps & {
  title: string;
  children: ReactNode;
};

export const Section: VFC<SectionProps> = ({ title, children, ...rest }) => (
  <Stack direction="column" align="start" {...rest}>
    <Heading
      textDecorationLine="underline"
      textDecorationColor={useAccentColor()}
      textDecorationThickness="8px"
      textUnderlineOffset="10px"
      mb="4"
    >
      {title}
    </Heading>
    {children}
  </Stack>
);

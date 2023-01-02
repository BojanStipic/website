import { Heading, Stack, StackProps } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";

import { useAccentColor } from "../hooks";

export type SectionProps = StackProps & {
  title: string;
  children: ReactNode;
};

export const Section: FC<SectionProps> = ({ title, children, ...rest }) => (
  <Stack as="section" {...rest}>
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

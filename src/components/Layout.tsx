import { Box, Stack } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";

import { Footer, Header } from "./";

export type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => (
  <Stack minH="100vh" spacing={8}>
    <Header />
    <Box as="main" flex={1}>
      {children}
    </Box>
    <Footer />
  </Stack>
);

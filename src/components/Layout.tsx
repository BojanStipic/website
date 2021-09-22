import React, { VFC, ReactNode } from "react";
import { Box, Stack } from "@chakra-ui/react";

import { Header, Footer } from "./";

export type LayoutProps = {
  children: ReactNode;
};

export const Layout: VFC<LayoutProps> = ({ children }) => (
  <Stack minH="100vh" spacing={8}>
    <Header />
    <Box as="main" flex={1}>
      {children}
    </Box>
    <Footer />
  </Stack>
);

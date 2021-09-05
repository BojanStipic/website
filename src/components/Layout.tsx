import React, { VFC, ReactNode } from "react";
import { Box, Flex } from "@chakra-ui/react";

import { Header, Footer } from "./";

export type LayoutProps = {
  children: ReactNode;
};

export const Layout: VFC<LayoutProps> = ({ children }) => (
  <Flex minH="100vh" direction="column">
    <Header />
    <Box as="main" flex="1" mt="4">
      {children}
    </Box>
    <Footer />
  </Flex>
);

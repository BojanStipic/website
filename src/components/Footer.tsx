import React, { FC } from "react";
import { Text, Link } from "@chakra-ui/react";

import { Card } from "./";
import { useAccentColor } from "../hooks";

export const Footer: FC = () => {
  const linkColor = useAccentColor();

  return (
    <Card as="footer" variant="outline" p={4}>
      <Text fontSize="sm" fontWeight="light" textAlign="center">
        Copyright © 2021-2022 Bojan Stipic | Website source code is available on{" "}
        <Link
          href="https://github.com/BojanStipic/website"
          isExternal={true}
          color={linkColor}
        >
          GitHub
        </Link>
        , licensed under{" "}
        <Link
          href="https://github.com/BojanStipic/website/blob/master/LICENSE"
          isExternal={true}
          color={linkColor}
        >
          AGPL-3.0-or-later
        </Link>
        .
      </Text>
    </Card>
  );
};

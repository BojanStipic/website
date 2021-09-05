import React, { VFC, ElementType, ReactNode, useState } from "react";
import { Link as GatsbyLink } from "gatsby";
import { Icon, Button } from "@chakra-ui/react";

export type NavigationLinkProps = {
  to: string;
  icon: ElementType;
  children: ReactNode;
};

export const NavigationLink: VFC<NavigationLinkProps> = ({
  to,
  icon,
  children,
}) => {
  const [isCurrent, setIsCurrent] = useState(false);
  const handleCurrentChange = ({ isPartiallyCurrent }) => {
    setIsCurrent(isPartiallyCurrent);
    return {};
  };

  return (
    <Button
      as={GatsbyLink}
      to={to}
      colorScheme={isCurrent ? "brand" : "gray"}
      getProps={handleCurrentChange}
    >
      <Icon as={icon} mr="2" fontSize="2xl" />
      {children}
    </Button>
  );
};

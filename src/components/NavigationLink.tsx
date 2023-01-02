import { Button, Icon } from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import React, { ElementType, FC, ReactNode, useState } from "react";

export type NavigationLinkProps = {
  to: string;
  icon: ElementType;
  children: ReactNode;
};

export const NavigationLink: FC<NavigationLinkProps> = ({
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
      <Icon as={icon} mr={2} fontSize="2xl" />
      {children}
    </Button>
  );
};

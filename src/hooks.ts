import { useColorModeValue } from "@chakra-ui/react";

export const useAccentColor = () => useColorModeValue("brand.500", "brand.300");

export const useMutedColor = () => useColorModeValue("gray.600", "gray.400");

import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

export const mermaidStyles = (props: StyleFunctionProps) => ({
  "svg[id^=mermaid]": {
    "max-width": "100% !important",
    "background-color": "transparent !important",
  },
  "#ZERO_OR_ONE_START *, \
  #ZERO_OR_ONE_END *, \
  #ONLY_ONE_START *, \
  #ONLY_ONE_END *, \
  #ZERO_OR_MORE_START *, \
  #ZERO_OR_MORE_END *, \
  #ONE_OR_MORE_START *, \
  #ONE_OR_MORE_END *, \
  .er.relationshipLine, \
  .er.entityBox, \
  .er.attributeBoxOdd, \
  .er.attributeBoxEven":
    {
      stroke: `${mode("gray.500", "gray.300")(props)} !important`,
    },
  ".er.entityBox, \
  #ZERO_OR_ONE_START circle, \
  #ZERO_OR_ONE_END circle, \
  #ZERO_OR_MORE_START circle, \
  #ZERO_OR_MORE_END circle":
    {
      fill: `${mode("brand.500", "brand.300")(props)} !important`,
    },
  ".er.er.entityBox + .er.entityLabel": {
    fill: `${mode("gray.100", "gray.800")(props)} !important`,
  },
  ".er.entityLabel": {
    fill: `chakra-body-text !important`,
  },
  ".er.er.attributeBoxOdd": {
    fill: `${mode("gray.50", "gray.800")(props)} !important`,
  },
  ".er.er.attributeBoxEven": {
    fill: `${mode("gray.100", "gray.700")(props)} !important`,
  },
});

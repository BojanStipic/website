import { StyleFunctionProps, mode } from "@chakra-ui/theme-tools";

export const mermaidStyles = (props: StyleFunctionProps) => ({
  ...erDiagramStyles(props),
  ...gitGraphStyles(props),
});

const erDiagramStyles = (props: StyleFunctionProps) => ({
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
  .er.attributeBoxEven": {
    stroke: `${mode("gray.500", "gray.300")(props)} !important`,
  },
  ".er.entityBox, \
  #ZERO_OR_ONE_START circle, \
  #ZERO_OR_ONE_END circle, \
  #ZERO_OR_MORE_START circle, \
  #ZERO_OR_MORE_END circle": {
    fill: `${mode("brand.500", "brand.300")(props)} !important`,
  },
  ".er.er.entityBox + .er.entityLabel": {
    fill: `${mode("gray.100", "gray.800")(props)} !important`,
  },
  ".er.entityLabel": {
    fill: "chakra-body-text !important",
  },
  ".er.er.attributeBoxOdd": {
    fill: `${mode("gray.50", "gray.800")(props)} !important`,
  },
  ".er.er.attributeBoxEven": {
    fill: `${mode("gray.100", "gray.700")(props)} !important`,
  },
});

const gitGraphStyles = (props: StyleFunctionProps) => ({
  ".branch": {
    stroke: `${mode("gray.500", "gray.300")(props)} !important`,
  },
  ".label": {
    fill: `${mode("gray.100", "gray.800")(props)} !important`,
  },
  ".commit-label": {
    fill: "chakra-body-text !important",
  },
  ".commit-label-bkg": {
    fill: `${mode("gray.300", "gray.700")(props)} !important`,
    opacity: "0.7 !important",
  },
  ".commit": {
    fill: `${mode("gray.700", "gray.100")(props)} !important`,
  },
  ".label0": {
    fill: `${mode("brand.500", "brand.300")(props)} !important`,
  },
  ".arrow0": {
    stroke: `${mode("brand.500", "brand.300")(props)} !important`,
  },
  ".label1": {
    fill: `${mode("green.500", "green.300")(props)} !important`,
  },
  ".arrow1": {
    stroke: `${mode("green.500", "green.300")(props)} !important`,
  },
  ".label2": {
    fill: `${mode("purple.500", "purple.300")(props)} !important`,
  },
  ".arrow2": {
    stroke: `${mode("purple.500", "purple.300")(props)} !important`,
  },
  ".label3": {
    fill: `${mode("pink.500", "pink.300")(props)} !important`,
  },
  ".arrow3": {
    stroke: `${mode("pink.500", "pink.300")(props)} !important`,
  },
  ".label4": {
    fill: `${mode("teal.500", "teal.300")(props)} !important`,
  },
  ".arrow4": {
    stroke: `${mode("teal.500", "teal.300")(props)} !important`,
  },
  ".label5": {
    fill: `${mode("orange.500", "orange.300")(props)} !important`,
  },
  ".arrow5": {
    stroke: `${mode("orange.500", "orange.300")(props)} !important`,
  },
});

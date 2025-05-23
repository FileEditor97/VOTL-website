import {defineTokens} from "@chakra-ui/react";

const fallback = `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`

export const fonts = defineTokens.fonts({
  heading: {
    value: `"Montserrat", sans-serif, ${fallback}`,
  },
  body: {
    value: `"Montserrat", sans-serif, ${fallback}`,
  },
  mono: {
    value: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
  },
})
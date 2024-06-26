//theme.ts
import { extendTheme } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";

export const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "light"},
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode("gray.800","gray.800")(props),
      }
    })
  },
})
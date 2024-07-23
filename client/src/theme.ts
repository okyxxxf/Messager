import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  semanticTokens: {
    colors: {
      mainBlue: "#303565",
      mainBlack: "#0F0F0F",
      mainWhite: "#F0E6E6",
      mainRed: "#C92A2A",
      lightRed: "#da4c4c",
      darkRed: "#9f2121",
    }
  }
})

export const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
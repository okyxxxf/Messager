import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { textVariants } from "../../theme";

export function Header() {
  return (
    <Box
      as="header"
      maxW="1440px"
      m="auto"
      w="100%"
      h="100px"
      fontFamily="Jua"
      fontSize="64px"
      color="mainWhite"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {"Spiral".split("").map((letter, index) => (
          <motion.span
            key={index}
            variants={textVariants}
            style={{
              display: "inline-block",
              marginRight: "0.25rem",
              cursor: "grabbing",
              textShadow:
                ".04em 0 #000, -.04em 0 #000, 0 .04em #000, 0 -.04em #000",
            }}
            drag
            dragConstraints={{
              top: -10,
              bottom: 50,
              left: -50 * index + 1,
              right: 50 * 5 - index,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </Box>
  );
}

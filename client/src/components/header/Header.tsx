import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,

    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

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
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.5,
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

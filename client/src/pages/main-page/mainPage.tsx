import { Box, Flex, Text } from "@chakra-ui/react";
import { CustomButton, Header } from "../../components";
import { motion } from "framer-motion";
import { textVariants } from "../../theme";

export function MainPage() {
  return (
    <Box bg="mainBlue" h="100vh">
      <Header />
      <Flex
        w="100%"
        h="100%"
        align="center"
        p="15vh 0"
        direction="column"
        gap="10vh"
      >
        <Text fontSize="100px" color="mainWhite">
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
            {"Start     chat    now?".split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={textVariants}
                style={{
                  display: "inline-block",
                  marginRight: "0.3rem",
                  cursor: "grabbing",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </Text>
        <CustomButton
          variant={Math.round(Math.random()) === 1 ? "green" : "red"}
        >
          check the sound
        </CustomButton>
      </Flex>
    </Box>
  );
}

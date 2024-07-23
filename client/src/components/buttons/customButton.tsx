import { Button, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

type ButtonVariant = "red" | "white" | "green";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
};

const buttonStyles: Record<
  ButtonVariant,
  { bg: string; hover: string; color: string }
> = {
  red: {
    bg: "mainRed",
    hover: "darkRed",
    color: "mainWhite",
  },
  white: {
    bg: "mainWhite",
    hover: "gray.200",
    color: "mainBlack",
  },
  green: {
    bg: "green",
    hover: "darkGreen",
    color: "mainWhite",
  },
};

export function CustomButton({
  children,
  variant = "white",
  onClick,
}: ButtonProps) {
  const { bg, hover, color } = buttonStyles[variant];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 3,
        duration: 1,
      }}
    >
      <Button
        bg={bg}
        borderRadius="10px"
        border="4px solid"
        borderColor="mainBlack"
        p="40px 40px"
        _hover={{ background: hover }}
        transition="0.7s"
        onClick={onClick}
      >
        <Text fontSize="48px" color={color}>
          {children}
        </Text>
      </Button>
    </motion.div>
  );
}

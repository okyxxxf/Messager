import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "../../pages";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { theme } from "../../theme";

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box fontFamily="Jua" overflow="hidden">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
          </Routes>
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  );
}

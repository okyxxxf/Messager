import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "../../pages";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../../theme";

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

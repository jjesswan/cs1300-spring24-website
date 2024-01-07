import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import "./styles/global.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import customTheme from "./styles/theme"

 

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);

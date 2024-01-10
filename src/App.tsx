import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import Home from "./components/Home"
import Navbar from "./components/navigation/Navbar"
import "./styles/global.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import customTheme from "./styles/theme"
import Hamburger from "./components/navigation/Hamburger"
import SideNav from "./components/navigation/SideNav"
import Navigation from "./components/navigation/Navigation"

 

export const App = () => (

  <ChakraProvider theme={customTheme}>
    <BrowserRouter>
      {/* <Navbar /> */}
      <Navigation/>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);

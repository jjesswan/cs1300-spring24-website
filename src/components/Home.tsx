import React, { useRef } from "react";
import { Button, ButtonGroup, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Header from "./sections/Header";
import Links from "./sections/Links";
import Schedule from "./sections/Schedule";
import Hours from "./sections/Hours";
import Staff from "./sections/Staff";
import Faq from "./sections/Faq";
import Footer from "./Footer";


export default function Home() {
  return (
    <div>
      <Header />
      <Links />
      <Schedule/>
      <Hours/>
      <Staff/>
      <Faq/>
      <Footer/>
    </div>
  );
}
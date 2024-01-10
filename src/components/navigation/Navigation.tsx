import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";
import Hamburger from "./Hamburger";
import SideNav from "./SideNav";
import Navbar from "./Navbar";

export default function Navigation() {
  const [open, setOpen] = React.useState<boolean>(false); // sidenav open

  return (
    <div>
      <Navbar/>
      <Hamburger open={open} setOpen={setOpen} />
      <SideNav open={open} setOpen={setOpen} />
    </div>
  );
}

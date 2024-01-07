import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";



export default function Navbar() {
  return (
    <Box position={"fixed"} zIndex={"sticky"} bg="green">
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        px={{ base: 10, md: 20 }}
        h={"7vh"}
        w={"100vw"}
        bg="yellow"
        m={0}
      >
        <Flex>
          <HashLink smooth to="/#top" variant="navLink" pr="0">
            <ChakraLink variant={"navLink"}>home</ChakraLink>
          </HashLink>
        </Flex>
        <Flex>
          <HashLink smooth to="/#links" variant="navLink" pr="0">
            <ChakraLink variant={"navLink"}>links</ChakraLink>
          </HashLink>
          <HashLink smooth to="/#schedule" variant="navLink" pr="0">
            <ChakraLink variant={"navLink"}>schedule</ChakraLink>
          </HashLink>
          <HashLink smooth to="/#hours" variant="navLink" pr="0">
            <ChakraLink variant={"navLink"}>hours</ChakraLink>
          </HashLink>
          <HashLink smooth to="/#staff" variant="navLink" pr="0">
            <ChakraLink variant={"navLink"}>staff</ChakraLink>
          </HashLink>
          <HashLink smooth to="/#faq" variant="navLink" pr="0">
            <ChakraLink variant={"navLink"}>faq</ChakraLink>
          </HashLink>
        </Flex>
      </Flex>
    </Box>
  );
}

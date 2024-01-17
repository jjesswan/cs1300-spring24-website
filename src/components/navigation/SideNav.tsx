import { Box, Button, ButtonSpinner, Flex, IconButton, Slide, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";
import { TiThMenu } from "react-icons/ti";
import { TiTimes } from "react-icons/ti";

interface SideNavProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}



export default function SideNav(props: SideNavProps) {

    function closeNav(){
        props.setOpen(false)
    }
    
  
  return (
    <Slide
      direction="left"
      in={props.open}
      style={{ zIndex: "10000" }}
      unmountOnExit
    >
      <Box
        position={"fixed"}
        zIndex={"sticky"}
        transition={"all .4s"}
        role="navigation"
        aria-label="mobile navigation"
      >
        <Flex
          position={"fixed"}
          minH={"100vh"}
          minWidth={"70vw"}
          w="70vw"
          h="100vh"
          bg={"darkGrey"}
          borderRightRadius={".5rem"}
          py="1rem"
          pl="2rem"
          pr="1rem"
          flexDir={"column"}
          boxShadow="lg"
        >
          <Flex
            w="100%"
            justifyContent={"space-between"}
            alignItems={"center"}
            mb="2rem"
          >
            <Text variant="tinyHeader" fontSize={"2rem"}>
              ui/ux
            </Text>
            <IconButton
              aria-label="Close Sidebar Navigation"
              bg="transparent"
              padding={"0"}
              margin="0"
              icon={<TiTimes size="2rem" color="white" />}
              onClick={closeNav}
            />
          </Flex>
          <HashLink smooth to="/#links" variant="navLink" pr="0">
            <ChakraLink variant={"sideLink"} onClick={closeNav}>
              links
            </ChakraLink>
          </HashLink>
          <HashLink smooth to="/#todo" variant="navLink" pr="0">
            <ChakraLink variant={"sideLink"} onClick={closeNav}>
              todos
            </ChakraLink>
          </HashLink>
          <HashLink smooth to="/#schedule" variant="navLink" pr="0">
            <ChakraLink variant={"sideLink"} onClick={closeNav}>
              schedule
            </ChakraLink>
          </HashLink>
          <HashLink smooth to="/#hours" variant="navLink" pr="0">
            <ChakraLink variant={"sideLink"} onClick={closeNav}>
              hours
            </ChakraLink>
          </HashLink>
          <HashLink smooth to="/#staff" variant="navLink" pr="0">
            <ChakraLink variant={"sideLink"} onClick={closeNav}>
              staff
            </ChakraLink>
          </HashLink>
          <HashLink smooth to="/#faq" variant="navLink" pr="0">
            <ChakraLink variant={"sideLink"} onClick={closeNav}>
              faq
            </ChakraLink>
          </HashLink>
        </Flex>
      </Box>
    </Slide>
  );
}

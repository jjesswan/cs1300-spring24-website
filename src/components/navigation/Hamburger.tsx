import { Box, Flex, IconButton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";
import { TiThMenu } from "react-icons/ti";

interface SideNavProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}

export default function Hamburger(props: SideNavProps) {
  const [bgColor, setbgColor] = useState("yellow");

  // change color on scroll
  const changeNavBg = () => {
    window.scrollY <= 500 ? setbgColor("yellow") : setbgColor("white");
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  return (
    <Box
      position={"fixed"}
      zIndex={"sticky"}
      display={{ md: "none", base: "flex" }}
      role="navigation"
      aria-label="mobile navigation toggle"
    >
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        px={{ base: 5, md: 20 }}
        minHeight={"7vh"}
        py=".5rem"
        minWidth={"100vw"}
        bg={bgColor}
        m={0}
        transition={"all .2s"}
      >
        <IconButton
          aria-label="Close Sidebar Navigation"
          bg="transparent"
          padding={"0"}
          margin="0"
          icon={<TiThMenu size="2rem" color="black" />}
          onClick={() => props.setOpen(true)}
        />

        {/* <Flex>
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
        </Flex> */}
      </Flex>
    </Box>
  );
}

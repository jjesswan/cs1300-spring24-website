import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";



export default function Navbar() {
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
      display={{ md: "flex", base: "none" }}
      role="navigation"
      aria-label="desktop navigation"
    >
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        px={{ base: 10, md: 20 }}
        minHeight={"7vh"}
        py=".5rem"
        minWidth={"100vw"}
        bg={bgColor}
        m={0}
        transition={"all .2s"}
        borderBottomRadius={"1rem"}
        boxShadow={bgColor == "yellow" ? "0" : "md"}
      >
        <Flex>
          <HashLink smooth to="/#top" variant="navLink" pr="0">
            <ChakraLink variant={bgColor == "yellow" ? "navLink1" : "navLink2"}>
              home
            </ChakraLink>
          </HashLink>
        </Flex>
        <Flex>
          <HashLink smooth to="/#links" variant="navLink" pr="0">
            <ChakraLink variant={bgColor == "yellow" ? "navLink1" : "navLink2"}>
              links
            </ChakraLink>
          </HashLink>
          <HashLink smooth to="/#schedule" variant="navLink" pr="0">
            <ChakraLink variant={bgColor == "yellow" ? "navLink1" : "navLink2"}>
              schedule
            </ChakraLink>
          </HashLink>
          <HashLink smooth to="/#hours" variant="navLink" pr="0">
            <ChakraLink variant={bgColor == "yellow" ? "navLink1" : "navLink2"}>
              hours
            </ChakraLink>
          </HashLink>
          <HashLink smooth to="/#staff" variant="navLink" pr="0">
            <ChakraLink variant={bgColor == "yellow" ? "navLink1" : "navLink2"}>
              staff
            </ChakraLink>
          </HashLink>
          <HashLink smooth to="/#faq" variant="navLink" pr="0">
            <ChakraLink variant={bgColor == "yellow" ? "navLink1" : "navLink2"}>
              faq
            </ChakraLink>
          </HashLink>
        </Flex>
      </Flex>
    </Box>
  );
}

import React, { useRef } from "react";
import { Button, ButtonGroup, Flex, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import customTheme from "../../styles/theme"


export default function Header() {
  return (
    <div id="top">
      <Flex
        minHeight={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        bg="yellow"
        flexDir={"column"}
        py="5rem"
        w="100vw"
        role="banner"
        aria-label="banner"
      >
        <Image
          objectFit="contain"
          maxWidth={{ md: "50%", base: "90vw" }}
          src="/images/Header final.png"
        />
        <Flex flexDir={"column"} alignItems={"center"}>
          <Text variant="bigHeader" color="brown">
            welcome to
          </Text>

          <Text
            variant="bigHeader"
            color="white"
            textShadow={"#5D3011 0px 2px 3px"}
            mb="2rem"
          >
            csci1300
          </Text>
          <Text variant="capitalBody" color="brown">
            tues/thurs 1-2:20pm
          </Text>
          <Text variant="capitalBody" color="brown">
            metcalf auditorium
          </Text>
        </Flex>
      </Flex>
    </div>
  );
}

import React, { useRef } from "react";
import { Button, ButtonGroup, Flex, Text } from "@chakra-ui/react";
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
      >
        <Flex flexDir={"column"} alignItems={"center"} mt="10%">
          <Text variant="bigHeader">UI/UX</Text>
        </Flex>
        <Flex flexDir={"column"} alignItems={"center"}>
          <Text variant="subtitle" color="white">
            welcome to cs1300:
          </Text>
          <Text variant="subtitle" mb="1rem" color="white">
            user interfaces and user experiences!
          </Text>
          <Text variant="capitalBody" color="red">
            tues/thurs 1-2:20pm
          </Text>
          <Text variant="capitalBody" color="red">
            metcalf auditorium
          </Text>
        </Flex>
      </Flex>
    </div>
  );
}

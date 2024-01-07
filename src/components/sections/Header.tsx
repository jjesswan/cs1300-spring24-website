import React, { useRef } from "react";
import { Button, ButtonGroup, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import customTheme from "../../styles/theme"


export default function Header() {
  return (
    <div id="top">
      <Flex
        h="100vh"
        justifyContent={"center"}
        alignItems={"center"}
        bg="yellow"
        flexDir={"column"}
      >
        <Flex flexDir={"column"} alignItems={"center"} mt="10%">
          <Text variant="bigHeader">UI/UX</Text>
        </Flex>
        <Flex flexDir={"column"} alignItems={"center"}>
          <Text variant="subtitle" mb="-1.2rem" color="white">
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

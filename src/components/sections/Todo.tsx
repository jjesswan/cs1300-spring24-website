import React, { useRef } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import customTheme from "../../styles/theme";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import {
  TiArrowBackOutline,
  TiDownloadOutline,
  TiStopwatch,
} from "react-icons/ti";
import Assignment from "./Cards/Assignment";
import Studio from "./Cards/Studio";
import Readings from "./Cards/Readings";

export default function Todo() {
  return (
    <div id="todo">
      <Flex
        justifyContent={"flex-start"}
        alignItems={"center"}
        bg="offWhite"
        flexDir={"column"}
        pt="3rem"
        pb="5rem"
        px={{ md: "10%", lg: "20%", base: "3rem" }}
        role="complementary"
        aria-label="current events section"
      >
        <Text variant="subHeader" mb="1.5rem">
          current to-do's
        </Text>

        <Flex
          w="100%"
          justifyContent={{ md: "space-evenly", base: "center" }}
          alignItems={{ md: "flex-start", base: "center" }}
          flexDir={{ md: "row", base: "column" }}
          gap="1rem"
        >
          <Assignment />
          <Studio />
          <Readings />
        </Flex>
      </Flex>
    </div>
  );
}

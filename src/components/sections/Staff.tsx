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

export default function Staff() {
  return (
    <div id="staff">
      <Flex
        justifyContent={"flex-start"}
        alignItems={"center"}
        bg="darkGrey"
        flexDir={"column"}
        pt="3rem"
        pb="5rem"
        px={{ md: "20%", base: "5rem" }}
      >
        <Text variant="subHeader" color="white">staff</Text>
        <Text variant="subscript" mb="1.5rem" w="70%">
          We highly recommend bookmarking this schedule, as this contains all
          information regarding assignments, lectures, studios, and readings.
          <br></br>
          <br></br>
          Note: slides and lecture capture are firstly and always available on
          Canvas in the Files and Media Library folders, respectively. The links
          in the schedule below are added later only for convenience.
        </Text>
      </Flex>
    </div>
  );
}

import React, { useRef } from "react";
import { Button, ButtonGroup, Card, CardBody, Flex, Stack, Text } from "@chakra-ui/react";
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

export default function Schedule() {
  return (
    <div id="schedule">
      <Flex
        justifyContent={"flex-start"}
        alignItems={"center"}
        bg="yellow"
        flexDir={"column"}
        pt="3rem"
        pb="5rem"
        px={{ md: "10%", lg: "20%", base: "3rem" }}
        role="complementary"
        aria-label="current events section"
      >
        <Text variant="subHeader" color="darkGrey">schedule</Text>
        <Text variant="subscript" mb="1.5rem" w="70%">
          We highly recommend bookmarking this schedule, as this contains all
          information regarding assignments, lectures, studios, and readings.
          <br></br>
          <br></br>
          Note: slides and lecture capture are firstly and always available on
          Canvas in the Files and Media Library folders, respectively. The links
          in the schedule below are added later only for convenience.
        </Text>
        <Link to="/">
          <Button
            variant="solidLink"
            bg="white"
            borderColor={"transparent"}
            color="darkGrey"
            _hover={{
              fontSize: ".8rem",
              transition: "all 0.4s",
              bg: "transparent",
              borderColor: "darkGrey",
            }}
            mb="2rem"
          >
            SCHEDULE LINK
          </Button>
        </Link>
        <iframe
          width="100%"
          height="500px"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTi4IPB2IIMIwvla0-oKAjQ_j68plJVR1iH6j2C9ODnnjpbZGo0gwDnMf80j7YPRfMYFj8Ei-0v8hPV/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
        ></iframe>
      </Flex>
    </div>
  );
}

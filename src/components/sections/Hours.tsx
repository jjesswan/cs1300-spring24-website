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

export default function Hours() {
  return (
    <div id="hours">
      <Flex
        justifyContent={"flex-start"}
        alignItems={"center"}
        bg="lightBlue"
        flexDir={"column"}
        pt="3rem"
        pb="5rem"
        px={{ md: "10%", lg: "20%", base: "3rem" }}
        role="complementary"
        aria-label="ta hours section"
      >
        <Text variant="subHeader">hours</Text>
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
            color="black"
            _hover={{
              color: "black",
              fontSize: ".8rem",
              transition: "all 0.4s",
              bg: "transparent",
              borderColor: "black",
            }}
            mb="2rem"
          >
            GCAL LINK
          </Button>
        </Link>
        <iframe
          width="100%"
          height="500px"
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%237bd0ff&ctz=America%2FNew_York&title=UI%2FUX%20TA%20Hours&showTabs=1&showCalendars=1&showTz=0&src=Y18wNDZhODRmOTUyOTNkZTYzZWQ2ZWUxMjQ3OGY3MzUxMTNlNDUzZGFkZmIzYTM4NDk5YWI5OTg5NWQ1M2ExMjZlQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23B39DDB"
        ></iframe>
      </Flex>
    </div>
  );
}

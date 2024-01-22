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
        bg="darkGrey"
        flexDir={"column"}
        pt="3rem"
        pb="5rem"
        px={{ md: "10%", lg: "20%", base: "3rem" }}
        role="complementary"
        aria-label="ta hours section"
      >
        <Text variant="subHeader" color="white">
          hours
        </Text>
        <Text
          variant="subscript"
          mb="1.5rem"
          w="70%"
          color="white"
          textAlign={"center"}
        >
          To sign up for hours, visit
          <ChakraLink
            as={ReactRouterLink}
            to="https://hours.cs.brown.edu/"
            variant={"embedLink"}
          >
            HOURS
          </ChakraLink>
        </Text>
        <Link to="https://calendar.google.com/calendar/u/0?cid=Y18wNDZhODRmOTUyOTNkZTYzZWQ2ZWUxMjQ3OGY3MzUxMTNlNDUzZGFkZmIzYTM4NDk5YWI5OTg5NWQ1M2ExMjZlQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20">
          <Button
            variant="solidLink"
            bg="yellow"
            borderColor={"transparent"}
            color="darkGrey"
            _hover={{
              color: "yellow",
              fontSize: ".8rem",
              transition: "all 0.4s",
              bg: "transparent",
              borderColor: "yellow",
            }}
            mb="2rem"
          >
            GCAL LINK
          </Button>
        </Link>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showNav=1&showDate=1&showPrint=1&showTabs=1&showCalendars=0&showTz=1&src=Y18wNDZhODRmOTUyOTNkZTYzZWQ2ZWUxMjQ3OGY3MzUxMTNlNDUzZGFkZmIzYTM4NDk5YWI5OTg5NWQ1M2ExMjZlQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23B39DDB"
          width="100%"
          height="500px"
        ></iframe>
      </Flex>
    </div>
  );
}

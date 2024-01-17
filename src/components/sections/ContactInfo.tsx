import React, { useRef } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Divider,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import {
  TiArrowBackOutline,
  TiDownloadOutline,
  TiStopwatch,
} from "react-icons/ti";

interface ContactProps{
    email: string,
    desc: string
}

export default function ContactInfo(props: ContactProps) {
  return (
    <Flex h="2rem" gap=".5rem">
      <Divider
        orientation="vertical"
        bg={"mediumGrey"}
        borderRadius={"1rem"}
        w="5px"
      />
      <Flex flexDir={"column"} justifyContent={"flex-start"} role="complementary" aria-label="contact info">
        <Text variant="subtitle" fontSize={"1rem"} textAlign={"left"} letterSpacing={"0rem"} color="mediumGrey">
          {props.email}
        </Text>
        <Text variant="subscript" fontStyle={"italic"} textAlign={"left"} color="lightGrey">
          {props.desc}
        </Text>
      </Flex>
    </Flex>
  );
}

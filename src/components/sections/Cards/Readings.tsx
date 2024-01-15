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
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import {
  TiArrowBackOutline,
  TiDownloadOutline,
  TiStopwatch,
} from "react-icons/ti";
import { readings } from "../../../info/current";

export default function Assignment() {
  return (
    <Card
      bg="darkGrey"
      w="20rem"
      alignItems={"center"}
      justifyContent={"center"}
      direction="column"
      padding="1rem"
      role="complementary"
      aria-label="current readings information"
    >
      <Stack>
        <Text variant="tinyHeader" textAlign={"center"}>
          readings
        </Text>
        {readings.map((r, key) => (
          <Link to={r.link}>
            <Button variant="solidLink" bg="yellow" color="darkGrey">
              {r.title}
            </Button>
          </Link>
        ))}
      </Stack>
    </Card>
  );
}

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
import { currAssignment } from "../../../info/current";

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
      aria-label="current assignment information"
    >
      <Stack>
        <Text variant="tinyHeader" textAlign={"center"}>
          current assignment
        </Text>
        <Text variant="body" color="white" textAlign={"center"}>
          {currAssignment.title}
        </Text>
        <Text variant="body" color="white" textAlign={"center"}>
          Due: {currAssignment.due}
        </Text>

        <Link
          to={currAssignment.handoutLink ? currAssignment.handoutLink : "/"}
        >
          <Button
            variant={currAssignment.handinLink ? "solidLink" : "disabled"}
            disabled={currAssignment.handinLink == null}
            cursor={currAssignment.handinLink ? "pointer" : "default"}
          >
            HANDOUT
          </Button>
        </Link>
        <Link to={currAssignment.handinLink ? currAssignment.handinLink : "/"}>
          <Button
            variant={currAssignment.handinLink ? "solidLink" : "disabled"}
            disabled={currAssignment.handinLink == null}
            cursor={currAssignment.handinLink ? "pointer" : "default"}
          >
            HANDIN
          </Button>
        </Link>
      </Stack>
    </Card>
  );
}

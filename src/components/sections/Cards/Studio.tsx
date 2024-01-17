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
import { currStudio} from "../../../info/current";

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
      aria-label="current studio information"
    >
      <Stack>
        <Text variant="tinyHeader" textAlign={"center"}>
          current studio
        </Text>
        <Text variant="body" color="white" textAlign={"center"}>
          {currStudio.title}
        </Text>
        <Text variant="body" color="white" textAlign={"center"}>
          Due: {currStudio.due}
        </Text>

        <Link to={currStudio.handoutLink ? currStudio.handoutLink : "/"}>
          <Button
            variant={currStudio.handinLink ? "solidLink" : "disabled"}
            disabled={currStudio.handinLink == null}
            cursor={currStudio.handinLink ? "pointer" : "default"}
          >
            HANDOUT
          </Button>
        </Link>
        <Link to={currStudio.handinLink ? currStudio.handinLink : "/"}>
          <Button
            variant={currStudio.handinLink ? "solidLink" : "disabled"}
            disabled={currStudio.handinLink == null}
            cursor={currStudio.handinLink ? "pointer" : "default"}
          >
            HANDIN
          </Button>
        </Link>
      </Stack>
    </Card>
  );
}

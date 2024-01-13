import React, { useRef, useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Flex,
  Stack,
  Text,
  Image,
  CardFooter
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import {
  TiArrowBackOutline,
  TiDownloadOutline,
  TiStopwatch,
} from "react-icons/ti";

interface StaffInfo{
    name: string,
    desc: string,
    pooh: string,
    real: string
}

export default function StaffMember(props: StaffInfo) {
    const [avatarImg, setImg] = useState<string>(props.pooh);
  return (
    <Card bg="transparent" direction="row" w={{ md: "25rem", base: "30rem" }} shadow={"none"}
    role="complementary"
    aria-label={props.name + " information card"}>
      <Image
        objectFit="contain"
        maxWidth="40%"
        src={avatarImg}
        borderRadius={"1rem"}
        onMouseOver={() => setImg(props.real)}
        onMouseLeave={() => setImg(props.pooh)}
        padding="1.5rem"
        aria-label={props.name + " image"}
      />
      <Stack
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
      >
        <CardBody
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          py="0"
        >
          <Text
            variant="subtitle"
            fontSize={"1rem"}
            letterSpacing={"0rem"}
            mb="1rem"
          >
            {props.name}
          </Text>
          <Text variant="subscript" aria-label={props.name + " description"}>{props.desc}</Text>
        </CardBody>
      </Stack>
    </Card>
  );
}

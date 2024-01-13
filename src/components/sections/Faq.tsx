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
import { questions } from "../../info/faq";

export default function Faq() {
  return (
    <div id="faq">
      <Flex
        justifyContent={"flex-start"}
        alignItems={"center"}
        bg="yellow"
        flexDir={"column"}
        pt="3rem"
        pb="5rem"
        px={{ md: "20%", base: "5rem" }}
        role="complementary"
        aria-label="faq section"
      >
        <Text variant="subHeader">faq</Text>

        <Flex flexDir={"column"} alignItems={"flex-start"}>
          {questions.map((q, key) => (
            <Flex flexDir={"column"} alignItems={"flex-start"}>
              <Text
                variant="tinyHeader"
                color="black"
                mb=".5rem"
                textAlign={"justify"}
                textTransform={"uppercase"}
              >
                {q.q}
              </Text>
              <Text variant="subscript" mb="1.5rem" textAlign={"justify"}>
                {q.a}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </div>
  );
}

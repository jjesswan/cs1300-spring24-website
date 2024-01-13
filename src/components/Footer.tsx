import {
  Box,
  Grid,
  GridItem,
  Text,
  Button,
  Icon,
  Divider,
  Flex,
} from "@chakra-ui/react";
import {
  TiSocialLinkedinCircular,
  TiSocialGithubCircular,
} from "react-icons/ti";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <Flex
      flexDir={"column"}
      bottom={0}
      m="0"
      p="0"
      w="100%"
      justifyContent={"center"}
      alignItems={"flex-end"}
      pr="1rem"
      h="2rem"
      bg="black"
      role="contentinfo"
      aria-label="website credit"
    >
      <Text variant="body" color="yellow" fontSize={".5rem"} textAlign={"right"}>
         © Brown University CSCI 1300 Spring 2024 <br></br>
         Website by Jess | Graphics by Caitlin</Text>
    </Flex>
  );
}

import React, { useRef } from "react";
import { Button, ButtonGroup, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import customTheme from "../../styles/theme";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import { TiArrowBackOutline, TiDownloadOutline, TiStopwatch } from "react-icons/ti";



export default function Links() {
  return (
    <div id="links">
      <Flex
        justifyContent={"flex-start"}
        alignItems={"center"}
        bg="darkGrey"
        flexDir={"column"}
        pt="3rem"
        pb="5rem"
      >
        <Text variant="subHeader" color="white">
          helpful links
        </Text>
        <Flex mt="1rem" justifyContent={"space-evenly"} w="80%">
          {/* WEBSITES */}
          <Flex flexDir={"column"} alignItems={"center"}>
            <Text variant="capitalBody" color="darkBlue" mb=".5rem">
              WEBSITES
            </Text>
            <Link to="/">
              <Button variant="solidLink" mb="1rem">
                CANVAS
              </Button>
            </Link>
            <Link to="/">
              <Button variant="solidLink">EDSTEM</Button>
            </Link>
          </Flex>

          {/* COURSE DOCS */}
          <Flex flexDir={"column"} alignItems={"center"}>
            <Text variant="capitalBody" color="darkBlue" mb=".5rem">
              Course Docs
            </Text>
            <Link to="/">
              <Button variant="outlineLink" mb="1rem">
                Syllabus
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outlineLink" mb="1rem">
                Software Guide
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outlineLink">Deployment Guide</Button>
            </Link>
          </Flex>

          {/* COURSE FORMS */}
          <Flex flexDir={"column"} alignItems={"center"}>
            <Text variant="capitalBody" color="darkBlue" mb=".5rem">
              ASSIGNMENTS
            </Text>
            <Link to="/">
              <Button variant="solidLinkSmall" gap=".2rem" mb=".5rem">
                <TiDownloadOutline />
                Assignment Handin
              </Button>
            </Link>
            <Link to="/">
              <Button variant="solidLinkSmall" gap=".2rem" mb=".5rem">
                <TiDownloadOutline />
                Studio Handin
              </Button>
            </Link>
            <Link to="/">
              <Button variant="solidLinkSmall" gap=".2rem" mb=".5rem">
                <TiDownloadOutline />
                Late Pass Form
              </Button>
            </Link>
            <Link to="/">
              <Button variant="solidLinkSmall" gap=".2rem" mb=".5rem">
                <TiDownloadOutline />
                Regrade Request Form
              </Button>
            </Link>
          </Flex>

          {/* LOGISTICAL */}
          <Flex flexDir={"column"} alignItems={"center"}>
            <Text variant="capitalBody" color="darkBlue" mb=".5rem">
              logistical
            </Text>
            <Link to="/">
              <Button variant="solidLinkSmall" gap=".2rem" mb=".5rem">
                <TiDownloadOutline />
                Studio Swap Form
              </Button>
            </Link>
            <Link to="/">
              <Button variant="solidLinkSmall" gap=".2rem" mb=".5rem">
                <TiDownloadOutline />
                Feedback Form
              </Button>
            </Link>
            <Link to="/">
              <Button variant="solidLinkSmall" gap=".2rem" mb=".5rem">
                <TiDownloadOutline />
                Dean's/Doctor's Note
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}

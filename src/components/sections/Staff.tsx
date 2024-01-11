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

import ContactInfo from "./ContactInfo";
import StaffMember from "./StaffMember";
import { allStaff } from "../../info/staff";

export default function Staff() {
  return (
    <div id="staff">
      <Flex
        justifyContent={"flex-start"}
        alignItems={"center"}
        bg="#F8F8F8"
        flexDir={"column"}
        pt="3rem"
        pb="5rem"
        px={{ md: "10%", lg: "15%", base: "3rem" }}
        gap="2rem"
      >
        <Text variant="subHeader" color="darkestBlue">
          staff
        </Text>
        <Flex
          alignItems={"center"}
          gap="1rem"
          justifyContent={"center"}
          flexWrap={"wrap"}
        >
          <ContactInfo
            email="UIUXTAS@LISTS.CS.BROWN.EDU"
            desc="email all tas; use this by default"
          />
          <ContactInfo
            email="UIUXHTAS@LISTS.CS.BROWN.EDU"
            desc="htas, grad tas, talie & vanessa"
          />
          <ContactInfo email="JEFF@CS.BROWN.EDU" desc="sensitive issues" />
        </Flex>
        <Flex
          w="100%"
          gap="1rem"
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          {allStaff.map((s, key) => (
            <StaffMember name={s.name} desc={s.desc} pooh={s.pooh} real={s.real}/>
          ))}
        </Flex>
      </Flex>
    </div>
  );
}

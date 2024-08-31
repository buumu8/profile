import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profile from "../images/profile.jpg";

const greeting = "Hello, I am Jettapol!";
const bio1 = "A software developer";
const bio2 = "specialised in React, NodeJs";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection justifyContent="center" alignItems="center" backgroundColor="#f8dd99">
    <VStack spacing={10}>
      <Avatar src={profile} size="2xl" name="Jettapol Tuetrakul" />

      <Heading as="h4" size="md" noOfLines={1}>
        {greeting}
      </Heading>

      <VStack spacing={10}>
        <Heading as="h1" size="3xl" noOfLines={1}>
          {bio1}
        </Heading>
        <Heading as="h1" size="3xl" noOfLines={1}>
          {bio2}
        </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;

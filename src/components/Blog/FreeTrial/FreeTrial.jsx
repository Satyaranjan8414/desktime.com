import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const FreeTrial = () => {
  return (
    <>
      <Box
        h="40vh"
        mt="3rem"
        bg="#f2f2f2"
        lineHeight="2rem"
        alignItems="center"
        display="flex"
        w="75%"
        m="auto"
        textAlign="left"
      >
        <Box w="100%" alignContent="center">
          <Heading mb="1rem" size="lg">
            Want to get the most out of your time?
            <br />
            Try DeskTime for free!
          </Heading>
          <Box w="40%" fontSize="2xl" display="flex" gap="1rem" mb="1rem">
            <Input bg="white" type="text" placeholder="Your Work Email" />
            <Button
              bg="#4ea819"
              border="1px solid white"
              p="1rem 3rem"
              color="white"
            >
              START FREE TRAIL
            </Button>
          </Box>
          <Text fontSize="lg">
            Try free for 14 days · No credit card required.
          </Text>
          <Text>
            By signing up, you agree to our <NavLink to="" style={{textDecoration:"underline"}}>terms</NavLink> and{" "}
            <NavLink to="" style={{textDecoration:"underline"}}>privacy policy</NavLink>.
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default FreeTrial;

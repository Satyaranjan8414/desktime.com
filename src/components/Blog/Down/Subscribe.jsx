import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";

const Subscribe = () => {
  return (
    <>
      <Box
        h="40vh"
        mt="3rem"
        bg="#4ea819"
        color="white"
        lineHeight="2rem"
        alignItems="center"
        display="flex"
        w="75%"
        m="auto"
      >
        <Box w="100%" alignContent="center">
          <Heading mb="1rem">
            Subscribe to our newsletter to get the latest updates
          </Heading>
          <Box
            w="40%"
            m="auto"
            fontSize="2xl"
            display="flex"
            gap="1rem"
            mb="1rem"
          >
            <Input bg="white" type="text" placeholder="Your Work Email" />
            <Button bg="none" border="1px solid white" p="1rem 2rem">
              SUBMIT
            </Button>
          </Box>
          <Text>By subscribing you agree to our privacy policy</Text>
        </Box>
      </Box>
    </>
  );
};

export default Subscribe;

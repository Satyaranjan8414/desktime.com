import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";

const Info = () => {
  return (
    <>
      <Box
        h="55vh"
        mt="3rem"
        bg="#4ea819"
        color="white"
        lineHeight="2rem"
        alignItems="center"
        display="flex"
      >
        <Box w="100%" alignContent="center">
          <Heading mb="1rem">Ready for your free trial?</Heading>
          <Box
            w="30%"
            m="auto"
            fontSize="2xl"
            display="flex"
            gap="1rem"
            mb="1rem"
          >
            <Input
              bg="white"
              size="1rem"
              type="text"
              placeholder="Your Work Email"
            />
            <Button bg="none" border="1px solid white" p="1.5rem 4rem">
              GET STARTED
            </Button>
          </Box>
          <Text>Try free for 14 days. No credit card required.</Text>
          <Text fontSize="sm">
            By signing up, you agree to our terms and privacy policy.
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Info;


import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
const GuessBlogger = () => {
  return (
    <>
    <Box
        h="40vh"
        mt="3rem"
        bgImage="url(https://waterwipescdn.brandworkz.com/BMS/embed/qs/?ag=75dea9db-0346-1534-4398-fe7b5b0ab3e3&s=FullwidthDesktop)"
        lineHeight="2rem"
        w="75%"
        m="auto"
        textAlign="left"
        p="2    rem"  
      >
        <Box w="100%" alignContent="center">
          <Heading mb="1rem" size="lg" pt="3rem">
          Guest blogger?
          </Heading>
          <Text fontSize="lg">
          If you’re an experienced writer and want to write for us,<br/>
we’ll be happy to hear from you.
          </Text>
          
        </Box>
        <Button
              bg="#4ea819"
              border="1px solid white"
              p="1rem 3rem"
              color="white"
            >
             Discover guest blogging opportunities
            </Button>
      </Box>
    </>
  )
}
export default GuessBlogger

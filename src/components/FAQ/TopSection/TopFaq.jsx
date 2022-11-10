import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";

const TopFaq = () => {
  return (
    <>
      <Box lineHeight="3rem" m="5rem">
        <Text fontSize="5xl">Frequently Asked Questions</Text>
        <Text fontSize="lg">
          Here you can find all the questions you need answered
        </Text>
        <Box display="flex" gap="1rem" w="25%" m="auto">
          <Input type="text" placeholder="where are you looking for?" />
          <Button bg="#4ea819" color="white">
            Search
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default TopFaq;

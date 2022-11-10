import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";

const TopSection = () => {
  return (
    <>
      <Box lineHeight="3rem" m="5rem">
        <Text fontSize="5xl">DeskTime blog</Text>
        <Text fontSize="lg">
        You can read our Case studies and latest news in the productivity industry
        </Text>
        <Box display="flex" gap="1rem" w="25%" m="auto">
          <Input type="text" placeholder="Search blog" />
          <Button bg="#4ea819" color="white">
            Search
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default TopSection;

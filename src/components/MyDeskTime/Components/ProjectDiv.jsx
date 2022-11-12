import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const ProjectDiv = ({ count, unCompleted }) => {
  const [total, setTotal] = useState(10);
  return (
    <>
      <Flex h="25vh" w="100%" m="auto" bg="#ebecec">
        <Box
          textAlign="left"
          w="25%"
          h="100%"
          m="auto"
          justifyContent="space-between"
          bg="white"
        >
          <Text fontSize="xl">Total Amound Of Project</Text>
          <Text fontSize="5xl" color="green">
            {total}
          </Text>
        </Box>
        <Box
          textAlign="left"
          w="25%"
          h="100%"
          m="auto"
          justifyContent="space-between"
          bg="white"
        >
          <Text fontSize="xl">Project Completed</Text>
          <Text fontSize="5xl" color="green">
            {count}
          </Text>
        </Box>
        <Box
          textAlign="left"
          w="25%"
          h="100%"
          m="auto"
          justifyContent="space-between"
          bg="white"
        >
          <Text fontSize="xl">Project Not Completed</Text>
          <Text fontSize="5xl" color="green">
            {unCompleted}
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default ProjectDiv;

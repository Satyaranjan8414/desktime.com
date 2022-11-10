import { Box } from "@chakra-ui/react";
import React from "react";

const Dot = () => {
  return (
    <>
      <Box w="2%" m="auto" h="5vh" mt="1rem" mb="1rem">
        <Box border="10px solid #4ea819" borderRadius="50%">
          <Box border="5px solid white" borderRadius="50%"></Box>
        </Box>
      </Box>
    </>
  );
};

export default Dot;

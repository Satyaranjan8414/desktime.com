import { Box, Button, Flex, Heading, Image, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";

const Integration = () => {
  const [isSmallerthan] = useMediaQuery('(min-width: 650px)')

  return (
    <>
      <Box w="100%" bg="#f5f5f6" p="2rem">
        <Flex  w={["100%","100%","100%","80%"]} display="flex" flexDirection={isSmallerthan?"row":"column"} alignItems="center" p="2rem" m="auto">
          <Box  w={["100%","100%","100%","50%"]}>
            <Image
              src="https://desktime.com/assets/img/new-homepage/integrations/integrations.webp"
              alt="int"
            />
          </Box>
          <Box w={["100%","100%","100%","50%"]} textAlign={isSmallerthan?"left":"center"} lineHeight="2rem">
            <Heading>Integrations with popular work tools</Heading>
            <Text fontSize={isSmallerthan?"xl":"lg"}>
              From calendar apps to help you track offline time, to project
              management software to make project and task tracking accurate,
              while effortless. DeskTime can simplify every aspect of your
              workflow.
            </Text>
            <Button bg="transparent" p="1rem" border="1px solid black">
              Read More
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Integration;

import React from 'react'
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
const TopDescription = () => {
  return (
    <>
     <Flex w="80%" m="auto">
          <Box w="48%" textAlign="left" lineHeight="2rem">
            <Heading size="md">Built first for us, then made available to others</Heading>
            <Text fontSize="lg" mt="1rem">
              DeskTime was born out of the need for the <span style={{color:"green"}}>Draugiem Group</span> to manage
              their many employees. An internal application was developed, and
              we soon realized that we'd made a tool that could be useful for
              many other companies. Why not offer it to them? - we thought. And
              so, the development began.<br/><br/> At DeskTime, we’re committed to
              accountability, transparency, and fairness. DeskTime is a product
              designed to increase productivity in an open and empowering
              environment. The added benefit? Boosting your employees and
              motivating them to perform at 100% of their potential.
            </Text>
          </Box>
          <Box w="48%">
            <Image src="https://desktime.com/assets/img/about/team.jpg" alt="desktimeGroup" />
          </Box>
        </Flex>
    </>
  )
}

export default TopDescription
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import Dot from "./Dot";
import { aboutFile } from "../aboutfile/AboutFile";

const MilesStone = () => {
  return (
    <>
      <Box mt="3rem" bg="#f8f9fa" p="1rem" lineHeight="2rem">
        <Heading m="3rem">Our milestones and how it all began</Heading>

        {aboutFile.map((about) => (
          <>
            <Dot />
            <Flex w="65%" m="auto" mt="1rem">
              <Box borderRight="6px dotted grey" w="50%">
                <Heading size="sm" color="#4ea819">
                  {about.date1}
                </Heading>
                <Heading size="lg">{about.title1}</Heading>
                <Text fontSize="lg">{about.description1}</Text>
              </Box>
              <Box w="50%" p="1rem">
                <Image src={about.img1} alt="des" />
              </Box>
            </Flex>

            <Dot />
            <Flex w="65%" m="auto" mt="1rem">
              <Box w="50%" p="1rem">
                <Image src={about.img2} alt="des" />
              </Box>

              <Box borderLeft="6px dotted grey" w="51%">
                <Heading size="sm" color="#4ea819">
                  {about.date2}
                </Heading>
                <Heading size="lg">{about.date2}</Heading>
                <Text fontSize="lg">{about.description2}</Text>
              </Box>
            </Flex>
          </>
        ))}
      </Box>
    </>
  );
};

export default MilesStone;

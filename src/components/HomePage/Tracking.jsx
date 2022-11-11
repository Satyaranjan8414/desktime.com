import React from "react";
import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import { tracks } from "./files/Top";
const Tracking = () => {
  const [isSmallerthan] = useMediaQuery("(min-width: 650px)");
  return (
    <>
      <Flex
        height={{
          base: "100%",
          md: "50%",
          xl: "25%",
        }}
        direction={isSmallerthan ? "row" : "column"}
        boxSizing="border-box"
        overflow="none"
      >
        {/* heading and text box  */}
        <Box width={["100%", "100%", "100%", "100%"]}>
          <Box>
            <Heading>
              Use time tracking software to boost productivity by 30%
            </Heading>
            <Text fontSize="xl">
              A time tracker and workforce management system that will help you
              develop a high-performing team that smashes goals every time.
            </Text>
          </Box>

          <Box
            display="grid"
            gridTemplateColumns={[
              "repeat(1,1fr)",
              "repeat(2,1fr)",
              "repeat(2,1fr)",
              "repeat(2,1fr)",
            ]}
            lineHeight="2rem"
            fontSize="xl"
            padding="2rem"
            overflow="scroll"
            boxSizing="border-box"
          >
            {tracks.map((t) => (
              <Box key={t.text}>
                <Heading textAlign="center" size="md">
                  {t.head}
                </Heading>
                <Text>{t.text}</Text>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Youtube Vide Link Box */}
        <Box w="50%" display="flex" alignItems="center" alignContent="center">
          <Box display="block" m="auto" height="auto">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/sgmDvqlSMF4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <Heading size={["xl", "md", "sm", "xs"]}>
              DeskTime:Time and Employee Management Software
            </Heading>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Tracking;

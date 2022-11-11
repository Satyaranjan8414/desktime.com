import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { appies } from "./files/apsStore";
import { MdOutlineDoneOutline } from "react-icons/md";

const Aps = () => {
  const [isSmallerthan] = useMediaQuery("(min-width: 650px)");

  const style = {
    color: "green",
  };
  return (
    <>
      <Box w="100%">
        <Box w={["100%", "100%", "100%", "80%"]} m="auto" mt="3rem">
          <Heading>
            A single time tracking app for desktops and <br />
            mobile phones
          </Heading>
          <Text fontSize="lg">
            Whether in the office or on the go – use DeskTime to keep track of
            your and your team's time.
          </Text>
        </Box>

        <Flex
          w={["100%", "100%", "100%", "80%"]}
          flexDirection={isSmallerthan ? "row" : "column"}
          m="auto"
          mt="1rem"
          textAlign="left"
        >
          {appies.map((a) => (
            <Box key={a.title} lineHeight="2rem">
              <Image src={a.img} alt="sp" />
              <Heading size="xl">{a.headText}</Heading>
              <Text fontSize="xl">{a.title}</Text>
              <Box display="flex" justifyContent="left">
                {" "}
                <MdOutlineDoneOutline size={20} style={style} />
                {a.line1}
              </Box>
              <Box display="flex" justifyContent="left">
                <MdOutlineDoneOutline size={20} style={style} />
                {a.line2}
              </Box>
              <Box display="flex" justifyContent="left">
                <MdOutlineDoneOutline size={20} style={style} />
                {a.line3}
              </Box>
              <Box display="flex" justifyContent="left">
                {a.line4}
              </Box>
              <Box display="flex" justifyContent="left">
                {a.line5}
              </Box>
              <Button
                m="1rem"
                p={isSmallerthan ? "1rem" : "1rem 30%"}
                bg="transparent"
                border="1px solid black"
              >
                Learn More
              </Button>
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default Aps;

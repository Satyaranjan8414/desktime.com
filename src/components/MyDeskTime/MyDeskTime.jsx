import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Top from "./Topbar/Top";

const MyDeskTime = () => {
  const data = [
    {
      title: "ARRIVAL TIME",
      num: "-",
    },
    {
      title: "LEFT TIME",
      num: "-",
    },
    {
      title: "PRODUCTIVE TIME ",
      num: "0",
    },
    {
      title: "DESKTIME TIME ",
      num: "0",
    },
    {
      title: "TIME AT WORK ",
      num: "0s",
    },
    {
      title: "UNPRODUCTIVE TIME ",
      num: "0s",
    },
    {
      title: "EFFECTIVENESS ",
      num: "0%",
    },
    {
      title: "PRODUCTIVITY",
      num: "0%",
    },
  ];
  return (
    <>
      <Top />
      <Text fontSize="3xl" textAlign="left" m="2rem">My DeskTime</Text>
      <Grid templateColumns="repeat(4,1fr)" bg="#ebecec" w="100%" m="auto" gap="1rem">
        {data.map((t) => (
          <Box bg="white" p="1rem" textAlign="left">
            <Text fontSize="md"> {t.title} </Text> <br />
            <Text fontSize="md"> {t.num} </Text> <br />
            <Text fontSize="sm" textAlign="center"> data not available </Text>
          </Box>
        ))}
      </Grid>

      <Box bg="#ebecec">
        <Heading textAlign="left">PRODUCTIVITY BAR</Heading>
        <Box m="3rem" display="flex" h="30vh" gap="2rem" w="60%">
          <Box w="4%" bg="white"></Box>
          <Box w="4%" bg="white"></Box>
          <Box w="4%" bg="white"></Box>
          <Box w="4%" bg="white"></Box>
          <Box w="4%" bg="white"></Box>
          <Box w="4%" bg="white"></Box>
          <Box w="4%" bg="white"></Box>
          <Box w="4%" bg="white"></Box>
          <Box w="4%" bg="white"></Box>
          <Box w="4%" bg="white"></Box>
          <Box w="4%" bg="white"></Box>
          <Box w="4%" bg="white"></Box>
          <Box w="4%" bg="white"></Box>
          <Box w="4%" bg="white"></Box>
          <Box w="4%" bg="white"></Box>
          <Box w="4%" bg="white"></Box>
          <Box w="4%" bg="white"></Box>
          <Box w="4%" bg="white"></Box>
          <Box w="4%" bg="white"></Box>
          <Box w="4%" bg="white"></Box>
          <Box w="4%" bg="white"></Box>
          <Box w="4%" bg="white"></Box>
          <Box w="4%" bg="white"></Box>
          <Box w="4%" bg="white"></Box>
          <Box w="4%" bg="white"></Box>
          <Box w="4%" bg="white"></Box>
        </Box>
      </Box>
    </>
  );
};
export default MyDeskTime;

import React from "react";
import Info from "./DownSection/Info";
import TopFaq from "./TopSection/TopFaq";
import { FaCheck } from "react-icons/fa";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Box, Button, Grid, Heading } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Faq = () => {
  const [freq, setFreq] = useState([]);
  useEffect(() => {
    axios
      .get("https://desktime-tanner-redux.herokuapp.com/faq")
      .then((res) => setFreq(res.data))
      .catch((err) => console.log(err));
  }, []);

  const baseStyle={
    color:"green",
   
  }
  const activeStyle={ 
    textDecoration:"underline"
  }

  return (
    <>
      <TopFaq />
      <Grid templateColumns="repeat(2, 1fr)" gap={6} w="70%" m="auto">
        {freq.map((f) => (
          <Box key={f.id} border="1px solid green" textAlign="left" p="1rem" color="#4ea819" lineHeight="2rem" mt="1rem">
            <Heading color="black" size="md">{f.title}</Heading>
            
            <Box display="flex" alignItems="center"><FaCheck/><NavLink to="" style={({ isActive }) => (isActive ? activeStyle : baseStyle)}>{f.line1}</NavLink></Box>
            <Box display="flex" alignItems="center"><FaCheck/><NavLink to="" style={({ isActive }) => (isActive ? activeStyle : baseStyle)}>{f.line2}</NavLink></Box>
            <Box display="flex" alignItems="center"><FaCheck/><NavLink to="" style={({ isActive }) => (isActive ? activeStyle : baseStyle)}>{f.line3}</NavLink></Box>
            <Button
              border="1px solid black"
              bg="#4ea819"
              mt="1rem"
              color="white"
            >
              <NavLink to={`/faq/${f.id}`}>VIEW ALL</NavLink>
            </Button>
          </Box>
        ))}
      </Grid>

      <Info />
    </>
  );
};

export default Faq;

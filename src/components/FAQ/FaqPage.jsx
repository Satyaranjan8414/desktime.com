import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Heading, Text } from "@chakra-ui/react";
import TopFaq from "./TopSection/TopFaq";
import Info from "./DownSection/Info";
import { FaCheck } from "react-icons/fa";

const FaqPage = () => {
  const [faqPage, setFaqPage] = useState({});
  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://desktime-tanner-redux.herokuapp.com/faq/${params.id}`)
      .then((res) => setFaqPage(res.data))
      .catch((err) => console.log(err));
  }, [params.id]);
  return (
    <>
      <TopFaq />
      <Box
        textAlign="left"
        border="1px solid green"
        w="40%"
        m="auto"
        color="#4ea819"
        p="2rem"
        fontSize="lg"
      >
        <Heading color="black" size="md">
          {faqPage.title}
        </Heading>
        <Box display="flex" alignItems="center" mt="1rem">
          <FaCheck />
          <Text>{faqPage.line1}</Text>
        </Box>
        <Box display="flex" alignItems="center">
          <FaCheck />
          <Text>{faqPage.line2}</Text>
        </Box>
        <Box display="flex" alignItems="center">
          <FaCheck />
          <Text>{faqPage.line3}</Text>
        </Box>
        <Box display="flex" alignItems="center">
          <FaCheck />
          <Text>{faqPage.line4}</Text>
        </Box>
        <Box display="flex" alignItems="center">
          <FaCheck />
          <Text>{faqPage.line5}</Text>
        </Box>
        <Box display="flex" alignItems="center">
          <FaCheck />
          <Text>{faqPage.line6}</Text>
        </Box>
        <Box display="flex" alignItems="center">
          <FaCheck />
          <Text>{faqPage.line7}</Text>
        </Box>
        <Box display="flex" alignItems="center">
          <FaCheck />
          <Text>{faqPage.line8}</Text>
        </Box>
        <Box display="flex" alignItems="center">
          <FaCheck />
          <Text>{faqPage.line9}</Text>
        </Box>
        <Box display="flex" alignItems="center">
          <FaCheck />
          <Text>{faqPage.line10}</Text>
        </Box>
      </Box>
      <Info />
    </>
  );
};

export default FaqPage;

import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const GetData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://desktime-tanner-redux.herokuapp.com/bloging")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Box>
        <Grid templateColumns="repeat(3,1fr)" gap="1rem">
          {data.map((item) => (
            <Box textAlign="left" p="0rem 1rem" mt="1rem">
              <Image src={item.Img} alt="images" />
              <Heading>{item.main}</Heading>
              <Text>{item.text} </Text>
              <NavLink style={{textDecoration:"underline",color:"#4ea819"}} to="">{item.link} </NavLink>
              <Flex>
                <Box><Image borderRadius="50%" src={item.img} alt="professionals"/></Box>
                <Box>
                    <Text>{item.name}</Text>
                    <Text>{item.calendar}</Text>
                </Box>

              </Flex>
            </Box>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default GetData;

// So in these One thing is clear that when i use img and Img in json server both have show a different behaviour even there spellings are same. So Uppercase and lowercase matter in json.

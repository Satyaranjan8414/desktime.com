import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const GetTopData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://desktime-tanner-redux.herokuapp.com/topbloging")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Box m="3rem">
        <Grid templateColumns="repeat(3,1fr)" gap="1rem" w="75%" m="auto">
          {data.map((item) => (
            <Box textAlign="left" p="0rem 1rem" mt="1rem">
              <Image src={item.Img} alt="images" />
              <Heading>{item.main}</Heading>
              <Text>{item.text} </Text>
              <NavLink style={{textDecoration:"underline",color:"#4ea819"}} to={`/topbloging/${item.id}`}>{item.link} </NavLink>
              <Flex>
                <Box>
                  <Image
                    borderRadius="50%"
                    src={item.img}
                    alt="professionals"
                  />
                </Box>
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

export default GetTopData;

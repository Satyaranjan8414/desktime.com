import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const AllCategoriesPage = () => {
  const [storeData, setStoreData] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/topbloging/${params.id}`)
      .then((res) => setStoreData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return <>
  <Box>
        <Grid templateColumns="repeat(3,1fr)" gap="1rem">
          {storeData.map((item) => (
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
};

export default AllCategoriesPage;

import { Box, Button, Flex, Input, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Top from "../Topbar/Top";

const Calories = () => {
  const Inputref = useRef(null);
  const navigate = useNavigate()
  const [data, setData] = useState({
    meal: "",
    cal: 0,
  });
  const [store, setStore] = useState([]);
  const addMeal = (e) => {
    e.preventDefault();
    if (data !== "") {
      const payload = {
        id: Math.random() * 1000,
        status: false,
        value: {
          ...data,
        },
      };
      setStore([...store, payload]);
    }
    setData({ meal: "", cal: 0 });
    Inputref.current.focus();
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const DeleteItem = (index) => {
    setStore((Array) => {
      return Array.filter((el, i) => i !== index);
    });
  };

  const RemoveAll = () => {
    setStore([]);
  };
const handleBack=()=>{
  navigate("/mydesktime")
}

  const total = store.map((s)=>s.cal).reduce(function(acc,val){
    return Number(acc)+Number(val);
  },0)
  console.log(total)

  return (
    <>
    <Top/>
      <Flex>
        <Text fontSize="3xl">Total Calories :</Text>
        <Spacer />
        <Button bgImage="linear-gradient(green,yellowgreen)" color="white" onClick={handleBack}>Back to MyDeskTime</Button>
        <Button
          bgImage="linear-gradient(red,crimson)"
          color="white"
          onClick={RemoveAll}
        >
          Clean Data
        </Button>
      </Flex>
      <Box h="80vh" bgImage="linear-gradient(royalblue,skyblue,teal,darkgrey)" w="30%" p="2rem" m="auto" mt="5rem" mb="5rem">
        <form onSubmit={addMeal}>
          <Text color="white" textAlign="left">Meal</Text>
          <Input
          ref={Inputref}
            m="1rem"
            name="meal"
            type="text"
            value={data.meal}
            onChange={handleChange}
          />
          <br />
          <Text color="white" textAlign="left">Calories</Text>
          <Input
            m="1rem"
            value={data.cal}
            name="cal"
            type="number"
            onChange={handleChange}
          />
          <Button border="1px solid black" bg="none" color="white" m="1rem" type="submit">
            Add Meal
          </Button>
        </form>
      </Box>
      {store.map((s, index) => (
        <Box
          key={s.id}
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          w="50%"
          m="auto"
          mt="1rem"
          bgImage="linear-gradient(grey,darkgrey,skyblue)"
          boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px"
        >
          <Box>
            <Text fontSize="xl">
              {s.value.meal} : {s.value.cal} Calories
            </Text>
          </Box>
          <Box>
            <Button bg="none" color="red" onClick={() => DeleteItem(index)}><RiDeleteBin2Line size={20}/></Button>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default Calories;

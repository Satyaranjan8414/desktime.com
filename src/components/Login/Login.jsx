import React, { useContext, useState } from "react";
import { Box, Flex, FormLabel, Heading, Image, Input, Spacer, Text } from "@chakra-ui/react";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state,dispatch] = useContext(AppContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        alert("success");
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: {
            token: res.token,
          },
        });
        navigate("/mydesktime");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Box
        textAlign="left"
        lineHeight="1rem"
        w="25%"
        m="auto"
        mt="5rem"
        mb="5rem"
        >
        <form onSubmit={handleSubmit}>
          <Heading fontSize="4xl" letterSpacing="-2px" m="2rem">
            Log in to DeskTime
          </Heading>

          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            placeholder="Type in your email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            placeholder="Type in your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            bg="#4ea819"
            color="white"
            fontWeight="bold"
            type="submit"
            value="Login"
          />
        </form>
      </Box>
      <Box w="25%"
        m="auto">
       <Text fontSize="xl" m="2rem">Or connect with</Text>
       <Flex m="1rem">
       <Image src="https://cdn1.iconfinder.com/data/icons/social-media-2285/512/Colored_Facebook3_svg-512.png" alt="fb" width="50px"/><Spacer/>
       <Image src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-128.png" alt="fb" width="50px"/><Spacer/>
       <Image src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-128.png" alt="fb" width="50px"/><Spacer/>
       <Image src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Whatsapp2_colored_svg-128.png" alt="fb" width="50px"/><Spacer/>
       <Image src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-128.png" alt="fb" width="50px"/><Spacer/>
       <Image src="https://cdn3.iconfinder.com/data/icons/picons-social/57/56-apple-512.png" alt="fb" width="50px"/>
       </Flex>

      </Box>
    </>
  );
};

export default Login;

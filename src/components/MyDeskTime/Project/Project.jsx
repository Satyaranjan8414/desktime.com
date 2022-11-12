import React, { useRef, useState } from "react";
import {
  Input,
  Box,
  Button,
  Flex,
  Text,
  Spacer,
  Heading,
} from "@chakra-ui/react";
import { GiCrossedSabres } from "react-icons/gi";
import { AiFillDelete, AiOutlineFileAdd } from "react-icons/ai";
import { GrCompliance } from "react-icons/gr";
import ProjectDiv from "../Components/ProjectDiv";
import Top from "../Topbar/Top";
import { useNavigate } from "react-router-dom";
const Project = () => {
  const [projects, setProjects] = useState({
    project: "",
    date: "",
    integration: "",
    tasks: "",
  });
  const [complete, setComplete] = useState([]);
  const [state, setState] = useState([]);
  const [count, setCount] = useState(0);
  const [unCompleted, setUnCompleted] = useState(0);
  const navigate = useNavigate()
  const InputRef = useRef(null)
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProjects({ ...projects, [name]: value });
  };
  const handleAdd = () => {
    if (projects !== "") {
      const payload = {
        id: Math.floor(Math.random() * 1000),
        value: {
          ...projects,
        },
        status: false,
      };
      setState([...state, payload]);
    }
    setProjects({ project: "", date: "", integration: "", tasks: "" });
    InputRef.current.focus();
  };

  const handleDelete = (index) => {
    setState((data) => {
      return data.filter((elem, i) => i !== index);
    });
    setUnCompleted(unCompleted + 1);
  };

  const CompletedTask = (e, t) => {
    e.preventDefault();
    const element = state.findIndex((elem) => elem.id === t.id);

    const newList = [...state];

    newList[element] = {
      ...newList[element],
      status: true,
    };
    setCount(count + 1);
    setState(newList);
    setComplete([...complete, t]);
  };

  const removeAll = () => {
    setState([]);
    setComplete([]);
  };
  const handleBack=()=>{
    navigate("/mydesktime")
  }
  return (
    <>
      <Top/>
      <Box bg="#ebecec">
        <Flex>
          <Heading fontSize="5xl">Project</Heading>

          <Spacer />
          <Button bgImage="linear-gradient(green,yellowgreen)" color="white" onClick={handleBack}>Back to MyDeskTime</Button>

          <Button bg="red" color="white" onClick={removeAll}>
            <AiFillDelete /> Remove All
          </Button>
        </Flex>
        <ProjectDiv count={count} unCompleted={unCompleted} />
        <br />

        <Box
          bg="#ffffff"
          h="50vh"
          display="flex"
          justifyContent="space-around"
          alignItems="center"
        >
          <Box>
            <p style={{ textAlign: "left" }}>PROJECT NAME</p>
            <Input
            ref={InputRef}
              type="text"
              name="project"
              id="project"
              value={projects.project}
              placeholder="PROJECT NAME"
              onChange={handleInput}
            />
          </Box>
          <Box>
            <p style={{ textAlign: "left" }}>DATE CREATED</p>
            <Input
              type="date"
              name="date"
              id="date"
              value={projects.date}
              placeholder="DATE CREATED"
              onChange={handleInput}
            />
          </Box>
          <Box>
            <p style={{ textAlign: "left" }}>INTEGRATION</p>
            <Input
              type="text"
              value={projects.integration}
              name="integration"
              id="integration"
              placeholder="INTEGRATION"
              onChange={handleInput}
            />
          </Box>
          <Box>
            <p style={{ textAlign: "left" }}>TASKS</p>
            <Input
              type="text"
              name="tasks"
              id="tasks"
              value={projects.tasks}
              placeholder="TASKS"
              onChange={handleInput}
            />
          </Box>

          <Button onClick={handleAdd}>
            <AiOutlineFileAdd />
          </Button>
        </Box>
        <Box>
          {state.map((t, index) => (
            <Box
              key={t.id}
              h="10vh"
              alignItems="center"
              backgroundImage="linear-gradient(ghostwhite,honeydew)"
              boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
              display="flex"
              justifyContent="space-between"
            >
              <Button color="green" onClick={(e) => CompletedTask(e, t)}>
                <GrCompliance />
              </Button>
              <Text color="green" fontSize="xl">
                PROJECT : {t.value.project}
              </Text>
              <Text color="green" fontSize="xl">
                DATE : {t.value.date}
              </Text>
              <Text color="green" fontSize="xl">
                INTEGRATION : {t.value.integration}
              </Text>
              <Text color="green" fontSize="xl">
                TASKS : {t.value.tasks}
              </Text>
              <Button
                style={{ color: "red", border: "1px solid black" }}
                onClick={() => handleDelete(index)}
              >
                <GiCrossedSabres />
              </Button>
            </Box>
          ))}
        </Box>
        <Box
          w="25%"
          mt="5rem"
          m="auto"
          border="1px solid green"
          bgImage="linear-gradient(grey,#29a745)"
        >
          <Heading color="white">Your Project Is Here</Heading>
        </Box>
        {complete.map((e) => (
          <>
            <Box w="25%" key={e.id} mt="2rem" m="auto">
              <Text
                borderBottom="2px solid black"
                color="green"
                fontSize="xl"
                mt="5rem"
              >
                PROJECT : {e.value.project}
              </Text>
              <Text borderBottom="2px solid black" color="green" fontSize="xl">
                DATE : {e.value.date}
              </Text>
              <Text borderBottom="2px solid black" color="green" fontSize="xl">
                INTEGRATION : {e.value.integration}
              </Text>
              <Text borderBottom="2px solid black" color="green" fontSize="xl">
                TASKS : {e.value.tasks}
              </Text>
            </Box>
          </>
        ))}
      </Box>
    </>
  );
};
export default Project;

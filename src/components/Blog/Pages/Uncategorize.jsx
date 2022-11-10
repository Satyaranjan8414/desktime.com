import { Heading } from "@chakra-ui/react";
import React from "react";
import Subscribe from "../Down/Subscribe";
import GetDownData from "../Fetching Data/GetDownData";
import GetMidData from "../Fetching Data/GetMidData";
import GetTopData from "../Fetching Data/GetTopData";
import FreeTrial from "../FreeTrial/FreeTrial";
import GuessBlogger from "../GuessBlogger/GuessBlogger";
import TaskBar from "../TaskBar/TaskBar";
import TopSection from "../TopSection/TopSection";

const Uncategorize = () => {

  return (
    <>
   
      <TopSection />
      <TaskBar />
      <Heading>UnCategorized</Heading>
      <GetTopData/>
      <Subscribe/>
      <GetMidData/>
      <FreeTrial/>
      <GetDownData/>
      <GuessBlogger/>
    </>
  );
};

export default Uncategorize;

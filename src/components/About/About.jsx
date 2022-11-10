import { Box } from "@chakra-ui/react";
import React from "react";
import Topbar from "../HomePage/Topbar";
import TopDescription from "./AboutComponents/TopDescription";
import MilesStone from "./AboutComponents/MilesStone";
import VideoYou from "./AboutComponents/VideoYou";
import Info from "../FAQ/DownSection/Info";

const About = () => {
  return (
    <>
      <Box>
        <Topbar />
        <TopDescription />
        <MilesStone />
        <VideoYou />
        <Info />
      </Box>
    </>
  );
};

export default About;

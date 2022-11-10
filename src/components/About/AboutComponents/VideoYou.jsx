import { Box } from "@chakra-ui/react";
import React from "react";

const VideoYou = () => {
  return (
    <>
      <Box
        h="60vh"
        mt="5rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/HZEtIzb89I0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Box>
      </Box>
    </>
  );
};

export default VideoYou;

import React, { useState } from "react";
import Calories from "../Calories Tracker/Calories";
import {
  Box,
  Slider,
  SliderTrack,
  SliderThumb,
  SliderFilledTrack,
  Heading,
  Button,
  SliderMark,
} from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";
const Top = () => {
  const [sliderValue, setSliderValue] = useState(60);
  const navigate = useNavigate();
  const CalTrack = () => {
    navigate("/mydesktime/calories");
  };
  const TrackProject = () => {
    navigate("/mydesktime/project");
  };
  const handleTimer = () => {
    navigate("/mydesktime/webtimer");
  };
  return (
    <>
      <Box bg="#2693f8" mt="2rem" p="2rem">
        {/* slider and measurment */}
        <Box display="flex" m="auto" w="50%" gap="2rem">
          <Heading size="md" color="white">
            Get started with DeskTime{" "}
          </Heading>
          <Slider
            w="200px"
            aria-label="slider-ex-1"
            defaultValue={6}
            onChange={(val) => setSliderValue(val)}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderMark
              value={sliderValue}
              textAlign="center"
              bg="green.100"
              color="#2693f8"
              mt="-10"
              ml="-5"
              w="12"
            >
              {sliderValue}%
            </SliderMark>

            <SliderThumb />
          </Slider>
        </Box>

        {/* buttons of tracker */}
        <Box
          m="2rem"
          w="100%"
          display="flex"
          justifyContent="space-evenly"
          gap="1rem"
        >
          <Button
            onClick={CalTrack}
            variant="outline"
            colorScheme="white"
            color="white"
          >
            Calories Tracker
          </Button>
          <Button
            onClick={TrackProject}
            variant="outline"
            colorScheme="white"
            color="white"
          >
            Track A Project
          </Button>
          <Button variant="outline" colorScheme="white" color="white">
            DeskTop App
          </Button>
          <Button
            onClick={handleTimer}
            variant="outline"
            colorScheme="white"
            color="white"
          >
            Track Your Time
          </Button>
          <Button variant="outline" colorScheme="white" color="white">
            Digital Clock Time
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Top;

import React from "react";
import { Box, Image, useMediaQuery } from "@chakra-ui/react";
import { icons } from "./files/Top";
import img from "../../images/work.jpg";

const Topbar = () => {
  const [isSmallerthan] = useMediaQuery('(min-width: 650px)')
  return (
    <>
      {/* first box of the home page */}
      <Box
        h={isSmallerthan?"80vh":"120vh"}
        bg="#eceded"
        borderBottomLeftRadius="50%"
        borderBottomRightRadius="50%"
        overflow="none"
      >
        <Image
          h="50vh"
          src={img}
          width="100%"
          alt="banner"
          objectFit="cover"
          borderBottomLeftRadius="50%"
          borderBottomRightRadius="50%"
          display="block"
          m="auto"
        />
        {/* SVG Icons Box  */}
        <Box display="flex" justifyContent="space-evenly" flexDirection={isSmallerthan?"row":"column"} w={isSmallerthan?"80%":"30%"} m="auto">
          {icons.map((s) => (
            <Image key={s.alt} src={s.img} alt={s.alt} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Topbar;

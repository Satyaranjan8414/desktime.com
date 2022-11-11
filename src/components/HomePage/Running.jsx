import { Box, Button, Heading, Image, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { runder } from "./files/run";
import { BsSmartwatch, BsEyeSlash } from "react-icons/bs";
import {
  AiOutlineDisconnect,
  AiOutlineCalculator,
  AiOutlineSchedule,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { GrDocumentText, GrGroup } from "react-icons/gr";
import { FaFileInvoiceDollar, FaConnectdevelop } from "react-icons/fa";
import { CgTimer } from "react-icons/cg";
import { TbReportSearch, TbBrandBooking } from "react-icons/tb";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { SiWebmoney } from "react-icons/si";
import { GiPodiumThird } from "react-icons/gi";
import { MdSendToMobile } from "react-icons/md";
import { RiScreenshot2Fill } from "react-icons/ri";

const Running = () => {
  const [isSmallerthan] = useMediaQuery('(min-width: 650px)')

  return (
    <>
      {/* Main box */}
      <Box h="auto" bgImage="linear-gradient(#ebecec,white)">
        {/* top box */}
        <Box w={["100%","85%","70%","55%"]} m="auto" p="3rem">
          <Heading>
            A universal platform for running anything from businesses to large
            enterprises
          </Heading>
          <Text>
            From a powerful time tracker to project management, human resource
            planning, and running an office. Everything is fully customizable
            and can be turned on and off for the whole company or specific
            users.
          </Text>
        </Box>
        {/* in this down box there are two boxes with display flex */}
        <Box h="80%" w="70%" m="auto" display="flex" flexDirection={isSmallerthan?"row":"column-reverse"} lineHeight="2rem" >
          {/* left box */}
          <Stack w={["100%","100%","100%","50%"]}>
            {runder.map((r) => (
              <Box key={r.heads}>
                <Heading textAlign={isSmallerthan?"left":"center"} size="lg">
                  {r.heads}
                </Heading>
                <Text>{r.texts}</Text>
              </Box>
            ))}
          </Stack>

          {/* right box OR Image box */}
          <Stack width={isSmallerthan?"50%":"100%"} m="auto">
            <Image
              src="https://desktime.com/assets/img/new-homepage/universal-platform/universal-platform.webp"
              alt="running"
            />
          </Stack>
        </Box>

        <Box m="auto" w="80%" mt="3rem">
          <Button m="0.8rem" fontSize="lg">
            <BsSmartwatch size={30} />
            Automatic time tracking
          </Button>
          <Button m="0.8rem" fontSize="lg">
            <AiOutlineDisconnect size={30} />
            Offline time tracking
          </Button>
          <Button m="0.8rem" fontSize="lg">
            <GrDocumentText size={30} />
            Document title tracking
          </Button>
          <Button m="0.8rem" fontSize="lg">
            <BsEyeSlash size={30} />
            Private time option
          </Button>
          <Button m="0.8rem" fontSize="lg">
            <FaFileInvoiceDollar size={30} />
            invoicing
          </Button>
          <Button m="0.8rem" fontSize="lg">
            <CgTimer size={30} />
            Promodor timer
          </Button>
          <Button m="0.8rem" fontSize="lg">
            <AiOutlineCalculator size={30} />
            Cost calculation
          </Button>
          <Button m="0.8rem" fontSize="lg">
            <GrGroup size={30} />
            Team's contacts
          </Button>
          <Button m="0.8rem" fontSize="lg">
            <TbReportSearch size={30} />
            Custom reports
          </Button>
          <Button m="0.8rem" fontSize="lg">
            <BsFillCalendar2WeekFill size={30} />
            Absense calender
          </Button>
          <Button m="0.8rem" fontSize="lg">
            <SiWebmoney size={30} />
            Webtime tracker
          </Button>
          <Button m="0.8rem" fontSize="lg">
            <GiPodiumThird size={30} />
            Third party integration
          </Button>
          <Button m="0.8rem" fontSize="lg">
            <AiOutlineSchedule size={30} />
            Shift scheduling
          </Button>
          <Button m="0.8rem" fontSize="lg">
            <MdSendToMobile size={30} />
            Mobile App
          </Button>
          <Button m="0.8rem" fontSize="lg">
            <FaConnectdevelop size={30} />
            Url & App tracking
          </Button>
          <Button m="0.8rem" fontSize="lg">
            <RiScreenshot2Fill size={30} />
            Screenshots
          </Button>
          <Button m="0.8rem" fontSize="lg">
            <AiOutlineFundProjectionScreen size={30} />
            Project tracking
          </Button>
          <Button m="0.8rem" fontSize="lg">
            <TbBrandBooking size={30} />
            Booking
          </Button>
        </Box>
        <Box>
          <Button m="2rem" bg="transparent" border="1px solid black" p="1rem">
            SEE ALL FEATURES
          </Button>
          <Text mb="5rem">
            All the features can be turned on and off to suit eveyone's needs
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Running;

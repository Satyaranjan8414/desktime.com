import React, { useContext } from "react";
import { GoProject, GoDeviceDesktop } from "react-icons/go";
import { AiFillSchedule, AiFillSetting } from "react-icons/ai";
import { BsCalendarCheckFill } from "react-icons/bs";
import { FaFileInvoice, FaFileExport } from "react-icons/fa";
import { TbReport } from "react-icons/tb";
import { BiLogIn } from "react-icons/bi";

import {
  Drawer,
  DrawerBody,
  // DrawerFooter,
  DrawerHeader,
  //DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { HiOutlineViewList } from "react-icons/hi";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

function Sidebar({ children, ...rest }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const navigate = useNavigate();
  const [state] = useContext(AppContext);

  const goproject = () => {
    navigate("/mydesktime/project");
  };
  const desk = () => {
    navigate("/mydesktime");
  };
  const calory = () => {
    navigate("/mydesktime/calories");
  };
  const about_page = () => {
    navigate("/about");
  };
  const faq_page = () => {
    navigate("/faq");
  };
  const blog_page = () => {
    navigate("/blog");
  };
  const logout = () => {
    alert("logout success");
    state.isAuth(false);
  };
  return (
    <>
      <Button ref={btnRef} bg="#4ea819" color="white" onClick={onOpen}>
        <HiOutlineViewList size={20} />
      </Button>
      <Drawer
        variant="alwaysOpen"
        {...rest}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        trapFocus={false}
        closeOnOverlayClick={false}
        blockScrollOnMount={false}
      >
        {/* <DrawerOverlay /> */}
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize={"30px"} fontWeight={"bold"}>
            DeskTime
          </DrawerHeader>

          <DrawerBody>
            <Button
              onClick={desk}
              _hover={{ bg: "#4ea819", color: " white" }}
              w="100%"
              h="65px"
              mt="5px"
              bg="white"
            >
              <GoDeviceDesktop /> My DeskTime
            </Button>
            <Button
              onClick={goproject}
              _hover={{ bg: "#4ea819", color: " white" }}
              w="100%"
              h="65px"
              mt="5px"
              bg="white"
            >
              <GoProject /> Projects
            </Button>
            <Button
              onClick={calory}
              _hover={{ bg: "#4ea819", color: " white" }}
              w="100%"
              h="65px"
              mt="5px"
              bg="white"
            >
              <AiFillSchedule /> Calories Tracker
            </Button>
            <Button
              onClick={about_page}
              _hover={{ bg: "#4ea819", color: " white" }}
              w="100%"
              h="65px"
              mt="5px"
              bg="white"
            >
              <BsCalendarCheckFill /> About
            </Button>
            <Button
              onClick={faq_page}
              _hover={{ bg: "#4ea819", color: " white" }}
              w="100%"
              h="65px"
              mt="5px"
              bg="white"
            >
              <FaFileInvoice /> FAQ
            </Button>
            <Button
              onClick={blog_page}
              _hover={{ bg: "#4ea819", color: " white" }}
              w="100%"
              h="65px"
              mt="5px"
              bg="white"
            >
              <TbReport /> Blog
            </Button>

            {/* <Button
              _hover={{ bg: "#4ea819", color: " white" }}
              w="100%"
              h="65px"
              mt="5px"
              bg="white"
            >
              <AiFillSetting/> Setting
            </Button> */}
            <NavLink to="/login">
              <Button
                _hover={{ bg: "#4ea819", color: " white" }}
                w="100%"
                h="65px"
                mt="5px"
                bg="white"
              >
                <BiLogIn />
                Login
              </Button>
            </NavLink>
            <Button
              onClick={logout}
              _hover={{ bg: "#4ea819", color: " white" }}
              w="100%"
              h="65px"
              mt="5px"
              bg="white"
            >
              <FaFileExport /> Logout
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Sidebar;

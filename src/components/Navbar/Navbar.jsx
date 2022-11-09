import React from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { Box, useMediaQuery } from "@chakra-ui/react";
import Sidebar from "../Sidebar/Sidebar";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Navbar = () => {
  const [state] = useContext(AppContext);
  const [isSmallerthan] = useMediaQuery("(min-width:650px)");
  const navigate = useNavigate();
  const baseStyle = {
    color: "black",
    textDecoration: "none",
  };

  const activeStyle = {
    color: "#4ea819",
    textDecoration: "none",
    transition: "0.5s",
    borderBottom: "2px solid green",
  };

  const logout = () => {
    alert("logout success");
    state.isAuth(false);
  };
  const home_page = () => {
    navigate("/");
  };

  return (
    <>
      <hr
        style={{
          border: "4px solid #4ea819",
          padding: "0",
          backgroundColor: "#4ea819",
        }}
      />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
        height="20vh"
        margin="auto"
      >
        <Box>
          <Sidebar />
        </Box>
        <Box className={styles.logo} onClick={home_page}>
          <img
            src="https://logotyp.us/files/desktime.svg"
            alt="logo"
            width="250"
          />
        </Box>
        <Box
          className={isSmallerthan ? styles.pages : styles.page}
          w={["75%", "70%", "60%", "50%"]}
        >
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
            to="/mydesktime"
          >
            MyDeskTime
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
            to="/faq"
          >
            FAQ
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
            to="/blog"
          >
            Blog
          </NavLink>
          <button className={styles.Login_button}>
            {state.isAuth ? (
              <NavLink onClick={logout} to="/login">
                Logout
              </NavLink>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </button>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;

//  https://logotyp.us/files/desktime.svg

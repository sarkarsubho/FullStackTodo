import { Box, Image, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { FiLogOut } from "react-icons/fi";
import { AiTwotoneHome } from "react-icons/ai";
import {
  ProSidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  Menu,
  MenuItem,
} from "@randumbwilliam/react-pro-sidebar";
import "@randumbwilliam/react-pro-sidebar/dist/css/styles.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaList } from "react-icons/fa";
import { SiMicrosoftoffice, SiOneplus } from "react-icons/si";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { CgDisplayGrid, CgLogIn } from "react-icons/cg";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import "./sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../redux/auth/action.types";
import { useEffect } from "react";

export const Sidebar = () => {
  let { user, isAuth } = useSelector((state) => state.auth);
  const [windowwidth] = useState(window.innerWidth < 400);
  const dispatch = useDispatch();
  console.log(windowwidth);
  const [collapsed, setCollapsed] = useState(windowwidth);
  const toast = useToast();
  const { pathname } = useLocation();
  console.log("Path from sidebar", pathname);

  const handleLogout = () => {
    toast({
      title: "LogingOut from the Current Account !",
      status: "warning",
      duration: 3000,
      isClosable: true,
    });
    setTimeout(() => {
      dispatch({ type: LOGOUT });
    }, 1500);
  };

  const [active, setActive] = useState({
    home: true,
    all: false,
    official: false,
    personal: false,
    other: false,
    new: false,
  });

  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  useEffect(() => {
    console.log("path Changed");
    if (pathname === "/") {
      setActive({
        home: true,
        all: false,
        official: false,
        personal: false,
        other: false,
        new: false,
      });
    } else if (pathname === "/all") {
      setActive({
        home: false,
        all: true,
        official: false,
        personal: false,
        other: false,
        new: false,
      });
    } else if (pathname === "/official") {
      setActive({
        home: false,
        all: false,
        official: true,
        personal: false,
        other: false,
        new: false,
      });
    } else if (pathname === "/personal") {
      setActive({
        home: false,
        all: false,
        official: false,
        personal: true,
        other: false,
        new: false,
      });
    } else if (pathname === "/others") {
      setActive({
        home: false,
        all: false,
        official: false,
        personal: false,
        other: true,
        new: false,
      });
    } else if (pathname === "/createNew") {
      setActive({
        home: false,
        all: false,
        official: false,
        personal: false,
        other: false,
        new: true,
      });
    }
  }, [pathname]);

  return (
    <Box
      id="sidebar"
      position={"relative"}
      marginRight={"10px"}
      top={0}
      left={0}
    >
      <ProSidebar collapsed={collapsed}>
        <SidebarHeader id="sidebarHeader">
          <Image
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            id="Profilepic"
          ></Image>
          <Text textAlign={"center"} id="username">
            {isAuth ? user.name : "User Name"}
          </Text>
          <Box id={"collapsedBtn"} onClick={handleCollapsed}>
            {collapsed ? (
              <AiOutlineDoubleRight fontWeight={900} />
            ) : (
              <AiOutlineDoubleLeft />
            )}
          </Box>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem
              icon={<AiTwotoneHome color="white" fontSize={"25px"} />}
              active={active.home}
            >
              Home
              <Link to="/"></Link>
            </MenuItem>
          </Menu>

          <Menu iconShape="square">
            <MenuItem
              icon={<FaList color="white" fontSize={"22px"} />}
              active={active.all}
            >
              All Todo
              <Link to="/all"></Link>
            </MenuItem>
          </Menu>

          <Menu iconShape="square">
            <MenuItem
              icon={<SiMicrosoftoffice color="white" fontSize={"22px"} />}
              active={active.official}
            >
              Official
              <Link to="/official"></Link>
            </MenuItem>
          </Menu>
          <Menu iconShape="square">
            <MenuItem
              icon={<BsFillSuitHeartFill color="white" fontSize={"22px"} />}
              active={active.personal}
            >
              Personal
              <Link to="/personal"></Link>
            </MenuItem>
          </Menu>
          <Menu iconShape="square">
            <MenuItem
              icon={<CgDisplayGrid color="white" fontSize={"25px"} />}
              active={active.other}
            >
              Others
              <Link to="/others"></Link>
            </MenuItem>
          </Menu>
          <Menu iconShape="square">
            <MenuItem
              icon={<SiOneplus color="white" fontSize={"22px"} />}
              active={active.new}
            >
              Create New
              <Link to="/createNew"></Link>
            </MenuItem>
          </Menu>
        </SidebarContent>

        <SidebarFooter>
          {isAuth ? (
            <Menu iconShape="square">
              <MenuItem
                icon={<FiLogOut color="red" fontSize={"25px"}></FiLogOut>}
                onClick={handleLogout}
              >
                LOGOUT
                {/* <Link to="/createNew"></Link> */}
              </MenuItem>
            </Menu>
          ) : (
            <Menu iconShape="square">
              <MenuItem
                icon={<CgLogIn color="red" fontSize={"25px"}></CgLogIn>}
              >
                LOGIN
                <Link to="/login"></Link>
              </MenuItem>
            </Menu>
          )}
        </SidebarFooter>
      </ProSidebar>
    </Box>
  );
};

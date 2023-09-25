import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetUserQuery } from "/src/state/api";

import Sidebar from "../Nav/Sidebar";
import Navbar from "../Nav/Navbar";
import Topbar from "../Nav/Topbar";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  // const userId = user._id;
  // const { data } = useGetUserQuery(userId);
  
  return (
    <Box>
      <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%" >
        <Sidebar
          isNonMobile={isNonMobile}
          drawerWidth="250px"
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Box flexGrow={1}>
        {/* <Navbar
          // user={data || {}} 
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        /> */}
        <Topbar
          // user={data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}

export default Layout;
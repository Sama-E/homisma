import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";
import Navbar from "../Nav/Navbar";
import Sidebar from "../Nav/Sidebar";
import Topbar from "../Nav/Topbar";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
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
        {/* <Navbar /> */}
        <Topbar
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
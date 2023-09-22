import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Button,
  Box,
  Typography,
  IconButton,
  InputBase,
  Toolbar,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";

import FlexBetween from "/src/components/FlexBetween";
import { setMode, setLogout } from "/src/state";

const Topbar = ({ isSidebarOpen, setIsSidebarOpen, isNonMobile, }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);


  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>

        {/* LEFT SIDE */}
        <FlexBetween>
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon />
          </IconButton>
        </FlexBetween>

        {/* MIDDLE */}
        <FlexBetween>
          <Box display="flex" alignItems="center" gap="0.5rem">
            <Typography variant="h4" fontWeight="bold">
              HOMISMA
            </Typography>
          </Box>
        </FlexBetween>

        {/* RIGHT SIDE */}

        <FlexBetween gap="1.5rem">
          {isSidebarOpen ? (
          <IconButton>
            <Search sx={{ fontSize: "25px" }} />
          </IconButton>
          ) : (
            <>
            <InputBase placeholder="Search..." sx={{ borderBottom: 1 }} />
            <IconButton>
              <Search sx={{ fontSize: "25px" }} />
            </IconButton>
            </>
          )}
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>

          <FlexBetween>
            <Button
              onClick={handleClick}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
              }}
            >
              <Box
                component="img"
                alt="profile"
                src={user.profilePicPath}
                height="32px"
                width="32px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.85rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user.firstName}
                </Typography>
              </Box>
              <ArrowDropDownOutlined
                sx={{ color: theme.palette.secondary[300], fontSize: "25px" }}
              />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
            </Menu>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  )
}

export default Topbar;
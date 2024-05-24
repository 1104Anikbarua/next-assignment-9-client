"use client";
import {
  Avatar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import logo from "@/assets/logo/v (2).png";
import Link from "next/link";
const Navbar = () => {
  //
  const settings = [
    { name: "Home", path: "/" },
    { name: "Profile", path: "/profile" },
    { name: "About Us", path: "/about" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Register", path: "/register" },
    { name: "Logout", path: "/logout" },
  ];
  //
  //   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
  //     null
  //   );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  //   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
  //     setAnchorElNav(event.currentTarget);
  //   };
  //   const handleCloseNavMenu = () => {
  //     setAnchorElNav(null);
  //   };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  //
  return (
    <Box
      bgcolor={"white"}
      boxShadow={1}
      borderBottom={"1px solid"}
      borderColor={"gray"}
    >
      <Container>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box mt={1}>
              <Image src={logo} width={40} height={40} alt="company logo" />
            </Box>

            <Typography ml={2}>Amigo</Typography>
          </Stack>

          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            spacing={2}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Typography
              sx={{ textDecoration: "none", color: "black" }}
              component={Link}
              href={"/"}
            >
              Home
            </Typography>
            <Typography
              sx={{ textDecoration: "none", color: "black" }}
              component={Link}
              href={"/about"}
            >
              About Us
            </Typography>
            <Typography
              sx={{ textDecoration: "none", color: "black" }}
              component={Link}
              href={"/profile"}
            >
              My Profile
            </Typography>
            <Typography
              sx={{ textDecoration: "none", color: "black" }}
              component={Link}
              href={"/register"}
            >
              Register
            </Typography>
            <Typography
              sx={{ textDecoration: "none", color: "black" }}
              component={Link}
              href={"/login"}
            >
              Login
            </Typography>
          </Stack>

          <Box sx={{ flexGrow: 0, display: { xs: "block", sm: "none" } }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                  <Typography
                    textAlign="center"
                    component={Link}
                    href={setting.path}
                  >
                    {setting.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;

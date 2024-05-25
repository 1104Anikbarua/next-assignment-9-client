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
import dynamic from "next/dynamic";
const AuthToggle = dynamic(
  () => import("@/components/Ui/Home/AuthToggle/AuthToggle"),
  { ssr: false }
);

const Navbar = () => {
  //
  // const settings = [
  //   { name: "Home", path: "/" },
  //   { name: "Profile", path: "/profile" },
  //   { name: "About Us", path: "/about" },
  //   { name: "Dashboard", path: "/dashboard" },
  //   { name: "Register", path: "/register" },
  //   { name: "Logout", path: "/logout" },
  // ];

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

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

            <AuthToggle />
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
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography
                  style={{ textDecoration: "none" }}
                  textAlign="center"
                  component={Link}
                  href={"/"}
                >
                  Home
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography
                  style={{ textDecoration: "none" }}
                  textAlign="center"
                  component={Link}
                  href={"/about"}
                >
                  About Us
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography
                  style={{ textDecoration: "none" }}
                  textAlign="center"
                  component={Link}
                  href={"/profile"}
                >
                  Profile
                </Typography>
              </MenuItem>
              {/* <MenuItem onClick={handleCloseUserMenu}>
                <Typography
                  style={{ textDecoration: "none" }}
                  textAlign="center"
                  component={Link}
                  href={"/register"}
                >
                  Register
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography
                  style={{ textDecoration: "none" }}
                  textAlign="center"
                  component={Link}
                  href={"/login"}
                >
                  Login
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography
                  style={{ textDecoration: "none" }}
                  textAlign="center"
                  component={Link}
                  href={"/login"}
                >
                  Logout
                </Typography>
              </MenuItem> */}
            </Menu>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;

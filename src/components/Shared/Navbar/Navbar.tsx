"use client";
import {
  Avatar,
  Box,
  Container,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import logo from "@/assets/logo/v (2).png";
import Link from "next/link";
import dynamic from "next/dynamic";
import Groups2Icon from "@mui/icons-material/Groups2";
import HomeIcon from "@mui/icons-material/Home";
import { useGetMeQuery } from "@/redux/features/user/userApi";

const AuthToggle = dynamic(
  () => import("@/components/Ui/Home/AuthToggle/AuthToggle"),
  { ssr: false }
);

const Navbar = () => {
  //
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  // close the user menu in sm breakpoint explicitly
  const isSmUp = useMediaQuery((theme: any) => theme.breakpoints.up("sm"));
  // call the handleCloseUserMenu function
  useEffect(() => {
    if (isSmUp) {
      handleCloseUserMenu();
    }
  }, [isSmUp]);

  const { data, isLoading } = useGetMeQuery({});
  const user = data?.response.data;
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
          {/* website logo and name section start  */}
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box mt={1}>
              <Image src={logo} width={40} height={40} alt="company logo" />
            </Box>

            <Typography ml={2} sx={{ textDecoration: "none" }}>
              Amigo
            </Typography>
          </Stack>
          {/* website logo and name section start  */}
          {/* website navigation link desktop start  */}
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

            <AuthToggle handleCloseUserMenu={handleCloseUserMenu} />
          </Stack>
          {/* website navigation link desktop end  */}
          {/* website navigation link mobile start  */}
          <Box sx={{ flexGrow: 0, display: { xs: "block", sm: "none" } }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={user?.profilePhoto} />
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
                <ListItemIcon>
                  <HomeIcon fontSize="small" />
                </ListItemIcon>
                {/* <ListItemText>Cut</ListItemText> */}
                <Typography
                  style={{ textDecoration: "none", color: "black" }}
                  textAlign="center"
                  component={Link}
                  href={"/"}
                >
                  Home
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <ListItemIcon>
                  <Groups2Icon fontSize="small" />
                </ListItemIcon>
                <Typography
                  style={{ textDecoration: "none", color: "black" }}
                  textAlign="center"
                  component={Link}
                  href={"/about"}
                >
                  About Us
                </Typography>
              </MenuItem>
              <AuthToggle handleCloseUserMenu={handleCloseUserMenu} />
            </Menu>
          </Box>
          {/* website navigation link mobile end  */}
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;

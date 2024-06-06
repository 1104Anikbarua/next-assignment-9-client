import React from "react";
import { Button, ListItemIcon, MenuItem, Typography } from "@mui/material";
import { isUserLoggedIn } from "@/services/auth.services";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signOutUser } from "@/serverActions/signOutUser";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import LogoutIcon from "@mui/icons-material/Logout";
import PasswordIcon from "@mui/icons-material/Password";
import { GetRole } from "@/utlis/getUserRole";
const AuthToggle = ({
  handleCloseUserMenu,
}: {
  handleCloseUserMenu: () => void;
}) => {
  // get user login status
  const router = useRouter();
  const isUserLogin = isUserLoggedIn();
  // user logout functionlity
  const hanldeLogout = () => {
    console.log("click");
    signOutUser();
    router.push("/login"); //send back to login page
    router.refresh(); //refresh the page
  };

  const role = GetRole();

  return (
    <>
      {/* mobile menu */}
      <MenuItem
        sx={{ display: { xs: "block", sm: "none" } }}
        onClick={handleCloseUserMenu}
      >
        <ListItemIcon>
          <AssignmentIndIcon fontSize="small" />
        </ListItemIcon>
        <Typography
          style={{ textDecoration: "none", color: "black" }}
          textAlign="center"
          component={Link}
          href={`/dashboard/${role}/profile`}
        >
          Profile
        </Typography>
      </MenuItem>
      {!isUserLogin ? (
        <MenuItem
          sx={{ display: { xs: "block", sm: "none" } }}
          onClick={handleCloseUserMenu}
        >
          <ListItemIcon>
            <PasswordIcon fontSize="small" />
          </ListItemIcon>
          <Typography
            style={{ textDecoration: "none", color: "black" }}
            textAlign="center"
            component={Link}
            href={"/login"}
          >
            Login
          </Typography>
        </MenuItem>
      ) : (
        <MenuItem
          sx={{ display: { xs: "block", sm: "none" } }}
          onClick={handleCloseUserMenu}
        >
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <Typography
            style={{ textDecoration: "none", color: "black" }}
            textAlign="center"
            component={Link}
            href={"/login"}
            onClick={() => hanldeLogout()}
          >
            Logout
          </Typography>
        </MenuItem>
      )}
      {isUserLogin && (
        <Typography
          sx={{
            textDecoration: "none",
            color: "black",
            display: { xs: "none", sm: "inline-block" },
          }}
          component={Link}
          href={`/dashboard/${role}/profile`}
        >
          My Profile
        </Typography>
      )}
      {!isUserLogin ? (
        <Button
          sx={{ display: { xs: "none", sm: "inline-block" } }}
          LinkComponent={Link}
          href="/login"
          size="small"
          color="success"
        >
          Login
        </Button>
      ) : (
        <Button
          sx={{ display: { xs: "none", sm: "inline-block" } }}
          onClick={() => hanldeLogout()}
          size="small"
          color="error"
        >
          Logout
        </Button>
      )}
    </>
  );
};

export default AuthToggle;

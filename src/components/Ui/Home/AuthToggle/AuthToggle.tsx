import React from "react";
import { Button, Typography } from "@mui/material";
import { isUserLoggedIn, logOutUser } from "@/services/auth.services";
import { useRouter } from "next/navigation";
import Link from "next/link";
const AuthToggle = () => {
  // get user login status
  const router = useRouter();
  const isUserLogin = isUserLoggedIn();
  // user logout functionlity
  const hanldeLogout = () => {
    logOutUser();
    router.push("/login"); //send back to login page
    router.refresh(); //refresh the page
  };
  return (
    <>
      {isUserLogin && (
        <Typography
          sx={{ textDecoration: "none", color: "black" }}
          component={Link}
          href={"/profile"}
        >
          My Profile
        </Typography>
      )}
      {!isUserLogin ? (
        <Button LinkComponent={Link} href="/login" size="small" color="success">
          Login
        </Button>
      ) : (
        <Button onClick={() => hanldeLogout()} size="small" color="error">
          Logout
        </Button>
      )}
    </>
  );
};

export default AuthToggle;

import { Button } from "@mui/material";
import React from "react";
import Image from "next/image";
import github from "@/assets/social/github.svg";
import { signIn } from "next-auth/react";
const Github = () => {
  return (
    <Button
      onClick={() =>
        signIn("github", {
          callbackUrl: "http://localhost:3000",
        })
      }
      sx={{
        gap: "5px",
        backgroundColor: "white",
        color: "#000000",
        "&:hover": {
          backgroundColor: "white",
        },
      }}
      fullWidth
    >
      <Image src={github} width={20} height={20} alt="github image" />
      SIGNUP WITH GITHUB
    </Button>
  );
};

export default Github;

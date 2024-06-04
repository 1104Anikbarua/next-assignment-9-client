import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <Stack
      justifyContent={"center"}
      height={"100vh"}
      alignItems={"center"}
      spacing={2}
    >
      <Typography
        component={"h3"}
        variant="h3"
        sx={{
          fontSize: { xs: "24px" },
          fontWeight: { xs: 600, sm: 900 },
          opacity: "0.7",
          maxWidth: { xs: "100%" },
        }}
      >
        Opps! Something went wrong
      </Typography>
      <Box>
        <Button color="success" LinkComponent={Link} href="/">
          Home
        </Button>
      </Box>
    </Stack>
  );
};

export default NotFound;

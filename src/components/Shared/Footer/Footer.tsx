import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import logo from "@/assets/logo/v (2).png";
import Link from "next/link";
const Footer = () => {
  return (
    <Container>
      <Stack
        my={2}
        direction={"row"}
        spacing={6}
        maxWidth={"100%"}
        // justifyContent={"space-between"}
        sx={{ justifyContent: { xs: "center", md: "space-between" } }}
      >
        <Box width={"100%"}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "start" },
              gap: "12px",
            }}
          >
            <Image src={logo} width={36} height={36} alt="website logo" />
            <Typography
              color={"rgb(117 117 117)"}
              component={"h5"}
              variant="h5"
              fontWeight={500}
            >
              Amigo
            </Typography>
          </Box>
          <Typography component={"p"} variant="body1" color={"#4b5563"}>
            Turn your next trip into a hassle-free experience with Amigo
          </Typography>
        </Box>
        <Grid container sx={{ xs: 2, md: 3 }} columnGap={2}>
          <Stack spacing={1}>
            <Typography variant="subtitle1" component={"h6"} fontWeight={700}>
              Legal
            </Typography>
            <Typography
              variant="body1"
              sx={{
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Terms and conditions
            </Typography>
            <Typography
              variant="body1"
              sx={{
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Privacy Policy
            </Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography variant="subtitle1" component={"h6"} fontWeight={700}>
              Support
            </Typography>
            <Typography
              variant="body1"
              sx={{
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Contact us
            </Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography variant="subtitle1" component={"h6"} fontWeight={700}>
              Itineraries
            </Typography>
            <Typography
              variant="body1"
              sx={{
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Community Trips
            </Typography>
            <Typography
              variant="body1"
              sx={{
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Destination
            </Typography>
          </Stack>
        </Grid>
      </Stack>
      <Divider sx={{ backgroundColor: "#757575" }} />
      <Typography py={3} color={"#757575"} component={"h5"} variant="h5">
        &copy; Amigo {new Date().getFullYear()} | All rights reserved
      </Typography>
    </Container>
  );
};

export default Footer;

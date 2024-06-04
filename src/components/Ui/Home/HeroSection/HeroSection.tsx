"use client";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import heroBgImage from "@/assets/hero/herosection.jpg";
import Link from "next/link";
import { GetRole } from "@/utlis/getUserRole";

const HeroSection = () => {
  // get user role
  const role = GetRole();
  return (
    <Container>
      <Box
        sx={{
          my: 1,
          position: "relative",
          width: "100%",
          height: "100vh",
          borderRadius: "5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Image
          src={heroBgImage}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Hero Background Image"
          style={{ zIndex: 0, position: "absolute", borderRadius: "5px" }}
        />
        <Box
          sx={{
            position: "absolute",
            bgcolor: " black",
            opacity: "0.1",
            width: "100%",
            height: "100%",
            zIndex: "1",
            borderRadius: "5px",
          }}
        />
        <Stack direction={"column"} spacing={1} zIndex={1} width={"100%"}>
          <Typography
            component={"h2"}
            variant="h2"
            sx={{
              opacity: "0.7",
              fontSize: { xs: "36px", sm: "48px", lg: "72px" },
            }}
            fontWeight={900}
          >
            Your Next Journey, Optimized!
          </Typography>
          <Typography
            textAlign={"center"}
            component={"h6"}
            variant="h6"
            style={{ margin: "0 auto" }}
            sx={{
              opacity: "0.7",
              width: "100%",
              maxWidth: "672px",
              textAlign: "center",
              fontSize: { sm: "18px", lg: "20px" },
            }}
            fontWeight={900}
          >
            Build, personalize, and optimize your itineraries with{" "}
            <Typography
              sx={{ fontSize: { sm: "18px", lg: "20px" } }}
              bgcolor={"rgb(220 255 160 / 100%)"}
              component={"span"}
              variant="h6"
              fontWeight={900}
            >
              Amigo
            </Typography>{" "}
            trip planner. Designed for leisure, business, and everyday
            adventures.
          </Typography>
          <Box>
            <Button
              LinkComponent={Link}
              href={`/dashboard/${role}/travel`}
              size="small"
              color="success"
            >
              Share Your Trip
            </Button>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default HeroSection;

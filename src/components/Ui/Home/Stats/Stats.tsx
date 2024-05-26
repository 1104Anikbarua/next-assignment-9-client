import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const Stats = () => {
  return (
    <Container sx={{ my: 3 }}>
      <Stack py={10} rowGap={2}>
        <Typography
          component={"h2"}
          variant="h2"
          textAlign={"center"}
          sx={{
            opacity: "0.7",
            fontSize: { xs: "30px", sm: "36px", lg: "48px" },
          }}
          fontWeight={700}
        >
          Amigo at a
          <Typography
            textAlign={"center"}
            bgcolor={"rgb(220 255 160 / 100%)"}
            component={"span"}
            variant="h4"
            sx={{ fontSize: { xs: "30px", sm: "36px", lg: "48px" } }}
            fontWeight={700}
            p={1}
            borderRadius={"4px"}
          >
            {" "}
            glance{" "}
          </Typography>
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={"center"}
          justifyContent={{ xs: "center", sm: "space-between" }}
          p={6}
          textAlign={"center"}
          sx={{
            backgroundImage: "linear-gradient(to right,#16a34a, #ecfccb )",
          }}
          borderRadius={2}
          rowGap={{ xs: 2, sm: 0 }}
        >
          <Stack>
            <Typography
              fontWeight={900}
              color={"white"}
              component={"h3"}
              variant="h4"
            >
              180+
            </Typography>
            <Typography
              fontWeight={400}
              color={"white"}
              component={"h3"}
              variant="h5"
            >
              Trips
            </Typography>
          </Stack>
          <Stack>
            <Typography
              fontWeight={900}
              color={"white"}
              component={"h3"}
              variant="h4"
            >
              26k+
            </Typography>
            <Typography
              fontWeight={400}
              color={"white"}
              component={"h3"}
              variant="h5"
            >
              Buddy
            </Typography>
          </Stack>
          <Stack>
            <Typography
              fontWeight={900}
              color={"white"}
              component={"h3"}
              variant="h4"
            >
              10k+
            </Typography>
            <Typography
              fontWeight={400}
              color={"white"}
              component={"h3"}
              variant="h5"
            >
              Happy Trips
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Stats;

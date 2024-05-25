import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const Stats = () => {
  return (
    <Container sx={{ my: 3 }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        p={6}
        textAlign={"center"}
        sx={{
          backgroundImage: "linear-gradient(to right,#16a34a, #ecfccb )",
        }}
        borderRadius={2}
      >
        <Stack>
          <Typography
            fontWeight={900}
            color={"white"}
            component={"h3"}
            variant="h5"
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
            variant="h5"
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
            variant="h5"
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
        <Stack>
          <Typography
            fontWeight={900}
            color={"white"}
            component={"h3"}
            variant="h5"
          >
            180+
          </Typography>
          <Typography
            fontWeight={400}
            color={"white"}
            component={"h3"}
            variant="h5"
          >
            Best Awarded Volunteers
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Stats;

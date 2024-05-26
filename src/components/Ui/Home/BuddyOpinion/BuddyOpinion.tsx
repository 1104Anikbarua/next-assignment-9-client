import React from "react";
import {
  Container,
  Typography,
  Stack,
  Grid,
  Box,
  Avatar,
  Rating,
} from "@mui/material";

const BuddyOpinion = () => {
  return (
    <Container>
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
          Don&apos;t take our
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
            word{" "}
          </Typography>
          for it
        </Typography>
        <Typography
          component={"h6"}
          variant="h6"
          textAlign={"center"}
          color={"#6b7280"}
          sx={{
            opacity: "0.7",
            fontSize: { xs: "18px", sm: "20px" },
          }}
          fontWeight={500}
        >
          See what our users have to say about revolutionizing their travel
          experiences with Amigo
        </Typography>
        <Grid
          container
          rowGap={2}
          columnGap={{ xs: 0, sm: 3 }}
          justifyContent={{ xs: "initial", sm: "center" }}
        >
          {/* first start  */}
          <Grid
            item
            xs={12}
            sm={5}
            md={3}
            lg={3.5}
            sx={{
              bgcolor: "rgb(200 160 255 / 10%)",
              border: "1px solid #f3e8ff",
              borderRadius: 3.5,
              height: "100%",
            }}
          >
            <Stack p={3.5} rowGap={3}>
              <Stack direction={"row"} alignItems={"center"} columnGap={1}>
                <Avatar />
                <Stack>
                  <Typography>Heavier rain soon</Typography>
                  <Typography color={"secondary.main"}>
                    Digital Nomad
                  </Typography>
                </Stack>
              </Stack>
              <Stack>
                <Rating name="read-only" value={5} readOnly />
                <Typography>
                  Amigo saves time and stress by aiding travel planning,
                  relieving indecision or uncertainty.
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          {/* first end  */}
          {/* second start  */}
          <Grid
            item
            xs={12}
            sm={5}
            md={3}
            lg={3.5}
            sx={{
              bgcolor: "rgb(200 160 255 / 10%)",
              border: "1px solid #dcfce7",
              borderRadius: 3.5,
              height: "100%",
              transform: {
                xs: "translateY(0px)",
                md: "translateY(40px)",
                lg: "translateY(40px)",
              },
            }}
          >
            <Stack p={3.5} rowGap={3}>
              <Stack direction={"row"} alignItems={"center"} columnGap={1}>
                <Avatar />
                <Stack>
                  <Typography>Heavier rain soon</Typography>
                  <Typography color={"secondary.main"}>
                    Digital Nomad
                  </Typography>
                </Stack>
              </Stack>
              <Stack>
                <Rating name="read-only" value={5} readOnly />
                <Typography>
                  Amigo saves time and stress by aiding travel planning,
                  relieving indecision or uncertainty.
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          {/* second end  */}
          {/* third start  */}
          <Grid
            item
            xs={12}
            sm={5}
            md={3}
            lg={3.5}
            sx={{
              bgcolor: "rgb(230 111 125 / 10%)",
              borderRadius: 3.5,
              height: "100%",
              border: "1px solid #fbcfe8",
            }}
          >
            <Stack p={3.5} rowGap={3}>
              <Stack direction={"row"} alignItems={"center"} columnGap={1}>
                <Avatar />
                <Stack>
                  <Typography>Heavier rain soon</Typography>
                  <Typography color={"secondary.main"}>
                    Digital Nomad
                  </Typography>
                </Stack>
              </Stack>
              <Stack>
                <Rating name="read-only" value={5} readOnly />
                <Typography>
                  Amigo saves time and stress by aiding travel planning,
                  relieving indecision or uncertainty.
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          {/* third end  */}
        </Grid>
      </Stack>
    </Container>
  );
};

export default BuddyOpinion;

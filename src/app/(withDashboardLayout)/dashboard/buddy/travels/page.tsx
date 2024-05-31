"use client";
import TravelsCard from "@/app/(withLayout)/travels/components/TravelCard";
import MediaControlCard from "@/components/Ui/TestCard/TestCard";
import { useGetMyPostedTravelsQuery } from "@/redux/features/user/userApi";
import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const Travels = () => {
  const { data, isLoading } = useGetMyPostedTravelsQuery({});
  const travels = data?.response.data;
  return (
    <Container>
      <Typography
        component={"h3"}
        variant="h3"
        sx={{
          fontSize: { xs: "24px" },
          fontWeight: { xs: 600, sm: 800 },
          opacity: "0.7",
          my: 5,
        }}
      >
        Posted Travels
      </Typography>
      <Grid container rowGap={2}>
        {travels?.map((travel) => (
          <Grid item xs={12} sm={12} md={6} lg={6} key={travel.id}>
            <TravelsCard trip={travel} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Travels;

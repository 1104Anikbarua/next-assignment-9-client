"use client";
import React from "react";
import { useGetTravelQuery } from "@/redux/features/trip/tripApi";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import postedUser from "@/assets/user/user3.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import dayjs from "dayjs";
import Link from "next/link";
const TravelDetails = ({
  params: { travelId: id },
}: {
  params: { travelId: string };
}) => {
  const { data, isLoading } = useGetTravelQuery({ id }, { skip: !id });
  const travel = data?.response;
  console.log(travel);
  return (
    <Container>
      <Stack py={10} rowGap={2}>
        <Grid container rowGap={2}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Box sx={{ width: "100%", height: "350px", position: "relative" }}>
              <Image
                src={travel?.photos[0] as string | StaticImport}
                layout="fill"
                objectFit="cover"
                alt="travel photo"
                style={{ borderRadius: "8px" }}
              />
            </Box>
          </Grid>
          {travel?.photos.slice(1).map((photo, index) => (
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              key={index}
              px={{ xs: 0, md: 1, lg: 0 }}
              justifyItems={"center"}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "800px",
                  height: "300px",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Image
                  src={photo}
                  layout="fill"
                  objectFit="cover"
                  alt="travel photo"
                  style={{ borderRadius: "8px" }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
        {/* my-5 flex w-full flex-col items-start justify-between gap-5 px-4 md:flex-row md:items-center md:px-12 */}
        <Stack
          width={"100%"}
          maxWidth={"576px"}
          my={5}
          direction={{ xs: "column", sm: "row" }}
          justifyContent={"space-between"}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            width={"100%"}
            maxWidth={"220px"}
          >
            <Box
              position={"relative"}
              width={"100%"}
              maxWidth={"60px"}
              height={"60px"}
            >
              <Image
                src={postedUser}
                objectFit="cover"
                layout="fill"
                style={{ borderRadius: "50%" }}
                alt="user image"
              />
            </Box>
            <Stack>
              <Typography component={"p"} variant="h6">
                {travel?.user?.name}
              </Typography>
              <Typography component={"p"} variant="h6">
                {dayjs(travel?.createdAt).format("DD MMM YYYY")}
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography component={"p"} variant="h6">
              100
            </Typography>
            <IconButton color="secondary">
              <FavoriteBorderIcon />
            </IconButton>
          </Stack>
        </Stack>

        <Box width={"100%"} maxWidth={"576px"}>
          <Typography component={"p"} variant="h6">
            {travel?.description}
          </Typography>
        </Box>
        <Typography component={"h4"} variant="h4" fontWeight={500}>
          Trip to {travel?.destination}!
        </Typography>
        <Typography component={"h4"} variant="h4" fontWeight={500}>
          Tour Details
        </Typography>
        <Stack>
          {/* Budget start here */}
          <Typography component={"p"} variant="h6">
            Budget:
            <Typography component={"span"} variant="h6">
              {" "}
              ${travel?.budget}
            </Typography>
          </Typography>
          {/* Budget ends here */}
          {/* travel type start here */}
          <Typography component={"p"} variant="h6">
            Travel Type:
            <Typography component={"span"} variant="h6">
              {" "}
              {travel?.travelType.toUpperCase()}
            </Typography>
          </Typography>
          {/* travel type ends here */}
          {/* activities start here  */}
          <Typography
            component={"p"}
            variant="h6"
            width={"100%"}
            maxWidth={"576px"}
          >
            Activities:
            {travel?.activities.map((activity, index) => (
              <Typography component={"span"} variant="h6" key={index}>
                {activity}
                {travel.activities.length - 1 === index ? "!" : ","}
              </Typography>
            ))}
          </Typography>
          {/* activities ends here  */}
          {/* start date start here  */}
          <Typography component={"p"} variant="h6">
            Start Date:
            <Typography component={"span"} variant="h6">
              {" "}
              {travel?.startDate}
            </Typography>
          </Typography>
          {/* start date ends here  */}
          {/* end date start here  */}
          <Typography component={"p"} variant="h6">
            End Date:
            <Typography component={"span"} variant="h6">
              {" "}
              {travel?.endDate}
            </Typography>
          </Typography>
          {/* end date ends here  */}
        </Stack>
        <Box>
          <Button color="success">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              href={{
                pathname: "/travelrequest",
                query: { id: travel?.id },
              }}
            >
              Book Trip
            </Link>
          </Button>
        </Box>
      </Stack>
    </Container>
  );
};

export default TravelDetails;

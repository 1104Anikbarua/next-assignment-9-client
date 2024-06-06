"use client";
import { Container, Stack, Typography } from "@mui/material";
import { useGetPopularTravelQuery } from "@/redux/features/trip/tripApi";
import HoverCard from "../../Card/HoverCard";

const PopularTravel = () => {
  // get popular travel api start
  const { data, isLoading } = useGetPopularTravelQuery({});

  const popularTravels = data?.response?.data;
  console.log(popularTravels);

  return (
    <Container>
      <Stack py={10} rowGap={3} justifyContent={"center"}>
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
          Journey Inspirations from{" "}
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
            Travelers!
          </Typography>
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 2.5, sm: 6 }}
          justifyContent={{ xs: "center", sm: "space-between" }}
          width={{ sm: "100%" }}
          mx={"auto"}
          px={{ xs: 6, sm: 6, lg: 6 }}
        >
          {/* Group Container */}
          {popularTravels?.map((travel) => (
            <HoverCard key={travel.id} travel={travel} />
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};

export default PopularTravel;

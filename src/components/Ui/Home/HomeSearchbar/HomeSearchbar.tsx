"use client";
import { Grid, Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import TbTextField from "../../Form/TbTextField";
import WrapperForm from "../../Form/WrapperForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import TbDatePicker from "../../Form/TbDatePicker";
import TbSelect from "../../Form/TbSelect";
import dayjs from "dayjs";
import { useGetTravelsQuery } from "@/redux/features/trip/tripApi";
import MediaControlCard from "../../Card/Card";

interface ISearchTravel {
  destination: string;
  startDate: string;
  endDate: string;
  travelType: string;
}
const HomeSearchbar = () => {
  const [isSearch, SetIsSearch] = useState(false);
  const [searchTravel, setSearchTravel] = useState<ISearchTravel>({
    destination: "",
    startDate: "",
    endDate: "",
    travelType: "",
  });
  const query: Record<string, unknown> = {};
  query["destination"] = searchTravel.destination;
  query["startDate"] = searchTravel.startDate;
  query["endDate"] = searchTravel.endDate;
  query["travelType"] = searchTravel.travelType;
  // get travel rtk api
  const { data, isFetching } = useGetTravelsQuery(isSearch ? query : {});

  // search a trip submit handler
  const handleSubmit: SubmitHandler<FieldValues> = async (values) => {
    values.startDate = dayjs(values.startDate).format("DD-MM-YYYY");
    values.endDate = dayjs(values.endDate).format("DD-MM-YYYY");
    setSearchTravel({
      destination: values.destination,
      startDate: values.startDate,
      endDate: values.endDate,
      travelType: values.travelType,
    });
    SetIsSearch((prev) => !prev);
  };

  // default values
  const defaultValues = {
    destination: "",
    startDate: dayjs(new Date().toDateString()),
    endDate: dayjs(new Date().toDateString()),
    travelType: "",
  };

  const trips = data?.response;
  console.log(trips);
  return (
    <Container>
      <Stack rowGap={2}>
        <Box textAlign={"center"} my={2}>
          <Typography
            my={2}
            component={"h4"}
            variant="h4"
            sx={{
              fontSize: { xs: "30px", sm: "36px", lg: "48px" },
            }}
            fontWeight={700}
          >
            Search your travel{" "}
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
              Destination!
            </Typography>
          </Typography>
          <WrapperForm onSubmit={handleSubmit} defaultValues={defaultValues}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              rowGap={2}
              sx={{ flexDirection: { xs: "column", sm: "row" } }}
            >
              <TbTextField
                name="destination"
                type="text"
                label="Destination"
                fullWidth
              />
              <TbDatePicker name="startDate" fullWidth disablePast={false} />
              <TbDatePicker name="endDate" fullWidth disablePast={false} />
              <TbSelect
                name="travelType"
                size="small"
                label="TravelType"
                fullWidth
              />
              <Button
                color="success"
                type="submit"
                size="large"
                sx={{ width: "100%", maxWidth: { xs: "100%", sm: "100px" } }}
                variant="contained"
              >
                Search
              </Button>
            </Stack>
          </WrapperForm>
        </Box>
        <Grid container sx={{ xs: 2, sm: 2, lg: 3 }} rowGap={2} columnGap={2}>
          {trips?.map((trip, index) => (
            <Grid item key={index}>
              <MediaControlCard key={index} trip={trip} />
            </Grid>
          ))}
        </Grid>
        <Box mx={"auto"}>
          <Button size="small" color="success">
            See More
          </Button>
        </Box>
      </Stack>
    </Container>
  );
};

export default HomeSearchbar;

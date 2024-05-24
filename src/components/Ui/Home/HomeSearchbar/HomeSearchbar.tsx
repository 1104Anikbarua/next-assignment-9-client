"use client";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import TbTextField from "../../Form/TbTextField";
import WrapperForm from "../../Form/WrapperForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import TbDatePicker from "../../Form/TbDatePicker";
import TbSelect from "../../Form/TbSelect";
import dayjs from "dayjs";
const HomeSearchbar = () => {
  // search a trip submit handler
  const handleSubmit: SubmitHandler<FieldValues> = (values) => {
    // values.startDate = dayjs(values.startDate).format("DD-MM-YYYY");
    // values.endDate = dayjs(values.endDate).format("DD-MM-YYYY");
  };
  const defaultValues = {
    destination: "",
    // startDate: dayjs(new Date().toDateString()),
    // endDate: dayjs(new Date().toDateString()),
    // startDate: "",
    // endDate: "",
    travelType: "",
  };

  return (
    <Container>
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
            <TbDatePicker name="startDate" fullWidth />
            <TbDatePicker name="endDate" fullWidth />
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
    </Container>
  );
};

export default HomeSearchbar;

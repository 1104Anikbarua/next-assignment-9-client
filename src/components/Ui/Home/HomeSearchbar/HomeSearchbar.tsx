"use client";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import TbTextField from "../../Form/TbTextField";
import WrapperForm from "../../Form/WrapperForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
const HomeSearchbar = () => {
  const handleSubmit: SubmitHandler<FieldValues> = (values) => {
    console.log(values);
  };

  return (
    <Container>
      <Box textAlign={"center"} my={2}>
        <Typography
          my={1}
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
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ flexDirection: { xs: "column", sm: "row" } }}
        >
          <WrapperForm onSubmit={handleSubmit}>
            <TbTextField name="destination" type="text" />
            <Button
              size="large"
              sx={{ width: "100%", maxWidth: { xs: "100%", sm: "100px" } }}
              variant="contained"
            >
              Search
            </Button>
          </WrapperForm>
        </Stack>
      </Box>
    </Container>
  );
};

export default HomeSearchbar;

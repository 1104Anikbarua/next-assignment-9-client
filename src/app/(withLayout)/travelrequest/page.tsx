"use client";
import TbDatePicker from "@/components/Ui/Form/TbDatePicker";
import TbTextField from "@/components/Ui/Form/TbTextField";
import WrapperForm from "@/components/Ui/Form/WrapperForm";
import {
  useAddBuddyRequestMutation,
  useGetTravelQuery,
} from "@/redux/features/trip/tripApi";
import { useGetMeQuery } from "@/redux/features/user/userApi";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Grid,
  Paper,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const TravelRequest = () => {
  const [isCheck, setIsCheck] = useState(false);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  // travel query api
  const { data: travelData, isLoading: isTravelLoading } = useGetTravelQuery(
    { id },
    { skip: !id }
  );
  const travel = travelData?.response;

  // user api info
  const { data, isLoading } = useGetMeQuery({});
  // add buddy request api
  const [addBuddyRequest, { isSuccess }] = useAddBuddyRequestMutation();
  const response = data?.response!;
  const defaultValues = {
    destination: travel?.destination || "",
    email: response?.email || "",
    name: response?.name || "",
    // startDate: || "",
  };
  console.log(travel);
  // console.log(dayjs(travel?.startDate));
  // submit handler for travel request page
  const handleSubmit: SubmitHandler<FieldValues> = (values) => {};
  return (
    <Container>
      <Stack py={10}>
        {isLoading ? (
          <Stack sx={{ width: "100%", maxWidth: "300px" }} rowGap={2}>
            <Skeleton variant="rounded" height={40} animation="wave" />
            <Skeleton variant="rounded" height={40} animation="wave" />
            <Skeleton variant="rounded" height={40} animation="wave" />
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <Skeleton
                variant="rounded"
                width={82}
                height={40}
                animation="wave"
              />
            </Box>
          </Stack>
        ) : (
          <Paper
            square={false}
            sx={{
              mx: "auto",
              width: "100%",
              textAlign: "center",
              // maxWidth: "400px",
              py: 5,
              px: 2,
            }}
          >
            <WrapperForm onSubmit={handleSubmit} defaultValues={defaultValues}>
              <Stack rowGap={2}>
                <Grid container rowGap={2}>
                  <Grid item xs={12} sm={4} md={4} lg={4}>
                    <TbTextField
                      name="destination"
                      type="text"
                      disabled
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} md={4} lg={4}>
                    <TbTextField name="name" type="text" disabled fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={4} md={4} lg={4}>
                    <TbTextField name="email" type="email" disabled fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      justifyContent={"start"}
                    >
                      <Checkbox
                        checked={isCheck}
                        onChange={() => setIsCheck(!isCheck)}
                      />
                      <Typography>{"I agree terms and conditions"}</Typography>
                    </Stack>
                  </Grid>
                </Grid>
                <Box display={"flex"} justifyContent={"end"}>
                  <Button type="submit" color="success" disabled={!isCheck}>
                    Submit
                  </Button>
                </Box>
              </Stack>
            </WrapperForm>
          </Paper>
        )}
        {/* <Box>
        </Box> */}
      </Stack>
    </Container>
  );
};

export default TravelRequest;

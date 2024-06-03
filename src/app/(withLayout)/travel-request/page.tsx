"use client";
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
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const TravelRequest = () => {
  // checkbox state check uncheck state
  const [isCheck, setIsCheck] = useState(false);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  // travel query api
  const { data: travelData, isLoading: isTravelLoading } = useGetTravelQuery(
    { id },
    { skip: !id }
  );
  // travel data
  const travel = travelData?.response.data;
  // travel query api
  // user api info start here
  const { data, isLoading } = useGetMeQuery({}, { skip: !travel?.id });
  const response = data?.response.data;
  // user api info end here

  // add buddy request api start here
  const [addBuddyRequest, { isSuccess }] = useAddBuddyRequestMutation();
  // add buddy request api ends here

  if (isLoading || isTravelLoading) {
    return (
      <Skeleton variant="rectangular" width="100%">
        <div style={{ paddingTop: "57%" }} />
      </Skeleton>
    );
  }
  // default values
  const defaultValues = {
    destination: travel?.destination || "",
    email: response?.email || "",
    name: response?.name || "",
  };

  // submit handler for travel request page
  const handleSubmit: SubmitHandler<FieldValues> = async (values) => {
    const toastId = toast.loading("Please wait this may take a moment", {
      position: "top-center",
      duration: 2000,
    });
    try {
      const userId = travel?.userId;
      const travelId = travel?.id;

      const res = await addBuddyRequest({ userId, travelId }).unwrap();

      if (res?.response?.success) {
        toast.success(res.response.message, {
          position: "top-center",
          duration: 2000,
          id: toastId,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Stack py={10}>
        <Paper
          square={false}
          sx={{
            mx: "auto",
            width: "100%",
            textAlign: "center",
            py: 5,
            px: 2,
          }}
        >
          {isLoading && isTravelLoading ? (
            <Stack sx={{ width: "100%" }} rowGap={2}>
              <Grid container rowGap={2} spacing={2}>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                  <Skeleton
                    variant="rounded"
                    width="100%"
                    height={40}
                    animation="wave"
                  />
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                  <Skeleton
                    variant="rounded"
                    width="100%"
                    height={40}
                    animation="wave"
                  />
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                  <Skeleton
                    variant="rounded"
                    width="100%"
                    height={40}
                    animation="wave"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                </Grid>
              </Grid>
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
          )}
        </Paper>
      </Stack>
    </Container>
  );
};

export default TravelRequest;

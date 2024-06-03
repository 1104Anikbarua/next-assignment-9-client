"use client";
import TbTextField from "@/components/Ui/Form/TbTextField";
import WrapperForm from "@/components/Ui/Form/WrapperForm";
import {
  useGetMeQuery,
  useSetStausMutation,
} from "@/redux/features/user/userApi";
import {
  Box,
  Button,
  Container,
  Paper,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const ProfilePage = () => {
  //get me api
  const { data, isLoading: isUserLoading } = useGetMeQuery({});
  const user = data?.response?.data;
  // set user status api
  const [setStatus, { isLoading }] = useSetStausMutation();

  console.log(user, isUserLoading);
  // set profile handler
  const handleSetProfile: SubmitHandler<FieldValues> = async (values) => {
    const toastId = toast.loading("please wait this may take a few minutes", {
      duration: 2000,
      position: "top-center",
    });
    values["id"] = user?.id;
    try {
      const res = await setStatus(values).unwrap();
      console.log(res);
      if (res?.response?.success) {
        toast.success(res?.response?.message, {
          duration: 2000,
          position: "top-center",
          id: toastId,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  // defaultValues
  const defaultValues = {
    name: user ? user?.name : "",
    email: user ? user?.email : "",
  };
  return (
    <Container>
      <Box width={"100%"} py={10}>
        <Paper
          square={false}
          sx={{
            mx: "auto",
            width: "100%",
            textAlign: "center",
            maxWidth: "400px",
            py: 5,
            px: 2,
          }}
        >
          <WrapperForm
            onSubmit={handleSetProfile}
            defaultValues={defaultValues}
          >
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
              Update profile
            </Typography>
            {isUserLoading ? (
              <Stack sx={{ width: "100%", maxWidth: "386px" }} rowGap={2}>
                <Skeleton variant="rounded" height={40} animation="wave" />
                <Skeleton variant="rounded" height={40} animation="wave" />
                <Skeleton variant="rounded" height={40} animation="wave" />
              </Stack>
            ) : (
              <Stack spacing={2}>
                <TbTextField
                  name="name"
                  label="Name"
                  placeholder="Please provide your name"
                />
                <TbTextField
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="Please provide your email"
                />
                <Button type="submit" color="success">
                  Update Profile
                </Button>
              </Stack>
            )}
          </WrapperForm>
        </Paper>
      </Box>
    </Container>
  );
};

export default ProfilePage;

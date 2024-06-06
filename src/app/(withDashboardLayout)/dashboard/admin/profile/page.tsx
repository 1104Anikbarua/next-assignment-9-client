"use client";
import TbFileUpload from "@/components/Ui/Form/TbFileUpload";
import TbTextField from "@/components/Ui/Form/TbTextField";
import WrapperForm from "@/components/Ui/Form/WrapperForm";
import SkeletonProfile from "@/components/Ui/Skeleton/SkeletonProfile";
import {
  useGetMeQuery,
  useSetStausMutation,
} from "@/redux/features/user/userApi";
import uploadImage from "@/utlis/uploadImage";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const ProfilePage = () => {
  //get me api
  const { data, isLoading: isUserLoading, isFetching } = useGetMeQuery({});
  const user = data?.response?.data;
  // set user status api
  const [setStatus, { isLoading }] = useSetStausMutation();

  // set profile handler
  const handleSetProfile: SubmitHandler<FieldValues> = async (values) => {
    const toastId = toast.loading("please wait this may take a few minutes", {
      duration: 2000,
      position: "top-center",
    });
    values["id"] = user?.id;
    const files = values?.profilePhoto?.files;
    try {
      if (files?.length) {
        for (let i = 0; i <= files?.length - 1; i++) {
          const image = files[i];
          values["profilePhoto"] = await uploadImage(image);
        }
      }
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

  return (
    <Container>
      <Box width={"100%"} py={10}>
        {isUserLoading || isLoading || isFetching ? (
          <SkeletonProfile />
        ) : (
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
            <WrapperForm onSubmit={handleSetProfile} defaultValues={user}>
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
                <TbFileUpload name="profilePhoto" placeholder="Profile photo" />
                <Button type="submit" color="success">
                  Update Profile
                </Button>
              </Stack>
            </WrapperForm>
          </Paper>
        )}
      </Box>
    </Container>
  );
};

export default ProfilePage;

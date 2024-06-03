"use client";
import TbTextField from "@/components/Ui/Form/TbTextField";
import WrapperForm from "@/components/Ui/Form/WrapperForm";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { SubmitHandler, FieldValues } from "react-hook-form";
import { useSetPasswordMutation } from "@/redux/features/user/userApi";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
//
const ChangePassword = () => {
  //change password api
  const [changePassword, { isLoading: isChangePasswordLoading }] =
    useSetPasswordMutation();
  // change password validation
  const handleChangePassword: SubmitHandler<FieldValues> = async (values) => {
    const toastId = toast.loading("please wait this may take a few minutes", {
      duration: 2000,
      position: "top-center",
    });
    // if (res?.response?.success) {
    //   toast.success(res?.response?.message, {
    //     duration: 2000,
    //     position: "top-center",
    //     id: toastId,
    //   });
    // }
  };
  // zod validation schema
  const changePasswordSchema = z
    .object({
      currentPassword: z
        .string()
        .min(6, { message: "Must be atleast 6 characters long" })
        .max(16, { message: "Must contain 16 or fewer characters long" }),
      newPassword: z
        .string()
        .min(6, { message: "Must be atleast 6 characters long" })
        .max(16, { message: "Must contain 16 or fewer characters long" }),
      confirmPassword: z
        .string()
        .min(6, { message: "Must be atleast 6 characters long" })
        .max(16, { message: "Must contain 16 or fewer characters long" }),
    })
    .refine((password) => password.newPassword === password.confirmPassword, {
      message: "New password and confirm password must match",
    });
  // default values
  const defaultValues = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
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
            onSubmit={handleChangePassword}
            defaultValues={defaultValues}
            resolver={zodResolver(changePasswordSchema)}
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
              Change Password
            </Typography>
            <Stack spacing={2}>
              <TbTextField
                name="currentPassword"
                label="Current password"
                placeholder="Provide your current password"
                type="password"
              />
              <TbTextField
                name="newPassword"
                label="New password"
                type="password"
                placeholder="Type new password"
              />
              <TbTextField
                name="confirmPassword"
                label="Confirm password"
                type="password"
                placeholder="Type confirm password"
              />

              <Button color="success" type="submit">
                Change Password
              </Button>
            </Stack>
          </WrapperForm>
        </Paper>
      </Box>
    </Container>
  );
};

export default ChangePassword;

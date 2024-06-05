"use client";
import { Container, Box, Stack, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import authImage from "@/assets/auth/login-register.jpg";
import TbTextField from "@/components/Ui/Form/TbTextField";
import WrapperForm from "@/components/Ui/Form/WrapperForm";
import { SubmitHandler, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import registerUser from "@/serverActions/register/register";
import { toast } from "sonner";
import Link from "next/link";
import { setUserToken } from "@/services/auth.services";
import { useRouter } from "next/navigation";
import { baseApi } from "@/redux/baseApi/baseApi";
import { useAppDispatch } from "@/redux/hooks/hooks";
//
const SignUp = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  // create user handler
  const handleCreateUser: SubmitHandler<FieldValues> = async (values) => {
    //
    const { confirmPassword, ...remaining } = values;
    const toastId = toast.loading("This may take a moment", {
      duration: 2000,
      position: "top-center",
    });
    try {
      const res = await registerUser(remaining);
      console.log(res);
      if (res.success) {
        toast.success(res.message, {
          duration: 2000,
          position: "top-center",
          id: toastId,
        });
        console.log("---------->", res.data.accessToken);
        dispatch(baseApi.util.invalidateTags(["users", "user"]));
        //set token in local storage
        setUserToken(res.data.accessToken);
        //redirect to homepage
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  // create user default values
  const defaultValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  // create user validation schema
  const createUserSchema = z
    .object({
      name: z.string().min(1, { message: "Name is required" }),
      email: z
        .string({ required_error: "Email is required" })
        .email({ message: "Please provide a valid email" }),
      password: z
        .string()
        .min(6, { message: "Password must be 6 six or more characters long" }),
      confirmPassword: z.string().min(6, {
        message: "Confirm Password must be 6 six or more characters long",
      }),
    })
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
      message: "Please check your password",
      path: ["confirmPassword"],
    });
  return (
    <Container>
      <Stack
        height={"100vh"}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"100%"}
        bgcolor={"white"}
        boxShadow={1}
        sx={{ columnGap: { xs: "0px", sm: "16px" } }}
      >
        <Box
          flex={1}
          sx={{
            width: "100%",
            height: "100%",
            display: { xs: "none", sm: "block" },
          }}
          position={"relative"}
        >
          <Image
            src={authImage}
            layout="fill"
            objectFit="cover"
            quality={100}
            alt="Hero Background Image"
            // style={{ zIndex: 0, position: "absolute", borderRadius: "5px" }}
          />
        </Box>
        <Box
          flex={1}
          sx={{
            display: { xs: "flex", sm: "initial" },
            flexDirection: { xs: "column", sm: "initial" },
            alignItems: { xs: "center", sm: "initial" },
          }}
        >
          <Typography
            component={"h3"}
            variant="h3"
            sx={{
              fontSize: { xs: "24px" },
              fontWeight: { xs: 600, sm: 800 },
              opacity: "0.7",
              margin: { xs: "10px auto", sm: "10px 0px 10px 100px" },
              maxWidth: { xs: "100%" },
            }}
          >
            Sign Up
          </Typography>
          <WrapperForm
            onSubmit={handleCreateUser}
            resolver={zodResolver(createUserSchema)}
            defaultValues={defaultValues}
          >
            <Stack rowGap={2} sx={{ width: "100%", maxWidth: "300px" }}>
              <TbTextField name="name" type="text" label="Name" />
              <TbTextField name="email" type="email" label="Email" />
              <TbTextField name="password" type="password" label="Password" />
              <TbTextField
                name="confirmPassword"
                type="password"
                label="Confirm Password"
              />
              <Button type="submit" size="small" color="success">
                Submit
              </Button>
              <Typography component={"p"} variant="body2">
                Already have an account? Please{" "}
                <Link href={"/login"} style={{ textDecoration: "none" }}>
                  Login
                </Link>
              </Typography>
            </Stack>
          </WrapperForm>
        </Box>
      </Stack>
    </Container>
  );
};
export default SignUp;

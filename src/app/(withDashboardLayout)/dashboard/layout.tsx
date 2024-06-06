"use client";
import DashboardLayout from "@/components/Dashboard/DashboardLayout/DashboardLayout";
// import { isUserLoggedIn } from "@/services/auth.services";
import React from "react";
// import { useRouter } from "next/navigation";
const DashboardLayoutPage = ({ children }: { children: React.ReactNode }) => {
  // const router = useRouter();

  // const isLoggedInUser = isUserLoggedIn();
  // {
  //   !isLoggedInUser && router.push("/login");
  // }

  return <DashboardLayout>{children}</DashboardLayout>;
};

export default DashboardLayoutPage;

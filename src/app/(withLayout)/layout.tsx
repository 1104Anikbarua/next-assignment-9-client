import ResponsiveAppBar from "@/components/Shared/Navbar/Navbar";
import Navbar from "@/components/Shared/Navbar/Navbar";
import React from "react";

const CommonLayoutHome = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main style={{ height: "84vh" }}>{children}</main>
      <h1>Footer</h1>
    </>
  );
};

export default CommonLayoutHome;

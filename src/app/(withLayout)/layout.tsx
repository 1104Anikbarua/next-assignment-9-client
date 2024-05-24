import Navbar from "@/components/Shared/Navbar/Navbar";
import React from "react";

const CommonLayoutHome = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main style={{ height: "100vh" }}>{children}</main>
      <h1>Footer</h1>
    </>
  );
};

export default CommonLayoutHome;

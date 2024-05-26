import Navbar from "@/components/Shared/Navbar/Navbar";
import React from "react";
import Footer from "@/components/Shared/Footer/Footer";
const CommonLayoutHome = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default CommonLayoutHome;

import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import bookDotCom from "@/assets/partners/booking-logo.webp";
import airalo from "@/assets/partners/airalo.png";
import holafly from "@/assets/partners/Holafly-logo.svg.png";
import lucas from "@/assets/partners/lucasfilm.ef28c5a6.png";

const logos = [bookDotCom, airalo, holafly, lucas];
const Partners = () => {
  return (
    <Container>
      <Typography
        component={"h2"}
        variant="h2"
        textAlign={"center"}
        sx={{
          opacity: "0.7",
          fontSize: { xs: "30px", sm: "36px", lg: "48px" },
        }}
        fontWeight={700}
      >
        Our Trusted{" "}
        <Typography
          textAlign={"center"}
          bgcolor={"rgb(220 255 160 / 100%)"}
          component={"span"}
          variant="h4"
          sx={{ fontSize: { xs: "30px", sm: "36px", lg: "48px" } }}
          fontWeight={700}
          p={1}
          borderRadius={"4px"}
        >
          Partners!
        </Typography>
      </Typography>
      <Box sx={{ py: { xs: 5, sm: 10 } }}>
        <Marquee style={{ padding: "0px 32px", width: "100%" }}>
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              width={200}
              height={60}
              alt="partners image"
              style={{ margin: "40px" }}
            />
          ))}
        </Marquee>
      </Box>
    </Container>
  );
};

export default Partners;

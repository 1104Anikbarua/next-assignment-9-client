import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import facebookLogo from "@/assets/social/facebook.png";
import instagramLogo from "@/assets/social/instagram.png";
import twitterLogo from "@/assets/social/twitter.png";
import linkedinLogo from "@/assets/social/linkedin.png";
import Link from "next/link";
const Footer = () => {
  return (
    <Container>
      <Box sx={{ backgroundColor: "#16161d", py: 3 }}>
        {/* services link start here */}
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={2}
        >
          <Typography color={"white"}>Consultation</Typography>
          <Typography color={"white"}>Health Plans</Typography>
          <Typography color={"white"}>Medicine</Typography>
          <Typography color={"white"}>Diagonstics</Typography>
          <Typography color={"white"}>NGOs</Typography>
        </Stack>
        {/* services link ends here */}
        {/* social link start here */}
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={2}
          sx={{ py: 2 }}
        >
          <Image
            src={facebookLogo}
            width={30}
            height={30}
            alt="facebook logo"
          />
          <Image
            src={instagramLogo}
            width={30}
            height={30}
            alt="instagram logo"
          />
          <Image
            src={twitterLogo}
            width={30}
            height={30}
            alt="twitterLogo logo"
          />
          <Image
            src={linkedinLogo}
            width={30}
            height={30}
            alt="linkedin logo"
          />
          {/* social link end here */}
        </Stack>
        {/* Divider start here */}
        <Divider sx={{ border: "2px dashed #303f9f" }} />
        {/* <div className="border-[1px] border-white border-dotted"></div> */}
        {/* Divider ends here */}
        <Stack
          sx={{
            py: 2,
          }}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography
            color={"white"}
            sx={{
              flex: 1,
              textAlign: "center",
            }}
          >
            &copy; Amigo {new Date().getFullYear()} | All rights reserved
          </Typography>
          <Typography
            color={"white"}
            component={Link}
            href={"/"}
            variant="h5"
            sx={{
              flex: 1,
              textAlign: "center",
            }}
          >
            Tele
            <Box component={"span"} color={"primary.main"} ml={0.5}>
              M
            </Box>
            edicine
          </Typography>
          <Stack
            sx={{
              flex: 1,
              textAlign: "center",
            }}
          >
            <Typography color={"white"} component={Link} href={"/"}>
              Privacy Policy
            </Typography>
            <Typography color={"white"} component={Link} href={"/"}>
              Terms &amp; Conditions
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};

export default Footer;

"use client";
import {
  Container,
  Box,
  Typography,
  Grid,
  Link as MUILink,
  Stack,
  Button,
} from "@mui/material";
import { styled } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import founderImg from "@/assets/user/user1.png";
import ctoImg from "@/assets/user/user2.png";
import seniorImg from "@/assets/user/user3.png";
import developerImg from "@/assets/user/user4.png";
import Image from "next/image";
import Link from "next/link";
const teamMembers = [
  {
    name: "Mohit sharma",
    role: "Founder & CEO",
    image: founderImg,
  },
  {
    name: "Karthik mathur",
    role: "CTO",
    image: ctoImg,
  },
  {
    name: "Ayush",
    role: "Developer",
    image: developerImg,
  },
  {
    name: "Vinit",
    role: "Developer",
    image: seniorImg,
  },
];

const ContactInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginTop: theme.spacing(2),
}));

const About = () => {
  return (
    <Container>
      <Box sx={{ my: 5 }}>
        <Button color="success" LinkComponent={Link} href="/">
          Home
        </Button>
        <Typography
          sx={{
            opacity: "0.7",
            fontSize: { xs: "36px", sm: "48px", lg: "72px" },
          }}
          fontWeight={900}
          variant="h3"
          align="center"
          gutterBottom
        >
          About Us
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Welcome to the to the website https://amigo.in/(the “Website”) run by
          Amigo Inc., domiciled in Street 146A #58C-56, Chattogram, Bangladesh
          (“Amigo”). The purpose of this Website is to assist in the travel
          planning of its users.
        </Typography>
      </Box>
      <Box sx={{ my: 5 }}>
        <Typography variant="h4" gutterBottom textAlign={"center"}>
          Our Team
        </Typography>
        <Grid container justifyContent={{ xs: "center", sm: "flex-start" }}>
          {teamMembers.map((member, index) => (
            <Grid
              item
              xs={12}
              sm={4}
              md={3}
              lg={3}
              key={index}
              display="flex"
              justifyContent="center"
            >
              <Box
                sx={{
                  textAlign: "center",
                  backgroundColor: "white",
                  boxShadow: 1,
                  borderRadius: "5px",
                  width: "100%",
                  maxWidth: { xs: "100%", sm: "fit-content" },
                }}
              >
                <Image
                  src={member?.image}
                  width={250}
                  height={250}
                  alt="team image"
                  style={{ borderRadius: "4px" }}
                />
                <Typography variant="h6" sx={{ mt: 2 }}>
                  {member.name}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {member.role}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Stack alignItems={"center"} justifyContent={"center"} sx={{ my: 5 }}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <ContactInfo>
          <EmailIcon />
          <Typography variant="body1" sx={{ ml: 1 }}>
            <MUILink href="mailto:info@example.com">info@amigo.com</MUILink>
          </Typography>
        </ContactInfo>
        <ContactInfo>
          <PhoneIcon />
          <Typography variant="body1" sx={{ ml: 1 }}>
            01717112233
          </Typography>
        </ContactInfo>
        <Box sx={{ mt: 3 }}>
          <MUILink
            href="https://www.facebook.com"
            target="_blank"
            sx={{ mr: 2 }}
          >
            <FacebookIcon />
          </MUILink>
          <MUILink
            href="https://www.twitter.com"
            target="_blank"
            sx={{ mr: 2 }}
          >
            <TwitterIcon />
          </MUILink>
          <MUILink href="https://www.linkedin.com" target="_blank">
            <LinkedInIcon />
          </MUILink>
        </Box>
      </Stack>
    </Container>
  );
};

export default About;

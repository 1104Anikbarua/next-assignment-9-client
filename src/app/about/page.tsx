"use client";
import { Container, Box, Typography, Grid, Avatar, Link } from "@mui/material";
import { styled } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    image: "/images/john.jpg", // Replace with your image path
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: "/images/jane.jpg", // Replace with your image path
  },
  // Add more team members here
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
        <Typography variant="h3" align="center" gutterBottom>
          About Us
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Our mission is to [insert mission statement here]. We strive to
          [insert goals/purpose here].
        </Typography>
      </Box>
      <Box sx={{ my: 5 }}>
        <Typography variant="h4" gutterBottom>
          Our Team
        </Typography>
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box sx={{ textAlign: "center" }}>
                <Avatar
                  alt={member.name}
                  src={member.image}
                  sx={{ width: 120, height: 120, margin: "0 auto" }}
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
      <Box sx={{ my: 5 }}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <ContactInfo>
          <EmailIcon />
          <Typography variant="body1" sx={{ ml: 1 }}>
            <Link href="mailto:info@example.com">info@example.com</Link>
          </Typography>
        </ContactInfo>
        <ContactInfo>
          <PhoneIcon />
          <Typography variant="body1" sx={{ ml: 1 }}>
            (123) 456-7890
          </Typography>
        </ContactInfo>
        <Box sx={{ mt: 3 }}>
          <Link href="https://www.facebook.com" target="_blank" sx={{ mr: 2 }}>
            <FacebookIcon />
          </Link>
          <Link href="https://www.twitter.com" target="_blank" sx={{ mr: 2 }}>
            <TwitterIcon />
          </Link>
          <Link href="https://www.linkedin.com" target="_blank">
            <LinkedInIcon />
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default About;

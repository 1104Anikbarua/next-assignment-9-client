import React from "react";
import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
const PrivacyPage = () => {
  return (
    <Container>
      <Stack my={5} spacing={2}>
        <Box>
          <Button color="success" LinkComponent={Link} href="/">
            Home
          </Button>
        </Box>
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
          Amigo - Privacy Policy
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Amigo, Inc., domiciled in Street 146A #58C-56, Chattogram, Bangladesh
          (the “Company”) takes the users (“Users”) privacy very seriously. The
          purpose of this “Privacy Policy” is to explain Users how Amigo may
          collect, retain, process, share and transfer Users personal
          information in order to provide its Services through the website:
          https://amigo.com.
        </Typography>
        <Typography>
          For the purposes of this Privacy Policy, Users shall be natural
          (human) persons that request Amigo&apos;s services.
        </Typography>
        <Typography>
          By providing Amigo with their personal data through the Website, Users
          expressly consent the fact that Amigo may process such data in
          accordance with the terms of this Privacy Policy and for the purposes
          set forth herein.
        </Typography>
        <Typography>
          Users must read this Privacy Policy before registering or using the
          Services in the Website. By clicking on the “register” button, Users
          state that they have read this Privacy Policy and expressly agree to
          it. In no event Amigo will collect Personal Information from Users
          without consent and its not voluntarily given by them.
        </Typography>
        <Typography>
          Amigo reserves the right, at Amigo&apos;s discretion, to change this
          Privacy Policy from time to time to reflect changes to Amigo&apos;s
          business or services, or applicable laws. For that purpose, Amigo will
          provide Users with thirty (30) days prior notice for any modification
          on the Privacy Policy page of Amigo&apos;s Website. Amigo also may
          notify Users about the modifications using a contact information,
          email or other means of contact if provided by Users. The revised
          Privacy Policy will be effective as of the publication date. Users may
          contact Amigo if they have questions about Amigo&apos;s privacy
          practices that are not addressed in this Privacy Policy.
        </Typography>
        <Typography>
          Users agree to provide true and accurate data. Furthermore, they shall
          be solely responsible for any loss or damage that may be suffered by
          Amigo or any of its subsidiaries or third parties as a result of the
          information provided being false, inaccurate, out of date or not
          genuine. Amigo respects and is in a constantly effort to be in
          compliance with the European General Data Protection Regulation
          2016/679 (“GDPR”) to protect, warrant and preserve the rights to Users
          to may eventually apply to or be served.
        </Typography>
        <Typography>
          Amigo respects and is in a constantly effort to be in compliance with
          the European General Data Protection Regulation 2016/679 (“GDPR”) to
          protect, warrant and preserve the rights to Users to may eventually
          apply to or be served.
        </Typography>

        <List>
          <ListItem disablePadding>
            <ListItemText primary="1. Who is the Controller in relation to the Personal Information Provided by Users?" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="All Personal Information provided or collected through the Website will be processed by Amigo, whose contact information can be found below, as file controller." />
          </ListItem>
          <Typography>Identity: Amigo, Inc</Typography>
          <Typography>
            Postal address: Street 146A #58C-56, Chattogram, Bangladesh
          </Typography>
          <Typography>Telephone no.: +88 01700000000</Typography>
          <Typography>Contact Form: hello@amigo.com</Typography>
        </List>
      </Stack>
    </Container>
  );
};

export default PrivacyPage;

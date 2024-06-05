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
import React from "react";

const TermsPage = () => {
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
          Amigo - Terms & Conditions
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Welcome to the to the website https://amigo.in/(the “Website”) run by
          Amigo Inc., domiciled in Street 146A #58C-56, Chattogram, Bangladesh
          (“Amigo”). The purpose of this Website is to assist in the travel
          planning of its users.
        </Typography>
        <Typography>
          These terms and conditions apply exclusively to the relationship
          between Amigo and its Users.
        </Typography>
        <Typography>
          BY COMPLETING THE REGISTRATION FORM (THE “REGISTRATION FORM”) WHICH
          EXPRESSES AN INTENT TO USE THE SERVICE (AS DEFINED BELOW), USERS AGREE
          TO HAVE READ AND UNDERSTOOD THE TERMS SET FORTH IN THIS TERMS OF USE,
          INCLUDING THE TERMS OF THE PRIVACY POLICY AS MAY BE AMENDED FROM TIME
          TO TIME (COLLECTIVELY, THE AND AND USERS AGREE TO BE BOUND BY THEM AND
          TO COMPLY WITH ALL APPLICABLE LAWS AND REGULATIONS REGARDING THE USE
          OF THIS WEBSITE AND/OR SERVICE. THESE TERMS APPLY TO USERS’ ACTIVITY
          AND DEFINE USERS’ RIGHTS AND OBLIGATIONS UNDER CONTRACT. IF USERS DOES
          NOT AGREE TO THESE TERMS, PLEASE DO NOT USE THIS WEBSITE AND/OR ANY OF
          THE SERVICES PROVIDED BY Amigo.
        </Typography>
        <Typography>
          Amigo shall never be understood as a tour operator, a travel agency,
          intermediary or a touristic service provider and is not subject to the
          application of any governing organized travel contracts and travel
          agency contracts. Users shall refrain from all acts/ communications
          that state otherwise, or could give such impression, towards both
          Users and third parties. The Services are not aimed nor directed to
          underage children.
        </Typography>
        <Typography>1. THE SERVICES</Typography>
        <Typography>
          1.1. Amigo offers a Website through which Users can optimize their
          travel arrangements free of charge. In particular, Trip Planner AI
          will collaborate with Users in order to generate a travel plan to a
          destination chosen by the User, tailored by the User&apos;s needs the
          Services. First, the User shall provide Amigo with the dates of its
          travel and its destination. In this regard, Amigo shall assist the
          User with the scheduling of:
        </Typography>
        <List>
          <ListItem disablePadding>
            <ListItemText
              primary="Activities: Users will have the possibility to visualize different
        activities available at its destination. Users shall select a minimum
        number of activities per day and Amigo shall collaborate in
        the organization and itineraries of the trip based on the User's
        tastes and comforts. For this purpose, Amigo shall take into
        consideration the User's location and the budget allocated by the
        User for the designated trip; "
            />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText
              primary="Accommodations: User may provide the address of his or her accommodation
        so that the User's activities can be organized by virtue of that
        location. "
            />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText
              primary="Meals: User may also organize his/her/its meals according to his/her/its
        tastes and budget, Amigo may suggest different restaurants
        based on the User's preferences. The User shall inform of any
        dietary restrictions. It should be noted that Amigo shall not
        be responsible for the consequences that the User may suffer as a result
        of the meals eaten by the User subsequent to the planning of his/her/its
        trip."
            />
          </ListItem>
        </List>
      </Stack>
    </Container>
  );
};

export default TermsPage;

import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import React, { useState, useEffect } from "react";
import { Box, Stack, Toolbar, Typography } from "@mui/material";
import { IUser, IUserRole } from "@/types/global";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo/v (2).png";
import { getUserToken } from "@/services/auth.services";
import { generateMenutItems } from "@/utlis/getMenuItems";
import SidebarRoute from "../SidebarRoute/SidebarRoute";

const DashboardSidebar = () => {
  const [userRole, setUserRole] = useState("");
  // decode user info and take role

  // call the generate menu items function to get the route
  // store user role in state inside useeffect to handle hydration error
  useEffect(() => {
    const { role } = getUserToken() as IUser;
    setUserRole(role);
  }, []);

  const items = generateMenutItems(userRole as IUserRole);
  return (
    <Box>
      {/* dashboard logo and name start here */}
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        py={1}
        component={Link}
        href={"/"}
      >
        <Image src={logo} width={50} height={50} alt="amigo site logo" />
        <Typography ml={1}>Amigo</Typography>
      </Stack>
      {/* dashboard logo and name ends here */}
      {/* dashboard sidebar menu options start here  */}
      <Divider />
      <List>
        {items?.map((item, index) => (
          <SidebarRoute item={item} key={index} index={index} />
        ))}
      </List>
      {/* dashboard sidebar menu options ends here  */}
    </Box>
  );
};

export default DashboardSidebar;
{
  /* <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */
}
{
  /* <Stack>
          <Typography>Filter By Travel Destination</Typography>
          {destinations?.map((destination) => (
            <Stack
              key={destination?.value}
              direction={"row"}
              alignItems={"center"}
              justifyContent={"start"}
            >
              <Checkbox
                checked={filter.destination === destination?.value}
                onChange={() =>
                  setFilter({
                    destination: destination?.value ? destination?.value : "",
                  })
                }
              ></Checkbox>
              <Typography>{destination?.value}</Typography>
            </Stack>
          ))}
        </Stack>
        <Stack>
          <Typography>Filter By Travel Type</Typography>
          {travelTypes?.map((travelType) => (
            <Stack
              key={travelType?.value}
              direction={"row"}
              alignItems={"center"}
              justifyContent={"start"}
            >
              <Checkbox
                checked={filter.travelType === travelType?.value}
                onChange={() =>
                  setFilter({
                    travelType: travelType?.value ? travelType?.value : "",
                  })
                }
              ></Checkbox>
              <Typography>{travelType?.value}</Typography>
            </Stack>
          ))}
        </Stack>
        <Stack>
          <Typography>Filter By Start Date</Typography>
          {startDates?.map((date) => (
            <Stack
              key={date?.value}
              direction={"row"}
              alignItems={"center"}
              justifyContent={"start"}
            >
              <Checkbox
                checked={filter.startDate === date?.value}
                onChange={() =>
                  setFilter({
                    startDate: date?.value ? date?.value : "",
                  })
                }
              ></Checkbox>
              <Typography>{date?.value}</Typography>
            </Stack>
          ))}
        </Stack>
        <Stack>
          <Typography>Filter By End Date</Typography>
          {endDates?.map((date) => (
            <Stack
              key={date?.value}
              direction={"row"}
              alignItems={"center"}
              justifyContent={"start"}
            >
              <Checkbox
                checked={filter.endDate === date?.value}
                onChange={() =>
                  setFilter({
                    endDate: date?.value ? date?.value : "",
                  })
                }
              ></Checkbox>
              <Typography>{date?.value}</Typography>
            </Stack>
          ))}
        </Stack> */
}

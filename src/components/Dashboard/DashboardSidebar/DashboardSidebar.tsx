import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import React, { useState, useEffect } from "react";
import { Toolbar } from "@mui/material";
import { IUser } from "@/types/global";

export const USER_ROLE = {
  SUPER_ADMIN: "super_admin",
  ADMIN: "admin",
  BUDDY: "buddy",
};
export type IUserRole = keyof typeof USER_ROLE;
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
    <div>
      <Toolbar />
      <Divider />
      <List>
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
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default DashboardSidebar;

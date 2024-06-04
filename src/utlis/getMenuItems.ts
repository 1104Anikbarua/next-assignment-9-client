import { USER_ROLE } from "@/constant/constant";
import { IMenuItems, IUserRole } from "@/types/global";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import KeyIcon from "@mui/icons-material/Key";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import AllInboxIcon from "@mui/icons-material/AllInbox";
//
export const generateMenutItems = (role: IUserRole) => {
  // store menuitems based on role
  const menuItems: IMenuItems[] = [];

  switch (role) {
    // generate menuitems from super admin
    case USER_ROLE.SUPER_ADMIN:
      menuItems.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Manage Users",
          path: `${role}/users`,
          icon: GroupIcon,
        },
        {
          title: "Manage Travel",
          path: `${role}/travels`,
          icon: AllInclusiveIcon,
        },
        {
          title: "Profile",
          path: `${role}/profile`,
          icon: PersonPinIcon,
        },
        {
          title: "Change Password",
          path: `change-password`,
          icon: KeyIcon,
        }
      );
      break;
    case USER_ROLE.ADMIN:
      menuItems.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Manage User",
          path: `${role}/users`,
          icon: GroupIcon,
        },
        {
          title: "Manage Travel",
          path: `${role}/travels`,
          icon: AllInclusiveIcon,
        },
        {
          title: "Profile",
          path: `${role}/profile`,
          icon: PersonPinIcon,
        },
        {
          title: "Change Password",
          path: `change-password`,
          icon: KeyIcon,
        }
      );
      break;
    case USER_ROLE.BUDDY:
      menuItems.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Post Travel",
          path: `${role}/travel`,
          icon: EditCalendarIcon,
        },
        {
          title: "Travels Request",
          path: `${role}/travel-request`,
          icon: NewspaperIcon,
        },
        {
          title: "Posted Travels",
          path: `${role}/travels`,
          icon: AllInboxIcon,
        },
        {
          title: "Profile",
          path: `${role}/profile`,
          icon: PersonPinIcon,
        },
        {
          title: "Change Password",
          path: `change-password`,
          icon: KeyIcon,
        }
      );
      break;
  }
  return [...menuItems];
};

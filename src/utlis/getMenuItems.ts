import { USER_ROLE } from "@/constant/constant";
import { IMenuItems, IUserRole } from "@/types/global";
import TryIcon from "@mui/icons-material/Try";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import ReviewsIcon from "@mui/icons-material/Reviews";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import PaymentIcon from "@mui/icons-material/Payment";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import ScheduleIcon from "@mui/icons-material/Schedule";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import KeyIcon from "@mui/icons-material/Key";
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
          path: `${role}/manage-users`,
          icon: GroupIcon,
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
          title: "Doctors",
          path: `${role}/doctors`,
          icon: MedicalInformationIcon,
        },
        {
          title: "Specialities",
          path: `${role}/specialities`,
          icon: TryIcon,
        },
        {
          title: "Appointments",
          path: `${role}/appointments`,
          icon: EditCalendarIcon,
        },
        {
          title: "Schedules",
          path: `${role}/schedules`,
          icon: ScheduleIcon,
        },
        {
          title: "Reviews",
          path: `${role}/reviews`,
          icon: ReviewsIcon,
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
          title: "Travels",
          path: `/travels`,
          icon: NewspaperIcon,
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

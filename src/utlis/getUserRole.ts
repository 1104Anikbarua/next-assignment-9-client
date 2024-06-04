import { getUserToken } from "@/services/auth.services";
import { IUser } from "@/types/global";
import { useEffect, useState } from "react";

export const GetRole = () => {
  const [userRole, setUserRole] = useState("");
  // decode user info and take role

  // call the generate menu items function to get the route
  // store user role in state inside useeffect to handle hydration error
  useEffect(() => {
    const { role } = getUserToken() as IUser;
    setUserRole(role);
  }, []);
  return userRole;
};

import { ThemeProvider } from "@emotion/react";
import React from "react";
import { theme } from "../Theme/Theme";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Provider;

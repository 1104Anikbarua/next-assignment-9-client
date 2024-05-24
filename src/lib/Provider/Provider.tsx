"use client";
import { ThemeProvider } from "@emotion/react";
import React from "react";
import { theme } from "../Theme/Theme";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/redux/store";
const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>;
    </ReduxProvider>
  );
};

export default Provider;

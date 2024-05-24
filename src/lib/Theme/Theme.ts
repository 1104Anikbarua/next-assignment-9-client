import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  // palette: {
  //   primary: {
  //     light: "",
  //     main: "",
  //     dark: "",
  //   },
  //   secondary: {},
  //   error: {},
  //   warning: {},
  //   success: {},
  // },
  components: {
    // MuiCssBaseline: {
    //   styleOverrides: `
    //     h1 {
    //       color: grey;
    //     }
    //   `,
    // },
    // set container max width 1200
    MuiContainer: {
      defaultProps: { maxWidth: "lg" },
    },
    // set button contained by default
    MuiButton: {
      defaultProps: { variant: "contained" },
    },
  },
});

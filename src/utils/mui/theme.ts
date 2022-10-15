import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  // TODO:テーマ設定する
  typography: {
    button: {
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: "#F57C00",
    },
    secondary: {
      main: "#03A9F4",
    },
    text: {
      primary: "#000000",
      disabled: "gray",
    },
    background: {
      default: "#FFFFFF",
      dark: "#F2F2F2",
    },
    twitter: { main: "#1DA1F2", contrastText: "white" },
    wallet: { main: "#70EFDE", contrastText: "black" },
  },
});

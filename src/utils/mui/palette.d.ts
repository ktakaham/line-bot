// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type * as PaletteColorOptions from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface PaletteOptions {
    twitter?: PaletteColorOptions;
    wallet?: PaletteColorOptions;
  }
  interface TypeBackground {
    dark: string;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    twitter: true;
    wallet: true;
  }
}

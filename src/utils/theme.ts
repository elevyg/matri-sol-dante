import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: { main: "#243140" },
  },
  typography: {
    fontFamily: [
      "Neutra Text Alt",
      "Neutra Text Light",
      "Neutra Text TF",
      "Neutra Text",
    ].join(","),
  },
});

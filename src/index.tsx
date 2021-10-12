import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material";
import DateAdapter from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";


import { QueryClient, QueryClientProvider } from "react-query";
import esLocale from "date-fns/locale/es";

import "./index.css";
import { theme } from "./utils/theme";
import AppRouter from "./router/AppRouter";


const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <LocalizationProvider dateAdapter={DateAdapter} locale={esLocale}>
          <AppRouter />
        </LocalizationProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

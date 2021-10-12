import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material";
import DateAdapter from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { QueryClient, QueryClientProvider } from "react-query";
import esLocale from "date-fns/locale/es";

import "./index.css";
import { theme } from "./utils/theme";
import AppRouter from "./router/AppRouter";

const firebaseConfig = {
  apiKey: "AIzaSyDyADnlQyC06ZRZsq1pYa8n3J8oUKnVOwU",
  authDomain: "matri-de483.firebaseapp.com",
  projectId: "matri-de483",
  storageBucket: "matri-de483.appspot.com",
  messagingSenderId: "205407944996",
  appId: "1:205407944996:web:45a1f679b8b8e3b70b73b1",
  measurementId: "G-NLGG0RMLDY",
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const db = getFirestore();

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

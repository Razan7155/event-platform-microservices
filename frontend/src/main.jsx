import React from "react";

import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

import {
  ThemeProvider,
  CssBaseline
} from "@mui/material";

import theme from "./theme";

import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <ThemeProvider theme={theme}>

      <CssBaseline />

      <Toaster
        position="top-right"
      />

      <App />

    </ThemeProvider>

  </React.StrictMode>

);
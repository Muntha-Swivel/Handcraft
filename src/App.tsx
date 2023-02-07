import React from "react";
import { Container, Typography } from "@mui/material";
import { UserNavBar } from "./components/molecules/UserNavBar/UserNavBar";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { theme } from "./theme";
import { HeroImage, SearchBox } from "./components/atoms";
import CssBaseline from "@mui/material/CssBaseline";
import { ACard, LoginForm } from "./components/molecules";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { Router } from "./routes";
import Cookies from "js-cookie";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <UserNavBar />
          <CssBaseline />
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

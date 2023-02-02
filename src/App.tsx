import React from "react";
import { Container, Typography } from "@mui/material";
import { UserNavBar } from "./components/molecules/UserNavBar/UserNavBar";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { theme } from "./theme";
import { HeroImage } from "./components/atoms";
import CssBaseline from "@mui/material/CssBaseline";
import { ACard, LoginForm } from "./components/molecules";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserNavBar />
      <CssBaseline />
      <HeroImage />

      <main>
        <div>
          <Container maxWidth="xs" sx={{ mt: 5, mb: 5 }}>
            <LoginForm />
          </Container>
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;

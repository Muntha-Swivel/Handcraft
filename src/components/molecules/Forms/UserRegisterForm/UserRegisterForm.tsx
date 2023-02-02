import React from "react";
import { Box, TextField, Button, Typography, Grid } from "@mui/material";
import { PrimaryButton } from "../../../atoms";
const UserRegisterForm = () => {
  return (
    <Box
      component="form"
      noValidate
      sx={{ mt: 1, boxShadow: 1, padding: 2, borderRadius: 2 }}
    >
      <Typography variant="h4" color="primary" sx={{ textAlign: "center" }}>
        Register
      </Typography>
      <TextField
        margin="normal"
        variant="outlined"
        color="secondary"
        type="text"
        required
        fullWidth
        id="firstname"
        label="First Name"
        name="firstname"
        autoComplete="firstname"
        autoFocus
      />
      <TextField
        margin="normal"
        variant="outlined"
        color="secondary"
        type="text"
        required
        fullWidth
        id="lastname"
        label="Last Name"
        name="lastname"
        autoComplete="lastname"
      />
      <TextField
        margin="normal"
        variant="outlined"
        color="secondary"
        type="text"
        required
        fullWidth
        id="email"
        label="Email"
        name="email"
        autoComplete="email"
      />
      <TextField
        margin="normal"
        variant="outlined"
        color="secondary"
        type="password"
        required
        fullWidth
        id="password"
        label="Password"
        name="password"
        autoComplete="password"
      />
      <Grid container spacing={2} sx={{ mt: 0.5 }}>
        <Grid item xs={12}>
          <PrimaryButton
            text="LOGIN"
            onClick={() => console.log("hello")}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Button>Crete an account</Button>
            </Grid>
            <Grid item>
              <Button>FORGOT password?</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export { UserRegisterForm };

import React from "react";
import { TextField, Button, Grid } from "@mui/material";
import { PrimaryButton, FormBody } from "../../../atoms";
import { useNavigate } from "react-router-dom";
import { loginService } from "../../../../api/services/auth.service";

const LoginForm = () => {
  const navigate = useNavigate();
  const data = {
    email: "muntha@gmail.com",
    password: "dude123",
  };
  return (
    <FormBody title="LOGIN">
      <>
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
          autoFocus
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
              onClick={() => loginService(data)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Button onClick={() => navigate("/userRegister")}>
                  Crete an account
                </Button>
              </Grid>
              <Grid item>
                <Button>FORGOT password?</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    </FormBody>
  );
};

export { LoginForm };

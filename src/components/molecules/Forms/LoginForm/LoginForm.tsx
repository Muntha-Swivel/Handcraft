import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import { PrimaryButton, FormBody } from "../../../atoms";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../../features/auth/auth.slice";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { useFormik } from "formik";
import { LoginFormSchema } from "../../../../Schema";
import { FeedBackMessage } from "../../../atoms";
const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { user, loading, loginErrorMessage } = useAppSelector(
    (state) => state.auth
  );

  const [refreshErrorMessage, setRefreshErrorMessage] = useState(false);

  const login = async (user: any) => {
    setRefreshErrorMessage(!refreshErrorMessage);
    try {
      await dispatch(
        loginUser({ email: user.email, password: user.password })
      ).unwrap();
      navigate("/");
    } catch (err: any) {
      console.log("hello");
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginFormSchema,
    onSubmit: (values) => {
      login(values);
    },
  });

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
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
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
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.password)}
          helperText={formik.touched.email && formik.errors.password}
        />
        <Grid container spacing={2} sx={{ mt: 0.5 }}>
          <Grid item xs={12}>
            <PrimaryButton
              text="LOGIN"
              onClick={formik.handleSubmit}
              fullWidth
            />
            {loginErrorMessage ? (
              <FeedBackMessage
                message={loginErrorMessage}
                refresh={refreshErrorMessage}
                type="error"
              />
            ) : (
              <></>
            )}
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

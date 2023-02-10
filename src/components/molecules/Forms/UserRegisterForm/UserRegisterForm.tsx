import React, { useState } from "react";
import { TextField, Box } from "@mui/material";
import { PrimaryButton, FormBody } from "../../../atoms";
import { useFormik } from "formik";
import { AddUserFormSchema } from "../../../../Schema/AddUserForm.schema";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { createUser } from "../../../../features/auth/auth.slice";
import { FeedBackMessage } from "../../../atoms";
import { ICreateUser } from "../../../../shared";
import { useNavigate } from "react-router-dom";
const UserRegisterForm = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [refreshFeedback, setRefreshFeedback] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading } = useAppSelector((state) => state.auth);

  const handleSubmit = async (user: ICreateUser) => {
    setRefreshFeedback(!refreshFeedback);
    try {
      const result = await dispatch(createUser(user)).unwrap();
      setSuccess(true);
      setError(false);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setError(true);
      setSuccess(false);
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: AddUserFormSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  return (
    <FormBody title="REGISTER">
      <>
        <TextField
          margin="normal"
          variant="outlined"
          color="secondary"
          type="text"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          autoFocus
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          margin="normal"
          variant="outlined"
          color="secondary"
          type="email"
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
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
          margin="normal"
          variant="outlined"
          color="secondary"
          type="password"
          required
          fullWidth
          id="confirmPassword"
          label="Confirm Password"
          name="confirmPassword"
          autoComplete="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
        />

        <Box sx={{ mt: 2 }}>
          <PrimaryButton
            text={loading ? "Registering..." : "Register"}
            onClick={formik.handleSubmit}
            fullWidth
            disabled={loading ? true : false}
          />
        </Box>
        {error ? (
          <FeedBackMessage
            message="Sorry! something went wrong. "
            type="error"
            refresh={refreshFeedback}
          />
        ) : (
          <> </>
        )}
        {success ? (
          <FeedBackMessage
            message="You have successfully registered"
            type="success"
            refresh={refreshFeedback}
          />
        ) : (
          <> </>
        )}
      </>
    </FormBody>
  );
};

export { UserRegisterForm };

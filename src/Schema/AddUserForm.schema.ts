import * as yup from "yup";

const AddUserFormSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Please enter an email"),
  password: yup.string().required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords don't match!")
    .required("Required"),
});

export { AddUserFormSchema };

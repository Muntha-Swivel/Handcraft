import * as yup from "yup";

// const onlyAlphabetsRegex = /^[A-Za-z]+$/;
// const phoneNumberRegex =
//   /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/;

const LoginFormSchema = yup.object().shape({
  email: yup.string().email().required("Email is Required"),
  password: yup
    .string()
    .required("Please enter you password")
    .min(3, "Password should contain minimum 3 characters"),
});

export { LoginFormSchema };

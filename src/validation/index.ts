import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().email().required().label("Email"),
  password: yup.string().required().min(8).label("Password"),
});

export const registerSchema = yup.object({
  name: yup.string().required().label("Name"),
  email: yup.string().email().required().label("Email"),
  password: yup.string().required().min(8).label("Password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

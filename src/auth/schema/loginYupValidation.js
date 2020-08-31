import * as Yup from "yup";

export const loginYupValidation = Yup.object().shape({
  email: Yup.string().label("Email").email().required(),
  password: Yup.string().label("Password").required(),
});

export const loginForm = {
  email: "",
  password: "",
};

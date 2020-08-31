import * as Yup from "yup";

export const registerYupValidation = Yup.object().shape({
  email: Yup.string().label("Email").email().required(),
  password: Yup.string().label("Password").min(8).required(),
});

export const registerForm = {
  email: "",
  password: "",
};

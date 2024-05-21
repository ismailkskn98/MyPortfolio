import * as Yup from "yup";

export const LoginSchema = Yup.object({
  username: Yup.string().required("*Bu alan zorunludur"),
  password: Yup.string().required("*Bu alan zorunludur"),
});

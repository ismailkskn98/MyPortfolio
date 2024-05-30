import * as Yup from "yup";

export const BlogSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  subtitle: Yup.string().required("Subtitle is required"),
  description: Yup.string().required("Description is required"),
});

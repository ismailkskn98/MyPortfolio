import * as Yup from "yup";

export const BlogSchema = Yup.object().shape({
  title: Yup.string().required("*Baslık boş geçilemez"),
  subtitle: Yup.string().required("*Alt başlık boş geçilemez"),
  description: Yup.string().min(50, "").required(),
  categoryIds: Yup.array().min(1, "*En az 1 tane kategori seçmelisiniz"),
});

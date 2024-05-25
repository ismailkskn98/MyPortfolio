import * as Yup from "yup";

export const SkillSchema = Yup.object({
  name: Yup.string().required("*İsim Alanı Zorunludur"),
  image: Yup.mixed()
    .test("fileSize", "Dosya boyutu 1MB'dan küçük olmalıdır", (value: any) => {
      if (value && value instanceof File) {
        return value.size <= 1048576; // 1MB = 1048576 bytes
      }
      return true;
    })
    .required("*Resim yüklemek zorunludur")
    .nullable(),
});

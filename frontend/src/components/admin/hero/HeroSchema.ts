import * as Yup from "yup";

const allCities = [
  "Adana",
  "Adıyaman",
  "Afyonkarahisar",
  "Ağrı",
  "Amasya",
  "Ankara",
  "Antalya",
  "Artvin",
  "Aydın",
  "Balıkesir",
  "Bartın",
  "Bilecik",
  "Bingöl",
  "Bitlis",
  "Bolu",
  "Burdur",
  "Bursa",
  "Çanakkale",
  "Çankırı",
  "Çorum",
  "Denizli",
  "Diyarbakır",
  "Edirne",
  "Elazığ",
  "Erzincan",
  "Erzurum",
  "Eskişehir",
  "Gaziantep",
  "Giresun",
  "Gümüşhane",
  "Hakkâri",
  "Hatay",
  "Isparta",
  "Mersin",
  "İstanbul",
  "İzmir",
  "Kars",
  "Kastamonu",
  "Kayseri",
  "Kırklareli",
  "Kırşehir",
  "Kocaeli",
  "Konya",
  "Kütahya",
  "Malatya",
  "Manisa",
  "Kahramanmaraş",
  "Mardin",
  "Muğla",
  "Muş",
  "Nevşehir",
  "Niğde",
  "Ordu",
  "Rize",
  "Sakarya",
  "Samsun",
  "Siirt",
  "Sinop",
  "Sivas",
  "Tekirdağ",
  "Tokat",
  "Trabzon",
  "Tunceli",
  "Şanlıurfa",
  "Uşak",
  "Van",
  "Yozgat",
  "Zonguldak",
  "Aksaray",
  "Bayburt",
  "Karaman",
  "Kırıkkale",
  "Batman",
  "Şırnak",
  "Bartın",
  "Ardahan",
  "Iğdır",
  "Yalova",
  "Karabük",
  "Kilis",
  "Osmaniye",
  "Düzce",
];

export const heroSchema = Yup.object({
  name: Yup.string()
    .trim("*İsim alanı önde ve sonda boşluk içeremez")
    .strict()
    .min(3, "*En az 3 karakter giriniz")
    .max(15, "*En fazla 15 karakter giriniz")
    .required("*İsim alanı zorunludur"),
  job: Yup.string()
    .trim("*İş alanı önde ve sonda boşluk içeremez")
    .strict()
    .min(5, "*En az 5 karakter giriniz")
    .max(30, "*En fazla 30 karakter giriniz")
    .required("*İş alanı zorunludur"),
  email: Yup.string()
    .trim("*Email alanı önde ve sonda boşluk içeremez")
    .strict()
    .email("*Geçerli bir email giriniz")
    .required("*Email alanı zorunludur"),
  freelancer: Yup.string()
    .trim("*Freelancer alanı önde ve sonda boşluk içeremez")
    .strict()
    .min(5, "*En az 5 karakter giriniz")
    .max(30, "*En fazla 30 karakter giriniz")
    .required("*Freelancer alanı zorunludur"),
  city: Yup.string().oneOf(allCities).required("*Lütfen bir seçim yapın"),
  website: Yup.string()
    .trim("*Web Site alanı önde ve sonda boşluk içeremez")
    .strict()
    .min(5, "*En az 5 karakter giriniz")
    .max(35, "*En fazla 35 karakter giriniz")
    .required("*Web sitesi alanı zorunludur"),
});

export type HeroSchemaType = Yup.InferType<typeof heroSchema>;

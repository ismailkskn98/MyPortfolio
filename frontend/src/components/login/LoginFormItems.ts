export type LoginFormItem = {
  labelText: string;
  input: {
    id: string;
    name: string;
    type: string;
    placeholder: string;
  };
};

export const loginFormItems: LoginFormItem[] = [
  {
    labelText: "Kullanıcı Adı",
    input: {
      id: "username",
      name: "username",
      type: "text",
      placeholder: "Kullanıcı Adınızı Giriniz",
    },
  },
  {
    labelText: "Şifre",
    input: {
      id: "password",
      name: "password",
      type: "password",
      placeholder: "Şifrenizi Giriniz",
    },
  },
];

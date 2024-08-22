export type HeroFormItem = {
  labelText: string;
  input: {
    id: string;
    name: string;
    type: string;
    value?: string;
  };
};

export const heroFormItems: HeroFormItem[] = [
  {
    labelText: "İsim",
    input: {
      id: "name",
      name: "name",
      type: "text",
      value: "",
    },
  },
  {
    labelText: "İş Tanımı",
    input: {
      id: "job",
      name: "job",
      type: "text",
      value: "",
    },
  },
  {
    labelText: "Email",
    input: {
      id: "email",
      name: "email",
      type: "email",
      value: "",
    },
  },
  {
    labelText: "Çalışma Tipi / Zamanı",
    input: {
      id: "freelancer",
      name: "freelancer",
      type: "text",
      value: "",
    },
  },
  {
    labelText: "Website",
    input: {
      id: "website",
      name: "website",
      type: "text",
      value: "",
    },
  },
];

export type HeroFormItem = {
  labelText: string;
  input: {
    id: string;
    name: string;
    type: string;
  };
};

export const heroFormItems: HeroFormItem[] = [
  {
    labelText: "İsim",
    input: {
      id: "name",
      name: "name",
      type: "text",
    },
  },
  {
    labelText: "İş Tanımı",
    input: {
      id: "job",
      name: "job",
      type: "text",
    },
  },
  {
    labelText: "Email",
    input: {
      id: "email",
      name: "email",
      type: "email",
    },
  },
  {
    labelText: "Çalışma Tipi / Zamanı",
    input: {
      id: "freelancer",
      name: "freelancer",
      type: "text",
    },
  },
  {
    labelText: "Website",
    input: {
      id: "website",
      name: "website",
      type: "text",
    },
  },
];

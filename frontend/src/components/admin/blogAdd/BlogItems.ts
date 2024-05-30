export type BlogItem = {
  labelText: string;
  input: {
    type: string;
    name: string;
    id: string;
    placeholder: string;
  };
};

export const blogItems: BlogItem[] = [
  {
    labelText: "Baslık",
    input: {
      type: "text",
      name: "title",
      id: "title",
      placeholder: "Blog başlığı giriniz...",
    },
  },
  {
    labelText: "Alt Başlık",
    input: {
      type: "text",
      name: "subtitle",
      id: "subtitle",
      placeholder: "20 Karakterlik açıklama giriniz...",
    },
  },
];

import type { BlogItem } from "../blogAdd/BlogItems";

export const blogItems: BlogItem[] = [
  {
    labelText: "Baslık",
    input: {
      id: "title",
      type: "text",
      name: "title",
    },
  },
  {
    labelText: "Slug",
    input: {
      id: "slug",
      type: "text",
      name: "slug",
    },
  },
  {
    labelText: "Alt Başlık",
    input: {
      id: "subtitle",
      type: "text",
      name: "subtitle",
    },
  },
];

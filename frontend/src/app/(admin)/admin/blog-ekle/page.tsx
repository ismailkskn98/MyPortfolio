import { fetchApi } from "@/helper/fetchApi";
import React from "react";
import BlogAddContainer from "@/containers/blogAddContainer";
// types
import type { CategoriesType } from "@/types";

const BlogEkle = async () => {
  const responseCategories: CategoriesType[] | string = await fetchApi<CategoriesType[]>("admin/categories", "no-cache");

  if (typeof responseCategories === "string") throw new Error(`${responseCategories}`);

  return <BlogAddContainer categories={responseCategories} />;
};

export default BlogEkle;

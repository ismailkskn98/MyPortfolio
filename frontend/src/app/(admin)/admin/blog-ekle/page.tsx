import { CategoriesType } from "@/components/admin/blogAdd";
import BlogAddContainer from "@/containers/blogAddContainer";
import { fetchApi } from "@/helper/fetchApi";
import React from "react";

const BlogEkle = async () => {
  const categories: CategoriesType[] | string = await fetchApi<CategoriesType[]>("admin/categories", "no-cache");
  if (typeof categories === "string") {
    throw new Error(categories);
  }
  return <BlogAddContainer categories={categories} />;
};

export default BlogEkle;

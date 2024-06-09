import { CategoriesType } from "@/components/admin/blogAdd";
import BlogAddContainer from "@/containers/blogAddContainer";
import { fetchApi } from "@/helper/fetchApi";
import React from "react";

const BlogEkle = async () => {
  const data: CategoriesType[] | string = await fetchApi("admin/categories", undefined, "GET", "force-cache");
  if (typeof data === "string") {
    throw new Error(data);
  }
  return <BlogAddContainer categories={data} />;
};

export default BlogEkle;

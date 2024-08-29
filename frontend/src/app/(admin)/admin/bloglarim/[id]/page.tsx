import React from "react";
import { fetchApi } from "@/helper/fetchApi";
import AdminBlogByIdContainer from "@/containers/adminBlogByIdContainer";
// types
import type { BlogByIdType, CategoriesType } from "@/types";

const BlogGuncelle = async ({ params }: { params: { id: string } }) => {
  const [responseBlog, responseCategories] = await Promise.all([
    fetchApi<BlogByIdType>(`admin/blogs/${params.id}`, "no-cache"),
    fetchApi<CategoriesType[]>("admin/categories", "no-cache"),
  ]);

  if (typeof responseBlog === "string") throw new Error(`${responseBlog}`);
  if (typeof responseCategories === "string") throw new Error(`${responseCategories}`);

  return <AdminBlogByIdContainer blog={responseBlog} categories={responseCategories} />;
};

export default BlogGuncelle;

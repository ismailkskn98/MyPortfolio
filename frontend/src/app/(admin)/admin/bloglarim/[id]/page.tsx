import AdminBlogByIdContainer from "@/containers/adminBlogByIdContainer";
import { fetchApi } from "@/helper/fetchApi";
import React from "react";

const BlogGuncelle = async ({ params }: { params: { id: string } }) => {
  const [blogResponse, categoriesResponse] = await Promise.all([
    fetchApi("admin/blogs", params.id, "GET", "no-cache"),
    fetchApi("admin/categories", undefined, "GET", "no-cache"),
  ]);
  if (typeof blogResponse === "string" || typeof categoriesResponse === "string") {
    throw new Error(blogResponse || categoriesResponse);
  }

  return <AdminBlogByIdContainer blog={blogResponse} categories={categoriesResponse} />;
};

export default BlogGuncelle;

import BlogById from "@/components/admin/blogById";
import React from "react";
// types
import type { BlogByIdType, CategoriesType } from "@/types";

const AdminBlogByIdContainer = ({ blog, categories }: { blog: BlogByIdType; categories: CategoriesType[] }) => {
  return (
    <>
      <BlogById blog={blog} categories={categories} />
    </>
  );
};

export default AdminBlogByIdContainer;

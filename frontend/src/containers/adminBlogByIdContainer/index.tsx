import { CategoriesType } from "@/components/admin/blogAdd";
import BlogById, { BlogByIdType } from "@/components/admin/blogById";
import React from "react";

const AdminBlogByIdContainer = ({
  blog,
  categories,
}: {
  blog: BlogByIdType;
  categories: CategoriesType[];
}) => {
  return (
    <>
      <BlogById blog={blog} categories={categories} />
    </>
  );
};

export default AdminBlogByIdContainer;

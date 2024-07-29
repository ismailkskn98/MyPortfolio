import BlogAdd, { CategoriesType } from "@/components/admin/blogAdd";
import React from "react";

const BlogAddContainer = ({ categories }: { categories: CategoriesType[] }) => {
  return (
    <>
      <BlogAdd categories={categories} />
    </>
  );
};

export default BlogAddContainer;

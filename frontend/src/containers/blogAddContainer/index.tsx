import BlogAdd from "@/components/admin/blogAdd";
import React from "react";
// types
import type { CategoriesType } from "@/types";

const BlogAddContainer = ({ categories }: { categories: CategoriesType[] }) => {
  return (
    <>
      <BlogAdd categories={categories} />
    </>
  );
};

export default BlogAddContainer;

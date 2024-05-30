import BlogAdd, { Categories } from "@/components/admin/blogAdd";
import React from "react";

const BlogAddContainer = ({ categories }: { categories: Categories[] }) => {
  return (
    <>
      <BlogAdd categories={categories} />
    </>
  );
};

export default BlogAddContainer;

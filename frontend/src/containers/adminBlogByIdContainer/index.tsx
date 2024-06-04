import BlogById, { BlogByIdType } from "@/components/admin/blogById";
import React from "react";

const AdminBlogByIdContainer = ({ blog }: { blog: BlogByIdType }) => {
  return (
    <>
      <BlogById blog={blog} />
    </>
  );
};

export default AdminBlogByIdContainer;

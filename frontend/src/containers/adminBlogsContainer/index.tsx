import Blogs from "@/components/admin/blogs";
import React from "react";
// types
import type { BlogsType } from "@/types";

const AdminBlogsContainer = ({ blogs }: { blogs: BlogsType[] }) => {
  return (
    <>
      <Blogs blogs={blogs} />
    </>
  );
};

export default AdminBlogsContainer;

import Blogs, { BlogsType } from "@/components/admin/blogs";
import React from "react";

const AdminBlogsContainer = ({ blogs }: { blogs: BlogsType[] }) => {
  return (
    <>
      <Blogs blogs={blogs} />
    </>
  );
};

export default AdminBlogsContainer;

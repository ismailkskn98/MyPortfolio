import { BlogsType } from "@/components/admin/blogs";
import AdminBlogsContainer from "@/containers/adminBlogsContainer";
import { fetchApi } from "@/helper/fetchApi";
import React from "react";

const Bloglarim = async () => {
  const responseBlogs: BlogsType[] | string = await fetchApi<BlogsType[]>("admin/blogs", "no-cache");

  if (typeof responseBlogs === "string") throw new Error(`${responseBlogs}`);

  return <AdminBlogsContainer blogs={responseBlogs} />;
};

export default Bloglarim;

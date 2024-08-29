import React from "react";
import AdminBlogsContainer from "@/containers/adminBlogsContainer";
import { fetchApi } from "@/helper/fetchApi";
// types
import type { BlogsType } from "@/types";

const Bloglarim = async () => {
  const responseBlogs: BlogsType[] | string = await fetchApi<BlogsType[]>("admin/blogs", "no-cache");

  if (typeof responseBlogs === "string") throw new Error(`${responseBlogs}`);

  return <AdminBlogsContainer blogs={responseBlogs} />;
};

export default Bloglarim;

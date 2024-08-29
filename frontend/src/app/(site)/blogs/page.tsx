import BlogsContainer from "@/containers/blogsContainer";
import { fetchApi } from "@/helper/fetchApi";
import React from "react";
// types
import type { BlogColumnType } from "@/types";

const Blogs = async () => {
  const responseBlogs: BlogColumnType[] | string = await fetchApi<BlogColumnType[]>("blogs");

  if (typeof responseBlogs === "string") throw new Error(`${responseBlogs}`);

  return <BlogsContainer blogs={responseBlogs} />;
};

export default Blogs;

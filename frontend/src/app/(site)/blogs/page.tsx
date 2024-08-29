import type { Blog } from "@/components/site/blog/blogColumn/Content";
import BlogsContainer from "@/containers/blogsContainer";
import { fetchApi } from "@/helper/fetchApi";
import React from "react";

const Blogs = async () => {
  const responseBlogs: Blog[] | string = await fetchApi<Blog[]>("blogs");

  if (typeof responseBlogs === "string") throw new Error(`${responseBlogs}`);

  return <BlogsContainer blogs={responseBlogs} />;
};

export default Blogs;

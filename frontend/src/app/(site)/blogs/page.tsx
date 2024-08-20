import type { Blog } from "@/components/site/blog/blogColumn/Content";
import BlogsContainer from "@/containers/blogsContainer";
import { fetchApi } from "@/helper/fetchApi";
import React from "react";

const Blogs = async () => {
  const blogs: Blog[] | string = await fetchApi("blogs", undefined, "GET");

  if (typeof blogs === "string") {
    throw new Error(blogs);
  }
  return <BlogsContainer blogs={blogs} />;
};

export default Blogs;

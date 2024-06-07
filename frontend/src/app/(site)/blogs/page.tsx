import type { Blog } from "@/components/site/blog/blogColumn/Content";
import BlogsContainer from "@/containers/blogsContainer";
import { homeAPI } from "@/helper/homeAPI";
import React from "react";

const Blogs = async () => {
  const blogs: Blog[] | string = await homeAPI("blogs", undefined, "GET");
  if (typeof blogs === "string") {
    throw new Error(blogs);
  }
  return <BlogsContainer blogs={blogs} />;
};

export default Blogs;

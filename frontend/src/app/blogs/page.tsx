import { Blog } from "@/components/blog/blogColumn/Content";
import BlogsContainer from "@/containers/blogsContainer";
import React from "react";

const BASE_URL = process.env.BASE_URL;

const getBlogs = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/blogs`, { method: "GET" });
    if (!response.ok) {
      const errorMessage: { message: string } = await response.json();
      throw new Error(errorMessage.message);
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    return error.message;
  }
};

const Blogs = async () => {
  const blogs: Blog[] | string = await getBlogs();
  if (typeof blogs === "string") {
    throw new Error(blogs);
  }
  return <BlogsContainer blogs={blogs} />;
};

export default Blogs;

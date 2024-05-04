import { Blog } from "@/components/blogColumn/Content";
import BlogContainer from "@/containers/blogContainer";
import React from "react";

const BASE_URL = process.env.BASE_URL;

const getBlogs = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/blogs`, { method: "GET" });
    console.log();
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
  return <BlogContainer blogs={blogs} />;
};

export default Blogs;

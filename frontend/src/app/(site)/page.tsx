import type { Blog } from "@/components/blog/blogColumn/Content";
import HomeContainer from "@/containers/homeContainer";
import React from "react";

const BASE_URL = process.env.BASE_URL;

const getLastBlog = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/blogs/lastblog`);
    if (!response.ok) {
      const errorMessage = await response.json();
      throw new Error(errorMessage);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    }
  }
};

const Home = async () => {
  const data: Blog | string = await getLastBlog();

  if (typeof data === "string") {
    throw new Error(data);
  }
  return <HomeContainer blog={data} />;
};

export default Home;

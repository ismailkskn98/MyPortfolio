import type { Blog } from "@/components/site/blog/blogColumn/Content";
import HomeContainer from "@/containers/homeContainer";
import React from "react";

// http://localhost:7930/api
const BASE_URL = process.env.BASE_URL;

const getLastBlog = async () => {
  try {
    const response = await fetch(`${BASE_URL}/blogs/lastblog`);
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

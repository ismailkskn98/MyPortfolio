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
      throw new Error(errorMessage.message);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    } else {
      return "Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.";
    }
  }
};

const getHero = async () => {
  try {
    const response = await fetch(`${BASE_URL}/hero`);
    if (!response.ok) {
      const errorMessage = await response.json();
      throw new Error(errorMessage.message);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    } else {
      return "Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.";
    }
  }
};

const Home = async () => {
  const [resultLastBlog, resultHero] = await Promise.all([getLastBlog(), getHero()]);

  if (typeof resultLastBlog === "string" || typeof resultHero === "string") {
    throw new Error(resultLastBlog);
  }
  return <HomeContainer blog={resultLastBlog} hero={resultHero} />;
};

export default Home;

import HomeContainer from "@/containers/homeContainer";
import React from "react";

const BASE_URL = process.env.BASE_URL;

const getBlogs = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/blogs`, { method: "GET" });
    if (!response.ok) {
      throw new Error("bloglar getirilemedi");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const Home = async () => {
  const blogs = await getBlogs();
  return <HomeContainer blogs={blogs} />;
};

export default Home;

import HomeContainer from "@/containers/homeContainer";
import React from "react";

// http://localhost:7930/api
const BASE_URL_API = process.env.BASE_URL_API;

export type ErrorMessage = {
  message: string;
  error: boolean;
  success: boolean;
};

const getLastBlog = async () => {
  try {
    const response = await fetch(`${BASE_URL_API}/blogs/lastblog`);
    if (!response.ok) {
      const errorMessage: ErrorMessage = await response.json();
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
    const response = await fetch(`${BASE_URL_API}/hero`);
    if (!response.ok) {
      const errorMessage: ErrorMessage = await response.json();
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

const getAbout = async () => {
  try {
    const response = await fetch(`${BASE_URL_API}/about`);
    if (!response.ok) {
      const errorMessage: ErrorMessage = await response.json();
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
  const [resultLastBlog, resultGetHero, resultGetAbout] = await Promise.all([
    getLastBlog(),
    getHero(),
    getAbout(),
  ]);

  if (
    typeof resultLastBlog === "string" ||
    typeof resultGetHero === "string" ||
    typeof resultGetAbout === "string"
  ) {
    throw new Error(
      "Sunucuda bir hata oluştu. Lütfen daha sonra tekrar deneyin veya yöneticiye başvurun."
    );
  }
  return <HomeContainer blog={resultLastBlog} hero={resultGetHero} about={resultGetAbout} />;
};

export default Home;

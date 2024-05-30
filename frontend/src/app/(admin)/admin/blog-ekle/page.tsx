import { Categories } from "@/components/admin/blogAdd";
import BlogAddContainer from "@/containers/blogAddContainer";
import { errorMessage } from "@/helper/homeAPI";
import React from "react";

// http://localhost:7930/api
const BASE_URL_API = process.env.BASE_URL_API;

const getCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL_API}/admin/categories`);
    if (!response.ok) {
      const data: errorMessage = await response.json();
      throw new Error(data.message);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    } else {
      return "Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyiniz veya yöneticiye başvurunuz.";
    }
  }
};

const BlogEkle = async () => {
  const data: Categories[] | string = await getCategories();
  if (typeof data === "string") {
    throw new Error(data);
  }
  return <BlogAddContainer categories={data} />;
};

export default BlogEkle;

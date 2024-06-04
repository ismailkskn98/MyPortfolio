import { BlogsType } from "@/components/admin/blogs";
import AdminBlogsContainer from "@/containers/adminBlogsContainer";
import { errorMessage } from "@/helper/homeAPI";
import React from "react";

// http://localhost:7930/api
const BASE_URL_API = process.env.BASE_URL_API;

const getBlogs = async () => {
  try {
    const response = await fetch(`${BASE_URL_API}/admin/blogs`, {
      method: "GET",
      cache: "no-store", // sayfaya her geldiğimizde istek atsın cache'lemesin default: force-cache
    });
    if (!response.ok) {
      const data: errorMessage = await response.json();
      throw new Error(data.message);
    }
    const data: BlogsType[] = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    } else {
      return "Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyiniz veya yöneticiye başvurunuz.";
    }
  }
};
const Bloglarim = async () => {
  const data: BlogsType[] | string = await getBlogs();
  if (typeof data === "string") {
    throw new Error(data);
  }
  return <AdminBlogsContainer blogs={data} />;
};

export default Bloglarim;

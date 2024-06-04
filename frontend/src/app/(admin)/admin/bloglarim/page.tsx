import { BlogsType } from "@/components/admin/blogs";
import AdminBlogsContainer from "@/containers/adminBlogsContainer";
import { error, success } from "@/helper/homeAPI";
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
      const responseData: error = await response.json();
      throw new Error(responseData.message);
    }
    const responseData: success = await response.json();
    if (responseData.error) {
      throw new Error(
        "Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyiniz veya yöneticiye başvurunuz."
      );
    }
    return responseData.data;
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

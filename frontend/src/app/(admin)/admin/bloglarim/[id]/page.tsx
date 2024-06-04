import { BlogByIdType } from "@/components/admin/blogById";
import AdminBlogByIdContainer from "@/containers/adminBlogByIdContainer";
import { error, success } from "@/helper/homeAPI";
import React from "react";

// http://localhost:7930/api
const BASE_URL_API = process.env.BASE_URL_API;

const getBlogById = async (id: string) => {
  try {
    const response = await fetch(`${BASE_URL_API}/admin/blogs/${id}`, {
      method: "GET",
      cache: "no-store",
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
      return "Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.";
    }
  }
};

const BlogGuncelle = async ({ params }: { params: { id: string } }) => {
  const blog: BlogByIdType | string = await getBlogById(params.id);
  if (typeof blog === "string") {
    throw new Error(blog);
  }

  return <AdminBlogByIdContainer blog={blog} />;
};

export default BlogGuncelle;

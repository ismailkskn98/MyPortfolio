import AdminContainer from "@/containers/adminContainer";
import { error, success } from "@/helper/homeAPI";
import React from "react";

// http://localhost:4128/api
const BASE_URL = process.env.BASE_URL_API;

const getBlogsCount = async () => {
  try {
    const response = await fetch(`${BASE_URL}/admin/blogs-count`, {
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
      return "Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyiniz veya yöneticiye başvurunuz.";
    }
  }
};

const page = async () => {
  const blogsCount = await getBlogsCount();

  if (typeof blogsCount === "string") {
    throw new Error(blogsCount);
  }

  return <AdminContainer blogsCount={blogsCount} />;
};

export default page;

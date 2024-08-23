import { BlogsCountType } from "@/components/admin/home/HomeMain";
import AdminContainer from "@/containers/adminContainer";
import { fetchApi } from "@/helper/fetchApi";
import React from "react";

const page = async () => {
  const blogsCount: BlogsCountType | string = await fetchApi("admin/blog-count", undefined, "GET", "no-cache");
  if (typeof blogsCount === "string") {
    throw new Error(blogsCount);
  }

  return <AdminContainer blogsCount={blogsCount} />;
};

export default page;

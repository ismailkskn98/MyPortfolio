import React from "react";
import AdminContainer from "@/containers/adminContainer";
import { fetchApi } from "@/helper/fetchApi";
// types
import type { BlogsCountType } from "@/types";

const page = async () => {
  const resultBlogsCount: BlogsCountType | string = await fetchApi<BlogsCountType>("admin/blog-count", "no-cache");

  if (typeof resultBlogsCount === "string") throw new Error(`${resultBlogsCount}`);

  return <AdminContainer blogsCount={resultBlogsCount} />;
};

export default page;

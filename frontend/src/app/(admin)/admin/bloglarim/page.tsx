import { BlogsType } from "@/components/admin/blogs";
import AdminBlogsContainer from "@/containers/adminBlogsContainer";
import { fetchApi } from "@/helper/fetchApi";
import React from "react";

const Bloglarim = async () => {
  const data: BlogsType[] | string = await fetchApi("admin/blogs", undefined, "GET", "force-cache");
  if (typeof data === "string") {
    throw new Error(data);
  }
  return <AdminBlogsContainer blogs={data} />;
};

export default Bloglarim;

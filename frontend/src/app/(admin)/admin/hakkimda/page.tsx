import { AboutType } from "@/components/admin/about";
import AboutContainer from "@/containers/aboutContainer";
import { fetchApi } from "@/helper/fetchApi";
import React from "react";

const Hakkimda = async () => {
  const data: AboutType | string = await fetchApi("admin/about", undefined, "GET", "force-cache");

  if (typeof data === "string") {
    throw new Error(data);
  }

  return <AboutContainer data={data} />;
};

export default Hakkimda;

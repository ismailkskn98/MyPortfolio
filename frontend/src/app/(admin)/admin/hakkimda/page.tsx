import React from "react";
import AboutContainer from "@/containers/aboutContainer";
import { fetchApi } from "@/helper/fetchApi";
// types
import type { AboutType } from "@/types";

const Hakkimda = async () => {
  const resultAbouts: AboutType[] | string = await fetchApi<AboutType[]>("admin/about", "no-cache");

  if (typeof resultAbouts === "string") throw new Error(`${resultAbouts}`);

  return <AboutContainer data={resultAbouts} />;
};

export default Hakkimda;

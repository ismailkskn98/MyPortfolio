import { HeroType } from "@/components/admin/hero/HeroForm";
import HeroContainer from "@/containers/heroContainer";
import { fetchApi } from "@/helper/fetchApi";
import React from "react";

const Hero = async () => {
  const data: HeroType | string = await fetchApi("admin/hero", undefined, "GET", "no-store");
  if (typeof data === "string") {
    throw new Error(data);
  }

  return <HeroContainer data={data} />;
};

export default Hero;

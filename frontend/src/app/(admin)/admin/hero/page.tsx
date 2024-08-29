import React from "react";
import HeroContainer from "@/containers/heroContainer";
import { fetchApi } from "@/helper/fetchApi";
// types
import type { HeroType } from "@/types";

const Hero = async () => {
  const resultHeros: HeroType[] | string = await fetchApi<HeroType[]>("admin/hero", "no-cache");

  if (typeof resultHeros === "string") throw new Error(`${resultHeros}`);

  return <HeroContainer data={resultHeros} />;
};

export default Hero;

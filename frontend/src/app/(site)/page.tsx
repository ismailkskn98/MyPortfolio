import React from "react";
import HomeContainer from "@/containers/homeContainer";
import { fetchApi } from "@/helper/fetchApi";
// types
import type { AboutType, BlogColumnType, HeroType, SkillType, WorkType } from "@/types";

const Home = async () => {
  const [resultGetSkills, resultLastBlog, resultGetHero, resultGetAbout, resultGetWorks] = await Promise.all([
    fetchApi<SkillType[]>("skills", "no-cache"),
    fetchApi<BlogColumnType>("blogs/last-blog", "no-cache"),
    fetchApi<HeroType[]>("hero", "no-cache"),
    fetchApi<AboutType[]>("about", "no-cache"),
    fetchApi<WorkType[]>("works", "no-cache"),
  ]);

  if (typeof resultLastBlog === "string") throw new Error(`${resultLastBlog}`);
  if (typeof resultGetHero === "string") throw new Error(`${resultGetHero}`);
  if (typeof resultGetAbout === "string") throw new Error(`${resultGetAbout}`);
  if (typeof resultGetSkills === "string") throw new Error(`${resultGetSkills}`);
  if (typeof resultGetWorks === "string") throw new Error(`${resultGetWorks}`);
  console.log(resultLastBlog);
  return <HomeContainer blog={resultLastBlog} hero={resultGetHero} about={resultGetAbout} skills={resultGetSkills} works={resultGetWorks} />;
};

export default Home;

import React from "react";
import HomeContainer from "@/containers/homeContainer";
import { fetchApi } from "@/helper/fetchApi";
// type
import type { AboutType } from "@/components/admin/about";
import type { HeroType } from "@/components/admin/hero/HeroForm";
import type { SkillsType } from "@/components/admin/skills";
import type { Blog } from "@/components/site/blog/blogColumn/Content";
import type { WorkType } from "@/components/site/works/WorksContent";

const Home = async () => {
  const [resultGetSkills, resultLastBlog, resultGetHero, resultGetAbout, resultGetWorks] = await Promise.all([
    fetchApi<SkillsType[]>("skills", "no-cache"),
    fetchApi<Blog>("blogs/last-blog", "no-cache"),
    fetchApi<HeroType[]>("hero", "no-cache"),
    fetchApi<AboutType[]>("about", "no-cache"),
    fetchApi<WorkType[]>("works", "no-cache"),
  ]);

  if (typeof resultLastBlog === "string") throw new Error(`${resultLastBlog}`);
  if (typeof resultGetHero === "string") throw new Error(`${resultGetHero}`);
  if (typeof resultGetAbout === "string") throw new Error(`${resultGetAbout}`);
  if (typeof resultGetSkills === "string") throw new Error(`${resultGetSkills}`);
  if (typeof resultGetWorks === "string") throw new Error(`${resultGetWorks}`);

  return <HomeContainer blog={resultLastBlog} hero={resultGetHero} about={resultGetAbout} skills={resultGetSkills} works={resultGetWorks} />;
};

export default Home;

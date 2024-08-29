import React from "react";
import { fetchApi } from "@/helper/fetchApi";
import SkillsContainer from "@/containers/skillsContainer";
// types
import type { SkillType } from "@/types";

const Yetenekler = async () => {
  const resultSkills: SkillType[] | string = await fetchApi<SkillType[]>("admin/skills", "no-cache");

  if (typeof resultSkills === "string") throw new Error(`${resultSkills}`);

  return <SkillsContainer data={resultSkills} />;
};

export default Yetenekler;

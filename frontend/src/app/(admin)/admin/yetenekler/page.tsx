import { SkillsType } from "@/components/admin/skills";
import SkillsContainer from "@/containers/skillsContainer";
import { fetchApi } from "@/helper/fetchApi";
import React from "react";

const Yetenekler = async () => {
  const resultSkills: SkillsType[] | string = await fetchApi<SkillsType[]>("admin/skills", "no-cache");

  if (typeof resultSkills === "string") throw new Error(`${resultSkills}`);

  return <SkillsContainer data={resultSkills} />;
};

export default Yetenekler;

import { SkillsType } from "@/components/admin/skills";
import SkillsContainer from "@/containers/skillsContainer";
import { fetchApi } from "@/helper/fetchApi";
import React from "react";

const Yetenekler = async () => {
  const data: SkillsType[] | string = await fetchApi("admin/skills", undefined, "GET", "no-store");
  if (typeof data === "string") {
    throw new Error(data);
  }

  return <SkillsContainer data={data} />;
};

export default Yetenekler;

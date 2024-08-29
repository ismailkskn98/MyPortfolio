import React from "react";
import SkillByIdContainer from "@/containers/skillByIdContainer";
import { fetchApi } from "@/helper/fetchApi";
// types
import type { SkillType } from "@/types";

const YetenekGuncelle = async ({ params }: { params: { id: string } }) => {
  const resultSkill: SkillType | string = await fetchApi<SkillType>(`admin/skills/${params.id}`, "no-cache");

  if (typeof resultSkill === "string") throw new Error(`${resultSkill}`);

  return <SkillByIdContainer data={resultSkill} />;
};

export default YetenekGuncelle;

import { SkillType } from "@/components/admin/skillById";
import SkillByIdContainer from "@/containers/skillByIdContainer";
import { fetchApi } from "@/helper/fetchApi";
import React from "react";

const YetenekGuncelle = async ({ params }: { params: { id: string } }) => {
  const resultSkill: SkillType | string = await fetchApi<SkillType>(`admin/skills/${params.id}`, "no-cache");

  if (typeof resultSkill === "string") throw new Error(`${resultSkill}`);

  return <SkillByIdContainer data={resultSkill} />;
};

export default YetenekGuncelle;

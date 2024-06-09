import { SkillType } from "@/components/admin/skillById";
import SkillByIdContainer from "@/containers/skillByIdContainer";
import { fetchApi } from "@/helper/fetchApi";
import React from "react";

const YetenekGuncelle = async ({ params }: { params: { id: string } }) => {
  const data: SkillType | string = await fetchApi("admin/skills", params.id, "GET", "no-store");
  if (typeof data === "string") {
    throw new Error(data);
  }

  return <SkillByIdContainer data={data} />;
};

export default YetenekGuncelle;
